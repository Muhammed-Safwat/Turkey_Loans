import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent { 

  readonly quickLinks: FooterLink[] = [
    { text: 'الرئيسية', href: '/' },
    { text: 'من نحن', href: '/about' },
    { text: 'خدماتنا', href: '/services' },
    { text: 'تواصل معنا', href: '/contact' }
  ];

  readonly supportLinks: FooterLink[] = [
    { text: 'سياسة الخصوصية', href: '/privacy-policy' },
    { text: 'الشروط والأحكام', href: '/terms-conditions' },
    { text: 'الأسئلة الشائعة', href: '#' }
  ];

  readonly contactInfo: FooterLink[] = [
    { text: '+966 53 497 0654', href: 'tel:+966534970654' }, 
  ];

  readonly socialLinks: SocialLink[] = [
    { icon: 'bi bi-whatsapp', href: 'https://wa.me/966534970654' }
  ];

  constructor(private languageService: LanguageService) {}
}