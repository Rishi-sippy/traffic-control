// components/dashboard/KPIStatsCard.tsx
export default function KPIStatsCard() {
  const stats = [96, 75, 50, 85]

  return (
    <div className="neu-card p-6">
      <h3 className="text-gray-300 mb-6 text-lg">KPI Dashboard</h3>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((v, i) => (
          <div key={i} className="neu-inner p-4 text-center">
            <div className="w-14 h-14 mx-auto mb-2 rounded-full border-4 border-green-400 flex items-center justify-center text-sm font-bold">{v}%</div>

            <p className="text-xs text-gray-400">Analysis</p>
          </div>
        ))}
      </div>

      <div className="mt-6 text-sm text-gray-400">277.2M Revenue</div>
    </div>
  )
}
