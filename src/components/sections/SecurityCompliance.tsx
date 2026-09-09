import React from 'react';
import { ShieldCheck, Lock, Key, FileCheck, EyeOff, CheckCircle2 } from 'lucide-react';

const complianceList = [
  'SOC 2 Type II Sertifikalı',
  'ISO/IEC 27001 Standardı',
  'GDPR & KVKK Tam Uyum',
  'PCI-DSS Seviye 1 Altyapısı',
  'FIPS 140-3 Donanım HSM Desteği',
  'HIPAA Güvenlik Kılavuzu',
];

export const SecurityCompliance: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950/80 border-t border-white/5 relative overflow-hidden" id="security">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text / Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              Askeri Düzey Güvenlik
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Güvenlik Bir Eklenti Değil, <span className="text-gradient">Temel Taşımızdır</span>
            </h2>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              IMTX, en başından itibaren Sıfır Güven (Zero-Trust) felsefesiyle inşa edildi. Hiçbir aktör varsayılan olarak güvenilir kabul edilmez; ağ içindeki veya dışındaki her istek kriptografik olarak doğrulanır.
            </p>

            {/* Compliance Badges Grid */}
            <div className="space-y-1 mb-2 pt-4">
              <p className="text-xs text-slate-500 italic">
                Aşağıdaki standartlar IMTX'in hedeflediği uyumluluk çerçevelerini ve mimarinin tasarlandığı güvenlik modellerini göstermektedir.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {complianceList.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Tech Security Vault Card */}
          <div className="lg:col-span-5">
            <div className="glass-card p-8 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-6 text-slate-700 pointer-events-none">
                <Lock className="w-32 h-32 opacity-10" />
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">IMTX Vault Kalkanı</h4>
                  <p className="text-xs text-slate-400">Aktif Şifreleme Durumu</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Key className="w-4 h-4 text-violet-400" />
                    <div>
                      <div className="text-xs font-semibold text-white">Post-Quantum Kriptografi</div>
                      <div className="text-[11px] text-slate-400">Kyber &amp; Dilithium Algoritmaları</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-semibold">
                    AKTİF
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <EyeOff className="w-4 h-4 text-cyan-400" />
                    <div>
                      <div className="text-xs font-semibold text-white">Donanımsal İzolasyon</div>
                      <div className="text-[11px] text-slate-400">AMD SEV / Intel SGX Enclave</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-semibold">
                    AKTİF
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileCheck className="w-4 h-4 text-sky-400" />
                    <div>
                      <div className="text-xs font-semibold text-white">Değişmez Denetim Günlükleri</div>
                      <div className="text-[11px] text-slate-400">Cryptographic Append-Only Ledger</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-semibold">
                    KORUMALI
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/5 text-center">
                <span className="text-xs text-slate-400">
                  Tüm veriler dinlenme (at-rest) ve iletim (in-transit) anında AES-256-GCM ile korunmaktadır.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
