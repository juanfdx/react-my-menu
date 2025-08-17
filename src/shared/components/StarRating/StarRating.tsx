import { useState } from 'react';
import './StarRating.css';

const TOTAL_STARS = 5;


export const StarRating = () => {

  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number | null>(null);


  return (
    <div className="star-rating">
      {Array.from({ length: TOTAL_STARS }, (_, index) => {
        const starValue = index + 1;
        const isFilled = hover ? starValue <= hover : starValue <= rating;

        return (
          <span
            key={starValue}
            className={`star ${isFilled ? 'filled' : ''}`}
            onClick={() => setRating(starValue)}
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