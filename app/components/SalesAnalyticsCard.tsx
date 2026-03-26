// components/dashboard/SalesAnalyticsCard.tsx

import { SoftCard } from './Card'

export default function SalesAnalyticsCard() {
  return (
    <SoftCard>
      <h3 className="text-lg mb-6 text-gray-300">Sales Analytics</h3>

      <div className="h-32 rounded-xl bg-gradient-to-r from-green-400/20 to-blue-400/20"></div>

      <div className="flex justify-between mt-4 text-sm text-gray-400">
        <span>96%</span>
        <span>Growth</span>
      </div>
    </SoftCard>
  )
}
