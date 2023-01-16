import React, { useState } from "react";
import { categoryList, dummyRating, movieList } from "../data";
import Movies from "./Movies";
import RatingBox from "./RatingBox";
import { ReactComponent as Down } from "../assets/Down.svg";
import { ReactComponent as Upper } from "../assets/Upper.svg";
import CategoryBox from "./CategoryBox";

export default function AllMovies() {
  const [openSection, setOpenSection] = useState("");
  const [search, setsearch] = useState("");
  const [desiredRating, setdesiredRating] = useState(dummyRating);
  const [desiredCategory, setDesiredCategory] = useState(categoryList);
  const filteredMovies = movieList.filter((item) => {
    const selectedRating = desiredRating.filter((i) => i.value === true);
    const check = selectedRating.find((i) => {
      if (item.rating <= i.key && item.rating > i.key -1) {
        return true
      } else {
        return false
        
      }
    });
    const selectedCategory = desiredCategory.filter((i) => i.value === true);
    const checkCategory = selectedCategory.find((i) => i.key === item.category);
    const checkSearch = item.title.toLowerCase().includes(search.toLowerCase());

    if (selectedRating.length > 0 && selectedCategory.length > 0) {
      if (check && checkCategory) {
        return item;
      }
      return;
    }
    if (check || checkCategory || (checkSearch && search !== "")) {
      return item;
    }
  });

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
          {filteredMovies.length > 0 && (
            <div className="movies_box_container">
              {filteredMovies.map((item) => (
                <Movies movie={item} key={item.id} />
              ))}
            </div>
          )}
        </div>
        <div className="rightContainer">
          <div className="rigthHandler">
            <div
              className="rating"
              onClick={() => setOpenSection("rating")}
            >
              <div>Rating</div>

              <div>{openSection === "rating" ? <Upper /> : <Down />}</div>
            </div>
            <div
              className="genre"
              onClick={() => setOpenSection("genre")}
            >
              <p>Genre</p>
              <p>{openSection === "genre" ? <Upper /> : <Down />}</p>
            </div>
          </div>

          {openSection === "rating" && (
            <div className="ratingBoxContaier"             >
              {openSection === "rating" && (
                <RatingBox
                  desiredRating={desiredRating}
                  getDesiredRating={(val) => setdesiredRating(val)}
                />
              )}
            </div>
          )}
          {openSection === "genre" && (
            <div className="genreBoxContaier">
              {openSection === "genre" && (
                <CategoryBox
                  desiredCategory={desiredCategory}
                  getDesiredCategory={(val) => setDesiredCategory(val)}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

            
