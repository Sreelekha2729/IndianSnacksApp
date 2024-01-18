import React from "react";
import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;

const ratingFilter = (props) => {
  const handleFilter = (event) => {
    const itemType = props.itemType;
    console.log(event.target.value);
    // let rating = props.rating;
    let ratingValue = event.target.value;
    // let rating = event.target.rating;
    let ratingUrl = "";
    if (ratingValue === "") {
      ratingUrl = `${baseUrl}/${itemType}`;
    } else {
      // ratingUrl = `${baseUrl}/filter/{sweets}?${ratingValue}`;
      ratingUrl = `${baseUrl}/${itemType}?rating=${ratingValue}`;
    }

    axios.get(ratingUrl).then((res) => {
      props.restPerRating(res.data);
    });
  };

  return (
    <div>
      <select id="mode2" onChange={handleFilter}>
        <option>-----Rating-----</option>
        <option value="4">4</option>
        <option value="4.5">4.5</option>
        <option value="5">5</option>
      </select>
    </div>
  );
};

export default ratingFilter;
