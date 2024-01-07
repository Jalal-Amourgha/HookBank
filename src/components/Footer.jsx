import React from "react";
import { logo } from "../images";
import { footerLinks } from "../constants";
import { socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <img src={logo} alt="logo" />
            <p className="p-color mt-3">
              A new way to make the payments easy, reliable and secure.
            </p>
          </div>
          {footerLinks.map((footerLink, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
              <h4 className="mb-3">{footerLink.title}</h4>
              {footerLink.links.map((link, index) => (
                <ul key={index}>
                  <li className="mb-3">
                    <a href="#">{link.name}</a>
                  </li>
                </ul>
              ))}
            </div>
          ))}
        </div>
        <div className="under-line"></div>
        <div className="d-flex justify-content-between">
          <p className="p-color">
            Copyright &copy; 2024 HooBank. All Rights Reserved.
          </p>
          <div className="d-flex">
            {socialMedia.map((social, index) => (
              <div
                className={`${index !== socialMedia.length - 1 ? "me-4" : ""}`}
                key={index}
              >
                <a href="#">
                  {" "}
                  <img src={social.icon} alt="icon" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
