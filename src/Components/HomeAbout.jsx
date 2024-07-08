import React from "react";
import "../App.css";

import images from "../assets/imagenew/Paragif21.jpeg";
function HomeAbout() {
  return (
    <div>
      <div
        style={{ backgroundColor: "#CEE3F9", padding: "90px 20vw" }}
        className="flex justify-center flex-col mx-auto items-center w-full"
      >
        <h3 className="p-4">Solutions</h3>
        <p className="flex justify-center items-center w-full leading-loose">
          Our integrated and innovative network solutions allow the transmission
          of the network through the medium of our optic fiber. Communities can
          choose any network provider according to their need and we will
          amplify the user experience with the convenience of our optical cables
          that will carry the network to the user location. There are no charges
          that are levied on the customer apart from the specific plan or
          network connection that they choose.
        </p>
      </div>
      <div
        className="w-full h-auto flex justify-center items-center"
        style={{ backgroundColor: "#CEE3F9", paddingBottom: "45px" }}
      >
        <img
          src={images}
          alt="homegif"
          style={{
            maxWidth: "100%",
            height: "auto",
            padding: "0 12vw",
          }}
        />
      </div>
    </div>
  );
}

export default HomeAbout;
