import React from "react";
import StarList from "./StarList";

export default function RatingBox({ desiredRating, getDesiredRating }) {
  const checkedHandler = (val) => {
    const exist = desiredRating.find((i) => i.key === val.key).value === true;
    const remiang = desiredRating.filter((i) => i.key !== val.key);
    const rearrange = [
      ...remiang,
      {
        ...val,
        value: exist ? false : true,
      },
    ].sort((a, b) => a.key - b.key);
    getDesiredRating(rearrange);
  };
  const anyThingHandler = (val) => {
    const alltrue = desiredRating.map((item) => ({
      key: item.key,
      value: val,
    }));
    getDesiredRating(alltrue);
  };
  const check = desiredRating.find((i) => i.value === false);
  return (
    <div>
      <div className="rowContainer">
        <input
          type="checkbox"
          name=""
          id=""
          checked={check ? false : true}
          onChange={(e) => anyThingHandler(e.target.checked)}
        />
        <div className="anyThing">Any rating</div>
      </div>
      {desiredRating.map((item) => {
        return (
          <div className="rowContainer" key={item.key}>
            <input
              type="checkbox"
              name=""
              id=""
              onChange={(e) => checkedHandler(item)}
              checked={item.value}
            />
            <StarList rating={item.key} />
          </div>
        );
      })}
    </div>
  );
}
