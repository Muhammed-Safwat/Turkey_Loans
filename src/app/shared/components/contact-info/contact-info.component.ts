import { Component } from '@angular/core';
import { WhatsAppService } from '../../core/services/whatsapp.service';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss'
})
export class ContactInfoComponent {

  constructor(public whatsappService: WhatsAppService) {}

}
