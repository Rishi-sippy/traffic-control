import { FadeIn } from '../components/Fadein'
import KPIStatsCard from '../components/KPI'
import LiveChart from '../components/LiveChart'
import MotionCard from '../components/MotionCard'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white p-10">
      <FadeIn>
        <h1 className="text-5xl font-bold mb-12">KPI Dashboard</h1>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <KPIStatsCard />
        <KPIStatsCard />
        <KPIStatsCard />

        <MotionCard>
          <LiveChart />
        </MotionCard>

        <MotionCard>
          <LiveChart />
        </MotionCard>

        <MotionCard>
          <LiveChart />
        </MotionCard>
      </div>
    </div>
  )
}
