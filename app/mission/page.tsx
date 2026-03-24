export default function MissionPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-32">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-green-400">Our Mission</h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-12">To create a future where urban mobility is efficient, predictable, and stress-free.</p>

        <div className="grid md:grid-cols-3 gap-8">
          {['Reduce congestion', 'Save commuting time', 'Build smarter cities'].map((item, i) => (
            <div key={i} className="p-6 border border-gray-800 rounded-2xl bg-black/40">
              <p className="text-lg text-yellow-400 font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
