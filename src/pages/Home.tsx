import React from 'react';
import { SEO } from '../components/common/SEO';
import { Hero } from '../components/sections/Hero';
import { FeaturesGrid } from '../components/sections/FeaturesGrid';
import { KeyAdvantages } from '../components/sections/KeyAdvantages';
import { ProductsServices } from '../components/sections/ProductsServices';
import { SecurityCompliance } from '../components/sections/SecurityCompliance';
import { FAQSection } from '../components/sections/FAQSection';
import { CtaBanner } from '../components/sections/CtaBanner';

export const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Yeni Nesil Dağıtık Teknoloji Platformu"
        description="IMTX; ultra düşük gecikme, otonom ölçeklenebilirlik ve uçtan uca askeri düzey şifreleme sunan küresel kurumsal teknoloji altyapısıdır."
        canonicalPath="/"
      />

      <div className="relative">
        <Hero />
        <FeaturesGrid />
        <KeyAdvantages />
        <ProductsServices />
        <SecurityCompliance />
        <FAQSection />
        <CtaBanner />
      </div>
    </>
  );
};
