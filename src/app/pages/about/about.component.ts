import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../shared/components/layout/header/header.component";
 import { BlockFeatureFiveComponent } from "../../shared/components/block-feature-five/block-feature-five.component";
 import { FooterComponent } from "../../shared/components/layout/footer/footer.component";
import { ContactBannerComponent } from "../../shared/components/contact-banner/contact-banner.component";
import { ScrollService } from '../../shared/core/services/scroll.service';


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
    whatsappNumber: '966534970654',
    phoneNumber: '+966561527263',
    email: 'info@abuturki-loans.com',
    whatsappMessage: 'مرحباً، أريد الاستفسار عن خدمات تسديد القروض والمتعثرات'
  };

  getContactBannerData(){
    return this.contactBanner;
  }

  constructor(private scrollService: ScrollService) {}

  ngOnInit() {
    this.scrollService.scrollToTop();
  }
}
