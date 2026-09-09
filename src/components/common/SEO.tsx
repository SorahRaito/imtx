import React from 'react';
import { useSEO } from '../../hooks/useSEO';

interface SEOComponentProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
}

export const SEO: React.FC<SEOComponentProps> = (props) => {
  useSEO(props);
  return null;
};
