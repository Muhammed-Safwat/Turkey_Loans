import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../shared/components/layout/header/header.component";
 import { BlockFeatureFiveComponent } from "../../shared/components/block-feature-five/block-feature-five.component";
 import { FooterComponent } from "../../shared/components/layout/footer/footer.component";
import { ContactBannerComponent } from "../../shared/components/contact-banner/contact-banner.component";
import { ScrollService } from '../../shared/core/services/scroll.service';
import { WhatsAppService } from '../../shared/core/services/whatsapp.service';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, HeaderComponent, BlockFeatureFiveComponent, FooterComponent, ContactBannerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
    contactBanner = {
    title: 'تواصل معنا الآن',
    description: 'احصل على استشارة مجانية حول تسديد قروضك والمتعثرات',
    phoneNumber: '+966561527263',
    email: 'info@abuturki-loans.com'
  };

  getContactBannerData(){
    return {
      ...this.contactBanner,
      whatsappNumber: this.whatsappService.getWhatsAppNumber(),
      whatsappMessage: this.whatsappService.getDefaultMessage()
    };
  }

  constructor(
    private scrollService: ScrollService,
    private whatsappService: WhatsAppService
  ) {}

  ngOnInit() {
    this.scrollService.scrollToTop();
  }
}
