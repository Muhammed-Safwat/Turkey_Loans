import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../core/services/language.service';

export interface Counter {
  value: number;
  label: string;
}

export interface TextFeature {
  id: number;
  upperTitle: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  counters: Counter[];
  isReversed?: boolean;
}

@Component({
  selector: 'app-text-feature-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-feature-three.component.html',
  styleUrl: './text-feature-three.component.scss'
})
export class TextFeatureThreeComponent {
   

  readonly features: TextFeature[] = [
    {
      id: 1,
      upperTitle: 'من نحن',
      title: 'معك بخطوات واضحة لنجاحك المالي',
      description: 'وسيط شرعي داخل المملكة نساعدك في سداد القروض المتعثرة واستخراج تمويلات جديدة من البنوك والشركات بسرعة وموثوقية.',
      buttonText: 'اعرف المزيد',
      buttonLink: '/about',
      counters: [
        { value: 10, label: 'سنوات خبرة' },
        { value: 3000, label: 'عميل سعيد بخدماتنا' }
      ]
    },/*
    {
      id: 2,
      upperTitle: 'عروضنا',
      title: 'اليوم الوطني السعودي',
      description: 'بمناسبة اليوم الوطني السعودي نقدم لك عروضاً وتمويلات مميزة لتسهيل حياتك المالية وتحقيق أحلامك بسرعة وموثوقية.',
      buttonText: 'اكتشف العروض',
      buttonLink: 'offers.html',
      counters: [
        { value: 25, label: 'عروض حصرية اليوم الوطني' },
        { value: 1500, label: 'عملاء مستفيدون من عروضنا' }
      ],
      isReversed: true
    }*/
  ];

  constructor(private languageService: LanguageService) {}
}
