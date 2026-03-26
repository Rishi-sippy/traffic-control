import { OverviewCard } from "../components/ChartCard";
import { StatsCard } from "../components/KPI";
import { PerformanceCard } from "../components/PerformanceCard";
import { SalesCard } from "../components/ProgressCircle";
import SalesAnalyticsCard from "../components/SalesAnalyticsCard";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white px-10 py-12">
      <h1 className="text-5xl font-bold mb-12">KPI Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <OverviewCard />
        <StatsCard />
        <SalesAnalyticsCard />

        <SalesCard />
        <PerformanceCard />
      </div>
    </div>
  )
}
