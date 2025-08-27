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
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
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
                          ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 shadow-sm border border-blue-100"
                          : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
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
                                ? "text-blue-600 bg-blue-50 font-medium"
                                : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
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
            <div className="flex items-center space-x-3 p-3 rounded-2xl bg-gradient-to-r from-gray-50 to-blue-50">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
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
    <nav className="px-6 py-3 overflow-x-auto">
      <div className="flex items-center space-x-2 min-w-max">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = pathname.startsWith(item.href) && item.href !== '/';
          const isHome = pathname === '/' && item.href === '/';

          return (
            <div 
              key={item.name} 
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className={cn(
                  "flex items-center px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap",
                  (isActive || isHome)
                    ? "bg-blue-500 text-white shadow-md"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                )}
              >
                <Icon className="mr-2 h-4 w-4" />
                {item.name}
                {item.children && (
                  <ChevronDown className={cn(
                    "ml-1 h-3 w-3 transition-transform",
                    openDropdown === item.name ? "rotate-180" : ""
                  )} />
                )}
              </Link>

              {item.children && openDropdown === item.name && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50">
                  <div className="py-2">
                    {item.children.map((child, index) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className={cn(
                          "flex items-center px-4 py-3 text-sm transition-colors",
                          pathname === child.href
                            ? "text-blue-600 bg-blue-50 font-semibold"
                            : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        )}
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
      {/* Search */}
      <Button variant="ghost" size="sm" className="hidden md:flex rounded-full">
        <Search className="w-4 h-4 text-gray-600" />
      </Button>

      {/* Notifications */}
      <Button variant="ghost" size="sm" className="relative rounded-full">
        <Bell className="w-4 h-4 text-gray-600" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-[8px] text-white font-bold">3</span>
        </div>
      </Button>

      {/* Wallet Balance */}
      <div className="hidden sm:flex items-center space-x-3 px-3 py-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100">
        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
          <Wallet className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-sm font-bold text-gray-900">₩ 1,234,567</div>
          <div className="text-xs text-green-600">KRW-C 잔액</div>
        </div>
      </div>
      
      {/* User Profile */}
      <div className="hidden md:flex items-center space-x-2">
        <Button variant="ghost" size="sm" className="rounded-full">
          <Settings className="w-4 h-4 text-gray-600" />
        </Button>
        <div className="w-9 h-9 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/25">
          <User className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
}