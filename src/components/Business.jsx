import React from "react";
import { features } from "../constants";

const Business = () => (
  <section className="business" id="features">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 col-md-12 mb-4">
          <h1 className="lh-base fw-semibold title-size">
            You do the business,
            <br /> we’ll handle the money.
          </h1>
          <p className="mt-3 p-color" style={{ width: "75%" }}>
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <button className="btn-style mt-5 bg-blue-gradient">
            Get Started
          </button>
        </div>
        <div className="col-lg-5 col-md-12">
          {features.map((feature) => (
            <div className="feature-box mb-4 rounded p-3" key={feature.id}>
              <div className="icon-img-box d-flex align-items-center justify-content-center rounded-circle m-auto">
                <img src={feature.icon} alt="icon" />
              </div>
              <div>
                <h4>{feature.title}</h4>
                <p className="p-color">{feature.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Business;
