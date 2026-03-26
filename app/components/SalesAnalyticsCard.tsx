// components/dashboard/SalesCard.tsx
export default function SalesCard() {
  return (
    <div className="neu-card p-6">
      <h3 className="text-lg mb-4 text-gray-300">KPI Dashboard Sales</h3>

      <div className="flex gap-4">
        <div className="neu-inner p-4 text-center">
          <p className="text-green-400 font-bold">96%</p>
          <p className="text-xs text-gray-400">Value</p>
        </div>

        <div className="flex-1 h-32 rounded-xl bg-gradient-to-r from-green-400/20 to-blue-400/20"></div>

        <div className="neu-inner p-4 text-center">
          <p className="text-green-400 font-bold">96%</p>
          <p className="text-xs text-gray-400">Value</p>
        </div>
      </div>
    </div>
  )
}
