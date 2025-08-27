import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { DesktopNavigation, MobileNavigation, TopBar } from '@/components/ui/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Onjeon (온전) - 원화 스테이블코인 글로벌 금융 인프라',
  description: '온전은 단순한 리펀드를 넘어, 여행객이 한국 원화를 안전하게 연결할 수 있는 글로벌 금융 인프라를 지향합니다',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
          {/* Header */}
          <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto px-4">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                      <span className="text-white font-bold text-lg">O</span>
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-gray-900 tracking-tight">
                        ONJEON
                      </h1>
                      <p className="text-xs text-gray-500 -mt-1 font-medium">Global KRW Infrastructure</p>
                    </div>
                  </div>
                  <DesktopNavigation />
                </div>
                
                <div className="flex items-center space-x-4">
                  <TopBar />
                  <MobileNavigation />
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="container mx-auto px-4 py-6">
            <div className="mx-auto max-w-6xl">
              {children}
            </div>
          </main>

          {/* Footer */}
          <footer className="border-t bg-gradient-to-r from-gray-50 to-blue-50 backdrop-blur">
            <div className="container mx-auto px-4 py-12">
              <div className="flex flex-col items-center justify-center space-y-6 text-center">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">O</span>
                  </div>
                  <span className="text-lg font-bold text-gray-900">ONJEON</span>
                </div>
                <p className="text-sm text-gray-600 max-w-lg leading-relaxed">
                  Global KRW Stablecoin Infrastructure • Zero FX Fees • Instant VAT Refund • Smart Duty-Free Management
                </p>
                <div className="flex items-center space-x-6 text-xs text-gray-500">
                  <div>© 2024 Terragon Labs</div>
                  <div>•</div>
                  <div>Built with Next.js & Tailwind</div>
                  <div>•</div>
                  <div>Global KRW Financial Infrastructure</div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}