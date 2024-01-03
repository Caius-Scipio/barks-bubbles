import React from "react";
import logo from "../Images/barksLogo.jpg";

function Nav() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <img
            src={logo}
            className="bi me-2"
            width="40"
            height="32"
            alt="company logo"
          />
          <span className="fs-4">Barks & Bubbles</span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <a
              href="#home"
              className="nav-link active"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#grooming"
              className="nav-link"
            >
              Grooming
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#products"
              className="nav-link"
            >
              Products
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#about"
              className="nav-link"
            >
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              className="nav-link"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Nav;