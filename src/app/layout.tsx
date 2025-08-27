import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { DesktopNavigation, MobileNavigation, TopBar } from '@/components/ui/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ONJEON - 글로벌 KRW 금융 인프라',
  description: '온전한 글로벌 KRW 금융 서비스를 제공합니다',
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
        <div className="min-h-screen bg-white">
          <div className="w-full max-w-sm mx-auto bg-white relative min-h-screen">
            {/* Header - iOS style */}
            <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
              <div className="px-6 pt-12 pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-black rounded-2xl flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">O</span>
                    </div>
                    <div>
                      <h1 className="text-xl font-semibold text-black">
                        ONJEON
                      </h1>
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
            <main className="bg-white min-h-screen pb-28 pt-4">
              <div className="px-6">
                {children}
              </div>
            </main>

            {/* Bottom Navigation - iOS style */}
            <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white border-t border-gray-100 z-50">
              <div className="pb-8 pt-2">
                <DesktopNavigation />
              </div>
            </div>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-100 mt-auto">
              <div className="p-8">
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-7 h-7 bg-gray-800 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">O</span>
                    </div>
                    <span className="text-lg font-bold text-gray-900">ONJEON</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    글로벌 KRW 스테이블코인 인프라 • 제로 환전 수수료 • 즉시 VAT 환급 • 스마트 면세점 관리
                  </p>
                  <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                    <div>© 2024 Terragon Labs</div>
                    <div>•</div>
                    <div>이용약관</div>
                    <div>•</div>
                    <div>개인정보처리방침</div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  )
}