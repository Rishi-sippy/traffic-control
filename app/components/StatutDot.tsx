export function StatusDot() {
  return (
    <div className="relative">
      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
      <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
    </div>
  )
}
