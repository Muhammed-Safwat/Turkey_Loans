import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { FooterComponent } from '../../shared/components/layout/footer/footer.component';
import { InnerBannerComponent } from '../../shared/components/inner-banner/inner-banner.component';
import { ContactBannerComponent } from '../../shared/components/contact-banner/contact-banner.component';
import { ScrollService } from '../../shared/core/services/scroll.service';

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
      icon: '',
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
      icon: '',
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
      icon: '',
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
    },
    {
      id: 'refinancing',
      title: 'إعادة التمويل',
      description: 'نسهل لك إعادة التمويل لجميع البنوك وتمويل لأي بنك وتمويل دون تحويل الراتب',
      icon: '',
      bannerTitle: 'إعادة التمويل',
      bannerDescription: 'نساعدك في إعادة تمويل قروضك بأفضل الشروط والأسعار',
      features: [
        'إعادة التمويل لجميع البنوك',
        'تمويل دون تحويل الراتب',
        'شروط ميسرة ومفيدة',
        'توفير في المبالغ المدفوعة',
        'خدمة سريعة ومضمونة',
        'استشارات مالية مجانية'
      ],
      benefits: [
        'تخفيض معدل الفائدة',
        'توفير المال',
        'تسهيل الإجراءات',
        'مرونة في السداد'
      ],
      requirements: [
        'الهوية الوطنية',
        'كشف الراتب',
        'كشف القروض الحالية',
        'إثبات السكن'
      ],
      process: [
        'تقييم القروض الحالية',
        'اختيار أفضل العروض',
        'تقديم الطلب',
        'المتابعة مع البنك',
        'تنفيذ إعادة التمويل'
      ]
    },
    {
      id: 'small-business-loans',
      title: 'قروض المؤسسات الصغيرة',
      description: 'استخراج قروض المؤسسات الصغيرة مع ملاءة مالية قوية ولا نؤجل العميل',
      icon: '',
      bannerTitle: 'قروض المؤسسات الصغيرة',
      bannerDescription: 'نساعد المؤسسات الصغيرة في الحصول على التمويل المناسب',
      features: [
        'قروض للمؤسسات الصغيرة',
        'ملاءة مالية قوية',
        'موافقة سريعة',
        'شروط ميسرة',
        'دعم كامل',
        'لا نؤجل العميل'
      ],
      benefits: [
        'تمويل مناسب للنمو',
        'شروط مرنة',
        'دعم استشاري',
        'موافقة سريعة'
      ],
      requirements: [
        'سجل تجاري',
        'كشف مالي للمؤسسة',
        'هوية المالك',
        'إثبات النشاط التجاري'
      ],
      process: [
        'تقييم المؤسسة',
        'اختيار أفضل العروض',
        'تقديم الطلب',
        'المتابعة مع البنك',
        'الموافقة والحصول على التمويل'
      ]
    },
    {
      id: 'salary-transfer',
      title: 'تحويل الراتب',
      description: 'تحويل الراتب من أي بنك لبنك آخر وتمويل لتسهيل دفعة العقار',
      icon: '',
      bannerTitle: 'تحويل الراتب',
      bannerDescription: 'نساعدك في تحويل راتبك والحصول على أفضل العروض',
      features: [
        'تحويل الراتب بين البنوك',
        'تمويل لتسهيل دفعة العقار',
        'عروض تنافسية',
        'خدمة سريعة',
        'استشارات مجانية',
        'متابعة مستمرة'
      ],
      benefits: [
        'عروض أفضل',
        'توفير المال',
        'خدمة متميزة',
        'دعم كامل'
      ],
      requirements: [
        'الهوية الوطنية',
        'كشف الراتب',
        'إثبات السكن',
        'كشف حساب بنكي'
      ],
      process: [
        'تقييم العروض المتاحة',
        'اختيار أفضل البنوك',
        'تقديم الطلب',
        'المتابعة مع البنك',
        'تنفيذ التحويل'
      ]
    },
    {
      id: 'visa-companies-payment',
      title: 'سداد الفيزا والشركات',
      description: 'سداد الفيزا وإمكان والنايفات وكل شركات التكميلي',
      icon: '',
      bannerTitle: 'سداد الفيزا والشركات',
      bannerDescription: 'نساعدك في سداد جميع التزاماتك المالية مع الشركات',
      features: [
        'سداد الفيزا',
        'سداد إمكان والنايفات',
        'سداد شركات التكميلي',
        'حلول مالية متكاملة',
        'توفير في المبالغ',
        'خدمة سريعة'
      ],
      benefits: [
        'توفير المال',
        'تجنب الرسوم الإضافية',
        'حلول سريعة',
        'دعم كامل'
      ],
      requirements: [
        'الهوية الوطنية',
        'كشف الراتب',
        'كشف الفيزا',
        'إثبات السكن'
      ],
      process: [
        'تقييم المديونيات',
        'اختيار أفضل الحلول',
        'التفاوض مع الشركات',
        'تنفيذ خطة السداد',
        'المتابعة والضمان'
      ]
    },
    {
      id: 'military-civilian-loans',
      title: 'قروض العسكريين والمدنيين',
      description: 'تسديد قروض العسكريين والمدنيين العاملين بالحكومة والشركات المعتمدة',
      icon: '',
      bannerTitle: 'قروض العسكريين والمدنيين',
      bannerDescription: 'خدمات مخصصة للعسكريين والموظفين الحكوميين',
      features: [
        'قروض للعسكريين',
        'قروض للموظفين الحكوميين',
        'شروط ميسرة خاصة',
        'عروض تنافسية',
        'خدمة متميزة',
        'دعم كامل'
      ],
      benefits: [
        'شروط خاصة',
        'عروض متميزة',
        'خدمة سريعة',
        'دعم متخصص'
      ],
      requirements: [
        'الهوية الوطنية',
        'كشف الراتب',
        'شهادة العمل',
        'إثبات السكن'
      ],
      process: [
        'تقييم الطلب',
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
    whatsappNumber: '+966561527263',
    phoneNumber: '+966561527263',
    email: 'info@turkeyloans.com',
    whatsappMessage: 'مرحباً، أريد الاستفسار عن هذه الخدمة'
  };

  constructor(
    private route: ActivatedRoute,
    private scrollService: ScrollService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.serviceId = params['id'];
      this.service = this.services.find(s => s.id === this.serviceId);
      // Scroll to top when service changes
      this.scrollService.scrollToTop();
    });
  }
}
