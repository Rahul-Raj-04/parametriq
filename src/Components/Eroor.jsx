import React from "react";
import errorimg from "../assets/imagenew/404-error.jpg";
import { Link } from "react-router-dom";

function Eroor() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div class="bg-gray-200  items-center justify-center">
        <div class="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
          <div class="error-area">
            <div class="d-table">
              <div class="d-table-cell">
                <div class="error-content">
                  <img src={errorimg} alt="errorimg" />
                  <h3>Oops! Page Not Found</h3>
                  <p>
                    The page you are looking for might have been removed had its
                    name changed or is temporarily unavailable.
                  </p>
                  <Link
                    to="/"
                    class="default-btn btn-bg-two"
                    onClick={scrollToTop}
                  >
                    Return To Home Page
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Eroor;
