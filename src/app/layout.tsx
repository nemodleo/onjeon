import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import { DesktopNavigation, MobileNavigation, TopBar } from '@/components/ui/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '온전(穩錢) - Global Smart Travel Wallet',
  description: '결제·환전·세금 환급·세관신고까지, 온전한 여행 인프라',
  icons: {
    icon: '/onjeon_icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-white`}>
        {/* App Container */}
        <div className="min-h-screen bg-white flex">
          {/* Left Sidebar - Fixed position */}
          <div className="hidden lg:flex flex-col justify-center items-center w-80 bg-gray-50 p-8 fixed left-0 top-0 h-full">
            <div className="text-center space-y-6">
              <img src="/onjeon_icon.png" alt="온전" className="w-16 h-16 rounded-3xl mx-auto" />
              <div>
                <h2 className="text-2xl font-bold text-black mb-2">온전(穩錢)</h2>
                <p className="text-gray-600 text-sm mb-4">Global Smart Travel Wallet</p>
              </div>
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-black">온전한 결제</div>
                    <div className="text-xs text-gray-500">KRW-C로 전 세계 0% 수수료</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-black">온전한 환급</div>
                    <div className="text-xs text-gray-500">NFT 영수증로 즉시 환급</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-black">온전한 세관 신고</div>
                    <div className="text-xs text-gray-500">자동 계산, 원클릭 제출</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-black">온전한 투명성</div>
                    <div className="text-xs text-gray-500">블록체인 기록, 세수 자동화</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main App */}
          <div className="flex-1 lg:flex-none lg:w-[480px] lg:mx-auto bg-white relative min-h-screen shadow-xl">
            {/* Header - iOS style */}
            <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
              <div className="px-5 pt-10 pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img src="/onjeon_icon.png" alt="온전" className="w-8 h-8 rounded-xl" />
                    <div>
                      <Link href="/">
                      <h1 className="text-lg font-semibold text-black cursor-pointer hover:opacity-80 transition-opacity">
                        온전
                      </h1>
                    </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <TopBar />
                    <MobileNavigation />
                  </div>
                </div>
              </div>
            </header>

            {/* Main Content - Scaled padding */}
            <main className="bg-white min-h-screen pb-28 pt-6">
              <div className="px-5">
                {children}
              </div>
            </main>

            {/* Bottom Navigation - Fixed position */}
            <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full bg-white border-t border-gray-100 z-50 max-w-[480px]">
              <div className="pb-6 pt-2">
                <DesktopNavigation />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}