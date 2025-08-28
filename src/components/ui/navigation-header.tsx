'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MobileNavigation } from './navigation';

// Define main pages that should NOT have back button
const mainPages = ['/', '/payment', '/exchange', '/duty-free', '/customs'];

// Define parent page mapping for subpages
const parentPageMap: Record<string, string> = {
  // Payment subpages
  '/payment/qr-payment': '/payment',
  '/payment/pos': '/payment',
  '/payment/history': '/payment',
  
  // Exchange subpages
  '/exchange/instant-exchange': '/exchange',
  '/exchange/otp-withdrawal': '/exchange',
  '/exchange/history': '/exchange',
  
  // Duty-free main subpages
  '/duty-free/duty-free': '/duty-free',
  '/duty-free/refund': '/duty-free',
  
  // Duty-free/duty-free nested subpages
  '/duty-free/duty-free/dashboard': '/duty-free/duty-free',
  '/duty-free/duty-free/trip-setup': '/duty-free/duty-free',
  '/duty-free/duty-free/purchase-history': '/duty-free/duty-free',
  
  // Duty-free/refund subpages
  '/duty-free/refund/dashboard': '/duty-free/refund',
  '/duty-free/refund/stamp': '/duty-free/refund',
  
  // Customs subpages
  '/customs/settings': '/customs',
  '/customs/receipts': '/customs',
  '/customs/preview': '/customs',
};

export function NavigationHeader() {
  const pathname = usePathname();
  const router = useRouter();
  
  const isMainPage = mainPages.includes(pathname);
  const parentPage = parentPageMap[pathname];
  
  // Show back button if not a main page and has a parent
  const showBackButton = !isMainPage && parentPage;
  
  const handleBack = () => {
    if (parentPage) {
      router.push(parentPage);
    }
  };
  
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="px-5 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {showBackButton ? (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleBack}
                className="p-2 -ml-2"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
            ) : (
              <>
                <img src="/onjeon_icon.png" alt="온전" className="w-8 h-8 rounded-xl" />
                <div>
                  <Link href="/">
                    <h1 className="text-base font-semibold text-black cursor-pointer hover:opacity-80 transition-opacity">
                      온전
                    </h1>
                  </Link>
                </div>
              </>
            )}
          </div>
          
          <div className="flex items-center">
            {!showBackButton && (
              <div className="flex items-center space-x-3">
                {/* Notifications */}
                <Button variant="ghost" size="sm" className="relative p-2">
                  <Bell className="w-5 h-5 text-black" />
                  <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full"></div>
                </Button>
                
                {/* User Profile */}
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-gray-600" />
                </div>
              </div>
            )}
            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  );
}