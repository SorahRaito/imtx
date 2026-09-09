export interface NavLinkItem {
  name: string;
  href: string;
  isExternal?: boolean;
}

export interface MetricStat {
  label: string;
  value: string;
  suffix?: string;
  description: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  category?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: number;
  priceYearly: number;
  popular?: boolean;
  features: string[];
  ctaText: string;
  ctaAction: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'technology' | 'billing' | 'security';
}

export interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  role: string;
  token?: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}
