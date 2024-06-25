import React, { useEffect, useState } from "react";
import RatingCard from "./component/RatingCard";
import styles from "../rating/Rating.module.css";
import ThankyouCard from "./component/ThankyouCard";
import { useRouter } from "next/router";
const RatingIndex = () => {
  const router = useRouter();
  const [showThankYou, setShowthankYou] = useState(false);
  const [rating, setRating] = useState<string | string[] | undefined>("");
  console.log({ path: router.asPath });
  useEffect(() => {
    if (router?.isReady && router?.asPath.includes("submit")) {
      const { rating } = router.query;
      setShowthankYou(true);
      setRating(rating);
    }
  }, [router]);
  return (
    <section className={styles.container}>
      {!showThankYou && <RatingCard />}
      {showThankYou && <ThankyouCard rating={rating} />}
    </section>
  );
};

export default RatingIndex;
