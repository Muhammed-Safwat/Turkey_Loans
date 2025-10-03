import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../core/services/language.service';

export interface FooterLink {
  text: string;
  href: string;
}

export interface SocialLink {
  icon: string;
  href: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly isRTL = computed(() => this.languageService.isRTL());

  readonly quickLinks: FooterLink[] = [
    { text: 'الرئيسية', href: 'index.html' },
    { text: 'من نحن', href: 'about.html' },
    { text: 'خدماتنا', href: 'services.html' },
    { text: 'آراء العملاء', href: 'testimonials.html' },
    { text: 'تواصل معنا', href: 'contact.html' }
  ];

  readonly supportLinks: FooterLink[] = [
    { text: 'سياسة الخصوصية', href: 'privacy.html' },
    { text: 'الشروط والأحكام', href: 'terms.html' },
    { text: 'الأسئلة الشائعة', href: 'faq.html' }
  ];

  readonly contactInfo: FooterLink[] = [
    { text: '966561527263+', href: 'tel:+966561527263' }, 
  ];

  readonly socialLinks: SocialLink[] = [
    { icon: 'bi bi-facebook', href: '#' },
    { icon: 'bi bi-instagram', href: '#' },
    { icon: 'bi bi-whatsapp', href: '#' }
  ];

  constructor(private languageService: LanguageService) {}
}