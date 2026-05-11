# gamify-landing

## 🌐 Demo

Check out the live demo [here](https://hesam-valizadeh.github.io/gamify-landing).

![Angular](https://img.shields.io/badge/Angular-Framework-red?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-Language-blue?style=for-the-badge&logo=typescript)
![License](https://img.shields.io/github/license/hesam-valizadeh/gamify-landing?style=for-the-badge)

> **gamify-landing** is a modern **Single Page Application (SPA)** built with **Angular**, designed to demonstrate scalable frontend architecture, clean code principles, and production-ready workflows.

---

## 🚀 Project Overview

gamify-landing focuses on:

- Building a modular and maintainable Angular application
- Applying frontend best practices and clean architecture
- Providing a solid base for CI/CD automation and deployment

This project is suitable for:

- Portfolio & resume showcase
- Angular architecture experiments
- CI/CD and deployment practice

---

## ✨ Features

- Modular and scalable architecture
- Responsive design with SCSS
- Accessibility compliance
- CI/CD integration with GitHub Actions
- Unit and E2E testing with Cypress
- Deployment-ready configuration

---

## 🧱 Tech Stack

| Category                    | Technology                                                   | Purpose / Notes                                                                                                                                                                                                 |
| --------------------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Framework**               | Angular 20 (v20.3.x)                                         | Modern SPA framework with **stable Signals** for fine-grained reactivity, standalone components by default, improved hydration, and preparation for zoneless apps. Focus on performance & developer experience. |
| **Language**                | TypeScript ~5.8                                              | Strict typing, modern JS features (nullish coalescing, optional chaining, etc.), excellent IDE support & refactor safety.                                                                                       |
| **Build & CLI**             | Angular CLI                                                  | Official tooling for scaffolding, dev server with HMR, production builds (esbuild-based in newer versions), tree-shaking, differential loading & lazy-loading optimization.                                     |
| **Styling**                 | SCSS + PostCSS + Autoprefixer                                | Modular, nested & mixin-friendly stylesheets; PostCSS for future-proof CSS (nesting, custom properties) + vendor prefixing automation.                                                                          |
| **UI Library**              | Bootstrap 5.3                                                | Battle-tested responsive grid, utilities & components (modals, cards, navs); customized via SCSS variables for branding consistency.                                                                            |
| **Carousels / Sliders**     | Swiper 12                                                    | Modern, hardware-accelerated, touch-friendly sliders with modular architecture, lazy loading, pagination, autoplay & accessibility support.                                                                     |


### 🛠️ Modern Angular Practices Demonstrated in This Project

- **Standalone components & lazy-loading** everywhere — no NgModules needed in most cases
- **Signals-ready architecture** (preparation for zoneless & fine-grained updates in future upgrades)
- **Strict template & type checking** with modern tsconfig settings
- **Feature-based modular structure** (core / shared / features separation)
- **Accessibility-first** approach with cypress-axe + semantic HTML
- **Full testing pyramid** — fast unit → component → BDD-style E2E
- **Quality automation** on every commit/push via Husky + GitHub Actions
- **Docker multi-stage builds** (dev hot-reload + optimized prod)
- **Bundle analysis** ready (webpack-bundle-analyzer integration possible)
- **Responsive & mobile-first** design with GSAP + Swiper for premium UX

This stack reflects a **production-grade**, maintainable Angular application in 2026 — clean, testable, automated and ready for scaling or team collaboration.

## ⚙️ Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm
- Angular CLI

### Installation

```bash
git clone https://github.com/hesam-valizadeh/gamify-landing.git
cd gamify-landing
npm install
```

### Running the Application

```bash
ng serve
```

Visit `http://localhost:4200` to view the application.

---

## 🧪 Testing

### Unit Tests

```bash
ng test
```

### End-to-End Tests

```bash
npx cypress open
```

---

## 📂 Folder Structure

```plaintext
src/
├── app/                # Main application code
│   ├── @core/         # Core services and utilities
│   ├── @layout/       # Layout components
│   ├── @shared/       # Shared components, directives, and pipes
│   ├── components/    # Feature-specific components
│   ├── pages/         # Application pages
│   └── view-models/   # View models for data handling
├── assets/             # Static assets (images, fonts, etc.)
├── styles/             # Global styles
└── environments/       # Environment-specific configurations
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Angular](https://angular.io/)
- [Cypress](https://www.cypress.io/)
- [GitHub Actions](https://github.com/features/actions)
