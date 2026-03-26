'use client'

import { LineChart, Line, ResponsiveContainer, Area } from 'recharts'

const data = [{ value: 200 }, { value: 400 }, { value: 300 }, { value: 600 }, { value: 500 }]

export default function LiveChart() {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <LineChart data={data}>
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22c55e" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
          </linearGradient>
        </defs>

        <Area type="monotone" dataKey="value" stroke="#22c55e" fill="url(#g)" strokeWidth={3} />

        <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={2} dot={{ r: 4 }} isAnimationActive />
      </LineChart>
    </ResponsiveContainer>
  )
}
