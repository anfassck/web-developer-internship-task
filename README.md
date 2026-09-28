# NovaHire Technologies — Job Portal

> **Note:** NovaHire Technologies is a **fictional/demo company** created specifically for the Web Developer Internship Task. All job listings, contact details, and company information are sample data and do not represent real vacancies or a real organization.

---

## 📋 Project Overview

A responsive, multi-page job portal website for **NovaHire Technologies** — a fictional recruitment platform. The site showcases open job positions, allows users to apply through a validated application form, and presents company information with a clean, professional design.

Built with **vanilla HTML, CSS, and JavaScript** — no external frameworks or libraries.

---

## ✨ Features

- **5 fully responsive pages** — Home, Jobs, Apply, About, Contact
- **Dynamic job cards** rendered from a centralized JavaScript data array
- **URL query parameter** job selection on the Apply page
- **Comprehensive form validation** (name, email, phone, qualification, skills, resume)
- **Resume file validation** (type + size check: PDF/DOC/DOCX, max 5 MB)
- **Polished success states** on form submissions
- **Mobile hamburger menu** with smooth open/close, keyboard accessibility (Escape key), and overlay click-to-close
- **Scroll-triggered fade-in animations** via Intersection Observer
- **SVG icon sprite system** — all icons are locally created, no external dependencies
- **Custom SVG logo** used consistently across navbar, footer, and mobile menu
- **Active navigation highlighting** based on current page
- **Fixed navbar with backdrop blur** and scroll shadow
- **CSS custom properties** (design tokens) for consistent theming
- **Semantic HTML5** with proper heading hierarchy and ARIA attributes
- **SEO meta tags** on every page

---

## 🛠 Technologies

| Technology | Purpose |
|---|---|
| HTML5 | Semantic page structure |
| CSS3 | Styling, responsive design, animations |
| Vanilla JavaScript | Dynamic rendering, form validation, UI interactions |
| SVG | Logo and icon system |
| Google Fonts (Inter) | Typography |

No frameworks, build tools, or npm packages are required.

---

## 📄 Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Hero section, featured jobs, why join us, statistics, CTA |
| Jobs | `jobs.html` | All 5 job listings rendered dynamically from JS data |
| Apply | `apply.html` | Application form with URL-based job selection and validation |
| About | `about.html` | Company intro, mission, values, what we offer |
| Contact | `contact.html` | Contact cards (demo details), contact form with validation |

---

## 📁 Sample Job Listings

| # | Position | Location | Experience |
|---|---|---|---|
| 1 | MERN Stack Developer | Bangalore, India (Hybrid) | 1–3 Years |
| 2 | Frontend Developer | Mumbai, India (Remote) | 0–2 Years |
| 3 | UI/UX Designer | Hyderabad, India (On-Site) | 1–3 Years |
| 4 | Python Developer | Pune, India (Hybrid) | 1–4 Years |
| 5 | QA / Software Testing Engineer | Chennai, India (Remote) | 0–2 Years |

> These are demo/sample listings created for the internship assignment.

---

## 📂 Folder Structure

```
web-developer-internship-task/
├── assets/
│   ├── logo.svg              # NovaHire Technologies logo
│   └── icons.svg             # SVG icon sprite sheet
├── css/
│   └── styles.css            # Global stylesheet with CSS variables
├── js/
│   ├── data.js               # Centralized job data array (5 listings)
│   ├── main.js               # Shared utilities (nav, menu, icons, animations)
│   ├── home.js               # Home page — featured jobs rendering
│   ├── jobs.js               # Jobs page — all job cards rendering
│   ├── apply.js              # Apply page — form validation & success state
│   └── contact.js            # Contact page — form validation & success state
├── index.html                # Home page
├── jobs.html                 # Jobs listing page
├── apply.html                # Application form page
├── about.html                # About page
├── contact.html              # Contact page
├── .env.example              # Demo environment config
├── .gitignore                # Git ignore rules
└── README.md                 # This file
```

---

## 🚀 How to Run Locally

This is a static website — no build step or server setup is required.

### Option 1: Open directly
1. Clone or download the repository
2. Open `index.html` in your web browser

### Option 2: Local development server (recommended for full functionality)
```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve .

# Using VS Code
# Install "Live Server" extension → Right-click index.html → "Open with Live Server"
```

Then visit `http://localhost:8000` (or the port shown by your server).

> **Note:** A local server is recommended because the SVG icon sprite is loaded via `fetch()`, which requires HTTP (not `file://`).

---

## ✅ Form Validation Details

### Application Form (`apply.html`)

| Field | Validation Rule |
|---|---|
| Full Name | Required, minimum 2 characters |
| Email | Required, valid email format |
| Phone Number | Required, at least 7 digits |
| Qualification | Required, must select an option |
| Skills | Required, at least one skill |
| Resume | Required, PDF/DOC/DOCX only, max 5 MB |
| Cover Message | Optional |

### Contact Form (`contact.html`)

| Field | Validation Rule |
|---|---|
| Full Name | Required, minimum 2 characters |
| Email | Required, valid email format |
| Subject | Required |
| Message | Required, minimum 10 characters |

- All validations run client-side
- Error messages appear inline below each field
- First error is scrolled into view on submission
- **No data is sent to any API or database** — this is a frontend-only demo

---

## 📱 Responsive Design

The website is fully responsive across all breakpoints:

| Breakpoint | Behavior |
|---|---|
| **Desktop** (> 1024px) | Full navbar with links and CTA button |
| **Tablet** (768px – 1024px) | Adjusted grid layouts, some stacking |
| **Mobile** (< 768px) | Hamburger menu, single-column layouts, full-width buttons |
| **Small Mobile** (< 480px) | Compact padding, stacked CTAs |

### Mobile Menu Features
- Smooth slide-in animation
- Close on link click, overlay click, or Escape key
- Scroll lock when open
- Keyboard accessible (focus management)

---

## 🔧 GitHub Repository Setup

```bash
# Initialize repository
git init
git add .
git commit -m "Initial commit: NovaHire Technologies job portal"

# Add remote and push
git remote add origin https://github.com/YOUR_USERNAME/web-developer-internship-task.git
git branch -M main
git push -u origin main
```

---

## 🌐 Deployment

### GitHub Pages
1. Go to your repository on GitHub
2. Navigate to **Settings → Pages**
3. Under **Source**, select `main` branch and `/ (root)` folder
4. Click **Save**
5. Your site will be available at: `https://YOUR_USERNAME.github.io/web-developer-internship-task/`

### Netlify
1. Connect your GitHub repository to Netlify
2. Set publish directory to `/` (root)
3. Deploy — no build command needed

### Vercel
1. Import your GitHub repository
2. Framework preset: **Other**
3. Output directory: `.` (root)
4. Deploy

---

## 📝 Environment Configuration

Copy `.env.example` to `.env` for local configuration:

```bash
cp .env.example .env
```

The `.env` file is excluded from version control via `.gitignore`. Only `.env.example` is tracked.

---

## 📌 Important Notes

- **NovaHire Technologies** is a fictional company created for this internship assignment
- All job listings are **sample/demo data** — they do not represent real vacancies
- All contact information is **placeholder data** — clearly marked as demo
- **No data is collected, sent, or stored** — all forms are frontend-only demonstrations
- The website does not use any external CSS/JS frameworks
- All icons and the logo are created locally as SVG files

---

*Built as a Web Developer Internship Task submission.*
