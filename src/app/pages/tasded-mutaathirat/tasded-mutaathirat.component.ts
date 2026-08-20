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
  selector: 'app-tasded-mutaathirat',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent, InnerBannerComponent, ContactBannerComponent],
  templateUrl: './tasded-mutaathirat.component.html',
  styleUrl: './tasded-mutaathirat.component.scss'
})
export class TasdedMutaathiratComponent implements OnInit {

  contactBanner = {
    title: 'تخلص من المتعثرات الآن',
    description: 'تواصل معنا للحصول على استشارة مجانية وحلول فورية لتسديد متعثراتك',
    phoneNumber: '+966561527263',
    email: 'info@tasdedqorod.com'
  };

  services = [
    { icon: 'bi-graph-down-arrow', title: 'تسديد المتعثرات في سمة', desc: 'نساعدك في تسوية المتعثرات المسجلة في سمة وتحسين سجلك الائتماني' },
    { icon: 'bi-credit-card-2-back', title: 'سداد المديونيات البنكية', desc: 'تسديد المديونيات المتعلقة بالبنوك والمؤسسات المالية بأفضل الشروط' },
    { icon: 'bi-slash-circle', title: 'إيقاف الخدمات وإعادة تفعيلها', desc: 'نتعامل مع حالات إيقاف الخدمات الحكومية بسبب الديون ونساعدك في إعادة تفعيلها' },
    { icon: 'bi-bank', title: 'التفاوض مع البنوك', desc: 'نتفاوض مع البنوك والجهات الدائنة للحصول على أفضل شروط تسوية' },
    { icon: 'bi-shield-check', title: 'تحسين التصنيف الائتماني', desc: 'بعد تسديد المتعثرات نساعدك في إعادة بناء سجلك الائتماني' },
    { icon: 'bi-calendar-check', title: 'خطط سداد مرنة', desc: 'نضع لك خطة سداد مرنة تتناسب مع دخلك الشهري وظروفك المالية' },
  ];

  steps = [
    { n: 1, title: 'التشخيص المجاني', desc: 'نقوم بمراجعة كاملة لوضعك الائتماني وحجم المتعثرات' },
    { n: 2, title: 'وضع خطة العلاج', desc: 'نضع خطة متكاملة لتسديد المتعثرات بالترتيب الأنسب' },
    { n: 3, title: 'التفاوض', desc: 'نتفاوض مع الجهات الدائنة للحصول على أفضل شروط التسوية' },
    { n: 4, title: 'التنفيذ والمتابعة', desc: 'نُنفذ خطة السداد ونتابع معك حتى الحصول على شهادة براءة الذمة' },
  ];

  faqs = [
    {
      q: 'ما هي المتعثرات المالية؟',
      a: 'المتعثرات المالية هي الديون والالتزامات التي لم يُسدَّد عنها في مواعيدها، مما يؤدي إلى تسجيلها في سمة وقد يُسبب إيقاف بعض الخدمات الحكومية.'
    },
    {
      q: 'كيف يؤثر تسديد المتعثرات على سمة؟',
      a: 'تسديد المتعثرات يُحسّن تدريجياً تصنيفك في سمة. بعض البنوك تُحدّث السجل فور السداد، وبعضها يستغرق 30-90 يوماً. نساعدك في متابعة هذا الإجراء.'
    },
    {
      q: 'هل يمكن تسديد المتعثرات بالتقسيط؟',
      a: 'نعم، في كثير من الحالات يمكن الاتفاق مع الجهات الدائنة على جدول تقسيط مريح. نتولى التفاوض عنك للحصول على أفضل الشروط.'
    },
    {
      q: 'ما هي الوثائق المطلوبة لتسديد المتعثرات؟',
      a: 'عادةً تحتاج إلى: الهوية الوطنية، كشف المتعثرات من سمة، أي كشوفات تتعلق بالديون، وكشف الراتب أو ما يُثبت دخلك.'
    },
    {
      q: 'كم يستغرق تسوية المتعثرات؟',
      a: 'يعتمد الوقت على حجم المتعثرات وعدد الجهات المعنية، لكننا نُنجز عملية التسوية عادةً في 3-7 أيام عمل.'
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
      whatsappMessage: 'مرحباً، أريد الاستفسار عن تسديد المتعثرات'
    };
  }

  ngOnInit(): void {
    this.scrollService.scrollToTop();
    this.seoService.updatePageSEO({
      title: 'تسديد المتعثرات في السعودية | أبو تركي | حل مشاكل سمة وإيقاف الخدمات',
      description: 'تسديد المتعثرات وتحسين سمة وإيقاف الخدمات في السعودية ✅ حلول سريعة للمديونيات البنكية ✅ تفاوض مع البنوك ✅ استشارة مجانية +966561527263',
      keywords: 'تسديد المتعثرات, تسوية المتعثرات, سمة, إيقاف الخدمات, المديونيات, تحسين سمة, تسديد ديون, المتعثرات المالية في السعودية'
    });
    this.seoService.setCanonical('https://www.tasdedqorod.com/تسديد-المتعثرات');
    this.seoService.addFaqSchema(this.faqs);
  }
}
