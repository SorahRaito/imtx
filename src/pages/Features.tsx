import React, { useState } from 'react';
import { SEO } from '../components/common/SEO';
import {
  Globe,
  Shield,
  Zap,
  CheckCircle2,
  Copy,
  Check
} from 'lucide-react';
import { Button } from '../components/common/Button';

export const Features: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'cli' | 'typescript' | 'docker'>('cli');

  const codeSnippets = {
    cli: `# 1. IMTX CLI'yı küresel olarak yükleyin
curl -sSL https://imtx.win/install.sh | bash

# 2. IMTX hesabınızla güvenli bağlantı kurun
imtx login --token $IMTX_API_TOKEN

# 3. Projenizi küresel Anycast ağına anında deploy edin
imtx deploy --env production --regions all-edge`,
    typescript: `import { IMTXClient } from '@imtx/sdk';

// Kuantum güvenli istemciyi ilklendirin
const imtx = new IMTXClient({
  endpoint: 'https://api.imtx.win',
  apiKey: process.env.IMTX_API_KEY,
});

// Mikro ölçekte dağıtık iş kuyruğu başlatın
const session = await imtx.compute.dispatch({
  runtime: 'wasm-edge',
  payload: { transactionId: 'tx_9847120' },
  maxLatencyMs: 15,
});

console.log('Processed at node:', session.nodeLocation);`,
    docker: `# Standart Dockerfile'ınızı değiştirmeden IMTX Edge üzerinde çalıştırın
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# IMTX Edge Container Runtime
LABEL imtx.tier="enterprise"
LABEL imtx.autoscale="true"
EXPOSE 8080
CMD ["npm", "start"]`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <SEO
        title="Özellikler & Teknik Altyapı"
        description="IMTX platformunun derinlemesine teknik yetenekleri, Anycast ağı, kuantum dirençli güvenlik ve developer odaklı SDK ekosistemi."
        canonicalPath="/features"
      />

      <div className="py-16 md:py-24 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-10 left-1/3 w-[600px] h-[350px] bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Zap className="w-3.5 h-3.5" />
              Gelişmiş Mühendislik Standartları
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
              Sınırları Zorlayan <br />
              <span className="text-gradient">Teknolojik Kabiliyetler</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Her milisaniyenin ve her baytın kritik olduğu modern sistemler için sıfırdan tasarlanan çekirdek mimari özelliklerimizi keşfedin.
            </p>
          </div>

          {/* Core Feature Deep-Dives */}
          <div className="space-y-16 mb-24">
            {/* Feature 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              <div className="lg:col-span-6 space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Globe className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Küresel Anycast Yönlendirme &amp; HTTP/3
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  IMTX altyapısı, BGP Anycast protokolü üzerinden dünya genelindeki tüm istekleri kullanıcının coğrafi konumuna en yakın PoP noktasına iletir. QUIC ve HTTP/3 desteği sayesinde paket kaybı yaşanan mobil ağlarda dahi kesintisiz veri aktarımı sağlanır.
                </p>
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Ortalama 8-15 milisaniye küresel gecikme süresi</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>0-RTT el sıkışması (handshake) ile anlık bağlantı</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>DDoS saldırılarını kenarda filtreleyen Anycast kalkanı</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-3 border-b border-white/5">
                    <span>EDGE ROUTING TELEMETRY</span>
                    <span className="text-emerald-400">STABLE</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-300">Frankfurt (FRA-01)</span>
                      <span className="font-mono text-cyan-400">4.1 ms</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-cyan-400 h-full w-[95%]" />
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-300">Istanbul (IST-01)</span>
                      <span className="font-mono text-cyan-400">6.8 ms</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-cyan-400 h-full w-[92%]" />
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-300">New York (NYC-02)</span>
                      <span className="font-mono text-cyan-400">11.4 ms</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-cyan-400 h-full w-[85%]" />
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-300">Singapore (SIN-01)</span>
                      <span className="font-mono text-cyan-400">14.2 ms</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-cyan-400 h-full w-[80%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              <div className="lg:col-span-6 lg:order-2 space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400">
                  <Shield className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Kuantum Uyumlu Sıfır Güven (Zero-Trust) Kalkanı
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Geleneksel SSL/TLS sertifikalarının ötesine geçerek, gelecekteki kuantum hesaplama ataklarına dahi dirençli Kyber ve Dilithium şifreleme anahtarlarını destekliyoruz. Her istek sıkı kimlik denetiminden geçer.
                </p>
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                    <span>L7 Katmanı Yapay Zeka Web Application Firewall (WAF)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                    <span>Otomatik mTLS (Karşılıklı İki Taraflı Şifreleme)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                    <span>Gelişmiş bot ve hesap ele geçirme (credential stuffing) tespiti</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 lg:order-1">
                <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-3 border-b border-white/5">
                    <span>SECURITY FIREWALL LOGS</span>
                    <span className="text-slate-500 text-[10px] px-2 py-0.5 rounded bg-slate-800 border border-white/5 uppercase">Örnek</span>
                  </div>
                  <div className="font-mono text-xs space-y-2 text-slate-300">
                    <div className="p-2.5 rounded bg-emerald-950/20 border border-emerald-500/20 text-emerald-300">
                      [PASS] mTLS auth validated: user_session_881a (Kyber-1024)
                    </div>
                    <div className="p-2.5 rounded bg-red-950/20 border border-red-500/20 text-red-300">
                      [BLOCKED] 14.8M req/s SYN flood mitigated on Edge PoP (FRA)
                    </div>
                    <div className="p-2.5 rounded bg-slate-900 border border-white/5 text-slate-400">
                      [AUDIT] Cryptographic ledger verified. Merkle root integrity: 100%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Code / Developer Integration Section */}
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-3xl font-extrabold text-white tracking-tight mb-3">
                Geliştirici <span className="text-gradient">Deneyimi (DX)</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                CLI, SDK veya Container olarak projenize 5 dakikada entegre edin.
              </p>
            </div>

            <div className="max-w-3xl mx-auto rounded-2xl bg-slate-900 border border-white/10 overflow-hidden shadow-2xl">
              {/* Tab Selector */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab('cli')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                      activeTab === 'cli'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Terminal / CLI
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('typescript')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                      activeTab === 'typescript'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    TypeScript SDK
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('docker')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                      activeTab === 'docker'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Docker Container
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Kopyalandı' : 'Kopyala'}</span>
                </button>
              </div>

              {/* Code Panel */}
              <div className="p-6 bg-imtx-950 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto">
                <pre className="leading-relaxed">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center max-w-xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Performansı Kendi Gözlerinizle Görün
            </h2>
            <p className="text-slate-400 text-sm">
              Tüm bu yetenekler tek bir üyelikle hemen kullanıma hazırdır.
            </p>
            <div className="flex justify-center gap-4">
              <Button to="/register" variant="glow" size="md">
                14 Gün Ücretsiz Deneyin
              </Button>
              <Button to="/pricing" variant="secondary" size="md">
                Planları İnceleyin
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
