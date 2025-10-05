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
    whatsappNumber: '966534970654',
    phoneNumber: '+966534970654',
    email: 'info@abuturki-loans.com',
    whatsappMessage: 'مرحباً، أريد الاستفسار عن خدمات تسديد القروض والمتعثرات'
  };

  constructor(private scrollService: ScrollService) {}

  getContactBannerData(){
    return this.contactBanner;
  }
  
  ngOnInit() { 
    this.scrollService.scrollToTop();
  }
}
