import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/components/layout/footer/footer.component";
import { HeaderComponent } from "../../shared/components/layout/header/header.component";
import { ContactInfoComponent } from "../../shared/components/contact-info/contact-info.component";
import { WhatsappContactComponent } from "../../shared/components/whatsapp-contact/whatsapp-contact.component";
import { ContactBannerComponent } from "../../shared/components/contact-banner/contact-banner.component";

@Component({
  selector: 'app-contact-us',
  imports: [FooterComponent, HeaderComponent, ContactInfoComponent, WhatsappContactComponent, ContactBannerComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  contactBanner = {
    title: 'تواصل معنا الآن',
    description: 'احصل على استشارة مجانية حول تسديد قروضك والمتعثرات',
    whatsappNumber: '966534970654',
    phoneNumber: '+966561527263',
    email: 'info@abuturki-loans.com',
    whatsappMessage: 'مرحباً، أريد الاستفسار عن خدمات تسديد القروض والمتعثرات'
  };

  getContactBannerData(){
    return this.contactBanner;
  }
}
