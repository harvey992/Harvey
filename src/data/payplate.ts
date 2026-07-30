import type {
  CartItem,
  FoodCategory,
  NotificationItem,
  Restaurant,
  RewardOffer,
  RewardTier,
  WalletTransaction,
} from '@/types/payplate';

export const student = {
  name: 'Maya Chen',
  university: 'University of Cape Town',
  email: 'maya.chen@uct.ac.za',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  verified: true,
  rewardsPoints: 2840,
  walletBalance: 428.4,
  rewardLevel: 4,
};

export const foodCategories: FoodCategory[] = [
  { id: 'all', label: 'All', icon: '🍽️' },
  { id: 'fast', label: 'Fast Food', icon: '🍔' },
  { id: 'asian', label: 'Asian', icon: '🍜' },
  { id: 'indian', label: 'Indian', icon: '🍛' },
  { id: 'healthy', label: 'Healthy', icon: '🥗' },
  { id: 'coffee', label: 'Coffee', icon: '☕' },
  { id: 'dessert', label: 'Dessert', icon: '🍰' },
  { id: 'pizza', label: 'Pizza', icon: '🍕' },
];

export const restaurants: Restaurant[] = [
  {
    id: 'saffron-social',
    name: 'Saffron Social',
    cuisine: 'Modern Indian',
    rating: 4.9,
    reviewCount: 1240,
    rewardPercent: 12,
    distanceMinutes: 8,
    deliveryMinutes: '20-30',
    priceForTwo: 180,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    coverImage: 'https://images.unsplash.com/photo-1585938014922-1176c08c5556?auto=format&fit=crop&w=1200&q=80',
    open: true,
    vegetarian: false,
    studentOffer: '12% cashback on all orders',
    menu: [
      { id: 'ss1', name: 'Butter Chicken', description: 'Tandoori chicken in a creamy tomato gravy', price: 96, image: 'https://images.unsplash.com/photo-1563897539677-7caea47f2902?auto=format&fit=crop&w=400&q=80', category: 'Mains', popular: true },
      { id: 'ss2', name: 'Paneer Tikka Masala', description: 'Grilled paneer, spiced onion gravy', price: 84, image: 'https://images.unsplash.com/photo-1631452180519-c014fe978468?auto=format&fit=crop&w=400&q=80', category: 'Mains', vegetarian: true },
      { id: 'ss3', name: 'Garlic Naan', description: 'Clay oven bread with garlic butter', price: 28, image: 'https://images.unsplash.com/photo-1601050690597-482c6c216d11?auto=format&fit=crop&w=400&q=80', category: 'Sides', vegetarian: true },
      { id: 'ss4', name: 'Mango Lassi', description: 'Yoghurt, mango, cardamom', price: 32, image: 'https://images.unsplash.com/photo-1626078299034-94c1d4c7a5f3?auto=format&fit=crop&w=400&q=80', category: 'Drinks', vegetarian: true, popular: true },
    ],
  },
  {
    id: 'nori-noodles',
    name: 'Nori & Noodles',
    cuisine: 'Japanese Ramen',
    rating: 4.8,
    reviewCount: 890,
    rewardPercent: 10,
    distanceMinutes: 12,
    deliveryMinutes: '25-35',
    priceForTwo: 160,
    image: 'https://images.unsplash.com/photo-1557872965-9d09b9b4f70d?auto=format&fit=crop&w=900&q=80',
    coverImage: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80',
    open: true,
    vegetarian: false,
    studentOffer: 'Free miso soup with ramen',
    menu: [
      { id: 'nn1', name: 'Spicy Miso Ramen', description: 'Egg, nori, chilli oil, chashu pork', price: 86, image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=400&q=80', category: 'Ramen', popular: true },
      { id: 'nn2', name: 'Tonkotsu Ramen', description: '24-hour pork bone broth, egg', price: 92, image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?auto=format&fit=crop&w=400&q=80', category: 'Ramen', popular: true },
      { id: 'nn3', name: 'Vegetable Gyoza', description: 'Pan-fried dumplings, soy dipping sauce', price: 48, image: 'https://images.unsplash.com/photo-1606851090747-83e4c2d0c660?auto=format&fit=crop&w=400&q=80', category: 'Sides', vegetarian: true },
      { id: 'nn4', name: 'Matcha Latte', description: 'Ceremonial matcha, steamed milk', price: 36, image: 'https://images.unsplash.com/photo-1515827479547-7d00e3c0d5d4?auto=format&fit=crop&w=400&q=80', category: 'Drinks', vegetarian: true },
    ],
  },
  {
    id: 'green-bowl',
    name: 'Green Bowl Co.',
    cuisine: 'Healthy Salads',
    rating: 4.7,
    reviewCount: 520,
    rewardPercent: 15,
    distanceMinutes: 5,
    deliveryMinutes: '15-25',
    priceForTwo: 140,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
    coverImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
    open: true,
    vegetarian: true,
    studentOffer: '15% cashback + free topping',
    menu: [
      { id: 'gb1', name: 'Power Protein Bowl', description: 'Quinoa, grilled chicken, avocado', price: 78, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80', category: 'Bowls', popular: true },
      { id: 'gb2', name: 'Buddha Bowl', description: 'Chickpeas, beetroot, tahini', price: 72, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80', category: 'Bowls', vegetarian: true, popular: true },
      { id: 'gb3', name: 'Green Smoothie', description: 'Spinach, banana, ginger, honey', price: 38, image: 'https://images.unsplash.com/photo-1610970881699-46a576be5ff0?auto=format&fit=crop&w=400&q=80', category: 'Drinks', vegetarian: true },
    ],
  },
  {
    id: 'campus-pizza',
    name: 'Campus Pizza Lab',
    cuisine: 'Artisan Pizza',
    rating: 4.6,
    reviewCount: 710,
    rewardPercent: 8,
    distanceMinutes: 10,
    deliveryMinutes: '20-30',
    priceForTwo: 200,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80',
    coverImage: 'https://images.unsplash.com/photo-1513104890138-7c749659a590?auto=format&fit=crop&w=1200&q=80',
    open: false,
    vegetarian: false,
    studentOffer: 'Buy one get one half price',
    menu: [
      { id: 'cp1', name: 'Margherita', description: 'San Marzano tomato, fior di latte, basil', price: 88, image: 'https://images.unsplash.com/photo-1604068549290-fa44cf9014b0?auto=format&fit=crop&w=400&q=80', category: 'Pizza', vegetarian: true, popular: true },
      { id: 'cp2', name: 'Diavola', description: 'Spicy salami, chilli honey', price: 104, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab4b6bc7?auto=format&fit=crop&w=400&q=80', category: 'Pizza', popular: true },
      { id: 'cp3', name: 'Truffle Fries', description: 'Parmesan, truffle oil, parsley', price: 42, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f217?auto=format&fit=crop&w=400&q=80', category: 'Sides', vegetarian: true },
    ],
  },
  {
    id: 'bean-lab',
    name: 'Bean Lab Coffee',
    cuisine: 'Specialty Coffee',
    rating: 4.9,
    reviewCount: 430,
    rewardPercent: 20,
    distanceMinutes: 3,
    deliveryMinutes: '10-15',
    priceForTwo: 90,
    image: 'https://images.unsplash.com/photo-1495774856032-d87590e0a6ec?auto=format&fit=crop&w=900&q=80',
    coverImage: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80',
    open: true,
    vegetarian: true,
    studentOffer: '20% cashback before 9am',
    menu: [
      { id: 'bl1', name: 'Flat White', description: 'Double ristretto, silky milk', price: 28, image: 'https://images.unsplash.com/photo-1561882468-9110e03e0bab?auto=format&fit=crop&w=400&q=80', category: 'Coffee', vegetarian: true, popular: true },
      { id: 'bl2', name: 'Avocado Toast', description: 'Sourdough, smashed avo, chilli flakes', price: 52, image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=400&q=80', category: 'Food', vegetarian: true, popular: true },
      { id: 'bl3', name: 'Almond Croissant', description: 'All-butter pastry, almond cream', price: 32, image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&q=80', category: 'Food', vegetarian: true },
    ],
  },
  {
    id: 'burger-bar',
    name: 'Burger Bar 67',
    cuisine: 'Gourmet Burgers',
    rating: 4.5,
    reviewCount: 980,
    rewardPercent: 10,
    distanceMinutes: 15,
    deliveryMinutes: '25-40',
    priceForTwo: 220,
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=80',
    coverImage: 'https://images.unsplash.com/photo-1568901346375-23c38b825859?auto=format&fit=crop&w=1200&q=80',
    open: true,
    vegetarian: false,
    studentOffer: 'Free fries with any burger',
    menu: [
      { id: 'bb1', name: 'Classic Cheeseburger', description: 'Beef patty, cheddar, special sauce', price: 72, image: 'https://images.unsplash.com/photo-1568901346375-23c38b825859?auto=format&fit=crop&w=400&q=80', category: 'Burgers', popular: true },
      { id: 'bb2', name: 'Spicy Chicken Burger', description: 'Crispy chicken, jalapeño, slaw', price: 68, image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=400&q=80', category: 'Burgers', popular: true },
      { id: 'bb3', name: 'Loaded Fries', description: 'Cheese, bacon, spring onion', price: 46, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f217?auto=format&fit=crop&w=400&q=80', category: 'Sides' },
      { id: 'bb4', name: 'Chocolate Shake', description: 'Belgian chocolate, whipped cream', price: 38, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80', category: 'Drinks' },
    ],
  },
];

export const transactions: WalletTransaction[] = [
  { id: 't1', merchant: 'Nori & Noodles', category: 'Food', total: { amount: 135, currency: 'ZAR' }, createdAt: 'Today', type: 'payment' },
  { id: 't2', merchant: 'Bean Lab Coffee', category: 'Coffee', total: { amount: 56, currency: 'ZAR' }, createdAt: 'Today', type: 'payment' },
  { id: 't3', merchant: 'Reward Cashback', category: 'Cashback', total: { amount: 16.2, currency: 'ZAR' }, createdAt: 'Today', type: 'reward' },
  { id: 't4', merchant: 'Wallet Top-up', category: 'Top Up', total: { amount: 200, currency: 'ZAR' }, createdAt: 'Yesterday', type: 'topup' },
  { id: 't5', merchant: 'Green Bowl Co.', category: 'Food', total: { amount: 78, currency: 'ZAR' }, createdAt: 'Yesterday', type: 'payment' },
  { id: 't6', merchant: 'Saffron Social', category: 'Food', total: { amount: 184, currency: 'ZAR' }, createdAt: '2 days ago', type: 'payment' },
  { id: 't7', merchant: 'Refund — Campus Pizza', category: 'Refund', total: { amount: 52, currency: 'ZAR' }, createdAt: '3 days ago', type: 'refund' },
];

export const rewardTiers: RewardTier[] = [
  { level: 1, name: 'Freshman', minPoints: 0, perks: ['5% cashback', 'Birthday reward'], color: '#94A3B8' },
  { level: 2, name: 'Sophomore', minPoints: 500, perks: ['8% cashback', 'Free coffee monthly'], color: '#0D9F6E' },
  { level: 3, name: 'Junior', minPoints: 1500, perks: ['10% cashback', 'Priority support'], color: '#22C55E' },
  { level: 4, name: 'Senior', minPoints: 2500, perks: ['12% cashback', 'Free entree monthly', 'Early access'], color: '#FBBF24' },
  { level: 5, name: 'Honours', minPoints: 5000, perks: ['15% cashback', 'VIP restaurant access', 'Exclusive events'], color: '#F59E0B' },
];

export const rewardOffers: RewardOffer[] = [
  { id: 'r1', title: 'Free Coffee', description: 'Any coffee at Bean Lab', pointsCost: 300, icon: '☕', partner: 'Bean Lab Coffee' },
  { id: 'r2', title: 'Free Entree', description: 'Any main course at Saffron Social', pointsCost: 800, icon: '🍛', partner: 'Saffron Social' },
  { id: 'r3', title: 'R50 Wallet Credit', description: 'Instant credit to your wallet', pointsCost: 500, icon: '💰', partner: 'PayPlate' },
  { id: 'r4', title: 'Free Dessert', description: 'Any dessert at Burger Bar 67', pointsCost: 250, icon: '🍰', partner: 'Burger Bar 67' },
  { id: 'r5', title: 'Free Ramen', description: 'Any ramen at Nori & Noodles', pointsCost: 700, icon: '🍜', partner: 'Nori & Noodles' },
  { id: 'r6', title: 'Free Buddha Bowl', description: 'Any bowl at Green Bowl Co.', pointsCost: 600, icon: '🥗', partner: 'Green Bowl Co.' },
];

export const notifications: NotificationItem[] = [
  { id: 'n1', title: 'Payment successful', body: 'You paid R135 at Nori & Noodles. You earned 13.5 Plate Points.', time: '12 min ago', type: 'payment', read: false },
  { id: 'n2', title: 'Reward unlocked!', body: 'You reached Level 4 — Senior. Enjoy 12% cashback and a free entree monthly.', time: '1 hour ago', type: 'reward', read: false },
  { id: 'n3', title: 'New student offer', body: 'Bean Lab Coffee is offering 20% cashback before 9am this week.', time: '3 hours ago', type: 'restaurant', read: false },
  { id: 'n4', title: 'Order delivered', body: 'Your order from Green Bowl Co. has been delivered. Rate your experience.', time: '5 hours ago', type: 'system', read: true },
  { id: 'n5', title: 'Cashback received', body: 'R16.20 cashback added to your wallet from Saffron Social.', time: 'Yesterday', type: 'reward', read: true },
  { id: 'n6', title: 'Low balance alert', body: 'Your wallet balance is below R100. Top up to keep ordering.', time: '2 days ago', type: 'system', read: true },
];

export const defaultCart: CartItem[] = [
  { id: 'nn1', name: 'Spicy Miso Ramen', price: 86, image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=300&q=80', restaurant: 'Nori & Noodles', quantity: 1 },
  { id: 'nn3', name: 'Vegetable Gyoza', price: 48, image: 'https://images.unsplash.com/photo-1606851090747-83e4c2d0c660?auto=format&fit=crop&w=300&q=80', restaurant: 'Nori & Noodles', quantity: 2 },
];

export const recentOrders: CartItem[] = [
  { id: 'o1', name: 'Butter Chicken + Garlic Naan', price: 124, image: 'https://images.unsplash.com/photo-1563897539677-7caea47f2902?auto=format&fit=crop&w=300&q=80', restaurant: 'Saffron Social', quantity: 1 },
  { id: 'o2', name: 'Power Protein Bowl', price: 78, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=300&q=80', restaurant: 'Green Bowl Co.', quantity: 1 },
  { id: 'o3', name: 'Flat White + Avocado Toast', price: 80, image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=300&q=80', restaurant: 'Bean Lab Coffee', quantity: 1 },
];

export const favoriteRestaurants = ['saffron-social', 'nori-noodles', 'bean-lab'];

export function getRestaurant(id: string) {
  return restaurants.find((r) => r.id === id);
}
