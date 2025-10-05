import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';

export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  link: string;
  delay?: string;
}

@Component({
  selector: 'app-block-feature-five',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './block-feature-five.component.html',
  styleUrl: './block-feature-five.component.scss'
})
export class BlockFeatureFiveComponent {

  readonly services: Service[] = [
    {
      id: 1,
      icon: 'assets/images/icon/icon_23.svg',
      title: 'سداد القروض',
      description: 'حلول سريعة وموثوقة لسداد القروض والمتعثرات داخل المملكة.',
      link: '/services/1',
      delay: '0s'
    },
    {
      id: 2,
      icon: 'assets/images/icon/icon_24.svg',
      title: 'استخراج تمويل',
      description: 'نساعدك في الحصول على قروض شخصية أو عقارية من البنوك والشركات.',
      link: '/services/2',
      delay: '0.1s'
    },
    {
      id: 3,
      icon: 'assets/images/icon/icon_25.svg',
      title: 'رهن عقاري',
      description: 'إجراءات رهن عقاري مرنة وسريعة لتلبية احتياجاتك التمويلية.',
      link: '/services/3',
      delay: '0.2s'
    },
    {
      id: 4,
      icon: 'assets/images/icon/icon_26.svg',
      title: 'تمويل شركات',
      description: 'ندعم أصحاب الشركات والمؤسسات بتمويلات شرعية مرنة وآمنة.',
      link: '/services/4',
      delay: '0.3s'
    }
  ];

  constructor(private languageService: LanguageService) {}
}
