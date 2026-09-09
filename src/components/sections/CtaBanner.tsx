import React from 'react';
import { ArrowRight, Sparkles, Headphones } from 'lucide-react';
import { Button } from '../common/Button';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-14 lg:p-16 border border-cyan-500/30 bg-gradient-to-br from-slate-900 via-imtx-900 to-slate-950 shadow-2xl">
          {/* Glowing Radial Light Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 blur-[120px] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/20 blur-[120px] pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs text-cyan-300 font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              Geleceğin Dağıtık Altyapısı Sizi Bekliyor
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Teknoloji Mimarinizi <br />
              <span className="text-gradient">IMTX Gücüyle Şekillendirin</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              14 günlük ücretsiz deneme sürümüyle hemen canlı ağ ortamımızı test edin veya kurumsal mimarlarımızla özel dağıtım seçeneklerini görüşün.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                to="/register"
                variant="glow"
                size="lg"
                className="w-full sm:w-auto shadow-xl shadow-cyan-500/25"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
              >
                Ücretsiz Hesap Oluştur
              </Button>
              <Button
                to="/contact"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
                icon={<Headphones className="w-4 h-4 text-cyan-400" />}
              >
                Mühendislerimizle Görüşün
              </Button>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span>✓ Kredi kartı gerekmez</span>
              <span>✓ 2 dakikada kurulum</span>
              <span>✓ İptal taahhüdü yok</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
