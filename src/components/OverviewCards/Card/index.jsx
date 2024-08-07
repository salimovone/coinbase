import React from "react";
import styles from "./card.module.css";

const Card = ({ num, title }) => {
  return (
    <div className="bg-white rounded-2xl border p-8 flex justify-between gap-8 relative w-full max-sm:max-w-80">
      <div>
        <div className={styles.spinner}>
          <div className={styles.spinner1}>{num}</div>
        </div>
      </div>

      <div className="flex justify-end items-center">
        <span className="font-bold text-Secondary text-lg">{title}</span>
      </div>
      <span className="absolute bottom-5 right-8 text-violet-600">{num}</span>
    </div> 
  );
};

export default Card;
