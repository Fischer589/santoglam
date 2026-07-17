import { Star } from "lucide-react"

interface StarRatingProps {
  rating: number
  reviews?: number
  size?: "sm" | "md"
}

export function StarRating({ rating, reviews, size = "sm" }: StarRatingProps) {
  const starSize = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < Math.round(rating)
          return (
            <Star
              key={i}
              className={`${starSize} ${
                filled ? "fill-brass text-brass" : "fill-transparent text-ink/20"
              }`}
            />
          )
        })}
      </div>
      <span className="text-xs font-semibold text-ink/70">{rating.toFixed(1)}</span>
      {reviews !== undefined && (
        <span className="text-xs text-ink/45">({reviews.toLocaleString()})</span>
      )}
    </div>
  )
}
