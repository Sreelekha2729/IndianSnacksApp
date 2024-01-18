import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const baseUrl = process.env.REACT_APP_POST_API_URL;

const PlaceOrder = () => {
  let params = useParams();
  let navigate = useNavigate();

  let sessionData = sessionStorage.getItem("userInfo");
  let data = JSON.parse(sessionData);

  // const postOrder = () => {
  //   const [itemId, setItemId] = useState();

  // useEffect(() => {
  //   fetch(`${baseUrl}/placeOrder`, { method: "POST" })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setItemId(data);
  //     });
  // }, []);

  const initialValues = {
    //id: Math.floor(Math.random() * 1000000),
    itemName: params.itemName,
    itemId: params.itemId,
    orderId: Math.floor(Math.random() * 1000000),
    name: data.name,
    // firstName: data.firstName,
    // LastName: data.LastName,
    email: data.email,
    address: "Hno 75,Sector 6",
    phone: data.phone,
    country: "India",
    state: "Telangana",
    city: "Hyderabad",
    price: Math.floor(Math.random() * 1000),
  };

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const checkout = () => {
    console.log(values);
    fetch(`${baseUrl}/placeOrder`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then(navigate("/ViewOrder"));
  };

  return (
    <>
      <div className="container">
        <hr />
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3>Order For {params.itemName}</h3>
          </div>
          <div className="panel-body">
            <div className="row">
              <div className="col-md-6 form-group">
                <label for="fname" className="control-label">
                  Name
                </label>
                <input
                  className="form-control"
                  id="fname"
                  name="name"
                  value={values.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6 form-group">
                <label for="email" className="control-label">
                  Email
                </label>
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6 form-group">
                <label for="phone" className="control-label">
                  Phone
                </label>
                <input
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={values.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6 form-group">
                <label for="address" className="control-label">
                  Address
                </label>
                <input
                  className="form-control"
                  id="address"
                  name="address"
                  value={values.address}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h2>Total Price is Rs. {values.price}</h2>
              </div>
            </div>
            <button className="btn btn-success" onClick={checkout}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
