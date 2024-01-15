import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  
  return (
    <div className="container footer clearfix">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link
              to="home"
              className="nav-link px-2 text-muted"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="grooming" className="nav-link px-2 text-muted">
              Grooming
            </Link>
          </li>
          <li className="nav-item">
            <Link to="products" className="nav-link px-2 text-muted">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="dog-food" className="nav-link px-2 text-muted">
              Dog Food
            </Link>
          </li>
          <li className="nav-item">
            <Link to="dog-toys" className="nav-link px-2 text-muted">
              Dog Toys
            </Link>
          </li>
          <li className="nav-item">
            <Link to="our-story" className="nav-link px-2 text-muted">
              Our Story
            </Link>
          </li>
          <li className="nav-item">
            <Link to="meet-team" className="nav-link px-2 text-muted">
              Meet Team
            </Link>
          </li>
          <li className="nav-item">
            <Link to="testimonial" className="nav-link px-2 text-muted">
              Testimonials
            </Link>
          </li>
          <li className="nav-item">
            <Link to="contact" className="nav-link px-2 text-muted">
              Contact Us
            </Link>
          </li>
        </ul>
        <p className="text-center text-muted">&copy; 2022 Company, Inc</p>
      </footer>
    </div>
  );
}

export default Footer;