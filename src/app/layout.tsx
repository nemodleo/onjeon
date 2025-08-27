import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import { DesktopNavigation, MobileNavigation, TopBar } from '@/components/ui/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ONJEON - 글로벌 KRW 금융 인프라',
  description: '온전한 글로벌 KRW 금융 서비스를 제공합니다',
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
              <img src="/onjeon_icon.png" alt="ONJEON" className="w-16 h-16 rounded-3xl mx-auto" />
              <div>
                <h2 className="text-2xl font-bold text-black mb-2">ONJEON</h2>
                <p className="text-gray-600 text-sm mb-4">글로벌 KRW 금융 인프라</p>
              </div>
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-black">무수수료 환전</div>
                    <div className="text-xs text-gray-500">전 세계 어디서든 0% 수수료</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-black">즉시 VAT 환급</div>
                    <div className="text-xs text-gray-500">구매와 동시에 자동 환급</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-black">스마트 면세관리</div>
                    <div className="text-xs text-gray-500">AI 기반 한도 추적</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-black">자동 세관신고</div>
                    <div className="text-xs text-gray-500">NFT 영수증 기반 원클릭</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main App */}
          <div className="flex-1 lg:flex-none lg:w-[600px] lg:mx-auto bg-white relative min-h-screen shadow-xl">
            {/* Header - iOS style */}
            <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
              <div className="px-6 pt-12 pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img src="/onjeon_icon.png" alt="ONJEON" className="w-10 h-10 rounded-2xl" />
                    <div>
                      <Link href="/">
                      <h1 className="text-xl font-semibold text-black cursor-pointer hover:opacity-80 transition-opacity">
                        ONJEON
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

            {/* Main Content - Safe area padding */}
            <main className="bg-white min-h-screen pb-36 pt-8">
              <div className="px-6">
                {children}
              </div>
            </main>

            {/* Bottom Navigation - Fixed position */}
            <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full bg-white border-t border-gray-100 z-50 max-w-[600px]">
              <div className="pb-8 pt-2">
                <DesktopNavigation />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}