import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/barksLogo.jpg";

function Nav() {
  const [activePage, setActivePage] = useState("home");
  const handlePageClick = (page) => { setActivePage(page); };

  return (
    <nav className="container">
      <div className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/home" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <img src={logo} className="bi me-2" width="40" height="32" alt="company logo" />
          <span className="fs-4">Barks & Bubbles</span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link
              to="home"
              className={`nav-link ${activePage === "home" ? "active" : ""}`}
              aria-current="page"
              onClick={() => handlePageClick("home")}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="grooming"
              className={`nav-link ${activePage === "grooming" ? "active" : ""}`}
              onClick={() => handlePageClick("grooming")}
            >
              Grooming
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              href="#products"
              className={`nav-link dropdown-toggle ${activePage === "#products" ? "active" : ""}`}
              id="productsDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Products
            </a>
            <div className="dropdown-menu" aria-labelledby="productsDropdown">
              <Link to="dog-food" className="dropdown-item" onClick={() => handlePageClick("#products")}>
                Dog Food
              </Link>
              <Link to="dog-toys" className="dropdown-item" onClick={() => handlePageClick("#products")}>
                Dog Toys
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              href="#about"
              className={`nav-link dropdown-toggle ${activePage === "#about" ? "active" : ""}`}
              id="aboutUsDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              About Us
            </a>
            <div className="dropdown-menu" aria-labelledby="aboutUsDropdown">
              <Link to="our-story" className="dropdown-item" onClick={() => handlePageClick("#about")}>
                Our Story
              </Link>
              <Link to="meet-team" className="dropdown-item" onClick={() => handlePageClick("#about")}>
                Meet Team
              </Link>
              <Link to="testimonial" className="dropdown-item" onClick={() => handlePageClick("#about")}>
                Testimonials
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              className={`nav-link ${activePage === "contact" ? "active" : ""}`}
              onClick={() => handlePageClick("contact")}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
