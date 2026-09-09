import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { Logo } from '../common/Logo';
import { Button } from '../common/Button';
import { useScroll } from '../../hooks/useScroll';

const navItems = [
  { name: 'Ana Sayfa', path: '/' },
  { name: 'Özellikler', path: '/features' },
  { name: 'Fiyatlandırma', path: '/pricing' },
  { name: 'Hakkımızda', path: '/about' },
  { name: 'İletişim', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolled = useScroll(20);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-imtx-950/85 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo size="md" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-2xl border border-white/5 backdrop-blur-md">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/20 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button to="/login" variant="ghost" size="sm">
              Giriş Yap
            </Button>
            <Button
              to="/register"
              variant="glow"
              size="sm"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Başlayın
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Menüyü aç/kapat"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-40 md:hidden bg-imtx-950/95 backdrop-blur-2xl border-t border-white/10 overflow-y-auto animate-in fade-in duration-200">
          <div className="px-4 pt-6 pb-12 flex flex-col min-h-[calc(100vh-65px)] justify-between">
            <div className="space-y-2">
              <div className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Gezinme
              </div>
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                        : 'text-slate-200 hover:bg-white/5'
                    }`
                  }
                >
                  <span>{item.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </NavLink>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10 space-y-3">
              <div className="flex items-center gap-2 px-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Cloudflare Pages &amp; SSL Korumalı</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Button to="/login" variant="secondary" size="md" className="w-full">
                  Giriş Yap
                </Button>
                <Button to="/register" variant="glow" size="md" className="w-full">
                  Kayıt Ol
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
