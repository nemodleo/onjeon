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
  Search
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: '홈', href: '/', icon: Home },
  { 
    name: '환전', 
    href: '/exchange', 
    icon: CreditCard,
    children: [
      { name: 'QR 결제', href: '/exchange/qr-payment' },
      { name: 'OTP 출금', href: '/exchange/otp-withdrawal' },
      { name: 'POS 시스템', href: '/exchange/pos' }
    ]
  },
  { 
    name: '면세점', 
    href: '/duty-free', 
    icon: ShoppingBag,
    children: [
      { name: '대시보드', href: '/duty-free/dashboard' },
      { name: '여행 설정', href: '/duty-free/trip-setup' }
    ]
  },
  { 
    name: 'VAT 환급', 
    href: '/vat-refund', 
    icon: Receipt,
    children: [
      { name: '대시보드', href: '/vat-refund/dashboard' },
      { name: '스탬프 처리', href: '/vat-refund/stamp' }
    ]
  },
  { 
    name: '세관 신고', 
    href: '/customs', 
    icon: FileText,
    children: [
      { name: '설정', href: '/customs/settings' },
      { name: 'NFT 영수증함', href: '/customs/receipts' },
      { name: '미리보기', href: '/customs/preview' }
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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="px-2 py-4">
      <div className="flex items-center justify-between max-w-md mx-auto">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = pathname.startsWith(item.href) && item.href !== '/';
          const isHome = pathname === '/' && item.href === '/';

          return (
            <div 
              key={item.name} 
              className="relative flex-1"
              onTouchStart={() => item.children && setOpenDropdown(item.name)}
              onClick={() => !item.children && setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className={cn(
                  "flex flex-col items-center px-2 py-2 rounded-lg transition-all duration-200 text-center",
                  (isActive || isHome)
                    ? "text-gray-900"
                    : "text-gray-600"
                )}
              >
                <Icon className={cn(
                  "h-5 w-5 mb-1 sm:h-6 sm:w-6",
                  (isActive || isHome) ? "text-blue-500" : "text-gray-600"
                )} />
                <span className={cn(
                  "text-xs sm:text-sm",
                  (isActive || isHome) ? "font-bold text-gray-900" : "font-medium text-gray-600"
                )}>{item.name}</span>
              </Link>

              {item.children && openDropdown === item.name && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50">
                  <div className="py-1">
                    {item.children.map((child, index) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className={cn(
                          "flex items-center px-3 py-2 text-sm transition-colors",
                          pathname === child.href
                            ? "text-gray-900 bg-gray-100 font-semibold"
                            : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                        )}
                        onClick={() => setOpenDropdown(null)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}

export function TopBar() {
  return (
    <div className="flex items-center space-x-3">
      {/* Notifications */}
      <Button variant="ghost" size="sm" className="relative rounded-full">
        <Bell className="w-4 h-4 text-gray-600" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-[8px] text-white font-bold">3</span>
        </div>
      </Button>

      {/* Wallet Balance */}
      <div className="hidden sm:flex items-center space-x-3 px-3 py-2 bg-gray-100 rounded-2xl border border-gray-200">
        <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
          <Wallet className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-sm font-bold text-gray-900">₩ 1,234,567</div>
          <div className="text-xs text-gray-600">KRW-C 잔액</div>
        </div>
      </div>
      
      {/* User Profile */}
      <div className="hidden md:flex items-center space-x-2">
        <Button variant="ghost" size="sm" className="rounded-full">
          <Settings className="w-4 h-4 text-gray-600" />
        </Button>
        <div className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
}