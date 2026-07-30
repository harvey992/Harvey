export type Money = { amount: number; currency: 'ZAR' };

export type FoodCategory = {
  id: string;
  label: string;
  icon: string;
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  popular?: boolean;
  vegetarian?: boolean;
};

export type Restaurant = {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  reviewCount: number;
  rewardPercent: number;
  distanceMinutes: number;
  deliveryMinutes: string;
  priceForTwo: number;
  image: string;
  coverImage: string;
  open: boolean;
  vegetarian: boolean;
  studentOffer?: string;
  menu: MenuItem[];
};

export type WalletTransaction = {
  id: string;
  merchant: string;
  category: string;
  total: Money;
  createdAt: string;
  type: 'payment' | 'topup' | 'reward' | 'refund';
};

export type RewardTier = {
  level: number;
  name: string;
  minPoints: number;
  perks: string[];
  color: string;
};

export type RewardOffer = {
  id: string;
  title: string;
  description: string;
  pointsCost: number;
  icon: string;
  partner: string;
};

export type NotificationItem = {
  id: string;
  title: string;
  body: string;
  time: string;
  type: 'payment' | 'reward' | 'restaurant' | 'system';
  read: boolean;
};

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  restaurant: string;
  quantity: number;
};
