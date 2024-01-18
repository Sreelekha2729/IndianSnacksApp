import React from "react";
import "./Sliding.css";
const Sliding = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
        data-bs-pause="false"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="Images/image5.webp"
              class="d-block w-100"
              alt="wallpaper"
            ></img>
          </div>
          <div class="carousel-item">
            <img
              src="Images/image4.webp"
              class="d-block w-100"
              alt="wallpaper1"
            ></img>
          </div>
          <div class="carousel-item">
            <img
              src="Images/image6.webp"
              class="d-block w-100"
              alt="wallpaper2"
            ></img>
          </div>
          <div class="carousel-item">
            <img
              src="Images/savouries.webp"
              class="d-block w-100"
              alt="wallpaper3"
            ></img>
          </div>
          <div class="carousel-item">
            <img
              src="Images/sweet1.webp"
              class="d-block w-100"
              alt="wallpaper4"
            ></img>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div id="heading">
        <p>Flavourful Delights</p>
      </div>

      <div className="infobox">
        <div className="imgicon">
          <img src="Images/sweet2.webp" alt="Sweets" />
          <div className="imgicon-info">
            <p>Sweets</p>
          </div>
        </div>
        <div className="imgicon">
          <img src="Images/kara-murukku.webp" alt="Savouries" />
          <div className="imgicon-info">
            <p>Savouries</p>
          </div>
        </div>
        <div className="imgicon">
          <img src="Images/Saggubiyyam-Vadiyalu1.jpg" alt="Vadiyalu" />
          <div className="imgicon-info">
            <p>Vadiyalu</p>
          </div>
        </div>
        <div className="imgicon">
          <img src="Images/podulu.jpg" alt="Podulu" />
          <div className="imgicon-info">
            <p>Podulu</p>
          </div>
        </div>
        <div className="imgicon">
          <img src="Images/Mango-2.webp" alt="Pickels" />
          <div className="imgicon-info">
            <p>Pickels</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sliding;
