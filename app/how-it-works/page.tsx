export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-32">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-yellow-400 text-transparent bg-clip-text">How PermitFlow Works</h1>

        <p className="text-gray-400 max-w-2xl mx-auto mb-16">A simple yet powerful system designed to regulate vehicle movement and reduce congestion intelligently.</p>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: 'Register Vehicle',
              desc: 'Users register their vehicle and basic commute needs.'
            },
            {
              title: 'Smart Allocation',
              desc: 'Only a fixed % of vehicles are allowed daily using rotation logic.'
            },
            {
              title: 'Optimized Movement',
              desc: 'Reduced congestion leads to faster and smoother traffic.'
            }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-black/40 border border-gray-800 rounded-2xl backdrop-blur-xl hover:border-green-400 transition">
              <h3 className="text-xl font-semibold mb-3 text-green-400">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
