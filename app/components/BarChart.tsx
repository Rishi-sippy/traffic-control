'use client'

import { BarChart, Bar, ResponsiveContainer, Tooltip } from 'recharts'

const data = [
  { name: 'A', value: 400 },
  { name: 'B', value: 700 },
  { name: 'C', value: 300 },
  { name: 'D', value: 900 }
]

export default function BarChartUI() {
  return (
    <ResponsiveContainer width="100%" height={150}>
      <BarChart data={data}>
        <Tooltip />

        <Bar dataKey="value" fill="#22c55e" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
