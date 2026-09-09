import { ApiResponse } from '../types';

export type PaymentProvider = 'stripe' | 'iyzico' | 'paytr';

export interface CheckoutSessionRequest {
  planId: string;
  billingCycle: 'monthly' | 'yearly';
  provider?: PaymentProvider;
  userEmail?: string;
}

export interface CheckoutSessionResult {
  sessionId: string;
  checkoutUrl?: string;
  provider: PaymentProvider;
  isMock: boolean;
}

export const paymentService = {
  /**
   * Initiate checkout session
   * Currently mocked to demonstrate architectural readiness for Stripe / iyzico / PayTR
   */
  async createCheckoutSession(
    request: CheckoutSessionRequest
  ): Promise<ApiResponse<CheckoutSessionResult>> {
    // Simulated network call
    await new Promise((resolve) => setTimeout(resolve, 700));

    // When backend is ready:
    // const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/payments/create-session`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(request)
    // });
    // return await res.json();

    return {
      success: true,
      message: `Ödeme altyapısı (${request.provider || 'Stripe/iyzico'}) entegrasyon için hazırlandı. Production ödeme geçidi yakında aktif olacaktır.`,
      data: {
        sessionId: `cs_test_${Math.random().toString(36).substring(2, 12)}`,
        provider: request.provider || 'stripe',
        isMock: true,
      },
    };
  },
};
