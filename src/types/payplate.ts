export type Money = { amount: number; currency: 'ZAR' };
export type Restaurant = { id: string; name: string; rating: number; rewardPercent: number; distanceMinutes: number };
export type WalletTransaction = { id: string; merchant: string; total: Money; createdAt: string };
