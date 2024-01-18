import React from "react";
import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;

const weightFilter = (props) => {
  const handleFilter = (event) => {
    const itemType = props.itemType;
    console.log(event.target.value);
    // let weight = props.weight;
    let weightValue = event.target.value;
    // let weight = event.target.weight;
    let weightUrl = "";
    if (weightValue === "") {
      weightUrl = `${baseUrl}/${itemType}`;
    } else {
      // weightUrl = `${baseUrl}/filter/{sweets}?${weightValue}`;
      weightUrl = `${baseUrl}/${itemType}?weight=${weightValue}`;
    }

    axios.get(weightUrl).then((res) => {
      props.restPerWeight(res.data);
    });
  };

  return (
    <div>
      <select id="mode1" onChange={handleFilter}>
        <option>-----Weight-----</option>
        <option>250gms</option>
        <option>500gms</option>
        <option>1kg</option>
      </select>
    </div>
  );
};

export default weightFilter;
