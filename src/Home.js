import React from "react";
import Navbar from "./navbar";
import Header from "./Header";
import HowItWorks from "./Howitworks";
import Aboutus from "./Aboutus";
import Services from "./Services";
import Contacts from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <HowItWorks/>
      <Aboutus/>
      <Services/>
      <Contacts/>
      <Footer/>
    </>
  );
}
export default Home;