import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

function Footercallus() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    console.log(isScrolled);
  };
  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="Home Automation Solutions, Home Automation Company, Energy Management, Prepaid Meter, Smart CCTV Solutions, Intercom Service Provider, Smart CCTV Solutions In Delhi NCR, Automatic Boom Barrier Solutions, Video Door Phone System, Home Automation Company In Delhi NCR, FTTH, FTTX, GPON, Fire Alarm Company In Delhi NCR, Fire Alarm System, Intercom Service Provider In Delhi NCR"
        />
        <meta
          name="description"
          content=" Effortlessly handle design, deployment, integration, and management tasks with Parametrique. Simplify your workflow and maximize efficiency with our comprehensive solution."
        />
        <meta
          name="title"
          content=" Design, Deploy, Integrate & Manage Effortlessly with Parametrique"
        />
      </Helmet>
      <div className="bg-primary ">
        <section className=" bg-primary  container">
          <div className=" mx-auto">
            <div className="relative overflow-hidden  bg-primary py-12 px-0 md:p-70">
              <div className="row flex-wrap items-center">
                <div className="col-lg-6">
                  <span className="block mb-4 text-base font-medium text-white">
                    Find Your Solutions
                  </span>
                  <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-40px/48px lg:mb-0">
                    Ready to Discuss Your Needs?
                  </h2>
                </div>
                <div className="col-lg-6">
                  <div className="flex flex-wrap justify-end">
                    <div className="get-btn ">
                      <NavLink
                        onClick={scrollToTop}
                        to="/contact-us"
                        className="default-btn btn-bg-two border-radius-5"
                        style={{ backgroundColor: "white", color: "black" }}
                      >
                        Get A Quote <i className="bx bx-chevron-right"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Footercallus;
