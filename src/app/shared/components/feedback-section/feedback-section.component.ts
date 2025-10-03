import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../core/services/language.service';

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  comment: string;
  avatar: string;
  rating: number;
}

@Component({
  selector: 'app-feedback-section',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './feedback-section.component.html',
  styleUrl: './feedback-section.component.scss'
})
export class FeedbackSectionComponent implements OnInit, AfterViewInit { 

  readonly testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'أحمد محمد',
      location: 'الرياض',
      comment: 'فريق البنك ساعدني في تنظيم جميع معاملاتي المالية بسهولة وأمان، وأصبحت أعرف أين أستثمر وأدخر.',
      avatar: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      rating: 5
    },
    {
      id: 2,
      name: 'سارة علي',
      location: 'جدة',
      comment: 'بفضل خدماتهم البنكية، استطعت الحصول على قرض شخصي بسهولة مع الاستشارة المالية المناسبة لكل خطوة.',
      avatar: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      rating: 5
    },
    {
      id: 3,
      name: 'محمد الزهراني',
      location: 'الدمام',
      comment: 'خدمات إدارة القروض والاستثمار جعلت حياتي المالية منظمة وأمّن لي مستقبل أفضل.',
      avatar: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      rating: 5
    },
    {
      id: 4,
      name: 'ليلى سعيد',
      location: 'مكة',
      comment: 'الفريق يوفر استشارات مالية شخصية ويوضح لي أفضل الخطط الادخارية والقروض المتاحة.',
      avatar: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      rating: 5
    }
  ];

  constructor(
    private languageService: LanguageService,
    private elementRef: ElementRef
  ) {}

  ngOnInit() { 
  }

  ngAfterViewInit() {
    this.initializeSwiper();
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }

  private initializeSwiper() { 
    setTimeout(() => {
      const swiperContainer = this.elementRef.nativeElement.querySelector('swiper-container');
      if (swiperContainer) { 
        // Force RTL for Arabic
        swiperContainer.setAttribute('rtl', 'true');
        swiperContainer.setAttribute('dir', 'rtl');
        
        swiperContainer.addEventListener('slidechange', () => {
          this.updateActiveSlide();
        });
        
        this.updateActiveSlide();
      }
    }, 100);
  }

  private updateActiveSlide() {
    const swiperContainer = this.elementRef.nativeElement.querySelector('swiper-container');
    if (swiperContainer) {
      const slides = swiperContainer.querySelectorAll('swiper-slide');
      
      // Remove slick-active from all slides
      slides.forEach((slide: any) => {
        slide.classList.remove('slick-active');
      });
      
      // Add slick-active to active slide
      const activeSlide = swiperContainer.querySelector('swiper-slide.swiper-slide-active');
      if (activeSlide) {
        activeSlide.classList.add('slick-active');
      }
    }
  }
}
