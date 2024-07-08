import React from "react";
import { Link } from "react-router-dom";
import blogeimg1 from "../assets/imagenew/Blogs1.jpg";
import blogeimg2 from "../assets/imagenew/Blog2.jpg";
import blogeimg3 from "../assets/imagenew/Blog3.jpg";
function Blog() {
  return (
    <div>
      <div className="blog-area pt-100  ">
        <div className="container">
          <div className="section-title text-center center flex-col items-center lg:ml-[250px]">
            <span className="sp-color2">Latest Blog</span>
            <h2>Click Out Our Latest Blog</h2>
          </div>
          <div className="row pt-45 justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="blog-item">
                <div className="blog-img3">
                  <div to="#">
                    <img src={blogeimg1} alt="Blog1 Images" />
                  </div>
                  <div className="blog-tag">
                    <h3>11</h3>
                    <span>June</span>
                  </div>
                </div>
                <div className="content">
                  <h3>
                    <Link to="#">
                      Revolutionizing Smart Homes Parametrique Leading the Way
                      in Delhi NCR
                    </Link>
                  </h3>
                  <p>
                    Parametrique has swiftly emerged as a leading force in
                    Noida's smart home technology sector....
                  </p>
                  <Link to="#" className="read-btn">
                    Read More <i className="bx bx-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-item">
                <div className="blog-img3">
                  <div to="#">
                    <img src={blogeimg2} alt="Blog2 Images" />
                  </div>
                  <div className="blog-tag">
                    <h3>12</h3>
                    <span>June</span>
                  </div>
                </div>
                <div className="content">
                  <h3>
                    <Link to="#">
                      Enhancing Security: Smart CCTV Solutions I PARAMETRIQUE
                    </Link>
                  </h3>
                  <p>
                    In the bustling environment of Delhi NCR, where security
                    concerns are ever-present, technological advancements have
                    reshaped traditional security measures....
                  </p>
                  <Link to="#" className="read-btn">
                    Read More <i className="bx bx-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-item">
                <div className="blog-img3">
                  <div to="#">
                    <img src={blogeimg3} alt="Blog3 Images" />
                  </div>
                  <div className="blog-tag">
                    <h3>15</h3>
                    <span>June</span>
                  </div>
                </div>
                <div className="content">
                  <h3>
                    <Link to="#">
                      Enhancing Security with Access Control Systems I
                      PARAMETRIQUE
                    </Link>
                  </h3>
                  <p>
                    In the bustling metropolis of Delhi NCR, where life moves
                    swiftly and population density is high....
                  </p>
                  <Link to="#" className="read-btn">
                    Read More <i className="bx bx-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
