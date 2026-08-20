import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../../shared/components/layout/footer/footer.component";
import { HeaderComponent } from "../../shared/components/layout/header/header.component";
import { ContactInfoComponent } from "../../shared/components/contact-info/contact-info.component";
import { WhatsappContactComponent } from "../../shared/components/whatsapp-contact/whatsapp-contact.component";
import { ContactBannerComponent } from "../../shared/components/contact-banner/contact-banner.component";
import { WhatsAppService } from '../../shared/core/services/whatsapp.service';
import { SeoService } from '../../shared/core/services/seo.service';

@Component({
  selector: 'app-contact-us',
  imports: [FooterComponent, HeaderComponent, ContactInfoComponent, WhatsappContactComponent, ContactBannerComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements OnInit {
  contactBanner = {
    title: 'تواصل معنا الآن',
    description: 'احصل على استشارة مجانية حول تسديد قروضك والمتعثرات',
    phoneNumber: '+966561527263',
    email: 'info@abuturki-loans.com'
  };

  constructor(
    private whatsappService: WhatsAppService,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.seoService.updatePageSEO({
      title: 'تواصل معنا | أبو تركي لتسديد القروض | استشارة مجانية',
      description: 'تواصل مع فريق أبو تركي للحصول على استشارة مجانية بخصوص تسديد القروض والمتعثرات ✅ خدمة سريعة ✅ اتصل الآن +966561527263',
      keywords: 'تواصل معنا, اتصل بنا, استشارة مجانية قروض, أبو تركي'
    });
    this.seoService.setCanonical('https://www.tasdedqorod.com/contact');
  }

  getContactBannerData(){
    return {
      ...this.contactBanner,
      whatsappNumber: this.whatsappService.getWhatsAppNumber(),
      whatsappMessage: this.whatsappService.getDefaultMessage()
    };
  }
}
