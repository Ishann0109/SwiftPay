import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {

  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">

          {/* col-12 is for mobile view in that one section will take the entire space and the other section below it*/}
          {/* col-lg-6 is for large devices and total there are 12 columns if 6 given to one section and 6 to other hence 50 % division */}
          {/* https://www.w3schools.com/bootstrap/bootstrap_grid_system.asp */}

          {/* we want that our image in mobile version is at the top and in the laptop version is at the right.  we use order for this */}
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start
            order-lg-first order-last ">
              <h1 className="display-2">
                Online Payment Made <br /> Easy For You.
              </h1>
              <br/>
              <br/>
              <p className="main-hero-para">
              Welcome to SwiftPay, your ultimate solution for fast and secure online payments.
              With SwiftPay, you can effortlessly send and receive money worldwide with just a few clicks.
              Our user-friendly platform ensures seamless transactions, whether you're paying bills, shopping online,
              or transferring funds to friends and family. SwiftPay – making payments swift and simple!
              </p>
              {/* <h3>Get early access for you</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill w-75  w-lg-75 me-3 p-2 form-control-text"
                  placeholder="Enter Your Email"
                />
                <div className="input-group-button">
                <button className = "actual-button">
                 Get it now
                </button>
                </div>
              </div> */}
            </div>
            {/*  --------------- main header right side--------------  */}
            {/* https://www.w3schools.com/bootstrap4/bootstrap_flex.asp */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images
            order-md-first order-sm-first">
            {/* https://www.w3schools.com/bootstrap4/bootstrap_images.asp */}
              <img
                src="./images/hero1.jpg"
                alt="heroimg"
                className="img-fluid"
              />
              <img
                src="./images/hero4.jpg"
                alt="heroimg4"
                className="img-fluid main-hero-img2"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;