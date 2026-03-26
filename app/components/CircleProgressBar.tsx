'use client'

export default function CircularProgress({ value }: any) {
  const radius = 28
  const stroke = 6
  const normalized = 2 * Math.PI * radius
  const offset = normalized - (value / 100) * normalized

  return (
    <svg height="80" width="80">
      <circle stroke="#1f1f1f" fill="transparent" strokeWidth={stroke} r={radius} cx="40" cy="40" />
      <circle stroke="#22c55e" fill="transparent" strokeWidth={stroke} strokeDasharray={normalized} strokeDashoffset={offset} r={radius} cx="40" cy="40" style={{ transition: '0.5s' }} />
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="12">
        {value}%
      </text>
    </svg>
  )
}
