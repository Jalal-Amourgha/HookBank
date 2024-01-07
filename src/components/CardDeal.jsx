import React from "react";
import { card } from "../images";

const CardDeal = () => (
  <section className="card-box" id="product">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4">
          <h1 className="lh-base mt-4">
            Find a better card deal <br /> in few easy steps.
          </h1>
          <p className="p-color w-75 mt-4">
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <button className="btn-style bg-blue-gradient mt-4">
            Get Started
          </button>
        </div>
        <div className="col-lg-6 col-md-12 text-end mb-3">
          <img src={card} className="img-size" alt="card image" />
        </div>
      </div>
    </div>
  </section>
);

export default CardDeal;
