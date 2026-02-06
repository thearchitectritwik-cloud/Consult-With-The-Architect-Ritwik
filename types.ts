export enum Currency {
  INR = 'INR',
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP',
}

export interface PricingPlan {
  title: string;
  price: string;
  subtitle: string;
  features: string[];
  recommended: boolean;
  cta: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}