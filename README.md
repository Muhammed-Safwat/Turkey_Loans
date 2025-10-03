# Turkey Loans - Turkish Loans Management System

<div align="center">
  <img src="https://img.shields.io/badge/Angular-19-red?style=for-the-badge&logo=angular" alt="Angular 19">
  <img src="https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript" alt="TypeScript 5.7">
  <img src="https://img.shields.io/badge/SCSS-CSS%20Preprocessor-pink?style=for-the-badge&logo=sass" alt="SCSS">
  <img src="https://img.shields.io/badge/ngx--translate-Multilingual-green?style=for-the-badge" alt="ngx-translate">
</div>

## 🌟 Overview

Turkey Loans is a modern, multilingual web application built with Angular 19 for managing Turkish loans. The application features advanced SEO optimization, professional multilingual support, and a clean, responsive design.

## 🚀 Key Features

### 🌍 **Professional Multilingual Support (Global Standard)**
- **SEO-Optimized URLs**: Follows global standards like Google, Microsoft, Apple
  - Arabic: `turkeyloans.intechdev.net/ar/`
  - English: `turkeyloans.intechdev.net/en/`
- **Automatic Language Detection**: Smart detection from URL, localStorage, and browser
- **URL-Based Language Switching**: Clean URLs without query parameters
- **RTL/LTR Support**: Full support for Arabic (RTL) and English (LTR)
- **Meta Tags Optimization**: Professional hreflang and language meta tags

### 🔍 **Enterprise-Grade SEO Features**
- **International SEO**: Proper hreflang implementation like global companies
- **Dynamic Meta Tags**: Real-time meta tag updates based on language
- **Structured Data**: JSON-LD structured data for rich snippets
- **Sitemap Generation**: Automatic sitemap with language variants
- **Robots.txt**: Professional robots.txt configuration
- **Performance Optimized**: Core Web Vitals friendly
- **Canonical URLs**: Proper canonical URL management

### 🎨 **Modern UI/UX**
- **Responsive Design**: Works perfectly on all devices
- **Professional Styling**: Clean, modern interface
- **Language Switcher**: Elegant dropdown language selector
- **Company Information**: Professional footer with company details
- **About Page**: Comprehensive project and company information

### 📱 **Mobile-First Design**
- **Responsive Typography**: Optimized font sizes for all screen sizes
- **Mobile Navigation**: Collapsible menu with close button
- **Touch-Friendly**: Optimized for mobile interactions
- **Performance**: Fast loading on mobile devices

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Angular** | 19.1.0 | Frontend Framework |
| **TypeScript** | 5.7.2 | Programming Language |
| **SCSS** | Latest | CSS Preprocessor |
| **ngx-translate** | 17.0.0 | Internationalization |
| **RxJS** | 7.8.0 | Reactive Programming |
| **Bootstrap Icons** | Latest | Icon Library |

## 📁 Project Structure

```
src/
├── app/
│   ├── pages/
│   │   ├── home/                 # Home page component
│   │   ├── about/                # About page component
│   │   ├── services/             # Services listing page
│   │   ├── service-detail/       # Individual service details
│   │   ├── contact-us/           # Contact page
│   │   ├── privacy-policy/       # Privacy policy page
│   │   ├── terms-conditions/     # Terms and conditions page
│   │   └── error/                # Error page component
│   ├── shared/
│   │   ├── components/
│   │   │   ├── layout/           # Header and footer components
│   │   │   ├── banner/           # Hero banner component
│   │   │   ├── banking-solutions/ # Banking solutions section
│   │   │   ├── block-feature-*/  # Feature block components
│   │   │   ├── contact-*/        # Contact related components
│   │   │   ├── feedback-section/ # Customer feedback section
│   │   │   ├── language-switcher/ # Language switcher
│   │   │   └── whatsapp-contact/ # WhatsApp contact component
│   │   ├── core/
│   │   │   ├── interfaces/       # TypeScript interfaces
│   │   │   └── services/         # Core services (SEO, Scroll, etc.)
│   │   └── styles/
│   │       └── mobile-fonts.scss # Mobile responsive fonts
│   ├── app.component.*           # Main app component
│   ├── app.config.ts            # App configuration
│   └── app.routes.ts            # Routing configuration
├── public/
│   ├── i18n/                    # Translation files
│   │   ├── ar.json              # Arabic translations
│   │   └── en.json              # English translations
│   └── scss/                    # Global SCSS files
└── styles.scss                  # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Angular CLI

### Installation

1. **Clone the repository**
```bash
   git clone <repository-url>
   cd Turkey_Loans
```

2. **Install dependencies**
```bash
   npm install
   ```

3. **Start development server**
```bash
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

## 🌐 Multilingual Implementation (Global Standard)

### URL Structure (Following Global Companies)
- **Arabic**: `turkeyloans.intechdev.net/ar/`
- **English**: `turkeyloans.intechdev.net/en/`
- **Auto-redirect**: Root URL redirects to Arabic by default

### Language Detection Priority
1. **URL Parameter**: Language from current URL
2. **Local Storage**: Previously selected language
3. **Browser Language**: User's browser language preference
4. **Default**: Arabic (ar)

### SEO Features (Enterprise-Grade)
- **Hreflang Tags**: Automatically generated for each language
- **Meta Tags**: Dynamic language and locale meta tags
- **URL Structure**: Clean, SEO-friendly URLs following global standards
- **RTL Support**: Proper direction attribute for Arabic
- **Sitemap**: Multi-language sitemap with proper hreflang
- **Robots.txt**: Professional configuration for search engines

## 📄 Available Pages

### Main Pages
- **Home** (`/`) - Landing page with hero banner and services overview
- **About** (`/about`) - Company information and mission
- **Services** (`/services`) - Complete list of loan services
- **Service Detail** (`/services/:id`) - Individual service details
- **Contact** (`/contact`) - Contact information and form
- **Privacy Policy** (`/privacy-policy`) - Privacy policy page
- **Terms & Conditions** (`/terms-conditions`) - Terms and conditions
- **Error** (`/error`) - 404 error page

### Service Types
1. **تسديد القروض بكافة أنواعها** - All types of loan repayment
2. **استخراج التمويلات** - Loan extraction services
3. **الاستشارات المالية** - Financial consultations
4. **الرهن العقاري** - Mortgage services

## 🏢 Company Information

**Developed by IN TECH**
- **Website**: https://www.intechdev.net
- **Email**: info@intechdev.net
- **Phone**: +966 53 497 0654
- **Address**: Riyadh, Saudi Arabia
- **Motto**: "We Build You Grow"

## 📱 Mobile Responsiveness

### Responsive Features
- **Mobile-First Design**: Optimized for mobile devices
- **Responsive Typography**: Font sizes adjust for different screen sizes
- **Touch-Friendly Navigation**: Easy-to-use mobile menu
- **Optimized Images**: Fast loading on mobile networks
- **Swiper Integration**: Smooth carousel for testimonials

### Breakpoints
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 576px - 767px
- **Small Mobile**: Below 576px

## 🔧 Technical Features

### Routing & Navigation
- **Angular Router**: Client-side routing with lazy loading
- **Scroll Restoration**: Pages load at the top
- **Anchor Scrolling**: Smooth scrolling to sections
- **Route Guards**: Protected routes implementation

### Performance Optimizations
- **Lazy Loading**: Components loaded on demand
- **Standalone Components**: Modern Angular architecture
- **Tree Shaking**: Optimized bundle size
- **Service Workers**: Offline functionality

### SEO & Meta Tags
- **Dynamic Meta Tags**: Language-specific meta information
- **Structured Data**: JSON-LD for rich snippets
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter sharing optimization

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `ng serve` | Start development server |
| `ng build` | Build for production |
| `ng build --configuration=development` | Build for development |
| `ng test` | Run unit tests |
| `ng lint` | Run linting |

## 🔧 Configuration

### Language Configuration
The application supports easy addition of new languages:

1. **Add language code** to `supported-languages.ts`
2. **Create translation file** in `src/public/i18n/`
3. **Update language service** configuration
4. **Add language option** to switcher component

### SEO Configuration
- **Meta tags** are automatically generated
- **Hreflang tags** are dynamically created
- **URL structure** follows best practices
- **Performance** is optimized for Core Web Vitals

## 🌟 Best Practices Implemented

### SEO Best Practices
- ✅ Separate URLs for each language
- ✅ Proper hreflang implementation
- ✅ Meta tags optimization
- ✅ Clean URL structure
- ✅ Performance optimization
- ✅ Mobile-first design

### Code Quality
- ✅ TypeScript strict mode
- ✅ Standalone components
- ✅ Service-based architecture
- ✅ Interface-driven development
- ✅ Responsive design
- ✅ Mobile optimization

### User Experience
- ✅ Intuitive language switching
- ✅ Smooth transitions
- ✅ Professional design
- ✅ Mobile-first approach
- ✅ Accessibility considerations
- ✅ Touch-friendly interface

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is developed by IN TECH. All rights reserved.

## 🆘 Support

For support and inquiries:
- **Email**: info@intechdev.net
- **Website**: https://www.intechdev.net
- **Phone**: +966 53 497 0654

---

<div align="center">
  <p>Made with ❤️ by <strong>IN TECH</strong></p>
  <p><em>We Build You Grow</em></p>
</div>