import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

export interface Partner {
  id: number;
  name: string;
  logo: string;
  alt: string;
}

@Component({
  selector: 'app-partner-slider',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './partner-slider.component.html',
  styleUrl: './partner-slider.component.scss'
})
export class PartnerSliderComponent {
  // Partner data
  readonly partners: Partner[] = [
    {
      id: 1,
      name: 'بنك الراجحي',
      logo: 'assets/images/logo/media_03.svg',
      alt: 'بنك الراجحي'
    },
    {
      id: 2,
      name: 'البنك الأهلي السعودي',
      logo: 'assets/images/logo/media_04.svg',
      alt: 'البنك الأهلي السعودي'
    },
    {
      id: 3,
      name: 'بنك البلاد',
      logo: 'assets/images/logo/media_01.svg',
      alt: 'بنك البلاد'
    },
    {
      id: 4,
      name: 'شركة تمويل الأهلي',
      logo: 'assets/images/logo/media_07.svg',
      alt: 'شركة تمويل الأهلي'
    },
    {
      id: 5,
      name: 'شركة تمويل الأهلي',
      logo: 'assets/images/logo/media_08.svg',
      alt: 'شركة تمويل الأهلي'
    },
    {
      id: 6,
      name: 'شركة ساب للتمويل',
      logo: 'assets/images/logo/media_02.svg',
      alt: 'شركة ساب للتمويل'
    }
  ];


}
