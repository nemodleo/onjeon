import BottomNavigation from '@/components/BottomNavigation'
import ProgressBar from '@/components/ProgressBar'

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">홈</h1>
        <p className="text-gray-700 font-normal">테라곤 여행 서비스에 오신 것을 환영합니다.</p>
        
        <div className="mt-12 space-y-6">
          <div className="bg-white border border-gray-300 rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-3">주요 서비스</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4">
                <span className="text-2xl icon-blue">💱</span>
                <p className="text-sm font-medium text-gray-700 mt-2">환전</p>
              </div>
              <div className="text-center p-4">
                <span className="text-2xl icon-green">🛍️</span>
                <p className="text-sm font-medium text-gray-700 mt-2">면세점</p>
              </div>
              <div className="text-center p-4">
                <span className="text-2xl icon-orange">💰</span>
                <p className="text-sm font-medium text-gray-700 mt-2">VAT 환급</p>
              </div>
              <div className="text-center p-4">
                <span className="text-2xl icon-purple">📋</span>
                <p className="text-sm font-medium text-gray-700 mt-2">세관 신고</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ProgressBar progress={75} showProgress={true} />
      <BottomNavigation />
    </main>
  )
}