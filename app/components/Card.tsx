// components/dashboard/SoftCard.tsx
export default function SoftCard({ children }: any) {
  return (
    <div
      className="
      bg-[#0f0f0f]
      rounded-[28px]
      p-6
      border border-[#1c1c1c]
      transition-all duration-300
      hover:scale-[1.02]
      hover:shadow-[0_0_40px_rgba(34,197,94,0.2)]
      shadow-[6px_6px_20px_#000,-6px_-6px_20px_#1a1a1a]
    "
    >
      {children}
    </div>
  )
}
