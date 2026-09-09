import React, { useState } from 'react';
import { SEO } from '../components/common/SEO';
import { Mail, MapPin, Clock, AlertCircle, Send, CheckCircle, ExternalLink } from 'lucide-react';
import { Button } from '../components/common/Button';
import { contactService } from '../services/contactService';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState<{
    type: 'success' | 'warning' | 'error';
    message: string;
    details?: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionFeedback(null);

    const response = await contactService.submitContact(formData);
    setIsSubmitting(false);

    if (!response.success && response.data?.sentToBackend === false) {
      // Backend not yet connected notice (Honest reporting as required!)
      setSubmissionFeedback({
        type: 'warning',
        message: 'Backend Servis Durumu: Entegrasyon Aşamasında',
        details: 'IMTX API iletişim servisi henüz canlı veritabanına bağlanmamıştır. Talebinizin kaybolmaması için lütfen aşağıdaki doğrudan e-posta bağlantısını kullanınız veya iletinizi contact@imtx.win adresine gönderiniz.',
      });
    } else if (response.success) {
      setSubmissionFeedback({
        type: 'success',
        message: response.message,
      });
    } else {
      setSubmissionFeedback({
        type: 'error',
        message: response.message,
      });
    }
  };

  const directMailtoUrl = `mailto:contact@imtx.win?subject=${encodeURIComponent(
    formData.subject || 'IMTX İletişim Talebi'
  )}&body=${encodeURIComponent(
    `Ad Soyad: ${formData.fullName}\nE-posta: ${formData.email}\n\nMesaj:\n${formData.message}`
  )}`;

  return (
    <>
      <SEO
        title="İletişim &amp; Kurumsal Destek"
        description="IMTX teknik destek, satış ve kurumsal ortaklık birimleriyle iletişime geçin."
        canonicalPath="/contact"
      />

      <div className="py-16 md:py-24 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-10 right-1/4 w-[600px] h-[350px] bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Mail className="w-3.5 h-3.5" />
              Doğrudan İletişim Hattı
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
              Mühendislerimizle <br />
              <span className="text-gradient">Doğrudan Görüşün</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Teknik bir sorunuz mu var, yoksa kuruluşunuz için özel bir Anycast kümesi mi kurmak istiyorsunuz? Ekibimiz yardımcı olmaktan mutluluk duyar.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
                <h2 className="text-xl font-bold text-white mb-6">
                  Mesaj Gönderin
                </h2>

                {/* Honest Backend Integration Banner */}
                <div className="mb-6 p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 flex items-start gap-3 text-xs text-slate-300">
                  <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-white">Şeffaflık İlkesi:</strong> İletişim formu arka uç (backend) bağlantısı yapım aşamasındadır. Formu test amaçlı gönderebilir veya doğrudan <span className="text-cyan-400 font-mono">contact@imtx.win</span> adresine e-posta yazabilirsiniz.
                  </p>
                </div>

                {submissionFeedback && (
                  <div
                    className={`mb-6 p-5 rounded-xl border text-sm leading-relaxed ${
                      submissionFeedback.type === 'warning'
                        ? 'bg-amber-950/20 border-amber-500/30 text-amber-200'
                        : submissionFeedback.type === 'error'
                        ? 'bg-red-950/20 border-red-500/30 text-red-200'
                        : 'bg-emerald-950/20 border-emerald-500/30 text-emerald-200'
                    }`}
                  >
                    <div className="font-bold mb-1 flex items-center gap-2">
                      {submissionFeedback.type === 'warning' && <AlertCircle className="w-4 h-4 text-amber-400" />}
                      {submissionFeedback.type === 'success' && <CheckCircle className="w-4 h-4 text-emerald-400" />}
                      <span>{submissionFeedback.message}</span>
                    </div>
                    {submissionFeedback.details && (
                      <p className="text-xs text-slate-300 mt-2 mb-3">
                        {submissionFeedback.details}
                      </p>
                    )}
                    {submissionFeedback.type === 'warning' && (
                      <a
                        href={directMailtoUrl}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-semibold border border-amber-500/40 transition-colors"
                      >
                        <span>E-posta İstemcisiyle Doğrudan Gönder</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-slate-300 mb-2">
                        Adınız Soyadınız *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Örn: Ahmet Yılmaz"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-2">
                        Kurumsal E-posta *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ahmet@sirketiniz.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 mb-2">
                      Konu *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors text-sm"
                    >
                      <option value="">Lütfen bir konu seçiniz</option>
                      <option value="Teknik Destek & Altyapı">Teknik Destek &amp; Altyapı</option>
                      <option value="Kurumsal Enterprise Satış">Kurumsal Enterprise Satış</option>
                      <option value="Güvenlik & Uyumluluk">Güvenlik &amp; Uyumluluk Denetimi</option>
                      <option value="Ortaklık & Entegrasyon">İş Ortaklığı &amp; Entegrasyon</option>
                      <option value="Diğer">Diğer</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-2">
                      Mesajınız *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Projeniz, beklenen trafik hacminiz ve altyapı gereksinimleriniz hakkında bilgi veriniz..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors text-sm resize-y"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="glow"
                      size="lg"
                      className="w-full"
                      isLoading={isSubmitting}
                      icon={<Send className="w-4 h-4" />}
                      iconPosition="right"
                    >
                      Mesajı İlet
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            {/* Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">E-posta İletişimi</h3>
                <p className="text-xs text-slate-400">
                  Resmi kurumsal iletişim ve bilet oluşturma için:
                </p>
                <a
                  href="mailto:contact@imtx.win"
                  className="text-cyan-400 hover:text-cyan-300 font-mono text-sm font-semibold inline-block"
                >
                  contact@imtx.win
                </a>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Yanıt Süresi SLA</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Standart talepler 24 saat içinde yanıtlanır. Enterprise ve kritik seviyedeki arıza talepleri için ortalama geri dönüş süresi 15 dakikanın altındadır.
                </p>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Global Düğüm Merkezleri</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Frankfurt, Amsterdam, Londra, İstanbul, New York, Singapur ve Tokyo ana omurga noktaları üzerinden kesintisiz operasyon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
