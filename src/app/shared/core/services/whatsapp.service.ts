import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhatsAppService {

  private readonly whatsappNumber = '966561527263';

  private readonly defaultMessage = 'السلام عليكم ورحمة الله وبركاتة';

  constructor() { }


  getWhatsAppNumber(): string {
    return this.whatsappNumber;
  }

  getDefaultMessage(): string {
    return this.defaultMessage;
  }


  getWhatsAppLink(): string {
    const encodedMessage = encodeURIComponent(this.defaultMessage);
    return `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
  }


  getWhatsAppLinkWithCustomMessage(customMessage: string): string {
    const encodedMessage = encodeURIComponent(customMessage);
    return `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
  }


  getWhatsAppLinkWithoutMessage(): string {
    return `https://wa.me/${this.whatsappNumber}`;
  }


  updateWhatsAppNumber(newNumber: string): void {

  }


  updateDefaultMessage(newMessage: string): void {
  }
}
