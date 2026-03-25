import { SoftCard } from './Card'

export function StatsCard() {
  return (
    <SoftCard>
      <h3 className="text-lg mb-6 text-gray-300">KPI Dashboard</h3>

      <div className="grid grid-cols-2 gap-4">
        {[96, 75, 50, 85].map((val, i) => (
          <div
            key={i}
            className="
              p-4
              rounded-xl
              bg-[#0f0f0f]
              text-center
              shadow-inner
            "
          >
            <p className="text-green-400 font-bold text-lg">{val}%</p>
            <p className="text-xs text-gray-500">Data Analysis</p>
          </div>
        ))}
      </div>

      <div className="mt-6 text-sm text-gray-400">277.2M Total Revenue</div>
    </SoftCard>
  )
}
