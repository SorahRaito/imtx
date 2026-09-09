# IMTX | Next Generation Technology Platform

[![Cloudflare Pages](https://img.shields.io/badge/Deployment-Cloudflare%20Pages-f38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://imtx.win)
[![React](https://img.shields.io/badge/React-18.3-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6.0-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

**IMTX**, küresel ölçekte ultra düşük gecikme (<12ms), askeri düzeyde kuantum dirençli şifreleme ve otonom ölçeklenebilirlik sunan yeni nesil dağıtık teknoloji platformudur. 

Resmi üretim (production) alan adı: **[https://imtx.win](https://imtx.win)**

---

## 🚀 Temel Özellikler

- **Modern & Fütüristik Koyu Tasarım**: Derin uzay estetiği, cam morfizasyonu (glassmorphism), özel siber ızgara arka planı ve mikro etkileşimler.
- **Tavizsiz Mobil Uyumluluk (Responsive)**: 320px, 360px, 375px, 390px, 412px, 768px, 1024px ve 1440px+ ekranlarda sıfır yatay taşma (overflow-x korumalı).
- **SEO & Sosyal Medya Optimizasyonu**:
  - Sayfa bazlı dinamik `title`, `meta description` ve `canonical` yönetimi
  - Open Graph ve Twitter Cards etiketleri
  - `public/robots.txt`, `public/sitemap.xml` ve fütüristik SVG favicon
- **Cloudflare Pages SPA Desteği**: `public/_redirects` kuralı sayesinde alt rotalarda (örn: `/features`, `/pricing`) doğrudan sayfa yenilendiğinde 404 hatasını önleyen `%100` uyumlu yapılandırma.
- **Modüler & Tip Güvenli Mimari**:
  - `src/services/authService.ts`: Gelecekteki gerçek kimlik doğrulama / JWT entegrasyonlarına hazır soyutlama katmanı.
  - `src/services/contactService.ts`: Arka uç bağlantısı açıkça belirtilen ve doğrudan `mailto:contact@imtx.win` yedeği sunan dürüst iletişim servisi.
  - `src/services/paymentService.ts`: Stripe, iyzico ve PayTR ödeme altyapılarına hazır oturum yönetimi.
- **Hata Yönetimi (Error Boundary)**: Beklenmedik render hatalarını yakalayan ve kullanıcı dostu arayüz sunan koruma katmanı.

---

## 📂 Proje Dizin Yapısı

```
imtx/
├── public/
│   ├── _redirects            # Cloudflare Pages SPA rewrite (/* /index.html 200)
│   ├── favicon.svg           # IMTX fütüristik SVG favicon
│   ├── og-image.svg          # Open Graph sosyal medya görseli
│   ├── robots.txt            # SEO arama motoru direktifleri
│   └── sitemap.xml           # imtx.win site haritası
├── src/
│   ├── assets/               # Statik medya ve logolar
│   ├── components/
│   │   ├── common/           # Logo, SEO, Button, ErrorBoundary, ScrollToTop
│   │   ├── layout/           # Navbar, Footer, MainLayout
│   │   └── sections/         # Hero, FeaturesGrid, KeyAdvantages, ProductsServices, etc.
│   ├── hooks/
│   │   ├── useScroll.ts      # Navbar cam ve blur efekti tetikleyicisi
│   │   └── useSEO.ts         # Sayfa bazlı başlık ve meta etiket yöneticisi
│   ├── pages/
│   │   ├── Home.tsx          # Ana Sayfa (Tüm bölümlerle eksiksiz)
│   │   ├── About.tsx         # Hakkımızda & Vizyon
│   │   ├── Features.tsx      # Derinlemesine teknik yetenekler & CLI
│   │   ├── Pricing.tsx       # Fiyatlandırma, aylık/yıllık geçiş & ödeme modalı
│   │   ├── Contact.tsx       # İletişim formu & doğrudan e-posta köprüsü
│   │   ├── Login.tsx         # Giriş konsolu
│   │   ├── Register.tsx      # Kayıt ekranı (şifre güç ölçerli)
│   │   └── NotFound.tsx      # 404 Hata ekranı
│   ├── services/             # authService, contactService, paymentService
│   ├── styles/
│   │   └── index.css         # Tailwind direktifleri, glassmorphism ve animasyonlar
│   ├── types/
│   │   └── index.ts          # TypeScript arayüz ve modelleri
│   ├── App.tsx               # Rota ve layout tanımları
│   └── main.tsx              # React DOM giriş noktası
├── .env.example              # Çevre değişkenleri şablonu
├── .gitignore                # Git izleme dışı kuralları
├── index.html                # Kök HTML, fontlar ve meta veriler
├── package.json              # Paket bağımlılıkları ve scriptler
├── tailwind.config.js        # IMTX özel renk paleti
├── tsconfig.json             # TypeScript konfigürasyonu
└── vite.config.ts            # Vite derleyici ve path alias ayarları
```

---

## 🛠️ Yerel Geliştirme (Local Development)

### Gereksinimler
- Node.js (v18.0.0 veya üstü)
- npm (v9.0.0 veya üstü)

### 1. Depoyu Klonlayın veya İndirin
```bash
git clone https://github.com/KULLANICI_ADINIZ/imtx.git
cd imtx
```

### 2. Bağımlılıkları Yükleyin
```bash
npm install
```
*(Windows PowerShell ortamında script kısıtlaması varsa `npm.cmd install` kullanabilirsiniz.)*

### 3. Çevre Değişkenlerini Ayarlayın
`.env.example` dosyasını `.env` olarak kopyalayın:
```bash
cp .env.example .env
```

### 4. Geliştirme Sunucusunu Başlatın
```bash
npm run dev
```
Uygulama `http://localhost:5173` adresinde çalışacaktır.

---

## 📦 Production Derlemesi (Build)

Uygulamanın optimize edilmiş production paketini derlemek için:

```bash
npm run build
```

Bu komut TypeScript denetimini tamamlar (`tsc -b`) ve üretim çıktısını `dist/` klasörüne yazar. 

Build çıktısını yerel ortamda test etmek için:
```bash
npm run preview
```

---

## 🌐 Cloudflare Pages Dağıtımı (Deployment Rehberi)

IMTX, Cloudflare Pages üzerinde sıfır yapılandırmayla çalışacak şekilde hazırlanmıştır.

### Adım 1: GitHub Deposunu Oluşturun
1. GitHub hesabınızda `imtx` adında yeni bir depo (repository) açın.
2. Yerel projenizi GitHub'a gönderin:
   ```bash
   git init
   git add .
   git commit -m "feat: initial production-ready IMTX platform"
   git branch -M main
   git remote add origin https://github.com/KULLANICI_ADINIZ/imtx.git
   git push -u origin main
   ```

### Adım 2: Cloudflare Pages Projesi Oluşturun
1. [Cloudflare Dashboard](https://dash.cloudflare.com/) hesabınıza giriş yapın.
2. Sol menüden **Workers & Pages** > **Create application** > **Pages** sekmesine gelin.
3. **Connect to Git** butonuna tıklayın ve GitHub deponuzu (`imtx`) seçin.
4. **Build settings** ayarlarını aşağıdaki gibi yapılandırın:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` *(veya boş bırakın)*
5. **Environment variables (Production)** bölümüne ekleyin:
   - `VITE_APP_URL` = `https://imtx.win`
   - `VITE_APP_NAME` = `IMTX`
6. **Save and Deploy** butonuna tıklayın. Cloudflare Pages otomatik olarak projeyi derleyip yayına alacaktır.

---

## 🌍 imtx.win Özel Domain Bağlama

1. Cloudflare Pages projenizin paneline girin.
2. **Custom domains** sekmesine tıklayın.
3. **Set up a custom domain** butonuna basın.
4. `imtx.win` alan adınızı girin ve **Continue** seçeneğini tıklayın.
5. Domain adınız zaten Cloudflare DNS üzerinde ise CNAME kaydı otomatik olarak eklenecek ve SSL/TLS sertifikası (Universal SSL) birkaç dakika içinde aktifleşecektir.
6. İsteğe bağlı olarak `www.imtx.win` için de aynı adımı tekrarlayabilir veya Cloudflare Page Rules ile apex domain'e (`imtx.win`) yönlendirebilirsiniz.

---

## 🔒 Güvenlik

- Proje içerisinde hiçbir hassas token, API anahtarı veya gizli şifre hardcode edilmemiştir.
- Tüm değişkenler `VITE_` ön ekiyle standart çevre değişkeni mimarisine bağlanmıştır.

---

## 📄 Lisans

Bu proje kurumsal kullanım ve özel dağıtım haklarına tabidir. © 2026 IMTX Global Technologies Inc.
