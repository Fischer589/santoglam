export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-sans font-medium uppercase tracking-[0.28em] text-ink ${className}`}
    >
      Santoglam
    </span>
  )
}
