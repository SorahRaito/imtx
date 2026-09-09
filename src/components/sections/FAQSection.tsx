import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FaqItem } from '../../types';

const faqData: FaqItem[] = [
  {
    id: '1',
    category: 'general',
    question: 'IMTX tam olarak nedir ve geleneksel bulutlardan farkı nedir?',
    answer: 'IMTX, merkezi sunucu darboğazlarını ortadan kaldıran, dünya genelindeki 310\'dan fazla uç (edge) noktası üzerinden çalışan yeni nesil bir dağıtık teknoloji platformudur. Geleneksel bulut sağlayıcılarının sunduğu yüksek gecikme, karmaşık yapılandırma ve yüksek veri aktarım maliyetlerine karşı otonom ve ultra hızlı bir alternatif sunar.',
  },
  {
    id: '2',
    category: 'technology',
    question: 'Mevcut uygulamalarımı ve veritabanımı IMTX\'e nasıl taşıyabilirim?',
    answer: 'IMTX, endüstri standardı OCI konteynerlerini, Docker kalıplarını ve modern web teknolojilerini (Node.js, Go, Rust, Python) doğrudan destekler. Tek bir CLI komutu veya GitHub CI/CD entegrasyonu ile dakikalar içinde kesintisiz geçiş yapabilirsiniz.',
  },
  {
    id: '3',
    category: 'security',
    question: 'IMTX verilerimizin güvenliğini ve gizliliğini nasıl sağlar?',
    answer: 'Tüm iletişim katmanları uçtan uca TLS 1.3 ve 256-bit AES ile şifrelenir. Ayrıca platformumuz, kuantum bilgisayarların gelecekteki tehditlerine karşı Post-Quantum Kriptografi (Kyber/Dilithium) protokollerini şimdiden uygulamaktadır.',
  },
  {
    id: '4',
    category: 'technology',
    question: '%99.999 kesintisiz çalışma (Uptime SLA) nasıl garanti ediliyor?',
    answer: 'IMTX mimarisinde tekil arıza noktası (Single Point of Failure) bulunmaz. Herhangi bir veri merkezi veya düğüm kesintiye uğradığında, Anycast ağ yapımız gelen trafiği milisaniyeler içinde en yakın sağlıklı düğüme şeffaf biçimde aktarır.',
  },
  {
    id: '5',
    category: 'billing',
    question: 'Fiyatlandırma modeli nasıl işliyor? Gizli maliyetler var mı?',
    answer: 'IMTX şeffaf bir fiyatlandırma modeline sahiptir. Egress (veri çıkış) ücreti cezalandırıcı seviyelerde değildir. İhtiyacınıza göre ölçeklenen Starter, Pro ve kurumsal özel altyapı seçenekleri mevcuttur.',
  },
  {
    id: '6',
    category: 'general',
    question: 'Teknik destek ve müşteri başarı ekibine nasıl ulaşabilirim?',
    answer: 'Pro ve Enterprise planlarındaki müşterilerimiz 7/24 özel Slack/Discord kanalı, telefon ve 15 dakikadan kısa süreli SLA destek biletleri ile kıdemli sistem mimarlarımıza doğrudan ulaşabilirler.',
  },
];

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 relative" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Sıkça Sorulan Sorular
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Aklınızdaki <span className="text-gradient">Soruları Yanıtlıyoruz</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Platform mimarisi, geçiş süreçleri ve teknik standartlarımız hakkında en çok merak edilen sorular.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 hover:bg-white/[0.02] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-cyan-400 border-cyan-400/40 bg-cyan-500/10' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-white/5 text-slate-300 text-sm sm:text-base leading-relaxed animate-in fade-in slide-in-from-top-2 duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
