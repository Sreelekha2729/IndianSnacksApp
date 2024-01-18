import React from "react";
import { Link,useNavigate} from "react-router-dom";

const SweetDisplay = (props) => {
   let navigate = useNavigate();
  console.log(">>>", props);

  const buyNow = (e) => {
    navigate(`/placeOrder/${e.target.name}/${e.target.id}`);
  };

  const renderData = ({ sweetData }) => {
    if (sweetData) {
      if (sweetData.length > 0) {
        return sweetData.map((item) => {
          return (
            <div className="col-sm-4">
              <div className="cardSweets">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt="Sweet"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="description5">{item.description}</p>
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
                  <p className="card-text">From Rs.{item.price}</p>
                  <p className="cardWeight">Weight:{item.weight}</p>
                  <div className="d-grid gap-2">
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
      } else {
        return <h2>No Data Found</h2>;
      }
    } else {
      return (
        <div>
          <h2>Loading....</h2>
          <img src="/Images/loader.gif" alt="loader" />
        </div>
      );
    }
  };

  return <div className="row">{renderData(props)}</div>;
};

export default SweetDisplay;
