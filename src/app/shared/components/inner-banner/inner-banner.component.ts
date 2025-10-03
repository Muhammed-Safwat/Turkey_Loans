import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inner-banner',
  imports: [CommonModule],
  templateUrl: './inner-banner.component.html',
  styleUrl: './inner-banner.component.scss'
})
export class InnerBannerComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() breadcrumbItems: { label: string; link?: string }[] = [];
  @Input() backgroundImage?: string;
  @Input() showShapes: boolean = true;
}
