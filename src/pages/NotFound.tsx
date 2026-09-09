import React from 'react';
import { SEO } from '../components/common/SEO';
import { Home, Compass, ArrowLeft } from 'lucide-react';
import { Button } from '../components/common/Button';

export const NotFound: React.FC = () => {
  return (
    <>
      <SEO
        title="Sayfa Bulunamadı (404)"
        description="Aradığınız sayfa IMTX kümesinde bulunamadı veya taşınmış olabilir."
        canonicalPath="/404"
      />

      <div className="min-h-[calc(100vh-160px)] flex items-center justify-center py-16 px-4 relative overflow-hidden text-center">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/10 blur-[160px] pointer-events-none rounded-full" />

        <div className="max-w-md w-full relative z-10 space-y-6">
          <div className="w-20 h-20 rounded-3xl bg-slate-900/90 border border-white/10 flex items-center justify-center mx-auto text-cyan-400 shadow-2xl">
            <Compass className="w-10 h-10 animate-spin" style={{ animationDuration: '12s' }} />
          </div>

          <div className="space-y-2">
            <div className="text-7xl font-black font-mono text-gradient">
              404
            </div>
            <h1 className="text-2xl font-bold text-white">
              Rota Bulunamadı
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto">
              İstediğiniz adres IMTX ağ düğümleri üzerinde mevcut değil veya başka bir uç noktaya taşındı.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Button
              to="/"
              variant="glow"
              size="md"
              icon={<Home className="w-4 h-4" />}
            >
              Ana Sayfaya Dön
            </Button>
            <Button
              onClick={() => window.history.back()}
              variant="secondary"
              size="md"
              icon={<ArrowLeft className="w-4 h-4" />}
            >
              Geri Git
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
