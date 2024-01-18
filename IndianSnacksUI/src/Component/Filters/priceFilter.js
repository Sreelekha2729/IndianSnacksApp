import React from "react";
import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;

const priceFilter = (props) => {
  const handleFilter = (event) => {
    const itemType = props.itemType;
    console.log(event.target.value);
    // let price = props.price;
    let priceValue = event.target.value;
    // let price = event.target.price;
    let priceUrl = "";
    let lcost = priceValue.split("-")[0];
    let hcost = priceValue.split("-")[1];
    if (priceValue === "") {
      priceUrl = `${baseUrl}/${itemType}`;
    } else {
      priceUrl = `${baseUrl}/${itemType}?lcost=${lcost}&hcost=${hcost}`;
    }

    axios.get(priceUrl).then((res) => {
      props.restPerPrice(res.data);
    });
  };

  //   if (event.target.value === "") {
  //    priceUrl = `${baseUrl}/${itemType}`;
  //   } else {
  //     priceUrl = `${baseUrl}/filter/${mealId}?lcost=${lcost}&hcost=${hcost}`;
  //   }

  //   axios.get(priceUrl).then((res) => {
  //     props.restPerCost(res.data);
  //   });
  // }

  return (
    <div>
      <select id="mode3" onChange={handleFilter}>
        <option>-----Price-----</option>
        <option value="140-200">140-200</option>
        <option value="201-300">201-300</option>
        <option value="301-500">301-500</option>
      </select>
    </div>
  );
};

export default priceFilter;
