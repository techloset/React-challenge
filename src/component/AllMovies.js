import React, { useState } from "react";
import { categoryList, dummyRating, movieList } from "../data";
import Movies from "./Movies";
import RatingBox from "./RatingBox";
import { ReactComponent as Down } from "../assets/Down.svg";
import { ReactComponent as Upper } from "../assets/Upper.svg";
import CategoryBox from "./CategoryBox";
export default function AllMovies() {
  const [open, setOpen] = useState({
    rating: false,
    genre: false,
  });
  const [search, setsearch] = useState("");
  const [desiredRating, setdesiredRating] = useState(dummyRating);
  const [desiredCategory, setDesiredCategory] = useState(categoryList);
  const moviesFilter = (item) => {
    const selectedRating = desiredRating.filter((i) => i.value === true);
    const check = selectedRating.find((i) => i.key >= item.rating);
    const selectedCategory = desiredCategory.filter((i) => i.value === true);
    const checkCategory = selectedCategory.find((i) => i.key === item.category);
    const checkSearch = item.title.toLowerCase().includes(search.toLowerCase());

    if (check || checkCategory || (checkSearch && search !== "")) {
      return item;
    }
  };
  const renderMoviees = movieList.filter(moviesFilter);
  return (
    <div className="main_container">
      <div className="container">
        <div className="leftContainer">
          <input
            type={"text"}
            className="input"
            placeholder="Enter Movie Name"
            onChange={(e) => setsearch(e.target.value)}
          />
          {renderMoviees.length > 0&& (
            <div className="movies_box_container">
              {renderMoviees.map((item) => (
                <Movies movie={item} key={item.id} />
              ))}
            </div>
          )}
        </div>
        <div className="rightContainer">
          <div className="rigthHandler">
            <div
              className="rating"
              onClick={() => setOpen({ genre: false, rating: !open.rating })}
            >
              <p>Rating</p>

              <p>{open.rating ? <Upper /> : <Down />}</p>
            </div>
            <div
              className="genre"
              onClick={() => setOpen({ rating: false, genre: !open.genre })}
            >
              <p>Genre</p>
              <p>{open.genre ? <Upper /> : <Down />}</p>
            </div>
          </div>
          {(open.genre || open.rating) && (
            <div className="ratingBoxContaier">
              {open.rating && !open.genre && (
                <RatingBox
                  desiredRating={desiredRating}
                  getDesiredRating={(val) => setdesiredRating(val)}
                />
              )}
              {open.genre && !open.rating && (
                <CategoryBox
                  desiredCategory={desiredCategory}
                  getDesiredCategoryg={(val) => setDesiredCategory(val)}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
