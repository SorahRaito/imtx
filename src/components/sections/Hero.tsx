import React from 'react';
import { ArrowRight, Sparkles, Terminal, ShieldCheck, Zap, Server } from 'lucide-react';
import { Button } from '../common/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      {/* Cyber Grid Pattern Background */}
      <div className="absolute inset-0 cyber-grid opacity-35 pointer-events-none" />

      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-sky-500/10 to-violet-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Top Pill / Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs text-cyan-300 mb-8 backdrop-blur-md shadow-lg shadow-cyan-500/5 hover:border-cyan-400/60 transition-all cursor-default">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span className="font-semibold tracking-wide">IMTX v2.4</span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span className="text-slate-300">Next Generation Technology Platform</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Yeni Nesil <span className="text-gradient">Dağıtık Teknoloji</span> Platformu
          </h1>

          {/* Subtitle / Marketing Copy */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-10">
            IMTX; ultra düşük gecikme, otonom ölçeklenebilirlik ve uçtan uca askeri düzey şifreleme sunan küresel kurumsal altyapıdır. Modern teknoloji mimarinizi geleceğe taşıyın.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
            <Button
              to="/register"
              variant="glow"
              size="lg"
              className="w-full sm:w-auto shadow-xl shadow-cyan-500/20"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
            >
              Hemen Başlayın
            </Button>
            <Button
              to="/features"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Özellikleri Keşfet
            </Button>
          </div>
        </div>

        {/* Futuristic Platform Visual Mockup & Live Telemetry */}
        <div className="relative max-w-5xl mx-auto">
          {/* Outer glow ring */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-sky-500/20 to-violet-600/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>

          <div className="relative rounded-2xl bg-slate-900/90 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl">
            {/* Terminal / Dashboard Top Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-slate-950/70">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">
                  imtx-mesh-network // cluster-eu-central.imtx.win
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                  Demo Önizleme
                </span>
              </div>
            </div>

            {/* Dashboard Content Grid */}
            <div className="p-4 sm:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 bg-slate-950/40">
              {/* Card 1: Network Throughput */}
              <div className="p-5 rounded-xl bg-slate-900/60 border border-white/5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">GLOBAL LATENCY</span>
                  <Zap className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold font-mono text-white">8.4</span>
                  <span className="text-sm font-mono text-cyan-400">ms</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-cyan-400 h-1.5 rounded-full w-[88%]" />
                </div>
                <p className="text-xs text-slate-400">Cloudflare Edge Anycast yönlendirmesi devrede</p>
              </div>

              {/* Card 2: Cryptographic Security */}
              <div className="p-5 rounded-xl bg-slate-900/60 border border-white/5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">SECURITY SHIELD</span>
                  <ShieldCheck className="w-4 h-4 text-violet-400" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold font-mono text-white">Zero-Trust</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-400 to-violet-500 h-1.5 rounded-full w-full" />
                </div>
                <p className="text-xs text-slate-400">Post-Quantum &amp; 256-bit AES uçtan uca şifreli</p>
              </div>

              {/* Card 3: Node Cluster State */}
              <div className="p-5 rounded-xl bg-slate-900/60 border border-white/5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">DISTRIBUTED CLUSTERS</span>
                  <Server className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold font-mono text-white">310+</span>
                  <span className="text-xs font-mono text-slate-400">PoP Hedef</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-emerald-400 h-1.5 rounded-full w-[99%]" />
                </div>
                <p className="text-xs text-slate-400">Planlanan global dağıtım mimarisi</p>
              </div>

              {/* Code Console Preview - Demo / Illustration */}
              <div className="md:col-span-3 p-4 sm:p-5 rounded-xl bg-imtx-950 border border-white/5 font-mono text-xs text-slate-300 overflow-x-auto">
                <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-white/5 text-slate-400">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>IMTX CLI — Örnek Bağlantı Akışı</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 border border-white/5 text-slate-500 uppercase tracking-wider">Demo</span>
                </div>
                <pre className="text-slate-300 leading-relaxed">
                  <code>
                    <span className="text-slate-500">$</span> <span className="text-cyan-400">curl</span> -sSL https://imtx.win/install.sh | bash<br />
                    <span className="text-slate-500">$</span> <span className="text-cyan-400">imtx</span> connect --cluster global-edge --secure<br />
                    <span className="text-emerald-400">✓ [SUCCESS] Authenticated to IMTX Mesh Fabric. Node ID: imtx-0x792f</span><br />
                    <span className="text-emerald-400">✓ [STATUS] Encryption verified. Realtime throughput: 1.48 Gbps. Ready.</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Core Metrics Bar */}
        <div className="mt-16 pt-12 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono mb-1 text-gradient">
              %99.999
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">
              SLA Uptime Garantisi
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono mb-1 text-gradient">
              &lt; 12ms
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">
              Global Ortalama Gecikme
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono mb-1 text-gradient">
              310+
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">
              Global Edge PoP Noktası
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono mb-1 text-gradient">
              10M+
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">
              Saniyelik İşlem Kapasitesi
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
