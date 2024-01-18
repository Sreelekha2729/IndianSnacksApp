import React, { useState, useEffect } from "react";
import "./Podulu.css";
import PoduluDisplay from "./PoduluDisplay";
import { Link } from "react-router-dom";
import WeightFilter from "../Filters/weightFilter";
import RatingFilter from "../Filters/ratingFilter";
import PriceFilter from "../Filters/priceFilter";
const baseUrl = process.env.REACT_APP_API_URL;
const Podulu = () => {
  const [weight, setWeight] = useState([]);
  const [price, setPrice] = useState([]);
  const [rating, setRating] = useState([]);
  useEffect(() => {
    fetch(`${baseUrl}/podulu`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setWeight(data);
      });
  }, []);
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../Images/GaramMasalaPowder.jpg"
              class="d-block"
              alt="wallpaper"
            />
            <div class="carousel-caption d-none d-md-block">
              <h6 className="headingColor">Podulu</h6>
              <p>
                We at Indian Snacks are bringing back the bygone treasure trove
                that comprises not only healthy but also scrumptious and
                luscious sweet snacks such as Putharekulu, Palakova and Kaja
                famous to the coastal regions of Andhra, especially Godavari
                districts.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="../Images/bestsellers.webp"
              class="d-block"
              alt="wallpaper1"
            />
            <div class="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <a
        class="btn btn-primary"
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
      >
        Filters
      </a>
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            Podulu
          </h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div>
            Select your favorite Podulu according to the filters given below
            like Weight, Quantity and the Price.
          </div>

          <div class="dropdown dropdown1">
            <WeightFilter
              weight={weight}
              itemType={"podulu"}
              restPerWeight={(data) => {
                setWeight(data);
              }}
            />
          </div>
          <hr />

          <div class="dropdown dropdown1">
            <RatingFilter
              rating={rating}
              itemType={"podulu"}
              restPerRating={(data) => {
                setWeight(data);
              }}
            />
          </div>
          <hr />

          <div class="dropdown dropdown1">
            <PriceFilter
              price={price}
              itemType={"podulu"}
              restPerPrice={(data) => {
                setWeight(data);
              }}
            />
          </div>
          <hr />
        </div>
      </div>

      <div>
        <div>
          <div id="heading1">
            <p> Podulu </p>
            <Link to="./Podulu/PuduluInfo.js" className="linking">
              view all
            </Link>
          </div>

          <div className="container mt-5">
            <PoduluDisplay poduluData={weight} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podulu;
