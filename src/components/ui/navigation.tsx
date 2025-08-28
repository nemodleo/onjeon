'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  CreditCard, 
  ShoppingBag, 
  Receipt, 
  FileText, 
  Menu,
  X,
  Wallet,
  Settings,
  User,
  ChevronDown,
  Zap,
  Bell,
  Search,
  ArrowLeftRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: '홈', href: '/', icon: Home },
  { 
    name: '결제', 
    href: '/payment', 
    icon: CreditCard,
    children: [
      { name: 'QR 결제', href: '/payment/qr-payment' },
      { name: 'POS 시스템', href: '/payment/pos' },
      { name: '결제 내역', href: '/payment/history' }
    ]
  },
  { 
    name: '환전', 
    href: '/exchange', 
    icon: ArrowLeftRight,
    children: [
      { name: '즉시 환전', href: '/exchange/instant-exchange' },
      { name: 'OTP 현금 인출', href: '/exchange/otp-withdrawal' },
      { name: '환전 내역', href: '/exchange/history' }
    ]
  },
  { 
    name: '면세 / 환급', 
    href: '/duty-free', 
    icon: ShoppingBag,
    children: [
      { name: '한도 확인', href: '/duty-free/dashboard' },
      { name: 'VAT 환급', href: '/duty-free/vat-refund' },
      { name: '여행 설정', href: '/duty-free/trip-setup' }
    ]
  },
  { 
    name: '세관신고', 
    href: '/customs', 
    icon: FileText,
    children: [
      { name: '자동 신고', href: '/customs/settings' },
      { name: 'NFT 영수증', href: '/customs/receipts' },
      { name: '신고서 확인', href: '/customs/preview' }
    ]
  }
];

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 p-2 rounded-full"
      >
        {isOpen ? (
          <X className="h-5 w-5 text-gray-700" />
        ) : (
          <Menu className="h-5 w-5 text-gray-700" />
        )}
      </Button>

      {/* Mobile overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile menu */}
      <div className={cn(
        "fixed top-0 right-0 z-50 h-full w-80 bg-white/95 backdrop-blur-xl shadow-2xl transform transition-all duration-300 ease-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-lg font-bold text-gray-900">ONJEON</h2>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="rounded-full">
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <nav className="flex-1 overflow-y-auto py-6">
            <div className="px-4 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = pathname.startsWith(item.href) && item.href !== '/';
                const isHome = pathname === '/' && item.href === '/';
                
                return (
                  <div key={item.name} className="space-y-1">
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-200",
                        (isActive || isHome)
                          ? "bg-gray-100 text-gray-900 shadow-sm border border-gray-200"
                          : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                      )}
                      onClick={() => !item.children && setIsOpen(false)}
                    >
                      <Icon className="mr-3 h-5 w-5" />
                      {item.name}
                      {item.children && (
                        <ChevronDown className={cn(
                          "ml-auto h-4 w-4 transition-transform",
                          (isActive || isHome) ? "rotate-180" : ""
                        )} />
                      )}
                    </Link>
                    
                    {item.children && (isActive || isHome) && (
                      <div className="ml-8 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={cn(
                              "block px-4 py-2 text-sm rounded-xl transition-colors",
                              pathname === child.href
                                ? "text-gray-900 bg-gray-100 font-medium"
                                : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </nav>

          <div className="border-t border-gray-100 p-4">
            <div className="flex items-center space-x-3 p-3 rounded-2xl bg-gray-100">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">데모 사용자</div>
                <div className="text-xs text-gray-500">demo@onjeon.app</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DesktopNavigation() {
  const pathname = usePathname();

  return (
    <nav className="w-full h-full">
      <div className="flex h-full">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = pathname.startsWith(item.href) && item.href !== '/';
          const isHome = pathname === '/' && item.href === '/';

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex-1 flex flex-col justify-center items-center py-2 transition-all duration-200",
                (isActive || isHome) ? "bg-black" : "bg-transparent"
              )}
            >
              <Icon className={cn(
                "h-5 w-5 mb-0.5",
                (isActive || isHome) ? "text-white" : "text-gray-400"
              )} />
              <span className={cn(
                "text-[10px]",
                (isActive || isHome) ? "text-white" : "text-gray-400"
              )}>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export function TopBar() {
  return (
    <div className="flex items-center space-x-4">
      {/* Notifications - minimalist */}
      <Button variant="ghost" size="sm" className="relative p-2">
        <Bell className="w-5 h-5 text-black" />
        <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full"></div>
      </Button>

      {/* User Profile - simplified */}
      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
        <User className="w-4 h-4 text-gray-600" />
      </div>
    </div>
  );
}