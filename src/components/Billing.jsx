import React from "react";
import { bill, apple, google } from "../images";

const Billing = () => (
  <section className="billing section-margin">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4">
          <img src={bill} className="img-size" alt="bill image" />
        </div>
        <div className="col-lg-6 col-md-12 m-auto">
          <h1 className="lg-base">
            Easily control your <br />
            billing & invoicing.
          </h1>
          <p className="p-color mt-4">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
          <div className="d-flex mt-4">
            <img src={apple} className="me-3" alt="apple store" />
            <img src={google} alt="google play" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Billing;
