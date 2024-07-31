import React, { useState } from "react";
import howToUseApp from "./API/howToUseApp.js";

const Aboutus = () => {
    // now initially the aboutData becomes equal to the api howtouseApp
    // i have to now loop over the api howToUseApp
  const [aboutData, setAboutData] = useState(howToUseApp);
  return (
    <>
      {/* 1st part of aboutus section */}
      <section className="common-section our-services">

        <div className="container mb-5">
          <div className="row">

            {/* 1st section left side */}
            <div className="col-12 col-lg-5 text-center our-service-leftside-img">
              <img src="./images/hero3.jpg" alt="aboutusIMg" />
            </div>

            {/* 1st section right side data  */}
            <div className="col-12 col-lg-7 our-services-list">
              <h3 className="mini-title">
                -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
              </h3>
              <h1 className="main-heading">How to use the App?</h1>

              {aboutData.map((curElem) => {
                  const {id,title,info} = curElem;
                return (
                    <>
                    <div className="row our-services-info" key={id}>

                      <div className="col-1 our-services-number">{id}</div>

                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>

                    </div>
                    </>
                )
              })}

              <br />
              {/* same class as that of login button */}
              <button className="btn-style btn-style-border">learn more</button>
            </div>
          </div>
        </div>
      </section>

      {/* 2nd part of about us section  */}
      {/* now in the second part the image is to the right side and the text part is to the left side */}

      <section className="common-section our-services our-services-rightside">
        <div className="container mb-5">
          <div className="row">
            {/* 2nd section left side data  */}
            <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
              <h3 className="mini-title">-- SUPPORT IN ANY LANGUAGES</h3>
              <h1 className="main-heading">
                World class support is <br /> available 24/7
              </h1>

              {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border">learn more</button>
            </div>

            {/* images section  */}
             {/* 2nd section right side */}
             
            <div className="col-12 col-lg-5  our-service-rightside">
              <img src="./images/callcenter.jpg" alt="aboutusIMg"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;