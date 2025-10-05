import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WhatsappContactComponent } from './shared/components/whatsapp-contact/whatsapp-contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WhatsappContactComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'سداد قروض ابو تركي';


}
