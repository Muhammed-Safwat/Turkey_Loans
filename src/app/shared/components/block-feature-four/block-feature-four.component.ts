import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
  link: string;
  isActive?: boolean;
  delay?: string;
}

@Component({
  selector: 'app-block-feature-four',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './block-feature-four.component.html',
  styleUrl: './block-feature-four.component.scss'
})
export class BlockFeatureFourComponent {

  readonly features: Feature[] = [
    {
      id: 1,
      icon: '',
      title: 'استشارات تمويلية',
      description: 'نقدم لك التوجيه الصحيح لاختيار الحل الأنسب لك مع أقل هامش ربح وبطريقة شرعية.',
      link: '/services',
      delay: '0s'
    },
    {
      id: 2,
      icon: '',
      title: 'سرية وأمان',
      description: 'نضمن لك سرعة إنجاز معاملاتك بسرية تامة وحماية كاملة لبياناتك.',
      link: '/services',
      isActive: true,
      delay: '0.1s'
    },
    {
      id: 3,
      icon: '',
      title: 'إدارة التزاماتك',
      description: 'نساعدك في سداد المتعثرات وإعادة ترتيب التزاماتك المالية بما يناسب دخلك.',
      link: '/services',
      delay: '0.2s'
    }
  ];

}
