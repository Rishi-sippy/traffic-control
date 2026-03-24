export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Neon Background Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-purple-900/20 to-black opacity-50 pointer-events-none"></div>

      {/* Local Banner Image */}
      <div className="absolute inset-0 opacity-30 bg-[url('/home-banner.jpg')] bg-cover bg-center"></div>

      {/* Hero Section */}
      <section className="relative mt-24 flex flex-col items-center justify-center text-center px-6 py-32 space-y-6">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-xl">
          A Smarter Permit System <br /> For a Smarter Bengaluru.
        </h1>

        <p className="text-xl max-w-3xl text-gray-300 leading-relaxed">
          Help reduce the city's traffic load by controlling car entry with
          <span className="text-green-400 font-semibold"> regulated permits </span>. Only 25% vehicles are allowed each day — fair, efficient and impact-driven.
        </p>

        <a href="/register" className="mt-6 px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-yellow-500 text-black font-bold text-lg shadow-lg hover:scale-[1.04] transition-transform">
          Join the Mission — Reduce Traffic →
        </a>
      </section>

      {/* Highlight Strip */}
      <section className="py-12 bg-gradient-to-r from-green-600/20 to-yellow-600/20 border-y border-gray-800 text-center">
        <p className="text-xl font-semibold tracking-wide">“Every Day, Only the Cars That Need to Move — Move.”</p>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Live Traffic Simulation</h2>

        <div className="relative h-[400px] rounded-2xl overflow-hidden border border-gray-800 bg-black/40 backdrop-blur-xl">
          {/* Fake moving cars */}
          <div className="absolute w-3 h-3 bg-green-400 rounded-full animate-ping top-1/3 left-10"></div>
          <div className="absolute w-3 h-3 bg-yellow-400 rounded-full animate-ping top-1/2 left-1/2"></div>
          <div className="absolute w-3 h-3 bg-red-500 rounded-full animate-ping bottom-1/4 right-10"></div>

          {/* Grid / roads effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(34,197,94,0.15)_1px,transparent_1px)] [background-size:40px_40px]"></div>

          <p className="absolute bottom-4 left-4 text-sm text-gray-400">Real-time adaptive traffic visualization</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 max-w-6xl mx-auto relative">
        <h2 className="text-4xl font-bold text-center mb-16">Built for Bengaluru’s Traffic Reality</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="p-8 rounded-2xl bg-black/40 border border-gray-800 backdrop-blur-xl hover:border-green-500 transition">
            <h3 className="text-2xl font-semibold mb-3">Traffic-Aware Algorithm</h3>
            <p className="text-gray-400">A rotation logic that ensures only a controlled % of cars enter each day.</p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl bg-black/40 border border-gray-800 backdrop-blur-xl hover:border-yellow-500 transition">
            <h3 className="text-2xl font-semibold mb-3">Smart Signage Compatible</h3>
            <p className="text-gray-400">Ideal for digital road signs, gated communities & tech park displays.</p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl bg-black/40 border border-gray-800 backdrop-blur-xl hover:border-green-400 transition">
            <h3 className="text-2xl font-semibold mb-3">Designed for Smart Communities</h3>
            <p className="text-gray-400">Apartments, corporate campuses & IT parks can instantly reduce congestion.</p>
          </div>
        </div>
      </section>

      {/* WHY BENGALURU NEEDS THIS */}
      <section className="py-24 px-6 max-w-6xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-yellow-400 text-transparent bg-clip-text">Why Bengaluru Needs This</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Bengaluru loses thousands of hours every month due to congestion. A controlled permit system can significantly reduce internal community traffic, making movement smoother and daily life less stressful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* STAT 1 */}
          <div className="p-8 bg-black/40 backdrop-blur-xl rounded-2xl border border-gray-800 hover:border-green-400 transition shadow-lg">
            <h3 className="text-5xl font-extrabold text-green-400">+72%</h3>
            <p className="text-gray-300 mt-3 text-lg">Increase in vehicle density in the last decade</p>
          </div>

          {/* STAT 2 */}
          <div className="p-8 bg-black/40 backdrop-blur-xl rounded-2xl border border-gray-800 hover:border-yellow-400 transition shadow-lg">
            <h3 className="text-5xl font-extrabold text-yellow-400">5 hrs/day</h3>
            <p className="text-gray-300 mt-3 text-lg">Average time lost by commuters in peak traffic</p>
          </div>

          {/* STAT 3 */}
          <div className="p-8 bg-black/40 backdrop-blur-xl rounded-2xl border border-gray-800 hover:border-green-300 transition shadow-lg">
            <h3 className="text-5xl font-extrabold text-green-300">40%</h3>
            <p className="text-gray-300 mt-3 text-lg">Traffic caused by unnecessary private vehicle entries</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a href="/register" className="inline-block px-10 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-yellow-500 text-black font-semibold shadow-xl hover:scale-[1.04] transition">
            Be Part of the Change →
          </a>
        </div>
      </section>

      <footer className="py-10 border-t border-gray-800 text-center text-gray-500">© {new Date().getFullYear()} PermitFlow — Made for Smarter Mobility.</footer>
    </main>
  )
}
