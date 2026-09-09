import { ApiResponse, ContactFormData } from '../types';

export interface ContactSubmissionResult {
  sentToBackend: boolean;
  ticketId?: string;
  fallbackEmail: string;
}

export const contactService = {
  /**
   * Submit contact form
   * Clearly separates live backend vs dev mode
   */
  async submitContact(data: ContactFormData): Promise<ApiResponse<ContactSubmissionResult>> {
    // Simulated short delay
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Basic validation
    if (!data.fullName.trim() || !data.email.trim() || !data.message.trim()) {
      return {
        success: false,
        message: 'Lütfen zorunlu alanları (İsim, E-posta ve Mesaj) doldurunuz.',
        error: 'VALIDATION_ERROR',
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        message: 'Lütfen geçerli bir e-posta adresi giriniz.',
        error: 'INVALID_EMAIL',
      };
    }

    const hasLiveBackend = false; // Set to true when backend API is deployed

    if (!hasLiveBackend) {
      // Honestly inform the user: backend is in progress
      return {
        success: false,
        message: 'IMTX API arka uç servisi şu anda entegrasyon aşamasındadır. Mesajınız henüz otomatik iletilmedi. Lütfen doğrudan e-posta istemciniz üzerinden iletişime geçiniz.',
        data: {
          sentToBackend: false,
          fallbackEmail: 'contact@imtx.win',
        },
      };
    }

    return {
      success: true,
      message: 'Mesajınız başarıyla alındı. 24 saat içinde dönüş yapılacaktır.',
      data: {
        sentToBackend: true,
        ticketId: 'IMTX-TK-' + Math.floor(100000 + Math.random() * 900000),
        fallbackEmail: 'contact@imtx.win',
      },
    };
  },
};
