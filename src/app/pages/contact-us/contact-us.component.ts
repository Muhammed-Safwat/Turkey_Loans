import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/components/layout/footer/footer.component";
import { HeaderComponent } from "../../shared/components/layout/header/header.component";
import { ContactInfoComponent } from "../../shared/components/contact-info/contact-info.component";
import { WhatsappContactComponent } from "../../shared/components/whatsapp-contact/whatsapp-contact.component";

@Component({
  selector: 'app-contact-us',
  imports: [FooterComponent, HeaderComponent, ContactInfoComponent, WhatsappContactComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

}
