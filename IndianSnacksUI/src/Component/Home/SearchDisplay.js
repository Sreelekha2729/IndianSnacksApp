import React from "react";

import {
  useParams,
  useSearchParams,
  useNavigate,
  Link,
  Navigate,
} from "react-router-dom";

//const baseUrl = process.env.REACT_APP_API_URL;

const SearchDisplay = (props) => {
  let navigate = useNavigate();
  console.log(">>>", props);

  const buyNow = (e) => {
    navigate(`/placeOrder/${(e.target.name)}/${(e.target.id)}`);
  };

  const listSweets = ({ sweetData }) => {
    if (sweetData) {
      return sweetData.map((item) => {
        return (
          //<Link to={`/listing/${item.price}`} key={item.price}>
          <div className="col-sm-4">
            <div className="card" style={{ innerHeight: "400px !important" }}>
              <img src={item.image} className="card-img-top" alt="Sweet"></img>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <div className="box">
                  <span className="fa fa-star checked star"></span>
                  <span className="fa fa-star checked star"></span>
                  <span className="fa fa-star checked star"></span>
                  <span className="fa fa-star checked star"></span>
                  <span className="fa fa-star-half-o checked star">
                    ({item.rating})
                  </span>
                  <span> {item.reviewCount} reviews</span>
                </div>
                <p className="card-text text">From Rs.{item.price}</p>
                <div className="d-grid gap-2">
                  {/* <Link to="/Order/PlaceOrder.js"> */}
                  <button
                    name={item.itemName}
                    id={item.itemId}
                    className="btn btn-primary button"
                    onClick={buyNow}
                    type="button"
                  >
                    BUY NOW
                  </button>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </div>
          //</Link>
        );
      });
    }
  };

  const listSavouries = ({ savouryData }) => {
    if (savouryData) {
      return savouryData.map((item) => {
        return (
          <div className="col-sm-4">
            <div class="card">
              <img
                src={item.image}
                class="card-img-top"
                alt="Thengai Paal Murukulu"
              ></img>
              <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <div class="box">
                  <span class="fa fa-star checked star"></span>
                  <span class="fa fa-star checked star"></span>
                  <span class="fa fa-star checked star"></span>
                  <span class="fa fa-star checked star"></span>
                  <span class="fa fa-star checked star">({item.rating})</span>
                  <span>{item.reviewCount} reviews</span>
                </div>
                <p class="card-text">From Rs.{item.price}</p>
                <div class="d-grid gap-2">
                  {/* <Link to="/Order/PlaceOrder.js"> */}
                  <button
                    name={item.itemName}
                    id={item.itemId}
                    className="btn btn-primary button"
                    onClick={buyNow}
                    type="button"
                  >
                    BUY NOW
                  </button>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  const listVadiyalu = ({ vadiyaluData }) => {
    if (vadiyaluData) {
      return vadiyaluData.map((item) => {
        return (
          <div className="col-sm-4">
            <div class="card">
              <img
                src={item.image}
                class="card-img-top"
                alt="Biyyam Pindi Vadiyalu"
              />
              <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <div class="box">
                  <span class="fa fa-star checked star"></span>
                  <span class="fa fa-star checked star"></span>
                  <span class="fa fa-star checked star"></span>
                  <span class="fa fa-star checked star"></span>
                  <span class="fa fa-star-half-o checked star">
                    ({item.rating})
                  </span>
                  <span>{item.reviewCount} reviews</span>
                </div>
                <p class="card-text">From Rs.{item.price}</p>
                <div class="d-grid gap-2">
                  <button
                    name={item.itemName}
                    id={item.itemId}
                    className="btn btn-primary button"
                    onClick={buyNow}
                    type="button"
                  >
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  const listPodulu = ({ poduluData }) => {
    if (poduluData) {
      return poduluData.map((item) => {
        return (
          <div className="col-sm-4">
            <div class="card">
              <img
                src={item.image}
                class="card-img-top"
                alt="VelliliKaram Podi"
              />
              <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <div class="box">
                  <span class="fa fa-star checked star"></span>
                  <span class="fa fa-star checked star"></span>
                  <span class="fa fa-star checked star"></span>
                  <span class="fa fa-star checked star"></span>
                  <span class="fa fa-star checked star">({item.rating})</span>
                  <span>{item.reviewCount} reviews</span>
                </div>
                <p class="card-text">From Rs.{item.price}</p>
                <div class="d-grid gap-2">
                  <button
                    name={item.itemName}
                    id={item.itemId}
                    className="btn btn-primary button"
                    onClick={buyNow}
                    type="button"
                  >
                      BUY NOW
                    </button>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  const listVegPickles = ({ vegPicklesData }) => {
    if (vegPicklesData) {
      return vegPicklesData.map((item) => {
        return (
          <div className="col-sm-4">
            <div class="card">
              <img
                src={item.image}
                class="card-img-top"
                alt="Pandumirchi Pickle"
              />
              <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <div class="box">
                  <span class="fa fa-star checked star"></span>
                  <span class="fa fa-star checked star"></span>
                  <span class="fa fa-star checked star"></span>
                  <span class="fa fa-star checked star"></span>
                  <span class="fa fa-star-half-o checked star">
                    ({item.rating})
                  </span>
                  <span>{item.reviewCount} reviews</span>
                </div>
                <p class="card-text">From Rs.{item.price}</p>
                <div class="d-grid gap-2">
                 <button
                    name={item.itemName}
                    id={item.itemId}
                    className="btn btn-primary button"
                    onClick={buyNow}
                    type="button"
                  >
                      BUY NOW
                    </button>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  const listNonVegPickles = ({ nonVegPicklesData }) => {
    if (nonVegPicklesData) {
      return nonVegPicklesData.map((item) => {
        return (
          <div className="col-sm-4">
            <div class="card">
              <img
                src={item.image}
                class="card-img-top"
                alt="Chicken Bone Pickle"
              />
              <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <div class="box">
                  <span class="fa fa-star checked star"></span>
                  <span class="fa fa-star checked star"></span>
                  <span class="fa fa-star checked star"></span>
                  <span class="fa fa-star checked star"></span>
                  <span class="fa fa-star checked star">({item.rating})</span>
                  <span>100 reviews</span>
                </div>
                <p class="card-text">From Rs.{item.price}</p>
                <div class="d-grid gap-2">
                  <button
                    name={item.itemName}
                    id={item.itemId}
                    className="btn btn-primary button"
                    onClick={buyNow}
                    type="button"
                  >
                      BUY NOW
                    </button>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div>
      <div className="row cardBox">{listSweets(props)}</div>
      <div className="row cardBox">{listSavouries(props)}</div>
      <div className="row cardBox">{listVadiyalu(props)}</div>
      <div className="row cardBox">{listPodulu(props)}</div>
      <div className="row cardBox">{listVegPickles(props)}</div>
      <div className="row cardBox">{listNonVegPickles(props)}</div>
    </div>
  );
};

export default SearchDisplay;
