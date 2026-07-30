import { Gift, Heart, History, Home, QrCode, Search, Settings, Shield, Store, User, Wallet } from 'lucide-react';

export const appRoutes = [
  { href: '/', label: 'Splash' },
  { href: '/onboarding', label: 'Onboarding' },
  { href: '/login', label: 'Login' },
  { href: '/register', label: 'Register' },
  { href: '/forgot-password', label: 'Forgot Password' },
  { href: '/home', label: 'Home', icon: Home },
  { href: '/discover', label: 'Discover', icon: Search },
  { href: '/restaurants/demo', label: 'Restaurant Details', icon: Store },
  { href: '/restaurants/demo/menu', label: 'Menu' },
  { href: '/cart', label: 'Cart' },
  { href: '/wallet', label: 'Wallet', icon: Wallet },
  { href: '/scanner', label: 'QR Scanner', icon: QrCode },
  { href: '/rewards', label: 'Rewards', icon: Gift },
  { href: '/notifications', label: 'Notifications' },
  { href: '/favorites', label: 'Favorites', icon: Heart },
  { href: '/order-history', label: 'Order History', icon: History },
  { href: '/profile', label: 'Profile', icon: User },
  { href: '/settings', label: 'Settings', icon: Settings },
  { href: '/admin', label: 'Admin', icon: Shield },
] as const;

export const bottomNavRoutes = [
  { href: '/home', label: 'Home', icon: Home },
  { href: '/discover', label: 'Discover', icon: Search },
  { href: '/scanner', label: 'Scan QR', icon: QrCode, featured: true },
  { href: '/rewards', label: 'Rewards', icon: Gift },
  { href: '/profile', label: 'Profile', icon: User },
] as const;
