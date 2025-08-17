import './StarRating.css';
import { useState } from 'react';

const TOTAL_STARS = 5;


interface StarRatingProps {
  productId: number;
  currentRating: number;
  onRate: (productId: number, rating: number) => void;
}

export const StarRating = ({ productId, currentRating, onRate }: StarRatingProps) => {

  const [hover, setHover] = useState<number | null>(null);


  return (
    <div className="star-rating">
      {Array.from({ length: TOTAL_STARS }, (_, index) => {
        const starValue = index + 1;
        const isFilled = hover ? starValue <= hover : starValue <= currentRating;

        return (
          <span
            key={starValue}
            className={`star ${isFilled ? 'filled' : ''}`}
            onClick={() => onRate(productId, starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(null)}
          >
            ★
          </span>
        );
      })}
    </div>
  )
}