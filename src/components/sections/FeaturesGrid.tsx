import React from 'react';
import { Cpu, Globe2, ShieldAlert, Code2, Route, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: <Cpu className="w-6 h-6 text-cyan-400" />,
    title: 'Otonom Yük Dengeleme & Ölçekleme',
    description: 'Trafik dalgalanmalarını mikrosaniyeler içinde algılayan akıllı kaynak tahsisi ile sıfır konfigürasyonla sınırsız ölçeklenme sağlayın.',
    tag: 'Otomasyon',
  },
  {
    icon: <Globe2 className="w-6 h-6 text-sky-400" />,
    title: 'Anycast Global Edge Ağı',
    description: 'Kullanıcılarınıza en yakın coğrafi PoP noktasından tek haneli milisaniye gecikmeyle içerik ve veri akışı teslim edin.',
    tag: 'Global Edge',
  },
  {
    icon: <ShieldAlert className="w-6 h-6 text-violet-400" />,
    title: 'Zero-Trust Kuantum Dirençli Güvenlik',
    description: 'Her istek ve veri paketi donanım düzeyinde 256-bit şifreleme ve gelişmiş tehdit kalkanıyla doğrulanır.',
    tag: 'Siber Güvenlik',
  },
  {
    icon: <Code2 className="w-6 h-6 text-emerald-400" />,
    title: 'Kapsamlı Geliştirici API & SDK',
    description: 'TypeScript, Go, Python ve Rust kütüphaneleriyle dakikalar içinde entegre olun, tam dokümante edilmiş REST ve gRPC uçlarını kullanın.',
    tag: 'Developer First',
  },
  {
    icon: <Route className="w-6 h-6 text-pink-400" />,
    title: 'AI Tabanlı Akıllı Veri Yönlendirme',
    description: 'Ağ tıkanıklıklarını önceden tahmin eden yapay zeka yönlendiricisi paketlerinizi en hızlı rotadan geçirir.',
    tag: 'AI Optimization',
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-amber-400" />,
    title: 'Gerçek Zamanlı Telemetri & İzleme',
    description: 'Gecikme, bant genişliği, anormallik analizi ve hata oranlarını anlık görsel paneller ve webhook alarmları ile izleyin.',
    tag: 'Observability',
  },
];

export const FeaturesGrid: React.FC = () => {
  return (
    <section className="py-24 relative" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Altyapı Yetenekleri
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Modern İşletmeler İçin <span className="text-gradient">Tavizsiz Performans</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            IMTX'nin tescilli mimarisi, geleneksel bulut sınırlarını aşarak hızı, güvenliği ve dayanıklılığı standart olarak sunar.
          </p>
        </div>

        {/* Features 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="glass-card-hover p-8 rounded-2xl relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Subtle accent light on top right */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/15 transition-all duration-300 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center shadow-inner group-hover:border-cyan-400/40 transition-colors">
                    {feature.icon}
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/5">
                    {feature.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-cyan-400/80 group-hover:text-cyan-300 transition-colors">
                <span>Teknik Detayları İncele</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
