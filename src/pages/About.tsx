import React from 'react';
import { SEO } from '../components/common/SEO';
import { ShieldCheck, Target, Eye, Globe, Cpu, Layers, ArrowRight } from 'lucide-react';
import { Button } from '../components/common/Button';

export const About: React.FC = () => {
  return (
    <>
      <SEO
        title="Hakkımızda"
        description="IMTX; merkezi olmayan, yüksek performanslı ve güvenli dağıtık altyapı inşa etme vizyonuyla kurulmuş küresel bir teknoloji kuruluşudur."
        canonicalPath="/about"
      />

      <div className="py-16 md:py-24 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              Kurumsal Kimlik &amp; Vizyon
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
              İnternetin Dağıtık Geleceğini <br />
              <span className="text-gradient">Yeniden Tanımlıyoruz</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              IMTX, geleneksel sunucu mimarilerinin sınırlarını ortadan kaldırmak; kurumlara ve geliştiricilere ışık hızında, kuantum dirençli ve otonom bir altyapı sunmak amacıyla kuruldu.
            </p>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <div className="glass-card-hover p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Misyonumuz</h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Her ölçekten teknoloji şirketinin, karmaşık sunucu yönetimi veya veri merkezi darboğazlarıyla vakit kaybetmeden doğrudan ürün geliştirmesine olanak tanımak. Küresel çapta milisaniyenin altındaki yanıt sürelerini standart hale getirmek.
              </p>
            </div>

            <div className="glass-card-hover p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Vizyonumuz</h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Tek bir coğrafyaya veya sağlayıcıya bağımlı olmayan; sıfır güven, donanım düzeyinde şifreleme ve yapay zeka optimizasyonuyla kendi kendini onaran gezegensel ölçekte bir teknoloji ekosistemi yaratmak.
              </p>
            </div>
          </div>

          {/* Core Values / Engineering Principles */}
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl font-extrabold text-white tracking-tight mb-3">
                Mühendislik <span className="text-gradient">İlkelerimiz</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                Kod tabanımızdan fiziksel veri merkezi anlaşmalarımıza kadar tüm süreçlerde bu 4 temel kuralı tavizsiz uyguluyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/5 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Sınırsız Anycast</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Trafik tek bir merkeze değil, kullanıcıya en yakın onlarca dağıtık PoP noktasına yönlendirilir.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/5 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Varsayılan Sıfır Güven</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  İç veya dış ağ fark etmeksizin tüm paketler kriptografik olarak imzalanır ve doğrulanır.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/5 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Otonom Dengeleme</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Sistem yük altında kaldığında insan müdahalesine gerek kalmadan mikro ölçekte kaynak arttırır.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/5 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Açık Standartlar</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Özel kilitlenmeler (vendor lock-in) yerine standart OCI, REST, gRPC ve WebAssembly protokolleri.
                </p>
              </div>
            </div>
          </div>

          {/* Infrastructure Numbers */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-imtx-900 to-slate-900 border border-cyan-500/20 mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-black text-white font-mono text-gradient mb-1">
                  6 Kıta
                </div>
                <div className="text-xs sm:text-sm text-slate-400">Aktif Düğüm Ağı</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-white font-mono text-gradient mb-1">
                  %99.999
                </div>
                <div className="text-xs sm:text-sm text-slate-400">Yıllık Uptime Oranı</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-white font-mono text-gradient mb-1">
                  120+ Tbps
                </div>
                <div className="text-xs sm:text-sm text-slate-400">Omurga Kapasitesi</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-white font-mono text-gradient mb-1">
                  7/24/365
                </div>
                <div className="text-xs sm:text-sm text-slate-400">Kıdemli NOC Desteği</div>
              </div>
            </div>
          </div>

          {/* Bottom Call to Action */}
          <div className="text-center max-w-xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Geleceği Birlikte İnşa Edelim
            </h2>
            <p className="text-slate-400 text-sm">
              Siz de IMTX ekosisteminin hızından faydalanmak istiyorsanız hemen ücretsiz hesabınızı oluşturun.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/register" variant="glow" size="md" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                Hemen Başlayın
              </Button>
              <Button to="/contact" variant="secondary" size="md">
                İletişime Geçin
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
