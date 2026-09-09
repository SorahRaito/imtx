import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Github, Twitter, Disc as Discord, Linkedin, ExternalLink } from 'lucide-react';
import { Logo } from '../common/Logo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { name: 'Genel Bakış', path: '/' },
      { name: 'Özellikler', path: '/features' },
      { name: 'Fiyatlandırma', path: '/pricing' },
      { name: 'Altyapı Durumu', path: '/features#infra' },
    ],
    company: [
      { name: 'Hakkımızda', path: '/about' },
      { name: 'İletişim & Destek', path: '/contact' },
      { name: 'Kariyer', path: '/about#careers' },
      { name: 'Blog & Bülten', path: '/about#news' },
    ],
    security: [
      { name: 'Güvenlik Mimarisi', path: '/features#security' },
      { name: 'Sıfır Güven (Zero-Trust)', path: '/features#zero-trust' },
      { name: 'Uyumluluk (SOC2)', path: '/about#compliance' },
      { name: 'SLA Taahhüdü (%99.999)', path: '/pricing#sla' },
    ],
    legal: [
      { name: 'Kullanım Koşulları', path: '/contact#terms' },
      { name: 'Gizlilik Politikası', path: '/contact#privacy' },
      { name: 'Çerez Politikası', path: '/contact#cookies' },
      { name: 'KVKK / GDPR', path: '/contact#gdpr' },
    ],
  };

  return (
    <footer className="bg-imtx-950 border-t border-white/10 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-white/5">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              IMTX, yüksek performanslı dağıtık ağ altyapısı, uçtan uca askeri düzey şifreleme ve otonom ölçeklenebilirlik sunan yeni nesil kurumsal teknoloji platformudur.
            </p>

            {/* Platform Info */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-400 font-medium">
              <span>%99.999 SLA Hedefi</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400/50 hover:bg-slate-800 transition-all"
                aria-label="IMTX GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400/50 hover:bg-slate-800 transition-all"
                aria-label="IMTX X (Twitter)"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400/50 hover:bg-slate-800 transition-all"
                aria-label="IMTX Discord Community"
              >
                <Discord className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400/50 hover:bg-slate-800 transition-all"
                aria-label="IMTX LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Platform
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.platform.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Şirket
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Güvenlik
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.security.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Yasal &amp; KVKK
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>© {currentYear} IMTX Global Technologies Inc. Tüm hakları saklıdır.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-slate-400">
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              Cloudflare Edge Network
            </span>
            <a
              href="https://imtx.win"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-cyan-400 text-slate-300 font-mono transition-colors"
            >
              <span>imtx.win</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
