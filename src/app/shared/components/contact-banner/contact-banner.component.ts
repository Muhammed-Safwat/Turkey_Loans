import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsAppService } from '../../core/services/whatsapp.service';

@Component({
  selector: 'app-contact-banner',
  imports: [CommonModule],
  templateUrl: './contact-banner.component.html',
  styleUrl: './contact-banner.component.scss'
})
export class ContactBannerComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() phoneNumber: string = '';
  @Input() email: string = '';
  @Input() whatsappNumber: string = '';
  @Input() whatsappMessage: string = '';
  @Input() isDarkBackground: boolean = false;

  constructor(public whatsappService: WhatsAppService) {}

  getWhatsAppLink(): string {
    if (this.whatsappNumber && this.whatsappMessage) {
      const encodedMessage = encodeURIComponent(this.whatsappMessage);
      return `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
    }
    return this.whatsappService.getWhatsAppLink();
  }
}
