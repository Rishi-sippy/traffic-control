export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Neon Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black opacity-50 pointer-events-none"></div>

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

      <footer className="py-10 border-t border-gray-800 text-center text-gray-500">© {new Date().getFullYear()} PermitFlow — Made for Smarter Mobility.</footer>
    </main>
  )
}
