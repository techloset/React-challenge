import React from "react";
import Star from "../assets/Star";
import { ratingLength } from "../data";
export default function StarList({ rating }) {
  return (
    <div className="star_container">
      {ratingLength.map((item, index) => {
        return <Star fill={fillorNot(item, rating)} key={rating * index} />;
      })}
    </div>
  );
}
const fillorNot = (item, rating) => {
  return item <= rating ? true : false;
};
