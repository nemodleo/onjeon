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
  User
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
      { name: 'OTP 인출', href: '/exchange/otp-withdrawal' },
      { name: 'POS 시스템', href: '/exchange/pos' }
    ]
  },
  { 
    name: '면세', 
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
      { name: '환급 현황', href: '/vat-refund/dashboard' },
      { name: '스탬프 처리', href: '/vat-refund/stamp' }
    ]
  },
  { 
    name: '세관신고', 
    href: '/customs', 
    icon: FileText,
    children: [
      { name: '신고 설정', href: '/customs/settings' },
      { name: 'NFT 영수증', href: '/customs/receipts' },
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
        className="relative z-50"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile menu */}
      <div className={cn(
        "fixed top-0 right-0 z-50 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-lg font-semibold">메뉴</h2>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <nav className="flex-1 overflow-y-auto">
            <div className="px-4 py-6 space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = pathname.startsWith(item.href) && item.href !== '/';
                const isHome = pathname === '/' && item.href === '/';
                
                return (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center px-3 py-2 rounded-xl text-sm font-medium transition-colors",
                        (isActive || isHome)
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className="mr-3 h-5 w-5" />
                      {item.name}
                    </Link>
                    
                    {item.children && (isActive || isHome) && (
                      <div className="ml-8 mt-2 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={cn(
                              "block px-3 py-2 text-sm rounded-lg transition-colors",
                              pathname === child.href
                                ? "text-blue-600 bg-blue-50 font-medium"
                                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
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

          <div className="border-t p-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-sm font-medium">사용자</div>
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
    <nav className="hidden lg:flex items-center space-x-1">
      {navigation.map((item) => {
        const Icon = item.icon;
        const isActive = pathname.startsWith(item.href) && item.href !== '/';
        const isHome = pathname === '/' && item.href === '/';

        return (
          <div key={item.name} className="relative group">
            <Link
              href={item.href}
              className={cn(
                "flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                (isActive || isHome)
                  ? "bg-blue-50 text-blue-700 border border-blue-200"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              )}
            >
              <Icon className="mr-2 h-4 w-4" />
              {item.name}
            </Link>

            {item.children && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className={cn(
                        "block px-3 py-2 text-sm rounded-lg transition-colors",
                        pathname === child.href
                          ? "text-blue-600 bg-blue-50 font-medium"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
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
    </nav>
  );
}

export function TopBar() {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <Wallet className="w-4 h-4 text-white" />
        </div>
        <div className="hidden sm:block">
          <div className="text-sm font-medium">₩ 1,234,567</div>
          <div className="text-xs text-gray-500">KRW-C 잔액</div>
        </div>
      </div>
      
      <div className="hidden md:flex items-center space-x-2">
        <Button variant="ghost" size="sm">
          <Settings className="w-4 h-4" />
        </Button>
        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
          <User className="w-4 h-4 text-white" />
        </div>
      </div>
    </div>
  );
}