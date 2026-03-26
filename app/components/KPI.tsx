import MotionCard from './MotionCard'
import AnimatedNumber from './AnimatedNumber'
import { StatusDot } from './StatutDot'

export default function KPIStatsCard() {
  return (
    <MotionCard>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-300">Revenue</h3>
        <StatusDot />
      </div>

      <h2 className="text-4xl font-bold text-green-400">
        <AnimatedNumber value={23000} />
      </h2>

      <p className="text-xs text-gray-500 mt-2">Live performance</p>
    </MotionCard>
  )
}
