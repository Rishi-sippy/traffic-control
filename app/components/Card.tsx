export function SoftCard({ children }: any) {
  return (
    <div
      className="
      bg-[#111]
      rounded-[30px]
      p-6
      border border-[#1f1f1f]
      shadow-[8px_8px_20px_#000,-8px_-8px_20px_#1a1a1a]
    "
    >
      {children}
    </div>
  )
}
