import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" onClick={() => {
            setClick(false);
            scrollToTop();
            }}>
            <img src="./images/logo.png" alt="Logo" className="image" />
          </Link>
          <div className="menu-icon" onClick={() => setClick(!click)}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={() => {
                  setClick(false);
                  scrollToTop();
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={() => {
                  setClick(false);
                  scrollToTop();
                }}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-links"
                onClick={() => {
                  setClick(false);
                  scrollToTop();
                }}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={() => {
                  setClick(false);
                  scrollToTop();
                }}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && (
            <Button
              buttonStyle="btn--outline"
              path="/sign-up"
              onClick={() => scrollToTop()}>
              SIGN UP
            </Button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
