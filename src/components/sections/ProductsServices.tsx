import React from 'react';
import { Cloud, ShieldCheck, Cpu, Network, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    icon: <Cloud className="w-7 h-7 text-cyan-400" />,
    name: 'IMTX Cloud Core',
    category: 'Dağıtık Bilişim',
    desc: 'Mikroservislerinizi ve konteynerlerinizi tek bir merkezi olmayan kümede çalıştırın, kaynakları dinamik olarak optimize edin.',
    features: ['Sıfır Soğuk Başlatma (Cold Start)', 'Otonom Yük Dengeleme', 'Sınırsız Ölçekleme'],
    badge: 'Core Engine',
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-violet-400" />,
    name: 'IMTX Shield Defense',
    category: 'Siber Güvenlik',
    desc: 'Tbps ölçeğindeki DDoS saldırılarını ve karmaşık L7 enjeksiyonlarını yapay zeka destekli davranış filtreleri ile anında sönümleyin.',
    features: ['Tbps DDoS Kalkanı', 'Bot ve Tarayıcı Koruması', 'Gerçek Zamanlı WAF'],
    badge: 'Enterprise Security',
  },
  {
    icon: <Cpu className="w-7 h-7 text-emerald-400" />,
    name: 'IMTX Quantum Engine',
    category: 'Veri & Analitik',
    desc: 'Finansal işlemler, telemetri akışları ve büyük veri boru hatları için mikrosaniye seviyesinde paralel hesaplama motoru.',
    features: ['10M+ İşlem/sn', 'Bellek İçi Analitik (In-Memory)', 'gRPC & WebSockets'],
    badge: 'Ultra Fast',
  },
  {
    icon: <Network className="w-7 h-7 text-sky-400" />,
    name: 'IMTX Edge Fabric',
    category: 'Global Dağıtım',
    desc: 'Statik ve dinamik içeriklerinizi dünya çapında 310\'dan fazla lokasyonda önbelleğe alın ve kullanıcıya en yakın noktada işleyin.',
    features: ['310+ Global PoP', 'Akıllı Anycast Yönlendirme', 'HTTP/3 & QUIC Standart'],
    badge: 'Global Edge',
  },
];

export const ProductsServices: React.FC = () => {
  return (
    <section className="py-24 relative" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Ürün &amp; Çözüm Ekosistemi
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Bütünleşik <span className="text-gradient">Platform Modülleri</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm sm:text-base">
            Her bir modül tek başına kusursuz çalışır; birlikte kullanıldığında ise kurumsal altyapınız için rakipsiz bir teknoloji kalesi oluşturur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((prod, idx) => (
            <div
              key={idx}
              className="glass-card-hover p-8 sm:p-10 rounded-3xl relative overflow-hidden group border border-white/10"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-900/90 border border-white/10 flex items-center justify-center group-hover:border-cyan-400/50 transition-colors shadow-lg shadow-black/40">
                  {prod.icon}
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800/80 border border-white/10 text-slate-300">
                  {prod.badge}
                </span>
              </div>

              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1">
                {prod.category}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                <span>{prod.name}</span>
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                {prod.desc}
              </p>

              <div className="space-y-2.5 pt-6 border-t border-white/5">
                {prod.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4">
                <Link
                  to="/features"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Teknik Spesifikasyonları Gör</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
