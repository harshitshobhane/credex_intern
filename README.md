# SoftSell – Credex Web Development Internship Assignment

A modern, fully responsive, single-page marketing website for a fictional software resale startup, built as part of the Credex internship assignment.

---

## 📋 Assignment Requirements & Implementation

| Requirement                                   | Implemented? | Details                                                                                 |
|-----------------------------------------------|:------------:|----------------------------------------------------------------------------------------|
| Hero Section                                 | ✅           | Headline, subheading, and two CTAs (“Sell My Licenses”, “Get a Quote”)                 |
| How It Works (3 steps, icons/visuals)         | ✅           | Three animated steps: Upload License → Get Valuation → Get Paid, with icons            |
| Why Choose Us (3–4 tiles, icons, descriptions)| ✅           | Four visually distinct tiles with icons and concise descriptions                        |
| Customer Testimonials (2 dummy reviews)       | ✅           | Two styled testimonials with name, role, and company                                   |
| Contact/Lead Form (validation, dropdown)      | ✅           | Name, Email, Company, License Type (dropdown), Message, with frontend validation       |
| Visually appealing, modern UI                 | ✅           | Glassmorphism, gradients, custom icons, animations, and a coherent color palette       |
| Mobile responsive layout                      | ✅           | All sections use responsive Tailwind classes, tested on all screen sizes               |
| Coherent color palette & font family          | ✅           | Custom palette (blue/teal/white), Poppins font                                         |
| React.js + Vite                              | ✅           | Built with React, Vite, and TypeScript                                                 |
| Dummy data, no backend                       | ✅           | All data is hardcoded or mocked                                                        |
| README with features, design, time spent      | ✅           | (See below)                                                                            |
| Hosted on Vercel/Netlify/GitHub Pages        | ✅           | https://credex-intern-alpha.vercel.app/                                                            |
| Logo placeholder or favicon                   | ✅           | Logo placeholder and favicon included                                                  |
| SEO meta tags and page title                  | ✅           | React Helmet for meta tags, Open Graph, Twitter Card                                   |
| Light/dark mode toggle                       | ✅           | Toggle in Navbar, persists across sessions                                             |
| Animations (Framer Motion)                   | ✅           | Section fade-ins, button hovers, floating visuals                                      |
| AI-powered chat widget (bonus)               | ✅           | Modern, compact, horizontally-scrollable example questions, keyword-matching AI        |

---

## ✨ Features Implemented
- **Hero Section:** Bold headline, subheading, and two clear CTAs.
- **How It Works:** Three animated steps with icons and connecting lines.
- **Why Choose Us:** Four benefit tiles with icons and descriptions.
- **Testimonials:** Two customer reviews with avatars, names, roles, and companies.
- **Contact Form:** Name, Email, Company, License Type (dropdown), Message, with real-time validation.
- **Modern UI:** Glassmorphism, gradients, custom icons, and a consistent color palette.
- **Fully Responsive:** All layouts adapt to mobile, tablet, and desktop.
- **Dark/Light Mode:** Toggle in the navbar, with smooth transitions.
- **SEO Optimized:** Meta tags for title, description, Open Graph, and Twitter.
- **Animations:** Framer Motion for section reveals, button hovers, and floating visuals.
- **Chat Widget:** AI-powered, with example questions, new chat option, and compact design.
- **Accessibility:** Semantic HTML, color contrast, and keyboard navigation.

---

## 🚀 Extra Features & Optimizations (Beyond the Brief)
- **AI Chatbot:** Interactive, horizontally-scrollable example questions, new chat option, and modern UI.
- **Glassmorphism & Animations:** Subtle glass effects, floating SVGs, and animated cards for a premium feel.
- **Mobile-First Design:** All sections tested and optimized for touch, no horizontal scroll, and easy navigation.
- **Custom Hooks & Modular Components:** Clean, maintainable codebase for easy extension.
- **Persistent Dark Mode:** Remembers user preference.
- **SEO & Social Sharing:** Open Graph and Twitter meta tags for better discoverability.
- **Performance:** Fast load times with Vite and code-splitting.

---

## 🎨 Design Choices
- **Color Palette:** Blue/teal gradients for trust and freshness, with white backgrounds for clarity.
- **Font:** Poppins for a modern, friendly look.
- **Layout:** Generous spacing, clear hierarchy, and mobile-first breakpoints.
- **Visuals:** Custom icons, floating SVGs, and glassmorphism for a tech-forward feel.
- **Animations:** Used to guide attention and add delight, but kept subtle for professionalism.

---

## ⏱️ Time Spent
- **Planning & Design:** 2 hours
- **Component Development:** 6 hours
- **Responsive & Mobile Optimization:** 2 hours
- **Animations & Polish:** 1.5 hours
- **Chatbot & Bonus Features:** 2 hours
- **Testing & Documentation:** 1 hour
- **Total:** ~12.5 hours (well within the 48-hour target)

---

## 🛠️ Tech Stack
- **React + Vite + TypeScript**
- **Tailwind CSS** (with custom config)
- **Framer Motion** (animations)
- **React Helmet** (SEO)
- **Custom Chatbot** (OpenAI-ready, currently keyword-matching)

---

## 📦 Folder Structure
```
SoftShell/
├── public/                # Static assets, favicon, logo
├── src/
│   ├── components/        # UI components (Navbar, HeroSection, ChatWidget, etc.)
│   ├── lib/               # Utility libraries (chat logic, helpers)
│   ├── pages/             # Main pages (Index, etc.)
│   ├── styles/            # Custom CSS/animations
│   └── ...
├── package.json           # Project metadata & scripts
├── tailwind.config.ts     # Tailwind CSS config
├── vite.config.ts         # Vite config
└── README.md              # This file
```

---

## ⚡ Getting Started

1. **Clone the Repo**
   ```bash
   git clone https://github.com/your-username/SoftShell.git
   cd SoftShell
   ```
2. **Install Dependencies**
   ```bash
   npm install
   # or
yarn install
   ```
3. **Set Up Environment Variables** (if using OpenAI)
   ```env
   VITE_OPENAI_API_KEY=your-openai-key-here
   ```
4. **Run the App**
   ```bash
   npm run dev
   # or
yarn dev
   ```
   Visit [http://localhost:5173](http://localhost:5173)

---

## 🧩 Customization
- **Chatbot:** Edit `src/lib/chat.ts` for responses or swap in OpenAI logic.
- **Branding:** Update colors in `tailwind.config.ts`, swap logos/images in `public/` or components.
- **Content:** Edit text in `src/components/` and `src/pages/`.

---

## 🌐 Deployment
- **Build for production:**
  ```bash
  npm run build
  # or
  yarn build
  ```
- **Preview production build:**
  ```bash
  npm run preview
  # or
  yarn preview
  ```
- Deploy the `dist/` folder to Vercel.

---

## 🤝 Contributing
Pull requests and suggestions are welcome! For major changes, please open an issue first.

---

## 📞 Contact & Support
- **Questions?** Use the in-app chatbot or contact form.
- **Email:** support@softshell.com (replace with your real support email)

---

## 📝 License
This project is for demonstration and educational purposes. Please add your own license as needed.
