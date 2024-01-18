import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="container my-5">
        <footer
          className="footer1 w-100 text-center text-lg-start text-white"
          style={{backgroundColor:'teal'}}
        >
          <div className="container p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Indian Snacks
                  </h6>
                  <p>
                    Indian Snacks bring to you a collection of carefully
                    selected foods of India. In our passionate search to offer
                    food that is unique and full of flavour, we have ensured you
                    get only the best and most authentic regional food products.
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Products
                  </h6>
                  <p>
                    <a className="text-white">Sweets</a>
                  </p>
                  <p>
                    <a className="text-white">Savouries</a>
                  </p>
                  <p>
                    <a className="text-white">Vadiyalu</a>
                  </p>
                  <p>
                    <a className="text-white">Podulu</a>
                  </p>
                  <p>
                    <a className="text-white">Pickles</a>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Contact
                  </h6>
                  <p>
                    <i className="bi bi-house-door-fill nomargin"></i>
                    India,Hyderabad
                  </p>
                  <p>
                    <i className="bi bi-envelope-fill nomargin"></i>{" "}
                    info@gmail.com
                  </p>
                  <p>
                    <i className="bi bi-telephone-fill nomargin"></i> + 01 234
                    567 88
                  </p>
                  <p>
                    <i className="bi bi-printer-fill nomargin"></i> + 01 234 567
                    89
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Follow us
                  </h6>

                  <a
                    className="btn btn-primary btn-floating m-1 icon1"
                    style={{backgroundColor: '#3b5998'}}
                    href="#!"
                    role="button"
                  >
                    <i className="bi bi-facebook nomargin1"></i>
                  </a>

                  <a
                    className="btn btn-primary btn-floating m-1 icon1"
                    style={{ backgroundColor: '#55acee' }}
                    href="#!"
                    role="button"
                  >
                    <i className="bi bi-twitter nomargin1"></i>
                  </a>

                  <a
                    className="btn btn-primary btn-floating m-1 icon1"
                    style={{backgroundColor: '#dd4b39'}}
                    href="#!"
                    role="button"
                  >
                    <i className="bi bi-google nomargin1"></i>
                  </a>

                  <a
                    className="btn btn-primary btn-floating m-1 icon1"
                    style={{ backgroundColor: '#ac2bac' }}
                    href="#!"
                    role="button"
                  >
                    <i className="bi bi-instagram nomargin1"></i>
                  </a>

                  <a
                    className="btn btn-primary btn-floating m-1 icon1"
                    style={{backgroundColor: '#0082ca'}}
                    href="#!"
                    role="button"
                  >
                    <i className="bi bi-linkedin nomargin1"></i>
                  </a>

                  <a
                    className="btn btn-primary btn-floating m-1 icon1"
                    style={{ backgroundColor: '#333333' }}
                    href="#!"
                    role="button"
                  >
                    <i className="bi bi-github nomargin1"></i>
                  </a>
                </div>
              </div>
            </section>
          </div>

          <div
            className="text-center p-3"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
          >
            © 2020 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">
              Indian Snacks
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
