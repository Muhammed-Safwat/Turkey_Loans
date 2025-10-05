import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InnerBannerComponent } from '../../shared/components/inner-banner/inner-banner.component';
import { HeaderComponent } from "../../shared/components/layout/header/header.component";
import { BankingSolutionsComponent } from '../../shared/components/banking-solutions/banking-solutions.component';
import { ClientStatsComponent } from '../../shared/components/client-stats/client-stats.component';
import { IslamicComplianceComponent } from '../../shared/components/islamic-compliance/islamic-compliance.component';
import { CoverageAreasComponent } from '../../shared/components/coverage-areas/coverage-areas.component';
import { ContactBannerComponent } from '../../shared/components/contact-banner/contact-banner.component';
import { FooterComponent } from "../../shared/components/layout/footer/footer.component";
import { ScrollService } from '../../shared/core/services/scroll.service';

@Component({
  selector: 'app-services',
  imports: [CommonModule, HeaderComponent, InnerBannerComponent, FooterComponent, BankingSolutionsComponent, ClientStatsComponent, IslamicComplianceComponent, CoverageAreasComponent, ContactBannerComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
    this.scrollService.scrollToTop();
  }

  services = [
    {
      id: 'loan-repayment',
      title: 'تسديد القروض بكافة أنواعها',
      description: 'سداد القروض الشخصية والتأجيرية وقرض السيارة والسكن والزواج في جميع البنوك وجميع المناطق',
      icon: '',
      active: false
    },
    {
      id: 'debt-settlement',
      title: 'تسديد المتعثرات وإيقاف الخدمات',
      description: 'سداد المتعثرات في سمه وسداد المديونيات المتعلقة وإيقاف سداد الخدمات',
      icon: '',
      active: true
    },
    {
      id: 'new-loans',
      title: 'استخراج قروض جديدة',
      description: 'استخراج قروض جديدة من كافة البنوك حتى 24 راتب وعرض بنكبن حتي 36 راتب',
      icon: '',
      active: false
    },
    {
      id: 'refinancing',
      title: 'إعادة التمويل',
      description: 'نسهل لك إعادة التمويل لجميع البنوك وتمويل لأي بنك وتمويل دون تحويل الراتب',
      icon: '',
      active: false
    },
    {
      id: 'small-business-loans',
      title: 'قروض المؤسسات الصغيرة',
      description: 'استخراج قروض المؤسسات الصغيرة مع ملاءة مالية قوية ولا نؤجل العميل',
      icon: '',
      active: false
    },
    {
      id: 'salary-transfer',
      title: 'تحويل الراتب',
      description: 'تحويل الراتب من أي بنك لبنك آخر وتمويل لتسهيل دفعة العقار',
      icon: '',
      active: false
    },
    {
      id: 'visa-companies-payment',
      title: 'سداد الفيزا والشركات',
      description: 'سداد الفيزا وإمكان والنايفات وكل شركات التكميلي',
      icon: '',
      active: false
    },
    {
      id: 'military-civilian-loans',
      title: 'قروض العسكريين والمدنيين',
      description: 'تسديد قروض العسكريين والمدنيين العاملين بالحكومة والشركات المعتمدة',
      icon: '',
      active: false
    }
  ];

  banks = [
    {
      name: 'الراجحي',
      description: 'بنك الراجحي - أكبر بنك إسلامي في العالم'
    },
    {
      name: 'الأهلي',
      description: 'البنك الأهلي السعودي - رائد الخدمات المصرفية'
    },
    {
      name: 'الرياض',
      description: 'بنك الرياض - خدمات مصرفية شاملة'
    }
  ];

  coverageAreas = [
    {
      region: 'المنطقة الوسطى',
      cities: 'الرياض - بريدة - القصيم - الطائف - محايل - أحد المسارحة'
    },
    {
      region: 'المنطقة الغربية',
      cities: 'جدة - مكة المكرمة - المدينة المنورة - ينبع'
    },
    {
      region: 'المنطقة الشرقية',
      cities: 'الدمام - الخبر - الأحساء - القطيف - الجبيل'
    },
    {
      region: 'المناطق الجنوبية والشمالية',
      cities: 'أبها - جازان - تبوك - سكاكا - الجوف'
    }
  ];

  // Inner banner data
  bannerData = {
    title: 'خدمات تسديد القروض والمتعثرات',
    description: 'نحن مجموعة مكاتب تسديد قروض ومتعثرات وسداد إيقاف الخدمات ومتعثرات سمه واستخراج قرض جديد بأعلى تمويل',
    breadcrumbItems: [
      { label: 'الرئيسية', link: 'index.html' },
      { label: 'خدماتنا' }
    ]
  };

  // Islamic compliance statement
  islamicCompliance = {
    title: 'التزامنا بالمبادئ الإسلامية',
    description: 'جميع خدماتنا تكون وفق مبادئ الشريعة الإسلامية ولا نتعامل مع أي طريقة بها ربا',
    icon: ''
  };

  // Additional service features
  additionalFeatures = [
    'تسديد أي مبلغ مهما بلغ حجمه وتسديد القروض التكميلية واستخراج قرض إضافي',
    'خدماتنا مميزة لأنها تقدم القروض الصغيرة والكبيرة حيث لدينا ملاءة مالية ولا نؤجل العميل',
    'نقدم تمويل لأي بنك وتمويل دون تحويل الراتب',
    'نسهل لك إعادة التمويل لجميع البنوك'
  ];

  // Client stats data
  clientStats = {
    title: '15,000+ عميل يثقون في خدماتنا',
    description: 'نحن مجموعة مكاتب متخصصة في تسديد القروض والمتعثرات مع انتشار قوي في جميع أنحاء المملكة العربية السعودية',
    clientCount: '15',
    clientLabel: 'عميل راضي',
    amountCount: '500',
    amountLabel: 'ريال تم تسديده'
  };

  // Contact banner data
  contactBanner = {
    title: 'تواصل معنا الآن',
    description: 'احصل على استشارة مجانية حول تسديد قروضك والمتعثرات',
    whatsappNumber: '966534970654',
    phoneNumber: '+966534970654',
    email: 'info@abuturki-loans.com',
    whatsappMessage: 'مرحباً، أريد الاستفسار عن خدمات تسديد القروض والمتعثرات'
  };


}
