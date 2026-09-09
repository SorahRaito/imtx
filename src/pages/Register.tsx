import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { Eye, EyeOff, Lock, Mail, User, ArrowRight, ShieldCheck, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '../components/common/Button';
import { Logo } from '../components/common/Logo';
import { authService } from '../services/authService';

export const Register: React.FC = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null);

  // Compute password strength
  const getPasswordStrength = () => {
    if (!password) return { score: 0, label: 'Gerekli', color: 'bg-slate-700' };
    let score = 0;
    if (password.length >= 8) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    if (score <= 1) return { score: 25, label: 'Zayıf', color: 'bg-red-500' };
    if (score === 2) return { score: 50, label: 'Orta', color: 'bg-yellow-500' };
    if (score === 3) return { score: 75, label: 'İyi', color: 'bg-sky-400' };
    return { score: 100, label: 'Çok Güçlü', color: 'bg-emerald-400' };
  };

  const strength = getPasswordStrength();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage(null);

    const result = await authService.register({
      fullName,
      email,
      password,
      termsAccepted,
    });

    setIsLoading(false);

    if (result.success) {
      setStatusMessage({ type: 'success', text: result.message });
      setTimeout(() => {
        navigate('/');
      }, 1800);
    } else {
      setStatusMessage({ type: 'error', text: result.message });
    }
  };

  return (
    <>
      <SEO
        title="Kayıt Ol | 14 Gün Ücretsiz Deneme"
        description="IMTX platformunda hesabınızı açın ve yeni nesil dağıtık altyapıyı hemen deneyimleyin."
        canonicalPath="/register"
      />

      <div className="min-h-[calc(100vh-140px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-violet-600/10 blur-[150px] pointer-events-none rounded-full" />

        <div className="max-w-md w-full relative z-10">
          <div className="text-center mb-8">
            <div className="inline-block mb-3">
              <Logo size="lg" showText={false} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Yeni Nesil Altyapıya Katılın
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Kredi kartı gerekmez. 14 gün boyunca tüm özelliklere erişin.
            </p>
          </div>

          <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
            {/* Mock System Notice */}
            <div className="mb-6 p-3 rounded-xl bg-amber-950/20 border border-amber-500/20 flex items-start gap-2 text-xs text-amber-300">
              <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-400" />
              <span>
                <strong>Demo Modu:</strong> Hesap oluşturma servisi henüz aktif değildir. Verileriniz gerçek bir veritabanına kaydedilmeyecektir.
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

            <form onSubmit={handleRegister} className="space-y-5">
              <div>
                <label htmlFor="reg-name" className="block text-xs font-semibold text-slate-300 mb-2">
                  Adınız ve Soyadınız *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    id="reg-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Örn: Burak Kaya"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="reg-email" className="block text-xs font-semibold text-slate-300 mb-2">
                  İş E-postası *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    id="reg-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="burak@sirketiniz.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="reg-pass" className="block text-xs font-semibold text-slate-300 mb-2">
                  Şifre Belirleyin *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    id="reg-pass"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="En az 8 karakter"
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

                {/* Password strength meter */}
                {password && (
                  <div className="mt-2 space-y-1">
                    <div className="flex justify-between text-[11px] text-slate-400">
                      <span>Güç Seviyesi:</span>
                      <span className="font-semibold text-white">{strength.label}</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${strength.color} transition-all duration-300`}
                        style={{ width: `${strength.score}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-start">
                <input
                  id="reg-terms"
                  type="checkbox"
                  required
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="w-4 h-4 mt-0.5 rounded bg-slate-900 border-white/20 text-cyan-500 focus:ring-cyan-400 focus:ring-offset-slate-950"
                />
                <label htmlFor="reg-terms" className="ml-2.5 text-xs text-slate-300 leading-relaxed">
                  IMTX <Link to="/contact#terms" className="text-cyan-400 hover:underline">Hizmet Şartları</Link> ve <Link to="/contact#privacy" className="text-cyan-400 hover:underline">Gizlilik Politikasını</Link> okudum, kabul ediyorum.
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
                Hesabı Oluştur ve Başla
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-white/10 text-center text-xs text-slate-400">
              Zaten bir hesabınız var mı?{' '}
              <Link to="/login" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
                Giriş Yapın
              </Link>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-cyan-500/60" />
            <span>Kişisel verileriniz GDPR &amp; KVKK kapsamında şifrelenir</span>
          </div>
        </div>
      </div>
    </>
  );
};
