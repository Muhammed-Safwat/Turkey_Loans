import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../shared/components/layout/header/header.component";
import { BannerComponent } from "../../shared/components/banner/banner.component";
import { TextFeatureComponent } from "../../shared/components/text-feature/text-feature.component";
import { BlockFeatureFourComponent } from "../../shared/components/block-feature-four/block-feature-four.component";
import { TextFeatureThreeComponent } from "../../shared/components/text-feature-three/text-feature-three.component";
import { BlockFeatureFiveComponent } from "../../shared/components/block-feature-five/block-feature-five.component";
import { FeedbackSectionComponent } from "../../shared/components/feedback-section/feedback-section.component";
import { FooterComponent } from "../../shared/components/layout/footer/footer.component";
import { ContactBannerComponent } from "../../shared/components/contact-banner/contact-banner.component";
import { ScrollService } from '../../shared/core/services/scroll.service';
import { WhatsAppService } from '../../shared/core/services/whatsapp.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    BannerComponent,
    TextFeatureComponent,
    BlockFeatureFourComponent,
    TextFeatureThreeComponent,
    BlockFeatureFiveComponent,
    FeedbackSectionComponent,
    FooterComponent,
    ContactBannerComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  contactBanner = {
    title: 'تواصل معنا الآن',
    description: 'احصل على استشارة مجانية حول تسديد قروضك والمتعثرات',
    phoneNumber: '+966561527263',
    email: 'info@abuturki-loans.com'
  };

  constructor(
    private scrollService: ScrollService,
    private whatsappService: WhatsAppService
  ) {}

  getContactBannerData(){
    return {
      ...this.contactBanner,
      whatsappNumber: this.whatsappService.getWhatsAppNumber(),
      whatsappMessage: this.whatsappService.getDefaultMessage()
    };
  }

  ngOnInit() {
    this.scrollService.scrollToTop();
  }
}
