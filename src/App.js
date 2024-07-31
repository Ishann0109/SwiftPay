import React from "react";
import Home from "./Home.js";
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Service from "./pages/Service.js";
import Error from "./pages/Error.js";

const App = () => {
  return (
    <>
     <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path = "*" element={<Error/>} />
        </Routes>
      </div>
    </Router>
    </>
  );
};

export default App;
