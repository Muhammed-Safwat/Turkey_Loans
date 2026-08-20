import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private baseUrl = 'https://www.tasdedqorod.com';
  private supportedLanguages = ['ar'];

  constructor(
    private meta: Meta,
    private title: Title,
    private router: Router,
    private translate: TranslateService
  ) {}

  // Note: this used to auto-run on every NavigationEnd, which raced with each
  // page component's own ngOnInit and clobbered its title/description back to
  // these generic (homepage) values. Every route now sets its own SEO tags
  // explicitly in ngOnInit, so this is only called by the home page itself.
  updateSEOTags(): void {
    const currentUrl = this.router.url;
    const language = this.getLanguageFromUrl(currentUrl);

    // Update title
    this.updateTitle(language);

    // Update meta tags
    this.updateMetaTags(language, currentUrl);

    // Update hreflang tags
    this.updateHreflangTags(currentUrl);

    // Update structured data
    this.updateStructuredData(language);
  }

  private getLanguageFromUrl(url: string): string {
    return 'ar';
  }

  private updateTitle(language: string): void {
    this.title.setTitle('سداد قروض ابوتركي | حلول مالية متخصصة في السعودية | استشارة مجانية');
  }

  private updateMetaTags(language: string, currentUrl: string): void {
    const description = '🏦 سداد القروض والمتعثرات في السعودية | استخراج تمويلات جديدة من البنوك | حلول مالية شرعية وآمنة | استشارة مجانية | تواصل الآن +966561527263';
    const keywords = 'سداد قروض, قروض السعودية, تسديد المتعثرات, تمويل شخصي, قروض بنكية, أبو تركي, حلول مالية, استشارة مالية, إعادة تمويل, تسهيلات بنكية, قروض سريعة, حلول الديون, إدارة القروض, خدمات مالية, بنوك السعودية, الراجحي, الأهلي, سامبا, البنك الأهلي التجاري';

    // Basic meta tags
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: keywords });
    this.meta.updateTag({ name: 'language', content: 'ar' });
    this.meta.updateTag({ name: 'author', content: 'أبو تركي للقروض' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    // Open Graph tags
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: `${this.baseUrl}${currentUrl}` });
    this.meta.updateTag({ property: 'og:title', content: this.title.getTitle() });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:locale', content: 'ar_SA' });
    this.meta.updateTag({ property: 'og:site_name', content: 'سداد قروض ابوتركي' });

    // Twitter Card tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:url', content: `${this.baseUrl}${currentUrl}` });
    this.meta.updateTag({ name: 'twitter:title', content: this.title.getTitle() });
    this.meta.updateTag({ name: 'twitter:description', content: description });

    // Geographic tags
    this.meta.updateTag({ name: 'geo.region', content: 'SA' });
    this.meta.updateTag({ name: 'geo.country', content: 'Saudi Arabia' });
  }

  private updateHreflangTags(currentUrl: string): void {
    // No hreflang tags needed for single language site
  }

  private updateStructuredData(language: string): void {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "FinancialService",
      "name": "سداد قروض ابوتركي",
      "description": "نساعدك في سداد القروض والمتعثرات واستخراج تمويلات جديدة من البنوك والشركات داخل المملكة العربية السعودية",
      "url": this.baseUrl,
      "inLanguage": "ar",
      "logo": `${this.baseUrl}/assets/images/logo/logo-abotorky.svg`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+966561527263",
        "contactType": "customer service",
        "availableLanguage": ["Arabic"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "SA",
        "addressRegion": "Riyadh"
      },
      "serviceType": "Financial Services",
      "areaServed": "Saudi Arabia"
    };

    // Remove existing main structured data only (leave FAQ/breadcrumb schemas alone)
    const existingScript = document.querySelector('script[data-type="main-schema"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-type', 'main-schema');
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }

  // Method to update page-specific SEO
  updatePageSEO(pageData: {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
  }): void {
    if (pageData.title) {
      this.title.setTitle(pageData.title);
      this.meta.updateTag({ property: 'og:title', content: pageData.title });
      this.meta.updateTag({ name: 'twitter:title', content: pageData.title });
    }

    if (pageData.description) {
      this.meta.updateTag({ name: 'description', content: pageData.description });
      this.meta.updateTag({ property: 'og:description', content: pageData.description });
      this.meta.updateTag({ name: 'twitter:description', content: pageData.description });
    }

    if (pageData.keywords) {
      this.meta.updateTag({ name: 'keywords', content: pageData.keywords });
    }

    if (pageData.image) {
      this.meta.updateTag({ property: 'og:image', content: pageData.image });
      this.meta.updateTag({ name: 'twitter:image', content: pageData.image });
    }
  }

  setCanonical(url: string): void {
    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ name: 'twitter:url', content: url });
  }

  // Keeps accidental/typo/unknown URLs (the wildcard error route) out of Google's
  // index, since the server always returns 200 for every path (SPA fallback).
  setNoIndex(noIndex: boolean = true): void {
    const content = noIndex ? 'noindex, nofollow' : 'index, follow';
    this.meta.updateTag({ name: 'robots', content });
    this.meta.updateTag({ name: 'googlebot', content });
  }

  // Adds BreadcrumbList structured data so Google can show the page's breadcrumb
  // trail (e.g. "الرئيسية › خدماتنا › تسديد القروض") instead of the raw URL in
  // search results. Call only on pages that already show a matching breadcrumb UI.
  setBreadcrumbs(items: { label: string; url: string }[]): void {
    const existing = document.querySelector('script[data-type="breadcrumb-schema"]');
    if (existing) existing.remove();

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        item: item.url
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-type', 'breadcrumb-schema');
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  addFaqSchema(faqs: { q: string; a: string }[]): void {
    const existingFaq = document.querySelector('script[data-type="faq-schema"]');
    if (existingFaq) existingFaq.remove();

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqs.map(faq => ({
        '@type': 'Question',
        'name': faq.q,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.a
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-type', 'faq-schema');
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }
}
