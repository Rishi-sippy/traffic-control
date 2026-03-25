import { SoftCard } from './Card'

export function PerformanceCard() {
  return (
    <SoftCard>
      <h3 className="text-lg mb-6 text-gray-300">Performance</h3>

      <div className="h-32 bg-gradient-to-r from-pink-400 via-yellow-400 to-green-400 rounded-full"></div>

      <div className="mt-4 text-gray-400 text-sm">Strategy & Development</div>
    </SoftCard>
  )
}
