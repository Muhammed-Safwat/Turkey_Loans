import { Component } from '@angular/core';
import { PartnerSliderComponent } from '../partner-slider/partner-slider.component';

@Component({
  selector: 'app-banner',
  imports: [PartnerSliderComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

}
