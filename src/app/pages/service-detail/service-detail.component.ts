import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { FooterComponent } from '../../shared/components/layout/footer/footer.component';
import { InnerBannerComponent } from '../../shared/components/inner-banner/inner-banner.component';
import { ContactBannerComponent } from '../../shared/components/contact-banner/contact-banner.component';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, InnerBannerComponent, ContactBannerComponent],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.scss'
})
export class ServiceDetailComponent implements OnInit {
  serviceId: string = '';
  service: any = null;
   
  services = [
    {
      id: 'loan-repayment',
      title: 'تسديد القروض بكافة أنواعها',
      description: 'سداد القروض الشخصية والتأجيرية وقرض السيارة والسكن والزواج في جميع البنوك وجميع المناطق',
      icon: 'images/icon/icon_20.svg',
      bannerTitle: 'تسديد القروض بكافة أنواعها',
      bannerDescription: 'نقدم خدمات تسديد القروض بجميع أنواعها مع أفضل الشروط والأسعار',
      features: [
        'تسديد القروض الشخصية من جميع البنوك',
        'تسديد قروض السيارات والتأجيرية',
        'تسديد قروض السكن والزواج',
        'شروط ميسرة وسهلة',
        'خدمة سريعة ومضمونة',
        'تغطية جميع مناطق المملكة'
      ],
      benefits: [
        'توفير في المبالغ المدفوعة',
        'تسهيل الإجراءات',
        'خدمة عملاء متميزة',
        'ضمان الجودة والسرعة'
      ],
      requirements: [
        'الهوية الوطنية',
        'كشف الراتب',
        'إثبات السكن',
        'كشف حساب بنكي'
      ],
      process: [
        'التواصل معنا عبر الهاتف أو الواتساب',
        'تقديم المستندات المطلوبة',
        'دراسة الطلب وتقييمه',
        'الموافقة وتنفيذ العملية',
        'المتابعة والضمان'
      ]
    },
    {
      id: 'debt-settlement',
      title: 'تسديد المتعثرات وإيقاف الخدمات',
      description: 'سداد المتعثرات في سمه وسداد المديونيات المتعلقة وإيقاف سداد الخدمات',
      icon: 'images/icon/icon_21.svg',
      bannerTitle: 'تسديد المتعثرات وإيقاف الخدمات',
      bannerDescription: 'نساعدك في تسديد المتعثرات وإيقاف الخدمات بأفضل الطرق',
      features: [
        'تسديد المتعثرات في سمه',
        'سداد المديونيات المتعلقة',
        'إيقاف سداد الخدمات',
        'حلول مالية متكاملة',
        'استشارات مالية مجانية',
        'متابعة مستمرة'
      ],
      benefits: [
        'تحسين السجل الائتماني',
        'تجنب المشاكل القانونية',
        'توفير المال والجهد',
        'حلول سريعة وفعالة'
      ],
      requirements: [
        'الهوية الوطنية',
        'كشف المتعثرات',
        'كشف الراتب',
        'إثبات الحالة المالية'
      ],
      process: [
        'التقييم الأولي للحالة',
        'تقديم الحلول المناسبة',
        'التفاوض مع الجهات المعنية',
        'تنفيذ خطة السداد',
        'المتابعة والضمان'
      ]
    },
    {
      id: 'new-loans',
      title: 'استخراج قروض جديدة',
      description: 'استخراج قروض جديدة من كافة البنوك حتى 24 راتب وعرض بنكبن حتي 36 راتب',
      icon: 'images/icon/icon_22.svg',
      bannerTitle: 'استخراج قروض جديدة',
      bannerDescription: 'نساعدك في الحصول على أفضل القروض من جميع البنوك',
      features: [
        'قروض حتى 24 راتب',
        'عروض خاصة حتى 36 راتب',
        'جميع أنواع البنوك',
        'شروط تنافسية',
        'موافقة سريعة',
        'خدمة متميزة'
      ],
      benefits: [
        'أسعار فائدة منخفضة',
        'شروط ميسرة',
        'موافقة سريعة',
        'دعم كامل'
      ],
      requirements: [
        'الهوية الوطنية',
        'كشف الراتب',
        'إثبات السكن',
        'كشف حساب بنكي',
        'شهادة العمل'
      ],
      process: [
        'التقييم المالي',
        'اختيار أفضل العروض',
        'تقديم الطلب',
        'المتابعة مع البنك',
        'الموافقة والحصول على القرض'
      ]
    }
  ];

  contactBanner = {
    title: 'هل تحتاج مساعدة في هذا الخدمة؟',
    description: 'تواصل معنا الآن للحصول على استشارة مجانية',
    whatsappNumber: '+966501234567',
    phoneNumber: '+966501234567',
    email: 'info@turkeyloans.com',
    whatsappMessage: 'مرحباً، أريد الاستفسار عن هذه الخدمة'
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.serviceId = params['id'];
      this.service = this.services.find(s => s.id === this.serviceId);
    });
  }
}
