import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WhatsAppService } from '../../../core/services/whatsapp.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private whatsappService: WhatsAppService) {}

  openWhatsApp(): void {
    try {
      const message = this.whatsappService.getDefaultMessage();
      const whatsappUrl = this.whatsappService.getWhatsAppLinkWithCustomMessage(message);

      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Error opening WhatsApp:', error);
      const fallbackUrl = this.whatsappService.getWhatsAppLinkWithoutMessage();
      window.open(fallbackUrl, '_blank', 'noopener,noreferrer');
    }
  }
}
