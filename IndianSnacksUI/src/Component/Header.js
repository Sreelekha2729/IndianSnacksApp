import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Header.css";
import Nav from "./Nav";
import Navbar from "./Navbar";

const url = process.env.REACT_APP_LOGIN_API_URL;

const Header = () => {

   const [userData,setUserData] = useState('');
    let navigate = useNavigate();

    useEffect(() => {
        if(sessionStorage.getItem('ltk') != null){
            fetch(`${url}/userinfo`,{
                method:'GET',
                headers:{
                    'x-access-token':sessionStorage.getItem('ltk')
                }
            })
            .then((res) => res.json())
            .then((data) => {
                setUserData(data)
            })
        }
    },[])

    const handleLogout = () => {
        sessionStorage.removeItem('ltk');
        sessionStorage.removeItem('userInfo');
        setUserData('');
        navigate('/')
    }



    const conditionalHeader = () => {
        if(userData){
            if(userData.name){
                sessionStorage.setItem('userInfo',JSON.stringify(userData))
                return (
                  <>
                    <Link to="/register" className="btn btn-primary name">
                      <span className="glyphicon glyphicon-user"></span> Hi{" "}
                      {userData.name}
                    </Link>{" "}
                    &nbsp;
                    <button
                      onClick={handleLogout}
                      className="btn btn-success logout"
                    >
                      <span className="glyphicon glyphicon-log-out"></span>{" "}
                      Logout
                    </button>
                  </>
                );
            }
        }else{
            return (
              <>
                <Link to="/register" className="btn btn-primary signup">
                  <span className="glyphicon glyphicon-user"></span> SignUp
                </Link>{" "}
                &nbsp;
                <Link to="/login" className="btn btn-success login">
                  <span className="glyphicon glyphicon-log-in"></span> Login
                </Link>
              </>
            );
        }
    }
  return (
    <body className="light-theme">
      <nav className="navbar navbar-light bg-light" id="navMenu">
        <i
          id="btnIcon"
          className="bi bi-brightness-high-fill"
          onclick="changeTheme()"
        ></i>
        <br />
        <div className="container-fluid">
          <Link to="#" className="navbar-brand">
            <img
              src="Images/indiantradition-logo-2.png"
              alt="Indian Snacks logo"
              width="60%"
              height="90px"
            />
            <p className="heading">Indian Snacks</p>
          </Link>
        </div>
        <div id="social">{conditionalHeader()}</div>
      </nav>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        id="navMenu1"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="./Sweets/Sweet.js"
                  className="nav-link active"
                  aria-current="page"
                >
                  Sweets
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="./Savouries/Savoury.js"
                  className="nav-link active"
                  aria-current="page"
                >
                  Savouries
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="./Vadiyalu/VadiyaluInfo.js"
                  className="nav-link active"
                  aria-current="page"
                >
                  Vadiyalu
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="./Podulu/PoduluInfo.js"
                  className="nav-link active"
                  aria-current="page"
                >
                  Podulu
                </Link>
              </li>

              <div className="dropdown">
                <Link
                  to="#"
                  className="btn btn-secondary dropdown-toggle pickleButton"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pickles
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <Link
                      to="./VegPickles/VegPickle.js"
                      className="dropdown-item"
                    >
                      Veg Pickles
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="./NonVegPickles/NonVegPickle.js"
                      className="dropdown-item"
                    >
                      Non-Veg pickles
                    </Link>
                  </li>
                </ul>
              </div>

              <li className="nav-item">
                <Link
                  to="#"
                  className="nav-link disabled"
                  tabindex="-1"
                  aria-disabled="true"
                ></Link>
              </li>
            </ul>
            <form className="d-flex">
              {/* <Link to="./listing/login.html">
                <button type="button" className="btn btn-success ">
                  LoginIn
                </button>
              </Link>
              &nbsp;
              <Link to="./listing/signup.html">
                <button type="button" className="btn btn-primary">
                  SignUp
                </button>
              </Link> */}
            </form>
          </div>
        </div>
      </nav>
    </body>
  );
};

export default Header;
