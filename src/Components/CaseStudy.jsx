import React from "react";

function CaseStudy() {
  return (
    <main className="bg-primary">
      <div className="container py-4 pb-5 bg-primary">
        <header className="pb-3 mb-4 ">
          <h4 className="text-white text-center " style={{}}>
            Sector We Served
          </h4>
        </header>

        <div className="row row-cols-1 row-cols-md-2 g-4 align-items-stretch">
          <div className="col">
            <div className="h-100 p-4 bg-body-tertiary border rounded-3">
              <h2>Residential Solution</h2>
              <p>
                Parametrique offers a one-stop solution for smart living.
                Imagine FTTH, home automation, security, and energy management
                all working together. We design, deploy, and manage these
                systems for a seamless, modern living experience.
                <br />
                <br /> <br />
              </p>
            </div>
          </div>

          <div className="col">
            <div className="h-100 p-4 bg-body-tertiary border rounded-3">
              <h2>Commercial Solution</h2>
              <p>
                Unleash Business Growth: Scalable FTTH for Commercial Buildings.
                Parametrique designs, deploys & manages custom fiber networks
                for high-speed, reliable connectivity, integrating with smart
                buildings. Future-proof your business. Get a Quote!
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CaseStudy;
