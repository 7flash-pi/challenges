import React, { useEffect, useState } from "react";
import styles from "../Rating.module.css";

import starIcon from "../../../assets/icon-star.svg";
import IconWrapper from "./IconWrapper";
import { useRouter } from "next/router";
type Props = {};

const ratingsArray = [
  {
    id: "1",
  },
  { id: "2" },
  { id: "3" },
  { id: "4" },
  { id: "5" },
];

const RatingCard = (props: Props) => {
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [clickState,setClickState]=useState<boolean>(false);
 const router=useRouter()

  const handleMouseEnter = (index: number) => {
    setHoveredRating(index);
  };

  const handleMouseLeave = () => {
    if(clickState) return;
    else setHoveredRating(null);
  };

  const handleSubmit = () => {
    router.push(`/rating?submit=true&rating=${hoveredRating}`);
  };

  const onRatingClick = (index: number) => {
    setHoveredRating(index);
    setClickState(true)
  };

  return (
    <div className={styles.ratingCard}>
      <IconWrapper icon={starIcon.src} type="icon" />
      <section className={styles.textWrapper}>
        <h1>How did we do?</h1>
        <span>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </span>
      </section>

      <section className={styles.ratingButton}>
        {ratingsArray.map((rating, index) => (
          <div
            key={index}
            className={`${
              hoveredRating !== null && index <= hoveredRating
                ? styles.hovered
                : ""
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => onRatingClick(index)}
          >
            <IconWrapper
              icon={rating.id}
              type="text"
              isHovered={hoveredRating !== null && index <= hoveredRating}
            />
          </div>
        ))}
      </section>

      <button className={styles.submitButton} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default RatingCard;
