'use client'

import { LineChart, Line, ResponsiveContainer, Tooltip, Area } from 'recharts'

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 700 },
  { name: 'Mar', value: 500 },
  { name: 'Apr', value: 900 },
  { name: 'May', value: 650 }
]

export default function LineChartUI() {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <LineChart data={data}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22c55e" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
          </linearGradient>
        </defs>

        <Tooltip />

        <Area type="monotone" dataKey="value" stroke="#22c55e" fill="url(#color)" strokeWidth={3} />

        <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={2} dot={{ r: 4 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}
