import React from "react";
import { Link } from "react-router-dom";

function Card({
  image = "https://flowbite.com/docs/images/blog/image-1.jpg",
  title = "demo",
  description = "demodescription",
}) {
  return (
    <div>
      <div className="max-w-sm h-[550px] bg-white border border-gray-200 rounded-lg shadow ">
        <Link to="#">
          <img className="rounded-t-lg " src={image} alt="imageprops" />
        </Link>
        <div className="p-5">
          <Link to="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
              {title}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-black dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
