import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">

              <div className="row">

                <div className="col-6 col-lg-3">
                  <ul>
                    <li>
                      <NavLink to = "/">Home</NavLink>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <ul>
                    <li>
                      <NavLink to = "/service">Services</NavLink>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  
                  <ul>
              
                    <li>
                      <NavLink to = "/about">About</NavLink>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Follow Us</h2>

                  <div className="row">

                    <div className="col-3 mx-auto">
                      <a href = "https://www.facebook.com/"
                      target="_kuchbhi">
                      <i class="fab fa-facebook-f fontawesome-style"></i>
                      </a>
                    </div>

                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.instagram.com/ishan__0109/"
                        target="_kuchbhi">
                        <i class="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>

                    <div className="col-3 mx-auto">
                      <a href = "https://www.youtube.com/"
                      target="_kuchbhi">
                      <i class="fab fa-youtube fontawesome-style"></i>
                      </a>
                    </div>

                    <div className="col-3 mx-auto">
                      <a href = "https://x.com/?lang=en"
                      target = "_ishan">
                      <i class="fab fa-twitter fontawesome-style"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <br/>
              <hr />

              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2023 Ishan Chiripal. All rights reserved.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;