import React, { useState } from 'react';
import { SEO } from '../components/common/SEO';
import { Check, Sparkles, Shield, ArrowRight, X, CreditCard } from 'lucide-react';
import { Button } from '../components/common/Button';
import { paymentService, PaymentProvider } from '../services/paymentService';

interface Plan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  yearlyPrice: number;
  popular?: boolean;
  features: string[];
  cta: string;
}

const plans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Büyüyen projeler ve bağımsız geliştiriciler için.',
    monthlyPrice: 29,
    yearlyPrice: 23,
    popular: false,
    features: [
      'Aylık 1.000.000 Dağıtık İstek',
      '50 GB Küresel Anycast Bant Genişliği',
      '5 Aktif Edge Servisi / Mikroservis',
      'Standart SSL & TLS 1.3 Koruması',
      '%99.9 Uptime SLA Garantisi',
      'Topluluk ve E-posta Desteği',
    ],
    cta: 'Starter ile Başlayın',
  },
  {
    id: 'pro',
    name: 'Pro Platform',
    tagline: 'Ölçeklenen SaaS girişimleri ve orta ölçekli şirketler için.',
    monthlyPrice: 99,
    yearlyPrice: 79,
    popular: true,
    features: [
      'Aylık 25.000.000 Dağıtık İstek',
      '500 GB Küresel Anycast Bant Genişliği',
      'Sınırsız Edge Servisi / Konteyner',
      'Post-Quantum Şifreleme & WAF',
      '%99.99 Kesintisiz Çalışma SLA',
      'Öncelikli 7/24 Bilet ve Discord Desteği',
      'Gerçek Zamanlı Analitik & Webhook Alarmları',
    ],
    cta: 'Pro Planı Seçin',
  },
  {
    id: 'enterprise',
    name: 'Enterprise Shield',
    tagline: 'Kritik kurumsal operasyonlar ve yüksek trafikli sistemler için.',
    monthlyPrice: 299,
    yearlyPrice: 239,
    popular: false,
    features: [
      'Sınırsız İstek & Dinamik Ölçekleme',
      'Özel Dedike Omurga & Tbps DDoS Kalkanı',
      'Özel Anycast IP Tahsisi & BGP Entegrasyonu',
      'SOC2, ISO 27001 & KVKK Uyum Raporları',
      '%99.999 Garantili Finansal SLA',
      'Özel Çözüm Mimarı & 15 Dakika Yanıt Süresi',
      'Yerinde / Hibrit Kurulum Desteği',
    ],
    cta: 'Kurumsal İletişime Geçin',
  },
];

export const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [selectedProvider, setSelectedProvider] = useState<PaymentProvider>('stripe');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string | null>(null);

  const handleOpenCheckout = async (plan: Plan) => {
    setSelectedPlan(plan);
    setIsProcessing(true);
    setModalMessage(null);

    const result = await paymentService.createCheckoutSession({
      planId: plan.id,
      billingCycle,
      provider: selectedProvider,
    });

    setIsProcessing(false);
    setModalMessage(result.message);
  };

  const handleCloseModal = () => {
    setSelectedPlan(null);
    setModalMessage(null);
  };

  return (
    <>
      <SEO
        title="Fiyatlandırma & Paketler"
        description="Şeffaf ve ölçeklenebilir IMTX fiyatlandırma modelleri. Gizli maliyet yok, kredi kartı gerekmeden 14 gün deneyin."
        canonicalPath="/pricing"
      />

      <div className="py-16 md:py-24 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Şeffaf Fiyatlandırma Modeli
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
              İhtiyacınıza Göre Ölçeklenen <br />
              <span className="text-gradient">Tahmin Edilebilir Fiyatlar</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Gizli veri çıkış (egress) ücretleri yok. İster tek kişilik bir geliştirici olun, ister küresel bir dev; sadece kullandığınız kadar ödeyin.
            </p>

            {/* Monthly / Yearly Switch */}
            <div className="mt-10 inline-flex items-center gap-3 p-1.5 rounded-2xl bg-slate-900/90 border border-white/10 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-cyan-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Aylık Faturalama
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('yearly')}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  billingCycle === 'yearly'
                    ? 'bg-cyan-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>Yıllık Faturalama</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  %20 İndirim
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24 items-stretch">
            {plans.map((plan) => {
              const price = billingCycle === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;
              return (
                <div
                  key={plan.id}
                  className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                    plan.popular
                      ? 'bg-slate-900/90 border-2 border-cyan-400/80 shadow-2xl shadow-cyan-500/15 lg:-translate-y-2'
                      : 'glass-card border border-white/10 hover:border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg">
                      En Çok Tercih Edilen
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-slate-400 text-xs sm:text-sm min-h-[40px] mb-6">
                      {plan.tagline}
                    </p>

                    <div className="flex items-baseline gap-2 mb-8 pb-6 border-b border-white/10">
                      <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono">
                        ${price}
                      </span>
                      <span className="text-slate-400 text-xs sm:text-sm">
                        / ay {billingCycle === 'yearly' && '(yıllık ödenir)'}
                      </span>
                    </div>

                    <div className="space-y-3.5 mb-8">
                      <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
                        Paket İçeriği:
                      </div>
                      {plan.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                          <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={() => handleOpenCheckout(plan)}
                    variant={plan.popular ? 'glow' : 'secondary'}
                    size="lg"
                    className="w-full"
                    icon={<ArrowRight className="w-4 h-4" />}
                    iconPosition="right"
                  >
                    {plan.cta}
                  </Button>
                </div>
              );
            })}
          </div>

          {/* SLA & Security Trust Callout */}
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6" id="sla">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <Shield className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">
                  Kurumsal Düzey %99.999 Finansal SLA
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Taahhüt edilen çalışma süresinin altına düşülmesi durumunda saatlik telafi kredisi sağlanır.
                </p>
              </div>
            </div>

            <Button to="/contact" variant="outline" size="md" className="shrink-0">
              Sözleşme Örneği İsteyin
            </Button>
          </div>
        </div>
      </div>

      {/* Checkout Architecture Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-card max-w-lg w-full rounded-3xl p-6 sm:p-8 border border-cyan-500/40 shadow-2xl relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Ödeme Ağ Geçidi Entegrasyonu</h3>
                <p className="text-xs text-slate-400">IMTX Architecture Preview</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-2 mb-6 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">Seçilen Plan:</span>
                <span className="font-bold text-white">{selectedPlan.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Dönem:</span>
                <span className="font-medium text-slate-200">
                  {billingCycle === 'yearly' ? 'Yıllık (%20 indirimli)' : 'Aylık'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Tutar:</span>
                <span className="font-mono font-bold text-cyan-400">
                  ${billingCycle === 'yearly' ? selectedPlan.yearlyPrice : selectedPlan.monthlyPrice} / ay
                </span>
              </div>
            </div>

            {/* Provider Selection */}
            <div className="space-y-2 mb-6">
              <label className="text-xs font-semibold text-slate-300">
                Ödeme Sağlayıcı Altyapısı:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['stripe', 'iyzico', 'paytr'] as PaymentProvider[]).map((prov) => (
                  <button
                    key={prov}
                    type="button"
                    onClick={() => setSelectedProvider(prov)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold uppercase border transition-all ${
                      selectedProvider === prov
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                        : 'bg-slate-900 border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    {prov}
                  </button>
                ))}
              </div>
            </div>

            {/* Informative Notice */}
            <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-cyan-300 leading-relaxed mb-6">
              {modalMessage || (
                isProcessing
                  ? 'Güvenli ödeme oturumu hazırlanıyor...'
                  : 'Bu bir mimari hazırlık arayüzüdür. Canlı ödeme geçidi aktif olduğunda seçilen servis üzerinden SSL korumalı tahsilat yapılacaktır.'
              )}
            </div>

            <div className="flex gap-3">
              <Button onClick={handleCloseModal} variant="secondary" size="md" className="w-full">
                Kapat
              </Button>
              <Button to="/register" variant="glow" size="md" className="w-full">
                Hesap Oluştur ve Başla
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
