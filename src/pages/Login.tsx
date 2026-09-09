import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { Eye, EyeOff, Lock, Mail, ArrowRight, ShieldCheck, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '../components/common/Button';
import { Logo } from '../components/common/Logo';
import { authService } from '../services/authService';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage(null);

    const result = await authService.login({ email, password, rememberMe });
    setIsLoading(false);

    if (result.success) {
      setStatusMessage({ type: 'success', text: result.message });
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } else {
      setStatusMessage({ type: 'error', text: result.message });
    }
  };

  return (
    <>
      <SEO
        title="Giriş Yap | Cloud Console"
        description="IMTX Yönetim Paneline ve Bulut Konsoluna güvenli giriş yapın."
        canonicalPath="/login"
      />

      <div className="min-h-[calc(100vh-140px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />

        <div className="max-w-md w-full relative z-10">
          <div className="text-center mb-8">
            <div className="inline-block mb-3">
              <Logo size="lg" showText={false} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              IMTX Cloud Console
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Dağıtık kümenizi ve servislerinizi yönetmek için kimliğinizi doğrulayın.
            </p>
          </div>

          <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
            {/* Mock System Notice */}
            <div className="mb-6 p-3 rounded-xl bg-amber-950/20 border border-amber-500/20 flex items-start gap-2 text-xs text-amber-300">
              <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-400" />
              <span>
                <strong>Demo Modu:</strong> Kimlik doğrulama servisi henüz aktif değildir. Giriş formu arka uca bağlı değildir.
              </span>
            </div>

            {statusMessage && (
              <div
                className={`mb-6 p-4 rounded-xl text-xs flex items-center gap-2.5 border ${
                  statusMessage.type === 'success'
                    ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-300'
                    : 'bg-red-950/30 border-red-500/30 text-red-300'
                }`}
              >
                {statusMessage.type === 'success' ? (
                  <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400" />
                ) : (
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                )}
                <span>{statusMessage.text}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label htmlFor="login-email" className="block text-xs font-semibold text-slate-300 mb-2">
                  E-posta Adresi
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    id="login-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ornek@sirketiniz.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition-colors"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="login-password" className="block text-xs font-semibold text-slate-300">
                    Şifre
                  </label>
                  <a
                    href="#forgot"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Şifre sıfırlama servisi entegrasyon aşamasındadır. contact@imtx.win üzerinden talepte bulunabilirsiniz.');
                    }}
                    className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Şifremi Unuttum
                  </a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    id="login-password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-10 pr-10 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300 transition-colors"
                    aria-label="Şifreyi göster/gizle"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded bg-slate-900 border-white/20 text-cyan-500 focus:ring-cyan-400 focus:ring-offset-slate-950"
                />
                <label htmlFor="remember-me" className="ml-2.5 text-xs text-slate-300">
                  Beni bu cihazda hatırla (30 gün)
                </label>
              </div>

              <Button
                type="submit"
                variant="glow"
                size="lg"
                className="w-full shadow-lg shadow-cyan-500/20"
                isLoading={isLoading}
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Giriş Yap
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-white/10 text-center text-xs text-slate-400">
              Henüz bir hesabınız yok mu?{' '}
              <Link to="/register" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
                14 Günlük Ücretsiz Deneme Başlatın
              </Link>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-cyan-500/60" />
            <span>256-bit SSL Uçtan Uca Şifreli Giriş</span>
          </div>
        </div>
      </div>
    </>
  );
};
