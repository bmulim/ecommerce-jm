# 🏋️ JM Store - Supplements E-commerce

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Modern e-commerce platform for supplements and fitness products**

[🌐 Demo](#) • [📖 Documentation](#documentation) • [🚀 Installation](#-installation)

</div>

---

## 📋 About The Project

JM Store is an e-commerce platform built with cutting-edge technologies, focused on selling dietary supplements and fitness products. The project is part of the JM Fitness Studio ecosystem and offers an exceptional shopping experience with elegant design and optimized performance.

### ✨ Key Features

- 🎨 **Modern Design**: Elegant interface with premium golden theme (#C2A537)
- ⚡ **High Performance**: Optimized with Next.js 15 and Server Components
- 📱 **Responsive**: Perfect experience on all devices
- 🎭 **Smooth Animations**: Framer Motion for elegant transitions
- 🔒 **Secure**: Integrated authentication and data protection
- 🛒 **Smart Cart**: Optimized shopping system
- 💳 **Payments**: Integration with payment gateways
- 📧 **Newsletter**: Email marketing system
- 🎯 **SEO Optimized**: Better ranking in search engines

---

## 🛠️ Technologies

### Core

- **[Next.js 15.5.3](https://nextjs.org/)** - React framework with Server Components
- **[React 19.1.0](https://react.dev/)** - Library for user interfaces
- **[TypeScript 5](https://www.typescriptlang.org/)** - JavaScript superset with static typing

### Styling

- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Modern and customizable icons
- **[CVA](https://cva.style/)** - Component variants

### Database

- **[Drizzle ORM](https://orm.drizzle.team/)** - TypeScript-first ORM
- **[PostgreSQL](https://www.postgresql.org/)** - Relational database
- **[Drizzle Kit](https://orm.drizzle.team/kit-docs/overview)** - Migrations and seeds

### Development Tools

- **[ESLint](https://eslint.org/)** - Code quality linter
- **[Prettier](https://prettier.io/)** - Code formatter
- **[TypeScript ESLint](https://typescript-eslint.io/)** - TypeScript rules for ESLint

---

## 🚀 Installation

### Prerequisites

- Node.js 18.17 or higher
- npm, yarn or pnpm
- PostgreSQL 14 or higher

### Installation Steps

1. **Clone the repository**

```bash
git clone https://github.com/bmulim/ecommerce-jm.git
cd ecommerce-jm
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Configure environment variables**

```bash
cp .env.example .env
```

Edit the `.env` file with your settings:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/jmstore"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

4. **Run database migrations**

```bash
npm run db:push
# or
npm run db:migrate
```

5. **Seed the database (optional)**

```bash
npm run db:seed
```

6. **Start the development server**

```bash
npm run dev
```

Access [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
jmstore/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Main layout
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable components
│   │   ├── HeroSection/       # Main banner
│   │   ├── FeaturedProducts/  # Featured products
│   │   ├── CategorySection/   # Categories
│   │   ├── BenefitsSection/   # Store benefits
│   │   ├── NewsletterSection/ # Newsletter
│   │   ├── Header/            # Header
│   │   ├── Footer/            # Footer
│   │   └── WhatsAppFloat/     # Floating WhatsApp button
│   ├── db/                    # Database configuration
│   │   ├── index.ts           # Drizzle client
│   │   ├── schema.ts          # Database schemas
│   │   └── seed.ts            # Initial data
│   └── lib/                   # Utilities
│       └── utils.ts           # Helper functions
├── public/                    # Static files
│   └── favicon.svg           # Site favicon
├── drizzle/                   # Database migrations
├── .env                       # Environment variables
├── drizzle.config.ts         # Drizzle configuration
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies
```

---

## 🎯 Features

### 📦 Homepage

#### Hero Section

- Main banner with animations
- CTAs for products and about page
- Store statistics (products, customers, satisfaction)
- Animated particle effects

#### Featured Products

- Responsive product grid
- Star rating system
- Badges (Best Seller, Featured, New)
- Highlighted discount prices
- Add to cart button

#### Product Categories

- 6 main categories:
  - 💪 Proteins (Whey, Casein, Albumin)
  - ⚡ Creatine (Monohydrate, HCL, Micronized)
  - 🔥 Pre-Workout (Energy and focus)
  - 💧 Amino Acids (BCAA, Glutamine)
  - 🏋️ Hypertrophy (Muscle gain)
  - ❤️ Health (Vitamins, Minerals)
- Animated icons
- Product count per category

#### Store Benefits

- ✓ Fast Delivery (24h)
- ✓ Original Products (100% certified)
- ✓ Best Price (exclusive promotions)
- ✓ 24/7 Support (specialized service)
- ✓ Guaranteed Quality (tested and approved)
- ✓ Easy Exchange (up to 30 days)

#### Newsletter

- Subscription form
- Email validation
- Visual feedback
- Subscription benefits
- Statistics (15k+ subscribers)

### 🎨 Global Components

#### Header

- Animated logo
- Responsive navigation menu
- Links to Home, Products, About, Contact
- Mobile hamburger menu
- Authentication integration

#### Footer

- Company information
- Quick links
- WhatsApp button
- Social media
- Copyright

#### Floating WhatsApp

- Fixed button in bottom right corner
- Bounce animation
- Notification badge
- Pre-configured message
- Hidden on admin/coach routes

---

## 🎨 Design System

### Color Palette

```css
/* Main Golds */
--primary: #c2a537 /* Primary gold */ --secondary: #d4b547 /* Secondary gold */
  --accent: #ffe17d /* Light gold */ --dark-gold: #b8941f /* Dark gold */
  /* Neutrals */ --background: #000000 /* Black */ --foreground: #ffffff
  /* White */ --gray: #6b7280 /* Gray */;
```

### Typography

- **Sans Font**: Geist Sans (variable)
- **Mono Font**: Geist Mono (variable)
- **Sizes**: 12px to 72px (responsive system)

### UI Components

All components follow the structure:

```
ComponentName/
└── index.tsx
```

---

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Build
npm run build        # Create production build
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint

# Database
npm run db:push      # Sync schema with database
npm run db:migrate   # Run migrations
npm run db:seed      # Populate database with initial data
npm run db:studio    # Open Drizzle Studio (GUI)
```

---

## 🌐 Deploy

### Vercel (Recommended)

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Configure environment variables
4. Automatic deploy on every push

### Other Platforms

The project is compatible with:

- Railway
- Render
- DigitalOcean App Platform
- AWS Amplify
- Netlify

---

## 🤝 Contributing

Contributions are always welcome! Follow these steps:

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/NewFeature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

### Code Conventions

- Use TypeScript for type safety
- Follow ESLint rules
- Format with Prettier
- Write semantic commits
- Add tests when possible

---

## 📝 Roadmap

- [ ] Complete authentication system
- [ ] Payment gateway integration
- [ ] Admin panel
- [ ] Reviews and comments system
- [ ] Loyalty program
- [ ] Order tracking
- [ ] Discount coupons
- [ ] Product wishlist
- [ ] Product comparison
- [ ] Live support chat

---

## 📄 License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.

---

## 👥 Team

- **Lead Developer**: [Bruno Mulim](https://github.com/bmulim)
- **Design**: JM Fitness Studio
- **Project**: JM Store

---

## 📞 Contact

- **Website**: [jmstore.com.br](#)
- **Email**: contato@jmstore.com.br
- **WhatsApp**: +55 (21) 98099-5749
- **Instagram**: [@jmstore](#)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Vercel](https://vercel.com/) for hosting
- [Tailwind CSS](https://tailwindcss.com/) for the design system
- [Framer Motion](https://www.framer.com/motion/) for animations
- Open source community

---

<div align="center">

**Made with ❤️ and ☕ by JM Fitness Studio**

[⬆ Back to top](#-jm-store---supplements-e-commerce)

</div>
