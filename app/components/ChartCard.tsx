// components/dashboard/OverviewCard.tsx
export default function OverviewCard() {
  return (
    <div className="neu-card p-6">
      <h3 className="text-gray-300 mb-6 text-lg">Overview</h3>

      <div className="flex gap-6">
        {/* LEFT PANEL */}
        <div className="flex-1 neu-inner p-4">
          <div className="space-y-2">
            <div className="h-2 bg-pink-400 rounded w-4/5"></div>
            <div className="h-2 bg-yellow-400 rounded w-2/3"></div>
            <div className="h-2 bg-green-400 rounded w-1/2"></div>
          </div>

          <div className="flex justify-between mt-6 text-xs text-gray-400">
            <span>23K</span>
            <span>12K</span>
          </div>
        </div>

        {/* RIGHT BARS */}
        <div className="flex items-end gap-3 flex-1">
          <div className="w-3 h-20 bg-pink-400 rounded"></div>
          <div className="w-3 h-28 bg-yellow-400 rounded"></div>
          <div className="w-3 h-24 bg-green-400 rounded"></div>
          <div className="w-3 h-32 bg-blue-400 rounded"></div>
        </div>
      </div>
    </div>
  )
}
