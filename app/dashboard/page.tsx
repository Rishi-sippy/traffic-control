// app/dashboard/page.tsx

import AnalysisCard from '../components/AnalysisCard'
import OverviewCard from '../components/ChartCard'
import KPIStatsCard from '../components/KPI'
import StrategyCard from '../components/PerformanceCard'
import { SalesCard } from '../components/ProgressCircle'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white px-12 py-12">
      <h1 className="text-5xl font-semibold mb-12 tracking-tight">KPI Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <OverviewCard />
        <KPIStatsCard />

        <SalesCard />
        <StrategyCard />

        <AnalysisCard />
      </div>
    </div>
  )
}
