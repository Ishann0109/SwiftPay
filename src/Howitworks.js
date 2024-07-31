import React, { useState } from "react";
import workapi from "./API/Workapi.js";

const HowItWorks = () => {
  const [workData, setWorkData] = useState(workapi);
  console.log(workData);
  return (
    <>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <section className= "parent">
      {/* https://www.w3schools.com/bootstrap4/bootstrap_containers.asp */}
        <div className="work-container container">
          <h1 className="main-heading text-center">How does it Work</h1>
          <div className="row">
          {/* the curElem contains the current element of the api */}
          {/* curElem is an object */}
            {workData.map((curElem) => {
                {/* we use destructuring so we dont have to do curElem.id,curElem.title etc */}
              const { id, logo, title, info } = curElem;
              return (
                <>
                  <div className="col-12 col-lg-4 text-center work-container-subdiv">
                    <i class={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para w-100">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;