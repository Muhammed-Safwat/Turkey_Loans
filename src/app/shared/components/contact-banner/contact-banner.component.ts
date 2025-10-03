import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-banner',
  imports: [CommonModule],
  templateUrl: './contact-banner.component.html',
  styleUrl: './contact-banner.component.scss'
})
export class ContactBannerComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() whatsappNumber: string = '';
  @Input() phoneNumber: string = '';
  @Input() email: string = '';
  @Input() whatsappMessage: string = '';
  @Input() isDarkBackground: boolean = false;
}
