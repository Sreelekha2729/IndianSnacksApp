import React, { useState, useEffect } from "react";
import "./Search.css";
import SearchDisplay from "./SearchDisplay";
import { Link } from "react-router-dom";

const baseUrl = process.env.REACT_APP_API_URL;
const Search = () => {
  const [itemId, setItemId] = useState([]);
  const [price, setPrice] = useState([]);
  const [itemName, setItemName] = useState([]);
  const [weight, setWeight] = useState([]);
  const [rating, setRating] = useState([]);
  const [reviewCount, setReviewCount] = useState([]);
  useEffect(() => {
    // sessionStorage.setItem("itemId", itemId);
    fetch(`${baseUrl}/sweets`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setItemId(data);
      });
  },[]);

  useEffect(() => {
    //  sessionStorage.setItem("itemId", itemId);
    fetch(`${baseUrl}/savouries`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setPrice(data);
      });
  },[]);

  useEffect(() => {
    //  sessionStorage.setItem("itemId", itemId);
    fetch(`${baseUrl}/vadiyalu`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setItemName(data);
      });
  },[]);

  useEffect(() => {
    //  sessionStorage.setItem("itemId", itemId);
    fetch(`${baseUrl}/podulu`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setWeight(data);
      });
  },[]);

  useEffect(() => {
    //  sessionStorage.setItem("itemId", itemId);
    fetch(`${baseUrl}/veg-pickles`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setRating(data);
      });
  },[]);

  useEffect(() => {
    //  sessionStorage.setItem("itemId", itemId);
    fetch(`${baseUrl}/non-vegpickles`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setReviewCount(data);
      });
  },[]);

  return (
    <div>
      <div>
        <div id="heading1">
          <p> Sweets </p>
          <Link to="./Sweets/Sweet.js" classitemName="linking" className="link">
            view all
          </Link>
        </div>

        <div classitemName="container mt-5">
          <SearchDisplay sweetData={itemId} />
        </div>
      </div>

      <div>
        <div id="heading1">
          <p> Savouries </p>
          <Link
            to="./Savouries/Savoury.js"
            classitemName="linking"
            className="link"
          >
            view all
          </Link>
        </div>
        <div classitemName="container mt-5">
          <SearchDisplay savouryData={price} />
        </div>
      </div>

      <div id="heading1">
        <p> Vadiyalu </p>
        <Link
          to="./Vadiyalu/VadiyaluInfo.js"
          classitemName="linking"
          className="link"
        >
          view all
        </Link>
      </div>
      <div classitemName="container mt-5">
        <SearchDisplay vadiyaluData={itemName} />
      </div>

      <div id="heading1">
        <p> Podulu </p>
        <Link
          to="./Podulu/PoduluInfo.js"
          classitemName="linking"
          className="link"
        >
          view all
        </Link>
      </div>
      <div classitemName="container mt-5">
        <SearchDisplay poduluData={weight} />
      </div>

      <div id="heading1">
        <p> Pickles </p>
        <h5>Veg Pickles</h5>
        <Link
          to="./VegPickles/VegPickle.js"
          classitemName="linking"
          className="link"
        >
          view all
        </Link>
      </div>
      <div classitemName="container mt-5">
        <SearchDisplay vegPicklesData={rating} />
      </div>

      <div id="heading1">
        <p> Pickles </p>
        <h5>Non-Veg Pickles</h5>
        <Link
          to="./NonVegPickles/NonVegPickle.js"
          classitemName="linking"
          className="link"
        >
          view all
        </Link>
      </div>
      <div classitemName="container mt-5">
        <SearchDisplay nonVegPicklesData={reviewCount} />
      </div>
    </div>
  );
};

export default Search;
