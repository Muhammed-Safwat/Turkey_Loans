import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PartnerSliderComponent } from '../partner-slider/partner-slider.component';
import { WhatsAppService } from '../../core/services/whatsapp.service';

@Component({
  selector: 'app-banner',
  imports: [FormsModule, PartnerSliderComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  messageText: string = '';

  constructor(private whatsappService: WhatsAppService) {
    this.messageText = this.whatsappService.getDefaultMessage();
  }

  sendWhatsAppMessage(): void {
    try {
      const message = this.messageText || this.whatsappService.getDefaultMessage();
      const whatsappUrl = this.whatsappService.getWhatsAppLinkWithCustomMessage(message);

      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Error opening WhatsApp:', error);
      const fallbackUrl = this.whatsappService.getWhatsAppLinkWithoutMessage();
      window.open(fallbackUrl, '_blank', 'noopener,noreferrer');
    }
  }
}
