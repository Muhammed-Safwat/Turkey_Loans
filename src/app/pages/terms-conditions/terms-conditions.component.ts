import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../../shared/components/layout/footer/footer.component";
import { HeaderComponent } from "../../shared/components/layout/header/header.component";
import { SeoService } from '../../shared/core/services/seo.service';

@Component({
  selector: 'app-terms-conditions',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent, HeaderComponent],
  templateUrl: './terms-conditions.component.html',
  styleUrl: './terms-conditions.component.scss'
})
export class TermsConditionsComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updatePageSEO({
      title: 'الشروط والأحكام | أبو تركي لتسديد القروض',
      description: 'الشروط والأحكام الخاصة باستخدام موقع أبو تركي لتسديد القروض والمتعثرات في المملكة العربية السعودية'
    });
    this.seoService.setCanonical('https://www.tasdedqorod.com/terms-conditions');
  }

  getCurrentDate(): string {
    return new Date().toLocaleDateString('ar-SA');
  }

}
