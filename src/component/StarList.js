import React from "react";
import Star from "../assets/Star";
import { ratingLength } from "../data";
export default function StarList({ rating }) {
  return (
    <div className="star_container">
      {ratingLength.map((item, index) => {
        const filling = fillorNot(item, rating);
        const half =
          !filling &&
          Math.floor(rating) + 1 === item &&
          rating < item &&
          rating > item - 1;

        return (
          <div style={{
            marginLeft:-4
          }}>
            <Star fill={filling} key={rating * index} half={half}  />
          </div>
        );
      })}
    </div>
  );
}
const fillorNot = (item, rating) => {
  return item <= rating ? true : false;
};
