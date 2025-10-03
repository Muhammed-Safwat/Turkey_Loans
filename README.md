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

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Angular** | 19.1.0 | Frontend Framework |
| **TypeScript** | 5.7.2 | Programming Language |
| **SCSS** | Latest | CSS Preprocessor |
| **ngx-translate** | 17.0.0 | Internationalization |
| **RxJS** | 7.8.0 | Reactive Programming |

## 📁 Project Structure

```
src/
├── app/
│   ├── pages/
│   │   ├── home/                 # Home page component
│   │   └── about/                # About page component
│   ├── shared/
│   │   ├── components/
│   │   │   ├── footer/           # Footer component
│   │   │   └── language-switcher/ # Language switcher
│   │   └── core/
│   │       ├── interfaces/       # TypeScript interfaces
│   │       └── services/         # Core services
│   ├── app.component.*           # Main app component
│   ├── app.config.ts            # App configuration
│   └── app.routes.ts            # Routing configuration
├── assets/
│   └── i18n/                    # Translation files
│       ├── ar.json              # Arabic translations
│       └── en.json              # English translations
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

## 🏢 Global SEO Standards Implementation

### How Global Companies Handle Multilingual SEO

#### **Google Approach**
- `google.com/ar/` for Arabic
- `google.com/en/` for English
- Proper hreflang implementation
- Canonical URLs for each language

#### **Microsoft Approach**
- `microsoft.com/ar-sa/` for Arabic (Saudi Arabia)
- `microsoft.com/en-us/` for English (United States)
- Geographic targeting
- Language-specific content

#### **Apple Approach**
- `apple.com/ar/` for Arabic
- `apple.com/en/` for English
- Clean URL structure
- Consistent navigation

### Our Implementation
We follow the same standards as these global companies:

```html
<!-- Hreflang Implementation -->
<link rel="alternate" hreflang="ar" href="https://turkeyloans.intechdev.net/ar">
<link rel="alternate" hreflang="en" href="https://turkeyloans.intechdev.net/en">
<link rel="alternate" hreflang="x-default" href="https://turkeyloans.intechdev.net/ar">

<!-- Meta Tags -->
<meta name="language" content="ar">
<meta property="og:locale" content="ar_SA">
<meta name="geo.region" content="SA">
```

### SEO Best Practices Implemented
- ✅ **Separate URLs**: Each language has its own URL
- ✅ **Hreflang Tags**: Proper international SEO
- ✅ **Canonical URLs**: Prevents duplicate content issues
- ✅ **Meta Tags**: Dynamic and language-specific
- ✅ **Sitemap**: Multi-language sitemap
- ✅ **Robots.txt**: Professional configuration
- ✅ **Structured Data**: JSON-LD for rich snippets

## 🎯 Company Information

**Developed by IN TECH**
- **Website**: https://www.intechdev.net
- **Email**: info@intechdev.net
- **Phone**: +966 54 946 7661
- **Address**: Riyadh, Saudi Arabia
- **Motto**: "We Build You Grow"

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `ng serve` | Start development server |
| `ng build` | Build for production |
| `ng test` | Run unit tests |
| `ng lint` | Run linting |

## 🔧 Configuration

### Language Configuration
The application supports easy addition of new languages:

1. **Add language code** to `supported-languages.ts`
2. **Create translation file** in `src/assets/i18n/`
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

### Code Quality
- ✅ TypeScript strict mode
- ✅ Standalone components
- ✅ Service-based architecture
- ✅ Interface-driven development
- ✅ Responsive design

### User Experience
- ✅ Intuitive language switching
- ✅ Smooth transitions
- ✅ Professional design
- ✅ Mobile-first approach
- ✅ Accessibility considerations

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is developed by IN TECH. All rights reserved.

##  Support

For support and inquiries:
- **Email**: info@intechdev.net
- **Website**: https://www.intechdev.net

---

<div align="center">
  <p>Made with ❤️ by <strong>IN TECH</strong></p>
  <p><em>We Build You Grow</em></p>
</div>
