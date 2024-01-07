import React from "react";
import { feedbacks } from "../constants";
import { quotes } from "../images";

const Testimonials = () => (
  <section className="testimonials section-margin" id="clients">
    <div className="container">
      <div className="testimonials-header">
        <h1>
          What people are <br /> saying about us
        </h1>
        <div className="d-flex align-items-center justify-content-center">
          <p className="p-color">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className="row mt-5">
        {feedbacks.map((feedback) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={feedback.id}>
            <div className="feedback-box position-relative">
              <img src={quotes} alt="icon" />
              <p className="mt-5">{feedback.content}</p>
              <div className="d-flex align-items-center position-absolute feedback-informations">
                <img src={feedback.img} />
                <div>
                  <h5>{feedback.name}</h5>
                  <p className="p-color">{feedback.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
