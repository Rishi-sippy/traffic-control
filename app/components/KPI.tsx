import CircularProgress from './CircleProgressBar'

export default function KPIStatsCard() {
  const stats = [96, 75, 50, 85]

  return (
    <div className="neu-card p-6">
      <h3 className="mb-6 text-gray-300">KPI Dashboard</h3>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((v, i) => (
          <div key={i} className="neu-inner p-4 text-center">
            <CircularProgress value={v} />
            <p className="text-xs text-gray-400 mt-2">Analysis</p>
          </div>
        ))}
      </div>
    </div>
  )
}
