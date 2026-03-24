export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-32">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-yellow-400 text-transparent bg-clip-text">About PermitFlow</h1>

        <p className="text-gray-400 text-lg leading-relaxed">
          PermitFlow is a smart mobility solution designed to reduce traffic congestion by regulating vehicle entry through a fair and optimized permit system. Instead of expanding roads, we optimize how they are used.
        </p>

        <div className="mt-16 p-8 bg-black/40 border border-gray-800 rounded-2xl backdrop-blur-xl">
          <h3 className="text-xl font-semibold text-green-400 mb-3">Why We Built This</h3>
          <p className="text-gray-400">Cities are growing faster than infrastructure. We believe smarter systems, not bigger roads, are the future of urban mobility.</p>
        </div>
      </div>
    </main>
  )
}
