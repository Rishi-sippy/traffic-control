// components/dashboard/AnalysisCard.tsx
export default function AnalysisCard() {
  return (
    <div className="neu-card p-6">
      <h3 className="text-lg mb-6 text-gray-300">Analysis</h3>

      <div className="grid grid-cols-3 gap-3">
        <div className="neu-inner h-20"></div>
        <div className="neu-inner h-20"></div>
        <div className="neu-inner h-20"></div>
      </div>

      <div className="mt-6 h-24 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-xl"></div>
    </div>
  )
}
