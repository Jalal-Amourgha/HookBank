import React from "react";
import GetStarted from "./GetStarted";
import { robot } from "../images";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="discount d-flex align-items-center bg-discount-gradient rounded">
              <i className="fa-solid fa-percent color me-2"></i>
              <p className="text-uppercase fw-lighter">
                <span className="fw-bold">20%</span> discount for{" "}
                <span className="fw-bold">2 month</span> acount
              </p>
            </div>
            <div className="position-relative mt-2">
              <h1 className="lh-base">
                The Next <br />
                <span className="text-gradient">Generation</span>
                <br />
                Payment Method
              </h1>
              <p className="mt-3 fw-lighter mb-4" style={{ width: "75%" }}>
                Our team of experts uses a methodology to identify the credit
                cards most likely to fit your needs. We examine annual
                percentage rates, annual fees.
              </p>
              <GetStarted />
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <img src={robot} alt="hero image" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
