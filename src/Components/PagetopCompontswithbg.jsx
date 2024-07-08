import React from "react";

function PagetopCompontswithbg({
  img = "https://www.parametrique.com/assets/media/image/expertise/intercom.jpg",
  Title = "DEMO",
  titleColor = "#ffffff",
}) {
  return (
    <>
      <div
        className="inner-banner"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="container ">
          <div className="inner-title">
            <h1
              className=" sm:font-bold md:font-bold  sm:text-[90px]  md:text-[90px] "
              style={{ color: titleColor }}
            >
              {Title}
            </h1>
            <ul>
              <li
                className="  font-bold text-[68px] "
                style={{ color: titleColor }}
              >
                Your Gateway to Secure Living
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default PagetopCompontswithbg;
