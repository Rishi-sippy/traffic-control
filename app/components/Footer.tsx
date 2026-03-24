export function Footer() {
  return (
    <footer className="relative bg-black text-white border-t border-gray-800 overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 via-transparent to-yellow-500/10 pointer-events-none"></div>

      {/* Top CTA */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-yellow-400 text-transparent bg-clip-text">Ready to Transform Bengaluru Traffic?</h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">Join the movement towards smarter mobility. Reduce congestion, save time, and make every commute count.</p>

        <a href="/register" className="inline-block px-10 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-yellow-500 text-black font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,197,94,0.4)]">
          Get Your Permit →
        </a>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800"></div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-yellow-400 text-transparent bg-clip-text">PermitFlow</h3>
          <p className="text-gray-400 leading-relaxed">A smarter permit system designed to reduce traffic congestion and transform urban mobility in Bengaluru.</p>
        </div>

        {/* Product */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-green-400">Product</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="/simulation" className="hover:text-white transition">
                Live Simulation
              </a>
            </li>
            <li>
              <a href="/how-it-works" className="hover:text-white transition">
                How it Works
              </a>
            </li>
            <li>
              <a href="/features" className="hover:text-white transition">
                Features
              </a>
            </li>
            <li>
              <a href="/pricing" className="hover:text-white transition">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-yellow-400">Company</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="/about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:text-white transition">
                Careers
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-white transition">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-green-300">Stay Updated</h4>

          <p className="text-gray-400 mb-4 text-sm">Get updates on traffic insights & smart mobility.</p>

          <div className="flex items-center bg-black/40 border border-gray-700 rounded-xl overflow-hidden backdrop-blur-xl">
            <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 bg-transparent text-sm outline-none" />
            <button className="px-4 py-3 bg-gradient-to-r from-green-500 to-yellow-500 text-black font-semibold text-sm hover:opacity-90">Join</button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} PermitFlow. All rights reserved.</p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-white transition">
              Privacy
            </a>
            <a href="/terms" className="hover:text-white transition">
              Terms
            </a>
            <a href="/cookies" className="hover:text-white transition">
              Cookies
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Glow Line */}
      <div className="h-[2px] bg-gradient-to-r from-green-500 via-yellow-500 to-green-500 opacity-60"></div>
    </footer>
  )
}
