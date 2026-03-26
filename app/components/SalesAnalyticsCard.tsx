import LineChartUI from './Chart'

export default function SalesCard() {
  return (
    <div className="neu-card p-6">
      <h3 className="mb-4 text-gray-300">Sales Analytics</h3>

      <LineChartUI />
    </div>
  )
}
