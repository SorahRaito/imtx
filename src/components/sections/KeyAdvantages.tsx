import React from 'react';
import { Check, X, Shield, Zap, Lock, Cpu } from 'lucide-react';

const comparisons = [
  {
    feature: 'Gecikme & Yanıt Süresi',
    traditional: '45ms - 120ms (Merkezi sunucu darboğazı)',
    imtx: '< 12ms (Dağıtık Anycast Edge Ağı)',
  },
  {
    feature: 'Güvenlik Mimarisi',
    traditional: 'Sınır güvenlik duvarı & periyodik yamalar',
    imtx: 'Sıfır Güven (Zero-Trust) & Donanım Şifreleme',
  },
  {
    feature: 'Ölçeklenme Hızı',
    traditional: '5 - 15 dakika süren VM/Konteyner ayağa kaldırma',
    imtx: 'Milisaniyeler içinde otonom trafik yönlendirmesi',
  },
  {
    feature: 'Altyapı Kesinti Dayanıklılığı',
    traditional: '%99.9 (Yıllık 8+ saat planlanmamış kesinti)',
    imtx: '%99.999 Kesintisiz SLA & Otomatik Failover',
  },
  {
    feature: 'Geliştirici Entegrasyonu',
    traditional: 'Karmaşık YAML ve çok adımlı pipeline yapıları',
    imtx: 'Tek komutla CLI/SDK ve anında küresel dağıtım',
  },
];

export const KeyAdvantages: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950/60 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Stratejik Avantajlar
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Neden <span className="text-gradient">IMTX Altyapısı?</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Geleneksel monolitik bulut sağlayıcıları ile yeni nesil IMTX mimarisinin teknik ve operasyonel farklarını karşılaştırın.
          </p>
        </div>

        {/* Comparison Table / Card */}
        <div className="glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-900/90 border-b border-white/10 p-5 text-sm font-semibold">
            <div className="md:col-span-4 text-slate-300">Özellik &amp; Metrik</div>
            <div className="md:col-span-4 text-slate-400 hidden md:block">Geleneksel Bulut Sistemleri</div>
            <div className="md:col-span-4 text-cyan-400 hidden md:block">IMTX Dağıtık Platform</div>
          </div>

          <div className="divide-y divide-white/5">
            {comparisons.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 p-5 sm:p-6 gap-3 md:gap-4 items-center hover:bg-white/[0.02] transition-colors"
              >
                <div className="md:col-span-4 font-medium text-white text-sm sm:text-base flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  {item.feature}
                </div>

                {/* Traditional */}
                <div className="md:col-span-4 text-xs sm:text-sm text-slate-400 flex items-start gap-2 bg-red-950/10 md:bg-transparent p-3 md:p-0 rounded-lg border border-red-500/10 md:border-none">
                  <X className="w-4 h-4 text-red-400/80 shrink-0 mt-0.5" />
                  <span>{item.traditional}</span>
                </div>

                {/* IMTX */}
                <div className="md:col-span-4 text-xs sm:text-sm text-cyan-300 font-medium flex items-start gap-2 bg-cyan-950/20 md:bg-transparent p-3 md:p-0 rounded-lg border border-cyan-500/20 md:border-none">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item.imtx}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Value Highlights Pill Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 flex items-center gap-3">
            <Zap className="w-5 h-5 text-cyan-400 shrink-0" />
            <span className="text-xs sm:text-sm text-slate-300 font-medium">10 Kat Daha Hızlı Veri İletimi</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 flex items-center gap-3">
            <Shield className="w-5 h-5 text-violet-400 shrink-0" />
            <span className="text-xs sm:text-sm text-slate-300 font-medium">%0 Veri İhlali Garantisi</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 flex items-center gap-3">
            <Lock className="w-5 h-5 text-sky-400 shrink-0" />
            <span className="text-xs sm:text-sm text-slate-300 font-medium">Uçtan Uca Donanımsal Şifreleme</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 flex items-center gap-3">
            <Cpu className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="text-xs sm:text-sm text-slate-300 font-medium">Maliyette %40'a Varan Tasarruf</span>
          </div>
        </div>
      </div>
    </section>
  );
};
