import React from 'react';

function ServicesSection() {
  return (
    <section className="company-info" id="services">
      <div className="container">
        <h2>Our Services</h2>
        <p>
          Southern Bay is an import export company involved in international trading
          of agricultural commodities & industrial products around the globe. With our
          extensive network and years of experience, we connect producers with markets
          worldwide, ensuring quality and reliability at every step of the supply chain.
        </p>
        <div className="features">
          <div className="feature">
            <h3>Global Network</h3>
            <p>Connecting businesses across continents</p>
          </div>
          <div className="feature">
            <h3>Quality Assurance</h3>
            <p>Rigorous standards for all products</p>
          </div>
          <div className="feature">
            <h3>Efficient Logistics</h3>
            <p>Timely delivery anywhere in the world</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;