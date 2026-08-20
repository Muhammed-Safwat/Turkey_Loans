import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { FooterComponent } from '../../shared/components/layout/footer/footer.component';
import { InnerBannerComponent } from '../../shared/components/inner-banner/inner-banner.component';
import { ContactBannerComponent } from '../../shared/components/contact-banner/contact-banner.component';
import { ScrollService } from '../../shared/core/services/scroll.service';
import { WhatsAppService } from '../../shared/core/services/whatsapp.service';
import { SeoService } from '../../shared/core/services/seo.service';

@Component({
  selector: 'app-tasded-qurod',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent, InnerBannerComponent, ContactBannerComponent],
  templateUrl: './tasded-qurod.component.html',
  styleUrl: './tasded-qurod.component.scss'
})
export class TasdedQurodComponent implements OnInit {

  contactBanner = {
    title: 'هل تحتاج مساعدة في تسديد قروضك؟',
    description: 'تواصل معنا الآن للحصول على استشارة مجانية في تسديد القروض',
    phoneNumber: '+966561527263',
    email: 'info@tasdedqorod.com'
  };

  features = [
    'تسديد القروض الشخصية من جميع البنوك السعودية',
    'تسديد قروض السيارات والتأجيرية',
    'تسديد قروض السكن والزواج',
    'تسديد قروض العسكريين والمدنيين',
    'شروط ميسرة وإجراءات سريعة',
    'خدمة سريعة ومضمونة في جميع مناطق المملكة'
  ];

  banks = [
    'البنك الأهلي التجاري', 'بنك الراجحي', 'بنك الرياض', 'بنك سامبا',
    'بنك البلاد', 'بنك الجزيرة', 'بنك SABB', 'بنك الإنماء'
  ];

  process = [
    { step: 1, title: 'التواصل معنا', desc: 'تواصل معنا عبر الهاتف أو الواتساب لمعرفة تفاصيل خدمة تسديد القروض' },
    { step: 2, title: 'تقديم المستندات', desc: 'نطلب منك الهوية الوطنية وكشف الراتب وكشف القروض الحالية' },
    { step: 3, title: 'دراسة الحالة', desc: 'نقيّم وضعك المالي ونقدم لك أفضل خطة لتسديد القروض' },
    { step: 4, title: 'التنفيذ', desc: 'نباشر في تسديد القروض بأسرع وقت ممكن مع متابعة كاملة' },
  ];

  faqs = [
    {
      q: 'ما هي خدمة تسديد القروض؟',
      a: 'خدمة تسديد القروض هي خدمة مالية متخصصة تساعدك في سداد قروضك البنكية بأسهل الطرق وأفضل الشروط، سواء كانت قروضاً شخصية أو عقارية أو سيارات.'
    },
    {
      q: 'كم يستغرق تسديد القرض؟',
      a: 'تسديد القروض يستغرق من 1 إلى 3 أيام عمل، وذلك بعد تقديم جميع المستندات المطلوبة والموافقة على الخطة.'
    },
    {
      q: 'هل يمكن تسديد قروض متعددة في نفس الوقت؟',
      a: 'نعم، نستطيع تسديد أكثر من قرض في نفس الوقت وإعادة هيكلة ديونك بشكل كامل للحصول على قسط شهري مناسب.'
    },
    {
      q: 'ما هي البنوك التي تتعاملون معها في تسديد القروض؟',
      a: 'نتعامل مع جميع البنوك السعودية المعتمدة مثل البنك الأهلي، الراجحي، الرياض، سامبا، البلاد، الجزيرة، SABB، الإنماء وغيرها.'
    },
    {
      q: 'هل الخدمة متاحة خارج الرياض؟',
      a: 'نعم، خدمة تسديد القروض متاحة في جميع مناطق المملكة العربية السعودية بما فيها جدة، مكة، الدمام، الخبر، المدينة المنورة وغيرها.'
    }
  ];

  constructor(
    private scrollService: ScrollService,
    private whatsappService: WhatsAppService,
    private seoService: SeoService
  ) {}

  getContactBannerData() {
    return {
      ...this.contactBanner,
      whatsappNumber: this.whatsappService.getWhatsAppNumber(),
      whatsappMessage: 'مرحباً، أريد الاستفسار عن خدمة تسديد القروض'
    };
  }

  ngOnInit(): void {
    this.scrollService.scrollToTop();
    this.seoService.updatePageSEO({
      title: 'تسديد قروض في السعودية | أبو تركي للحلول المالية | استشارة مجانية',
      description: 'تسديد قروض شخصية وعقارية وسيارات من جميع البنوك السعودية ✅ شروط ميسرة وخدمة سريعة ✅ تغطية جميع مناطق المملكة ✅ تواصل الآن +966561527263',
      keywords: 'تسديد قروض, تسديد القروض, تسديد قروض الراجحي, تسديد قروض شخصية, تسديد قروض السيارات, تسديد قروض البنك الأهلي, تسديد قروض في السعودية'
    });
    this.seoService.setCanonical('https://www.tasdedqorod.com/تسديد-قروض');
    this.seoService.addFaqSchema(this.faqs);
  }
}
