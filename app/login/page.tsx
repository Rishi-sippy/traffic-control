'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleLogin(e: any) {
    e.preventDefault()
    setLoading(true)

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    })

    const data = await res.json()

    if (!res.ok) {
      setError(data.error || 'Login failed')
      setLoading(false)
      return
    }

    // Login Success → redirect to dashboard
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-2xl border border-gray-700 shadow-xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input type="email" className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-green-400 outline-none" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div>
            <label className="text-sm text-gray-300">Password</label>
            <input type="password" className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-green-400 outline-none" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <button type="submit" disabled={loading} className="w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-yellow-500 text-black font-bold hover:opacity-90 transition">
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  )
}
