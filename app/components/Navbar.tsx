'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full fixed top-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">PermitFlow</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <Link href="/how-it-works" className="nav-link">
            How It Works
          </Link>
          <Link href="/traffic-problem" className="nav-link">
            Traffic Problem
          </Link>
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/mission" className="nav-link">
            Mission
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>

          <Link href="/login" className="px-5 py-2 bg-gradient-to-r from-green-500 to-yellow-500 text-black font-semibold rounded-xl shadow-md hover:scale-[1.04] transition">
            Login
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 rounded-lg border border-white/20" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 border-t border-white/10 px-6 py-4 space-y-4">
          <Link href="/how-it-works" className="mobile-link" onClick={() => setOpen(false)}>
            How It Works
          </Link>
          <Link href="/traffic-problem" className="mobile-link" onClick={() => setOpen(false)}>
            Traffic Problem
          </Link>
          <Link href="/about" className="mobile-link" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/mission" className="mobile-link" onClick={() => setOpen(false)}>
            Mission
          </Link>
          <Link href="/contact" className="mobile-link" onClick={() => setOpen(false)}>
            Contact
          </Link>

          <Link href="/login" className="block w-full text-center py-2 bg-gradient-to-r from-green-500 to-yellow-500 text-black font-bold rounded-xl" onClick={() => setOpen(false)}>
            Login
          </Link>
        </div>
      )}
    </nav>
  )
}
