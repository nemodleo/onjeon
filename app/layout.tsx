import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '테라곤 네비게이션',
  description: '여행자를 위한 종합 서비스 앱',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}