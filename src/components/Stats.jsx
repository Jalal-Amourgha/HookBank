import React from "react";
import { stats } from "../constants";

const Stats = () => (
  <section className="stats mb-5">
    <div className="container">
      <div className="row">
        {stats.map((stat) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={stat.id}>
            <div className="d-flex align-items-center">
              <h4 className="color me-3">{stat.value}</h4>
              <p>{stat.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
