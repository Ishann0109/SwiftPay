import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              SwiftPaY
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show ? "show" : ""}`} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/service">
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
                {isAuthenticated ? (
                  <button
                    className="btn btn-style"
                    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                  >
                    Log Out
                  </button>
                ) : (
                  <div className="nav-buttons">
                    <button className="btn btn-style" onClick={() => loginWithRedirect()}>
                      Sign Up
                    </button>
                    <button className="btn btn-style btn-style-border" onClick={() => loginWithRedirect()}>
                      Log In
                    </button>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
