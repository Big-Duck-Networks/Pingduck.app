# PingDuck website

Landing page, FAQ, Privacy Policy and Terms of Use for the PingDuck app. Next.js 16 (App Router) + Tailwind v4; every page is prerendered static.

```sh
npm install
npm run dev     # http://localhost:3014
npm run build && npm start
```

| Route      | File                       |
| ---------- | -------------------------- |
| `/`        | `src/app/page.tsx`         |
| `/faq`     | `src/app/faq/page.tsx`     |
| `/privacy` | `src/app/privacy/page.tsx` |
| `/terms`   | `src/app/terms/page.tsx`   |

Company name, support email, jurisdiction, store links and the legal "last updated" date live in `src/lib/site.ts`. Set `appStoreUrl` / `playStoreUrl` there to turn the "Coming soon" badges into links.

Screenshots in `public/screens/` are 1280×2856 captures from the Android emulator (`adb -s emulator-5554 exec-out screencap -p > public/screens/<name>.png`).

The Privacy Policy describes the app as it ships today: fully local, no account, no analytics. Update it before cloud sync, accounts or subscriptions launch.
