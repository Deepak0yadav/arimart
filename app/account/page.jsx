import React from 'react';
import ProfileHeader from '@/components/account/ProfileHeader';
import StatsTiles from '@/components/account/StatsTiles';
import OrderStatus from '@/components/account/OrderStatus';
import AccountGrid from '@/components/account/AccountGrid';
import { Heart, CreditCard, MapPin, Gift, LogOut, Package } from 'lucide-react';

export default function AccountPage() {
  const stats = [
    { id: 'orders', label: 'Orders', value: 0, color: 'bg-green-50', text: 'text-green-700' },
    { id: 'groupbuys', label: 'Group Buys', value: 9, color: 'bg-emerald-50', text: 'text-emerald-700' },
    { id: 'referrals', label: 'Referrals', value: 0, color: 'bg-green-50', text: 'text-green-700' },
  ];

  const accountTiles = [
    { key: 'theme', label: 'Theme', icon: <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1M4.2 5.6l.7.7M18.8 18.4l.7.7M3 12h1m16 0h1M4.2 18.4l.7-.7M18.8 5.6l.7-.7" /></svg>, href: '/account/theme' },
    { key: 'orders', label: 'My Orders', icon: <Package className="h-5 w-5 text-gray-400" />, href: '/account/orders' },
    { key: 'wallet', label: 'My Wallet', icon: <CreditCard className="h-5 w-5 text-gray-400" />, href: '/account/wallet' },
    { key: 'wishlist', label: 'Wishlist', icon: <Heart className="h-5 w-5 text-gray-400" />, href: '/account/wishlist' },
    { key: 'followed', label: 'Followed Shop', icon: <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" /></svg>, href: '/account/followed' },
    { key: 'groups', label: 'My Joined Groups', icon: <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 10-8 0v4" /></svg>, href: '/account/groups' },
    { key: 'address', label: 'Delivery Address', icon: <MapPin className="h-5 w-5 text-gray-400" />, href: '/account/address' },
    { key: 'share', label: 'Share & Earn', icon: <Gift className="h-5 w-5 text-gray-400" />, href: '/account/share' },
    { key: 'affiliate', label: 'Affiliate Program', icon: <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 7h10v10H7z" /></svg>, href: '/account/affiliate' },
    { key: 'rewards', label: 'My Rewards', icon: <Gift className="h-5 w-5 text-gray-400" />, href: '/account/rewards' },
    { key: 'rate', label: 'Rate Us', icon: <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 17l-5 3 1-5-4-3 5-.5L12 7l2 4.5 5 .5-4 3 1 5z" /></svg>, href: '/account/rate' },
    { key: 'logout', label: 'Logout', icon: <LogOut className="h-5 w-5 text-red-400" />, href: '/account/logout' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ProfileHeader user={{ name: 'Deeps', email: 'abhaypalsingh575@gmail.com', phone: '+91 9536075455' }} />
        <StatsTiles stats={stats} />
        <OrderStatus />
        <AccountGrid tiles={accountTiles} />
      </div>
    </div>
  );
}
