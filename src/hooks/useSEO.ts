import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
}

const DEFAULT_TITLE = 'IMTX | Next Generation Technology Platform';
const DEFAULT_DESC = 'IMTX, yüksek performanslı dağıtık ağ altyapısı, uçtan uca askeri düzey şifreleme ve otonom ölçeklenebilirlik sunan yeni nesil kurumsal teknoloji platformudur.';
const BASE_URL = 'https://imtx.win';

export function useSEO({ title, description, canonicalPath = '', ogImage }: SEOProps = {}) {
  useEffect(() => {
    // 1. Update Title
    const formattedTitle = title ? `${title} | IMTX` : DEFAULT_TITLE;
    document.title = formattedTitle;

    // 2. Helper to set or update meta tag
    const setMetaTag = (attribute: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const desc = description || DEFAULT_DESC;
    setMetaTag('name', 'description', desc);
    setMetaTag('property', 'og:title', formattedTitle);
    setMetaTag('property', 'og:description', desc);
    setMetaTag('name', 'twitter:title', formattedTitle);
    setMetaTag('name', 'twitter:description', desc);

    const fullUrl = `${BASE_URL}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;
    setMetaTag('property', 'og:url', fullUrl);
    setMetaTag('name', 'twitter:url', fullUrl);

    if (ogImage) {
      setMetaTag('property', 'og:image', ogImage);
      setMetaTag('name', 'twitter:image', ogImage);
    }

    // 3. Update Canonical link
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);
  }, [title, description, canonicalPath, ogImage]);
}
