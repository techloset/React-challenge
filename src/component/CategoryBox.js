import React from "react";

export default function CategoryBox({ desiredCategory, getDesiredCategoryg }) {
  const checkedHandler = (val) => {
    const newCategory = desiredCategory.map(item => {
        if(item.key === val.key) {
            return {...item, value: !item.value}
        }
        return item;
    });
    getDesiredCategoryg(newCategory);
  };
  const anyThingHandler = (val) => {
    const alltrue = desiredCategory.map((item) => ({
      ...item,
      value: val,
    }));
    getDesiredCategoryg(alltrue);
  };
  const check = desiredCategory.find((i) => i.value === false);

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
        <div className="anyThing">Any genre</div>
      </div>
      {desiredCategory.map((item) => {
        return (
          <div className="rowContainer" key={item.id}>
            <input
              type="checkbox"
              name=""
              id=""
              checked={item.value}
              onChange={(e) => checkedHandler(item)}
            />
            <div className="anyThing">{item.key}</div>
          </div>
        );
      })}
    </div>
  );
}
