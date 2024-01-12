import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/barksLogo.jpg";

function Nav() {
  return (
    <nav className="container">
      <div className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <img src={logo} className="bi me-2" width="40" height="32" alt="company logo" />
          <span className="fs-4">Barks & Bubbles</span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="home" className="nav-link" aria-current="page">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="grooming" className="nav-link">
              Grooming
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              href="#products"
              className="nav-link dropdown-toggle"
              id="productsDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Products
            </a>
            <div className="dropdown-menu" aria-labelledby="productsDropdown">
              <Link to="dog-food" className="dropdown-item">
                Dog Food
              </Link>
              <Link to="dog-toys" className="dropdown-item">
                Dog Toys
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              href="#about"
              className="nav-link dropdown-toggle"
              id="aboutUsDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              About Us
            </a>
            <div className="dropdown-menu" aria-labelledby="aboutUsDropdown">
              <Link to="our-story" className="dropdown-item">
                Our Story
              </Link>
              <Link to="meet-team" className="dropdown-item">
                Meet Team
              </Link>
              <Link to="testimonial" className="dropdown-item">
                Testimonials
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link to="contact" className="nav-link">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
