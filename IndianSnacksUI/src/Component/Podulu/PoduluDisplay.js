import { Link,useNavigate } from "react-router-dom";

const PoduluDisplay = (props) => {
   let navigate = useNavigate();
  console.log(">>>", props);

  const buyNow = (e) => {
    navigate(`/placeOrder/${e.target.name}/${e.target.id}`);
  };

  const renderData = ({ poduluData }) => {
    if (poduluData) {
      if (poduluData.length > 0) {
        return poduluData.map((item) => {
          return (
            <div className="col-sm-4">
              <div className="cardPodulu">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt="Podulu"
                ></img>
                <div class="card-body">
                  <h5 class="card-title">{item.name}</h5>
                  <p className="description4">{item.description}</p>
                  <div class="box">
                    <span class="fa fa-star checked star"></span>
                    <span class="fa fa-star checked star"></span>
                    <span class="fa fa-star checked star"></span>
                    <span class="fa fa-star checked star"></span>
                    <span class="fa fa-star checked star">({item.rating})</span>
                    <span>{item.reviewCount} reviews</span>
                  </div>
                  <p class="card-text">From Rs.{item.price}</p>
                  <p className="cardWeight">Weight:{item.weight}</p>
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

  return (
    <div className="row">{renderData(props)}</div>
  );
};


export default PoduluDisplay;
