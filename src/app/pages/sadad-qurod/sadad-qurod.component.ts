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
  selector: 'app-sadad-qurod',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent, InnerBannerComponent, ContactBannerComponent],
  templateUrl: './sadad-qurod.component.html',
  styleUrl: './sadad-qurod.component.scss'
})
export class SadadQurodComponent implements OnInit {

  contactBanner = {
    title: 'تواصل معنا لسداد قروضك الآن',
    description: 'احصل على استشارة مجانية وابدأ رحلة التخلص من ديونك اليوم',
    phoneNumber: '+966561527263',
    email: 'info@tasdedqorod.com'
  };

  advantages = [
    { icon: 'bi-shield-check', title: 'ضمان التنفيذ', desc: 'نضمن لك سداد قروضك بأسرع وقت وبأعلى معايير الجودة' },
    { icon: 'bi-clock', title: 'سرعة الإنجاز', desc: 'نُنجز عملية سداد القروض في غضون 1-3 أيام عمل فقط' },
    { icon: 'bi-chat-dots', title: 'استشارة مجانية', desc: 'نقدم لك استشارة مالية مجانية قبل البدء في سداد قروضك' },
    { icon: 'bi-geo-alt', title: 'تغطية شاملة', desc: 'نخدمك في جميع مناطق المملكة العربية السعودية' },
  ];

  loanTypes = [
    { title: 'سداد القروض الشخصية', desc: 'سداد القروض الشخصية من جميع البنوك السعودية بأفضل الشروط' },
    { title: 'سداد قروض السيارات', desc: 'سداد التزامات قروض السيارات والتأجير التمويلي' },
    { title: 'سداد قروض السكن', desc: 'سداد قروض الإسكان والرهن العقاري بحلول مرنة' },
    { title: 'سداد قروض الزواج', desc: 'سداد قروض الزواج وإعادة هيكلتها لتخفيف العبء' },
    { title: 'سداد قروض العسكريين', desc: 'خدمات متخصصة في سداد قروض العسكريين والمدنيين الحكوميين' },
    { title: 'سداد قروض المؤسسات', desc: 'سداد قروض المؤسسات الصغيرة والمتوسطة' },
  ];

  requirements = [
    'الهوية الوطنية السارية',
    'كشف الراتب الأخير',
    'كشف القروض الحالية',
    'إثبات السكن',
    'كشف الحساب البنكي (3 أشهر)',
  ];

  faqs = [
    {
      q: 'ما الفرق بين سداد القروض وإعادة التمويل؟',
      a: 'سداد القروض يعني إنهاء التزام القرض كلياً أو جزئياً، بينما إعادة التمويل تعني استبدال القرض الحالي بقرض جديد بشروط أفضل. نحن نقدم الخدمتين بحسب وضعك المالي.'
    },
    {
      q: 'كيف يتم سداد القروض لغير القادرين على الدفع الكامل؟',
      a: 'نقدم حلولاً لإعادة هيكلة الديون والتفاوض مع البنوك للحصول على جدول سداد مريح يناسب دخلك الشهري.'
    },
    {
      q: 'هل يمكن سداد القرض قبل موعده؟',
      a: 'نعم، يمكن السداد المبكر للقروض، وقد يُوفر عليك مبالغ كبيرة من الفوائد. نساعدك في حساب وفورات السداد المبكر وإتمام العملية.'
    },
    {
      q: 'هل تتعاملون مع جميع البنوك السعودية؟',
      a: 'نعم، نتعامل مع جميع البنوك والمؤسسات المالية المعتمدة في المملكة العربية السعودية.'
    },
    {
      q: 'ما هي تكلفة خدمة سداد القروض؟',
      a: 'نقدم استشارة أولية مجانية، ويتم الاتفاق على أتعاب الخدمة بشفافية تامة قبل بدء أي إجراء.'
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
      whatsappMessage: 'مرحباً، أريد الاستفسار عن سداد القروض'
    };
  }

  ngOnInit(): void {
    this.scrollService.scrollToTop();
    this.seoService.updatePageSEO({
      title: 'سداد قروض في السعودية | أبو تركي | حلول مالية متخصصة',
      description: 'سداد قروض شخصية وعقارية وسيارات في جميع أنحاء المملكة ✅ استشارة مجانية ✅ خبرة واسعة مع جميع البنوك السعودية ✅ اتصل الآن +966561527263',
      keywords: 'سداد قروض, سداد القروض, سداد قروض شخصية, سداد قروض السيارات, سداد قروض السكن, سداد قروض في السعودية, سداد مبكر للقروض'
    });
    this.seoService.setCanonical('https://www.tasdedqorod.com/سداد-قروض');
    this.seoService.setBreadcrumbs([
      { label: 'الرئيسية', url: 'https://www.tasdedqorod.com/' },
      { label: 'سداد قروض', url: 'https://www.tasdedqorod.com/سداد-قروض' }
    ]);
    this.seoService.addFaqSchema(this.faqs);
  }
}
