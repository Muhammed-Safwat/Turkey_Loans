import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

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
  whatsappNumber = '966534970654'; // رقم واتساب الشركة
  defaultMessage = 'مرحباً، أريد الاستفسار عن خدمات تسديد القروض والمتعثرات';

  ngOnInit() {
    // إظهار رسالة الترحيب بعد 3 ثواني
    setTimeout(() => {
      this.showWelcomeMessage = true;
    }, 3000);

    // إخفاء الرسالة تلقائياً بعد 10 ثواني
    setTimeout(() => {
      this.showWelcomeMessage = false;
    }, 10000);

    // إيقاف تأثير النبضة بعد 15 ثانية
    setTimeout(() => {
      this.showPulse = false;
    }, 15000);
  }

  openWhatsApp() {
    const message = encodeURIComponent(this.defaultMessage);
    const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }

  closeWelcomeMessage() {
    this.showWelcomeMessage = false;
  }
}
