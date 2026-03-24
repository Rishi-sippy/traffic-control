export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-yellow-400 text-transparent bg-clip-text">Contact Us</h1>

        <form className="space-y-6 bg-black/40 border border-gray-800 p-8 rounded-2xl backdrop-blur-xl">
          <input type="text" placeholder="Your Name" className="w-full p-4 bg-black border border-gray-700 rounded-xl outline-none" />

          <input type="email" placeholder="Your Email" className="w-full p-4 bg-black border border-gray-700 rounded-xl outline-none" />

          <textarea placeholder="Your Message" rows={5} className="w-full p-4 bg-black border border-gray-700 rounded-xl outline-none" />

          <button className="w-full py-4 bg-gradient-to-r from-green-500 to-yellow-500 text-black font-bold rounded-xl hover:scale-[1.02] transition">Send Message →</button>
        </form>
      </div>
    </main>
  )
}
