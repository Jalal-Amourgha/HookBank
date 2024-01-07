import React from "react";
import { clients } from "../constants";

const Clients = () => (
  <section className="clients section-margin">
    <div className="container">
      <div className="row text-center">
        {clients.map((client) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={client.id}>
            <img src={client.logo} className="client-img" alt="client" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Clients;
