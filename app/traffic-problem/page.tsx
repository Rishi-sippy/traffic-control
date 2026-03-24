export default function TrafficProblemPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-32">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-red-400">Bengaluru’s Traffic Crisis</h1>

        <p className="text-gray-400 max-w-3xl mx-auto mb-16">Rapid urban growth and increasing private vehicle usage have made Bengaluru one of the most congested cities in India.</p>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-8 bg-black/40 border border-gray-800 rounded-2xl">
            <h2 className="text-4xl font-bold text-yellow-400">5+ hrs</h2>
            <p className="text-gray-400 mt-2">Daily commute time</p>
          </div>

          <div className="p-8 bg-black/40 border border-gray-800 rounded-2xl">
            <h2 className="text-4xl font-bold text-green-400">+70%</h2>
            <p className="text-gray-400 mt-2">Vehicle growth</p>
          </div>

          <div className="p-8 bg-black/40 border border-gray-800 rounded-2xl">
            <h2 className="text-4xl font-bold text-red-400">40%</h2>
            <p className="text-gray-400 mt-2">Unnecessary trips</p>
          </div>
        </div>
      </div>
    </main>
  )
}
