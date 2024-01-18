import React from "react";

const DisplayOrder = (props) => {
  const renderData = ({ orderData }) => {
    if (orderData) {
      return orderData.map((item) => {
        return (
          <tr key={item.id}>
            <td>{item.orderId}</td>
            <td>{item.itemName}</td>
            <td>{item.itemId}</td>
            <td>{item.email}</td>
            <td>{item.name}</td>
            {/* <td>{item.firstName}</td>
            <td>{item.LastName}</td> */}
            <td>{item.address}</td>
            <td>{item.phone}</td>
            <td>{item.country}</td>
            <td>{item.state}</td>
            <td>{item.city}</td>
            <td>Rs.{item.price}</td>
          </tr>
        );
      });
    }
  };

  return (
    <div className="container">
      <center>
        <h2>Orders</h2>
      </center>
      <table className="table">
        <thead>
          <tr>
            <th>OrderId</th>
            <th>ItemName</th>
            <th>ItemId</th>
            <th>Email</th>
            <th>Name</th>
            {/* <th>LastName</th> */}
            <th>Address</th>
            <th>Phone</th>
            <th>Country</th>
            <th>State</th>
            <th>City</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{renderData(props)}</tbody>
      </table>
    </div>
  );
};

export default DisplayOrder;
