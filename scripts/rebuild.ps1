<#
.SYNOPSIS
    1-Click Remote Trigger for restart-hetzner.sh on Hetzner Cloud.

.DESCRIPTION
    Connects to the Hetzner host over SSH and triggers:
    ./scripts/restart-hetzner.sh --pull
    Then performs a live HTTP health check against https://pingduck.app.

.EXAMPLE
    npm run rebuild
    .\scripts\rebuild.ps1
    .\scripts\rebuild.ps1 -ServerIp "123.45.67.89"
#>

[CmdletBinding()]
param (
    [Parameter(Position=0, Mandatory=$false)]
    [string]$ServerIp,

    [Parameter(Mandatory=$false)]
    [string]$ServerUser = "root",

    [Parameter(Mandatory=$false)]
    [string]$RemotePath = "/var/www/pingduck_website",

    [Parameter(Mandatory=$false)]
    [string]$IdentityFile = "$env:USERPROFILE\.ssh\id_ed25519",

    [Parameter(Mandatory=$false)]
    [string]$HealthCheckUrl = "https://pingduck.app"
)

$ErrorActionPreference = "Stop"

function Write-Step { param ([string]$Msg); Write-Host "[$((Get-Date).ToString('HH:mm:ss'))] $Msg" -ForegroundColor Cyan }
function Write-Success { param ([string]$Msg); Write-Host "[$((Get-Date).ToString('HH:mm:ss'))] [OK] $Msg" -ForegroundColor Green }
function Write-Warn { param ([string]$Msg); Write-Host "[$((Get-Date).ToString('HH:mm:ss'))] [WARN] $Msg" -ForegroundColor Yellow }
function Write-Fail { param ([string]$Msg); Write-Host "[$((Get-Date).ToString('HH:mm:ss'))] [FAIL] $Msg" -ForegroundColor Red }

# Load or prompt for Server IP
$envFile = Join-Path $PSScriptRoot ".env.deploy"
if (-not $ServerIp -and (Test-Path $envFile)) {
    Get-Content $envFile | ForEach-Object {
        if ($_ -match "^\s*HETZNER_SERVER_IP\s*=\s*(.+)$") { $ServerIp = $matches[1].Trim() }
        if ($_ -match "^\s*REMOTE_PATH\s*=\s*(.+)$") { $RemotePath = $matches[1].Trim() }
        if ($_ -match "^\s*SERVER_USER\s*=\s*(.+)$") { $ServerUser = $matches[1].Trim() }
    }
}

if (-not $ServerIp) {
    Write-Host "`n========================================================" -ForegroundColor Yellow
    Write-Host "  PingDuck Hetzner Cloud Remote Rebuilder" -ForegroundColor Yellow
    Write-Host "========================================================`n" -ForegroundColor Yellow
    $ServerIp = Read-Host "Enter your Hetzner Server IP address"
    if (-not $ServerIp) { Write-Fail "No Server IP provided. Aborting."; exit 1 }
    $save = Read-Host "Save IP to scripts/.env.deploy for future 1-click runs? (Y/n)"
    if ($save -ne "n" -and $save -ne "N") {
        Set-Content -Path $envFile -Value "HETZNER_SERVER_IP=$ServerIp`nSERVER_USER=$ServerUser`nREMOTE_PATH=$RemotePath"
        Write-Success "Saved configuration to $envFile"
    }
}

$sshArgs = @("-o", "StrictHostKeyChecking=accept-new", "-o", "ConnectTimeout=10")
if (Test-Path $IdentityFile) { $sshArgs += @("-i", $IdentityFile) }

Write-Host "`n--------------------------------------------------------" -ForegroundColor DarkGray
Write-Step "Step 1/3: Connecting to Hetzner ($ServerUser@$ServerIp)..."
Write-Host "--------------------------------------------------------" -ForegroundColor DarkGray

try {
    $uptime = & ssh @sshArgs "$ServerUser@$ServerIp" "uptime" 2>&1
    if ($LASTEXITCODE -ne 0) { throw $uptime }
    Write-Success "Connected! Server uptime: $uptime"
} catch {
    Write-Fail "Could not connect to Hetzner server via SSH."
    Write-Host "Details: $_" -ForegroundColor Red
    exit 1
}

Write-Host "`n--------------------------------------------------------" -ForegroundColor DarkGray
Write-Step "Step 2/3: Executing ./scripts/restart-hetzner.sh --pull remotely..."
Write-Host "--------------------------------------------------------`n" -ForegroundColor DarkGray

$RemoteCommand = @"
set -e
if [ ! -d "$RemotePath" ]; then
    FOUND=\$(find /var/www /home /root /opt -maxdepth 3 -type d \( -name "pingduck_website" -o -name "pingduck.app" -o -name "Pingduck.app" \) 2>/dev/null | head -n 1)
    if [ -n "\$FOUND" ]; then
        RemotePath="\$FOUND"
    else
        echo "ERROR: Directory $RemotePath not found."
        exit 1
    fi
fi

cd "\$RemotePath"
chmod +x scripts/restart-hetzner.sh
./scripts/restart-hetzner.sh --pull
"@

try {
    & ssh @sshArgs "$ServerUser@$ServerIp" $RemoteCommand
    if ($LASTEXITCODE -ne 0) { throw "Remote script returned exit code $LASTEXITCODE" }
    Write-Success "Remote restart-hetzner.sh completed successfully."
} catch {
    Write-Fail "Rebuild failed on Hetzner."
    Write-Host "Details: $_" -ForegroundColor Red
    exit 1
}

Write-Host "`n--------------------------------------------------------" -ForegroundColor DarkGray
Write-Step "Step 3/3: Verifying HTTP Health Status..."
Write-Host "--------------------------------------------------------" -ForegroundColor DarkGray

Start-Sleep -Seconds 3

try {
    $sw = [System.Diagnostics.Stopwatch]::StartNew()
    $res = Invoke-WebRequest -Uri $HealthCheckUrl -UseBasicParsing -TimeoutSec 10
    $sw.Stop()
    if ($res.StatusCode -eq 200) {
        Write-Success "Health check PASSED! $HealthCheckUrl is LIVE (HTTP 200, $($sw.ElapsedMilliseconds)ms)"
    } else {
        Write-Warn "Health check returned HTTP $($res.StatusCode)"
    }
} catch {
    Write-Warn "Could not reach $HealthCheckUrl directly ($_). Verify DNS or proxy if needed."
}

Write-Host "`n========================================================" -ForegroundColor Green
Write-Host "  pingduck.app Rebuild & Deployment Complete!" -ForegroundColor Green
Write-Host "========================================================`n" -ForegroundColor Green
