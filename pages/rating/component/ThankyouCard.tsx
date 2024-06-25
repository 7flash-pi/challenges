import React from "react";
import styles from "../Rating.module.css";
import thnakyouSvg from "../../../assets/illustration-thank-you.svg";

type Props = {
    rating:any
};

const ThankyouCard = ({rating}: Props) => {
  return (
    <div className={styles.thankyouCard}>
      <img src={thnakyouSvg.src} alt="thankyou" />

      <span className={styles.rating}>You selected {Number(rating)+1} out of 5</span>

      <h1>Thank You !</h1>
      <span>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch.
      </span>
    </div>
  );
};

export default ThankyouCard;
