import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent { 
  private readonly whatsappNumber = '+966534970654';  

  openWhatsApp(): void {
    try { 
      const message = 'مرحباً، أريد الاستفسار عن خدمات تسديد القروض والمتعثرات';
      const whatsappUrl = `https://wa.me/${this.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
       
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Error opening WhatsApp:', error); 
      const fallbackUrl = `https://wa.me/${this.whatsappNumber.replace(/[^0-9]/g, '')}`;
      window.open(fallbackUrl, '_blank', 'noopener,noreferrer');
    }
  }
}
