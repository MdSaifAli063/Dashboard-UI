# H-care Dashboard UI🏥📊

A lightweight, static dashboard built with plain HTML, CSS, and JavaScript, using Chart.js (via CDN) for charts. No build tools required.

## Quick start 🚀

- Make sure these files are in the same folder:
  - index.html
  - style.css
  - script.js
- Open index.html in your browser. That’s it.

Dependencies:
- Chart.js is loaded from CDN in index.html:
  - https://cdn.jsdelivr.net/npm/chart.js

## Project structure 🗂


. ├─ index.html # Markup for the dashboard ├─ style.css # All styles, including emoji-based icons └─ script.js # Chart.js initialization and chart setups


## Features ✨

- Responsive layout with sidebar and topbar
- Statistic cards and panels
- Charts:
  - Bar (Outpatients vs Inpatients)
  - Doughnut (Patients split, Gender split)
  - Line (Time Admitted)
  - Sparkline (Patients this month)
- “Get mobile app” section with real images and official store badges
- Emoji-powered icon set (no extra icon library needed)
- Zero build step; works offline (except external images/CDN)

## Screenshots 📸

![image](https://github.com/MdSaifAli063/Dashboard-UI/blob/c8bf5ce3516756d69db099a9c71e5e3ff3cdc2dd/Screenshot%202025-09-08%20163108.png)


## Icons used (CSS classes → emoji) 🎨

These are implemented with CSS pseudo-elements (content). Use the class names in your HTML.

Navigation and UI:
.icon-patients → 🏥
.icon-star → ★
.icon-map → 🗺
.icon-list → ≡
.icon-building → 🏢
.icon-lines → ≣
.icon-clock → ⏱
.icon-search → 🔎
.icon-bell → 🔔
.icon-caret → ▾
.icon-dots → ⋯

Cards and lists:
- .icon-stats → ▤
- .icon-users → 👥
- .icon-clipboard → 🗒
- .icon-bus → 🚐
- .icon-bag → 👜
- .icon-box → 🧠
- .icon-surgery → ✚

Images:
- .icon-image and .icon-images → 🖼

Tip: If an icon doesn’t appear, ensure the CSS rules exist in style.css and the class name matches exactly.

## Customization 🛠

Images
- The promo illustration and avatar are set to external URLs in index.html:
  - Promo: Unsplash image
  - Avatar: https://i.pravatar.cc
- To use local files, place them under assets/img and update the src attributes in index.html:
  - Example:
    - <img src="assets/img/promo-illustration.jpg" alt="Mobile app illustration" />
    - <img src="assets/img/avatar.jpg" class="avatar" alt="User avatar" />

Store badges
- Google Play badge (PNG):
  - https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png
- App Store badge (SVG):
  - https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg

Charts
- Edit script.js to change data/labels/colors. Example (bar chart):
```js
// In script.js (Outpatients vs Inpatients)
data: {
  labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  datasets: [
    { label: 'Outpatients', data: [320, 410, 380, 460, 520, 490, 560, 610, 580, 600, 640, 700] },
    { label: 'Inpatients',  data: [180, 220, 210, 240, 260, 270, 300, 320, 310, 330, 340, 360] }
  ]
}
```
Colors

Colors are defined in style.css via CSS variables under :root. Adjust them to theme the app.

## Troubleshooting 🔧

Icons not showing

- Ensure the .icon-* classes are present in style.css.
- Emoji rendering can differ by OS/browser. Most modern browsers should display them fine.
- Charts not rendering

- Check your network; Chart.js is loaded via CDN.
- Confirm the script tag order in index.html:
- Chart.js CDN
- script.js
- External images not loading

Some networks block external images. Use local files under assets/img and 
update the paths.

## Accessibility ♿

- All non-decorative images include alt text.
- Buttons and interactive elements have labels or roles.
- Consider further improvements (focus states, ARIA roles) as needed.

## Credits 🙏

- Charts: Chart.js (https://www.chartjs.org/)
- Promo illustration image: Unsplash (replace with your own if licensing matters for your distribution)
- Avatar placeholder: https://i.pravatar.cc
- Store badges: Google Play and Apple App Store official badges

## License 📜

No license specified. Add a LICENSE file if you plan to distribute this project.










