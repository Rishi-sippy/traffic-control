import { SoftCard } from './Card'

export function OverviewCard() {
  return (
    <SoftCard>
      <h3 className="text-lg mb-4 text-gray-300">Overview</h3>

      <div className="flex gap-6">
        {/* LEFT SMALL CARD */}
        <div
          className="
          flex-1
          p-4
          rounded-xl
          bg-[#0f0f0f]
          shadow-inner
        "
        >
          <div className="h-2 bg-green-400 rounded w-3/4 mb-2"></div>
          <div className="h-2 bg-yellow-400 rounded w-1/2 mb-2"></div>
          <div className="h-2 bg-blue-400 rounded w-2/3"></div>

          <div className="flex justify-between mt-4 text-sm text-gray-400">
            <span>23K</span>
            <span>12K</span>
          </div>
        </div>

        {/* RIGHT BAR CHART MOCK */}
        <div className="flex items-end gap-2 flex-1">
          <div className="w-3 h-16 bg-pink-400 rounded"></div>
          <div className="w-3 h-24 bg-yellow-400 rounded"></div>
          <div className="w-3 h-20 bg-green-400 rounded"></div>
          <div className="w-3 h-28 bg-blue-400 rounded"></div>
        </div>
      </div>
    </SoftCard>
  )
}
