import React from 'react';
import { Activity, ArrowRight, Check, Cloud, LockKeyhole, Terminal } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Button } from '../components/common/Button';

const modules = [
  { icon: Cloud, title: 'Edge dağıtımı', text: 'Projelerini tek bir akışla küresel ağa çıkar. Ortamlar, sürümler ve dağıtımlar tek yerde.' },
  { icon: LockKeyhole, title: 'Erişim yönetimi', text: 'Ekip, anahtar ve servis erişimlerini sade bir kontrol katmanından yönet.' },
  { icon: Activity, title: 'Canlı görünürlük', text: 'Servis durumunu, istekleri ve önemli olayları anlaşılır bir panelde takip et.' },
];

export const Home: React.FC = () => (
  <>
    <SEO title="Geliştiriciler için dağıtık altyapı" description="IMTX, ürün ekiplerinin dağıtım, erişim ve operasyon akışlarını tek yerde düzenleyen altyapı platformudur." canonicalPath="/" />
    <main className="min-h-screen">
      <section className="border-b border-white/10 pt-28 sm:pt-36">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pb-16 sm:pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />IMTX platform durumu: çalışır durumda</div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">Altyapınızı daha az gürültüyle yönetin.</h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">IMTX; dağıtım, erişim ve operasyon sinyallerini ürün ekipleri için sade bir çalışma alanında bir araya getirir.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button to="/register" variant="primary" size="lg" icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">Hesap oluştur</Button><Button to="/features" variant="secondary" size="lg">Platformu incele</Button></div>
            <p className="mt-4 text-xs text-slate-500">Demo modunda çalışır. Kredi kartı veya gerçek ödeme gerekmez.</p>
          </div>
          <div className="mt-14 grid overflow-hidden rounded-2xl border border-white/10 bg-[#101217] md:grid-cols-2">
            <div className="border-b border-white/10 p-6 md:border-b-0 md:border-r sm:p-8">
              <p className="text-xs uppercase tracking-widest text-slate-500">Son dağıtım</p>
              <div className="mt-5 flex gap-3"><div className="rounded-lg bg-emerald-400/10 p-2 text-emerald-300"><Check className="h-4 w-4" /></div><div><p className="text-sm font-medium text-white">main başarıyla yayınlandı</p><p className="mt-1 text-xs text-slate-500">Cloudflare Pages · Production</p></div></div>
              <div className="mt-7 grid grid-cols-3 gap-3">{[['Durum', 'Sağlıklı'], ['Bölge', 'Global'], ['Sürüm', 'v2.4']].map(([label, value]) => <div key={label} className="rounded-xl border border-white/10 bg-white/[.025] p-3"><p className="text-[11px] text-slate-500">{label}</p><p className="mt-1 text-sm text-slate-200">{value}</p></div>)}</div>
            </div>
            <div className="p-6 sm:p-8"><p className="text-xs uppercase tracking-widest text-slate-500">Hızlı başlangıç</p><div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4 font-mono text-xs leading-6 text-slate-300"><span className="text-emerald-400">$</span> imtx deploy --environment production<br/><span className="text-slate-500">✓ build complete</span><br/><span className="text-slate-500">✓ deployment ready</span></div><p className="mt-5 flex items-center gap-2 text-xs text-slate-500"><Terminal className="h-3.5 w-3.5" />CLI ve API entegrasyonu yakında</p></div>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24"><p className="text-xs uppercase tracking-widest text-slate-500">Platform</p><h2 className="mt-3 text-3xl font-semibold text-white">İhtiyacınız olan temel katmanlar.</h2><div className="mt-10 grid gap-4 md:grid-cols-3">{modules.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl border border-white/10 bg-white/[.025] p-6"><Icon className="h-5 w-5 text-slate-300" /><h3 className="mt-7 font-medium text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{text}</p></article>)}</div></section>
      <section className="border-t border-white/10"><div className="max-w-6xl mx-auto flex flex-col gap-5 px-5 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-8"><div><p className="text-xs uppercase tracking-widest text-slate-500">IMTX ile başlayın</p><h2 className="mt-2 text-2xl font-semibold text-white">İlk çalışma alanınızı oluşturun.</h2></div><Button to="/register" variant="primary">Ücretsiz başlayın</Button></div></section>
    </main>
  </>
);
