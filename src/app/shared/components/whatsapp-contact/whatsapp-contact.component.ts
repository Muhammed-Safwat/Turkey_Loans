import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WhatsAppService } from '../../core/services/whatsapp.service';

@Component({
  selector: 'app-whatsapp-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-contact.component.html',
  styleUrl: './whatsapp-contact.component.scss'
})
export class WhatsappContactComponent implements OnInit {
  showWelcomeMessage = false;
  showPulse = true;

  constructor(public whatsappService: WhatsAppService) {}

  ngOnInit() {
    setTimeout(() => {
      this.showWelcomeMessage = true;
    }, 3000);

    setTimeout(() => {
      this.showWelcomeMessage = false;
    }, 10000);

    setTimeout(() => {
      this.showPulse = false;
    }, 15000);
  }

  openWhatsApp() {
    const whatsappUrl = this.whatsappService.getWhatsAppLink();
    window.open(whatsappUrl, '_blank');
  }

  closeWelcomeMessage() {
    this.showWelcomeMessage = false;
  }
}
