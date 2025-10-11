# 🔧 دليل استخدام نظام SEO - للمطورين

## 📋 نظرة عامة سريعة

تم تطبيق نظام SEO متقدم على موقع `tasdedqorod.com` باستخدام Angular وخدمة SEO مخصصة. هذا الدليل يشرح كيفية استخدام النظام وتطويره.

---

## 🚀 البدء السريع

### 1. **إضافة SEO Service إلى مكون جديد**

```typescript
import { SeoService } from '../../shared/core/services/seo.service';

@Component({
  selector: 'app-new-page',
  // ...
})
export class NewPageComponent implements OnInit {
  
  constructor(private seoService: SeoService) {}
  
  ngOnInit() {
    // تحديث SEO تلقائياً
    this.seoService.updateSEOTags();
  }
}
```

### 2. **تخصيص SEO لصفحة معينة**

```typescript
ngOnInit() {
  // تحديث SEO مخصص للصفحة
  this.seoService.updatePageSEO({
    title: 'عنوان الصفحة المخصص',
    description: 'وصف مخصص للصفحة',
    keywords: 'كلمات مفتاحية خاصة',
    image: 'https://tasdedqorod.com/assets/images/page-image.jpg'
  });
}
```

---

## 📁 هيكل الملفات

```
src/
├── app/
│   ├── pages/
│   │   ├── home/
│   │   │   └── home.component.ts          # ✅ تم تطبيق SEO
│   │   ├── services/
│   │   │   └── services.component.ts      # ⚠️ يحتاج تطبيق SEO
│   │   ├── about/
│   │   │   └── about.component.ts         # ⚠️ يحتاج تطبيق SEO
│   │   └── contact/
│   │       └── contact-us.component.ts    # ⚠️ يحتاج تطبيق SEO
│   └── shared/
│       └── core/
│           └── services/
│               └── seo.service.ts         # ✅ خدمة SEO الرئيسية
├── index.html                             # ✅ Meta tags محسنة
├── sitemap.xml                            # ✅ خريطة الموقع
└── robots.txt                             # ✅ توجيه العناكب
```

---

## 🔧 كيفية عمل النظام

### 1. **SEO Service Architecture**

```typescript
export class SeoService {
  private baseUrl = 'https://tasdedqorod.com';
  private supportedLanguages = ['ar'];

  // تحديث تلقائي عند تغيير الصفحة
  private setupRouterSubscription(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateSEOTags();
      });
  }

  // تحديث شامل لجميع عناصر SEO
  updateSEOTags(): void {
    const currentUrl = this.router.url;
    const language = this.getLanguageFromUrl(currentUrl);

    this.updateTitle(language);
    this.updateMetaTags(language, currentUrl);
    this.updateStructuredData(language);
  }
}
```

### 2. **Meta Tags Management**

```typescript
private updateMetaTags(language: string, currentUrl: string): void {
  const description = '🏦 سداد القروض والمتعثرات في السعودية...';
  const keywords = 'سداد قروض, قروض السعودية, تسديد المتعثرات...';

  // Basic meta tags
  this.meta.updateTag({ name: 'description', content: description });
  this.meta.updateTag({ name: 'keywords', content: keywords });
  
  // Open Graph tags
  this.meta.updateTag({ property: 'og:title', content: this.title.getTitle() });
  this.meta.updateTag({ property: 'og:description', content: description });
  
  // Twitter Card tags
  this.meta.updateTag({ name: 'twitter:title', content: this.title.getTitle() });
}
```

### 3. **Structured Data**

```typescript
private updateStructuredData(language: string): void {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "سداد قروض ابوتركي",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+966561527263",
      "contactType": "customer service"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  };

  // إضافة البيانات المنظمة إلى الصفحة
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(structuredData);
  document.head.appendChild(script);
}
```

---

## 📝 تطبيق SEO على صفحات جديدة

### 1. **صفحة الخدمات**

```typescript
// src/app/pages/services/services.component.ts
import { SeoService } from '../../shared/core/services/seo.service';

@Component({
  selector: 'app-services',
  // ...
})
export class ServicesComponent implements OnInit {
  
  constructor(private seoService: SeoService) {}
  
  ngOnInit() {
    this.seoService.updatePageSEO({
      title: 'خدمات سداد القروض | أبو تركي | حلول مالية متخصصة',
      description: 'خدمات تسديد القروض والمتعثرات في السعودية | استخراج تمويلات جديدة | حلول مالية شرعية وآمنة',
      keywords: 'خدمات سداد القروض, تسديد المتعثرات, استخراج تمويلات, حلول مالية, أبو تركي',
      image: 'https://tasdedqorod.com/assets/images/services-banner.jpg'
    });
  }
}
```

### 2. **صفحة من نحن**

```typescript
// src/app/pages/about/about.component.ts
import { SeoService } from '../../shared/core/services/seo.service';

@Component({
  selector: 'app-about',
  // ...
})
export class AboutComponent implements OnInit {
  
  constructor(private seoService: SeoService) {}
  
  ngOnInit() {
    this.seoService.updatePageSEO({
      title: 'من نحن | أبو تركي لسداد القروض | خبرة في الحلول المالية',
      description: 'تعرف على شركة أبو تركي المتخصصة في سداد القروض والمتعثرات في السعودية | خبرة واسعة في الحلول المالية',
      keywords: 'من نحن, أبو تركي, شركة سداد القروض, خبرة مالية, السعودية',
      image: 'https://tasdedqorod.com/assets/images/about-banner.jpg'
    });
  }
}
```

### 3. **صفحة اتصل بنا**

```typescript
// src/app/pages/contact-us/contact-us.component.ts
import { SeoService } from '../../shared/core/services/seo.service';

@Component({
  selector: 'app-contact-us',
  // ...
})
export class ContactUsComponent implements OnInit {
  
  constructor(private seoService: SeoService) {}
  
  ngOnInit() {
    this.seoService.updatePageSEO({
      title: 'اتصل بنا | أبو تركي | استشارة مجانية لسداد القروض',
      description: 'تواصل معنا للحصول على استشارة مجانية حول سداد القروض والمتعثرات | هاتف: +966561527263',
      keywords: 'اتصل بنا, تواصل معنا, استشارة مجانية, سداد القروض, أبو تركي',
      image: 'https://tasdedqorod.com/assets/images/contact-banner.jpg'
    });
  }
}
```

---

## 🔄 تحديث Sitemap

### عند إضافة صفحة جديدة:

1. **أضف الصفحة إلى sitemap.xml:**

```xml
<url>
  <loc>https://tasdedqorod.com/new-page</loc>
  <lastmod>2024-12-19T10:00:00+03:00</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

2. **حدد الأولوية المناسبة:**
   - `1.0` - الصفحة الرئيسية
   - `0.9` - صفحات الخدمات الرئيسية
   - `0.8` - صفحات مهمة (من نحن)
   - `0.7` - صفحات ثانوية (اتصل بنا)
   - `0.3` - صفحات قانونية (سياسة الخصوصية)

3. **حدد تردد التحديث:**
   - `weekly` - محتوى متغير
   - `monthly` - محتوى متوسط التغيير
   - `yearly` - محتوى ثابت

---

## 🎯 أفضل الممارسات

### 1. **العناوين**
```typescript
// ✅ جيد
title: 'سداد قروض ابوتركي | حلول مالية متخصصة في السعودية | استشارة مجانية'

// ❌ سيء
title: 'أبو تركي'
```

### 2. **الأوصاف**
```typescript
// ✅ جيد
description: '🏦 سداد القروض والمتعثرات في السعودية | استخراج تمويلات جديدة من البنوك | حلول مالية شرعية وآمنة | استشارة مجانية | تواصل الآن +966561527263'

// ❌ سيء
description: 'موقع أبو تركي'
```

### 3. **الكلمات المفتاحية**
```typescript
// ✅ جيد - كلمات مفتاحية متنوعة ومستهدفة
keywords: 'سداد قروض, قروض السعودية, تسديد المتعثرات, تمويل شخصي, قروض بنكية, أبو تركي, حلول مالية, استشارة مالية, إعادة تمويل, تسهيلات بنكية, قروض سريعة, حلول الديون, إدارة القروض, خدمات مالية, بنوك السعودية, الراجحي, الأهلي, سامبا, البنك الأهلي التجاري'

// ❌ سيء - كلمات مفتاحية قليلة ومكررة
keywords: 'قروض, سداد, أبو تركي'
```

---

## 🐛 استكشاف الأخطاء

### 1. **SEO Service لا يعمل**
```typescript
// تأكد من إضافة SeoService إلى المكون
constructor(private seoService: SeoService) {}

// تأكد من استدعاء updateSEOTags
ngOnInit() {
  this.seoService.updateSEOTags();
}
```

### 2. **Meta Tags لا تظهر**
```typescript
// تأكد من استيراد Meta و Title
import { Meta, Title } from '@angular/platform-browser';

// تأكد من حقنها في constructor
constructor(
  private meta: Meta,
  private title: Title
) {}
```

### 3. **Structured Data لا يعمل**
```typescript
// تأكد من صحة JSON
const structuredData = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  // ... باقي البيانات
};

// تأكد من إضافة النص إلى script
script.text = JSON.stringify(structuredData);
```

---

## 📊 مراقبة الأداء

### 1. **Google Search Console**
- أضف الموقع إلى Google Search Console
- راقب الكلمات المفتاحية والمراكز
- تتبع الأخطاء والتحذيرات

### 2. **Google Analytics**
- راقب حركة المرور
- حلل سلوك المستخدمين
- تتبع معدل التحويل

### 3. **أدوات SEO**
- استخدم SEMrush أو Ahrefs لمراقبة المنافسين
- حلل الكلمات المفتاحية الجديدة
- راقب الروابط الخلفية

---

## 🔧 التطوير المستقبلي

### 1. **إضافة صفحات جديدة**
```typescript
// عند إضافة صفحة جديدة:
// 1. أنشئ المكون
// 2. أضف SEO service
// 3. أضف الصفحة إلى sitemap.xml
// 4. أضف الصفحة إلى routing
// 5. اختبر SEO tags
```

### 2. **تحسين الأداء**
```typescript
// استخدم lazy loading للصور
<img [src]="imageUrl" loading="lazy" alt="وصف الصورة">

// استخدم preconnect للروابط الخارجية
<link rel="preconnect" href="https://fonts.googleapis.com">
```

### 3. **إضافة ميزات جديدة**
- إضافة breadcrumbs
- تحسين سرعة التحميل
- إضافة schema markup إضافي
- تحسين الصور للـ SEO

---

## 📞 الدعم

إذا واجهت أي مشاكل:
1. راجع هذا الدليل
2. تحقق من console للأخطاء
3. استخدم أدوات SEO للاختبار
4. تواصل مع فريق التطوير

---

**تم تطوير هذا النظام بواسطة فريق IN TECH المتخصص في تطوير المواقع وتحسين محركات البحث.**

*آخر تحديث: ديسمبر 2024*
