import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Home from "./Home/Home";
import Sweets from "./Sweets/Sweet";
import Savouries from "./Savouries/Savoury";
import Vadiyalu from "./Vadiyalu/VadiyaluInfo";
import Podulu from "./Podulu/PoduluInfo";
import VegPickles from "./VegPickles/VegPickle";
import NonVegPickles from "./NonVegPickles/NonVegPickle";
import PlaceOrder from "./Order/PlaceOrder";
import ViewOrder from "./Order/ViewOrder";
import Login from "./login/loginComponent";
import Register from "./login/registerComponent";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="Sweets/:name" element={<Sweets />} />
            <Route path="Savouries/:price" element={<Savouries />} />
            <Route path="Vadiyalu/:name" element={<Vadiyalu />} />
            <Route path="Podulu/:weight" element={<Podulu />} />
            <Route path="VegPickles/:rating" element={<VegPickles />} />
            <Route
              path="NonVegPickles/:reviewCount"
              element={<NonVegPickles />}
            />
            <Route path="Sweets/:name" element={<Sweets />} />
            {/* <Route path="/Order/PlaceOrder.js" element={<PlaceOrder />} /> */}
            <Route path="/placeOrder/:itemName/:itemId" element={<PlaceOrder />}/>
            <Route path="viewOrder" element={<ViewOrder />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Routing;
