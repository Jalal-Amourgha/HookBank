import React from "react";
import { logo } from "../images";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container" id="home">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" className="nav-img" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars color"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
            {navLinks.map((link, index) => (
              <li
                key={link.id}
                className={`${index !== navLinks.length - 1 ? "me-lg-3" : ""}`}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
