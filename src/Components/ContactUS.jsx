import React from "react";

import "react-toastify/dist/ReactToastify.css";
import PagetopCompontswithbg from "./PagetopCompontswithbg";
import banner from "../assets/imagenew/contactus2.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

function ContactUS() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const smtpParams = {
      host: "smtp.elasticemail.com",
      username: "noreplyparametrique@gmail.com",
      password: "9E86CAC7C919156A3CA248A807702B4EF9B2",
      fromEmail: "noreplyparametrique@gmail.com",
      toEmail: "noreply@parametrique.com",
      ccEmail: "hanuman.shresth@gmail.com",
      subject: "New Contact Form Submission",
      body: `
        Name: ${e.target.name.value}
        Email: ${e.target.email.value}
        Phone Number: ${e.target.phone_number.value}
        Service: ${e.target.msg_subject.value}
        Message: ${e.target.message.value}
      `,
    };

    window.Email.send({
      Host: smtpParams.host,
      Username: smtpParams.username,
      Password: smtpParams.password,
      To: smtpParams.toEmail,
      From: smtpParams.fromEmail,
      Subject: smtpParams.subject,
      Body: smtpParams.body,
      Cc: smtpParams.ccEmail,
    }).then(
      (message) => {
        toast.success("Email sent successfully", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          onClose: () => {
            navigate("/thankyou");
          },
        });

        e.target.reset();
      },
      (error) => {
        console.error("Error sending email:", error);
        toast.error("Error sending email");
      }
    );
  };
  return (
    <div>
      <Helmet>
        <title>Contact Us</title>
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
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://parametrique.com/" />
        <meta
          property="og:image"
          content="https://parametrique.com/path_to_image.jpg"
        />
        <meta
          property="og:description"
          content="Parametrique offers advanced FTTH solutions, providing high-speed and reliable fiber optic technology for modern telecommunications."
        />
        <meta property="og:site_name" content="Parametrique" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content="2024-04-19T00:00:00Z" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="https://parametrique.com/" />
        <meta
          name="twitter:description"
          content="Parametrique is the top fire alarm system and fire detection system company - designing and offering a variety of fire alarm systems.."
        />
        <meta
          name="twitter:image"
          content="https://parametrique.com/assets/imagenew/para-logo.png"
        />
      </Helmet>
      <PagetopCompontswithbg
        Title="CONTACT US"
        img={banner}
        titleColor="#000000"
      />
      <div className="contact-form-area pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center">
            <h2>Let's Send Us a Message Below</h2>
          </div>
          <div className="row pt-45">
            <div className="col-lg-4">
              <div className="contact-info mr-20">
                <span>Contact Info</span>
                <h2>Let's Connect With Us</h2>
                <p>
                  We are the pioneers in the manufacturing of integrated
                  solutions which has contributed in creating new meanings for
                  home and commercial automation.
                </p>
                <ul>
                  <li>
                    <div className="content">
                      <i className="bx bx-phone-call"></i>
                      <h3>Phone Number</h3>
                      <Link to="tel:+91-9899552200">+91-9899552200</Link>
                    </div>
                  </li>
                  <li>
                    <div className="content">
                      <i className="bx bxs-map"></i>
                      <h3>Address</h3>
                      <span>
                        ATS Tower, 2nd Floor,Plot-16, Sector-135 Noida,
                        UP-201301.
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="content">
                      <i className="bx bx-message"></i>
                      <h3>Contact Info</h3>
                      <Link to="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#ea828f868685aa9e8f89828f92c4898587">
                        <span
                          className="__cf_email__"
                          data-cfemail="a3cbc6cfcfcce3d7c6c0cbc6db8dc0ccce"
                        >
                          helpdesk@parametrique.com
                        </span>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="contact-form">
                <form id="contactForm" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Your Name</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          required
                          data-error="Please Enter Your Name"
                          placeholder="Name"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Your Email</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          required
                          data-error="Please Enter Your Email"
                          placeholder="Email"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input
                          type="tel"
                          name="phone_number"
                          id="phone_number"
                          required
                          data-error="Please Enter Your number"
                          className="form-control"
                          placeholder="Phone Number"
                          pattern="[0-9]{10}"
                          title="Please enter 10 digit phone number"
                          maxLength="10"
                          onInput={(e) => {
                            if (e.target.value.length > 10) {
                              e.target.value = e.target.value.slice(0, 10); // Trim the value if it's longer than 10 characters
                            }
                          }}
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Select your Service</label>
                        <select
                          name="msg_subject"
                          id="msg_subject"
                          className="form-control"
                          data-error="Please Select Your Service"
                        >
                          <option value="FTTH">FTTH</option>
                          <option value="Intercom"> Intercom </option>
                          <option value="Smart Prepaid Meter">
                            Smart Prepaid Meter
                          </option>
                          <option value="Home Automation">
                            Home Automation
                          </option>
                          <option value="Boom Barrier">Boom Barrier</option>
                          <option value="CCTV">CCTV</option>
                          <option value="Fire Alarm System">
                            Fire Alarm System
                          </option>
                          <option value="Parking Managemen">
                            Parking Management
                          </option>
                          <option value="Video Door Phone">
                            Video Door Phone
                          </option>
                        </select>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Your Message</label>
                        <textarea
                          name="message"
                          className="form-control"
                          id="message"
                          cols="30"
                          rows="8"
                          data-error="Write your message"
                          placeholder="Your Message"
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="agree-label">
                        <label htmlFor="chb1">
                          Accept
                          <Link to="#">Terms & Conditions</Link> And
                          <Link to="#">Privacy Policy.</Link>
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 text-center">
                      <button
                        type="submit"
                        className="default-btn btn-bg-two border-radius-50"
                      >
                        Send Message <i className="bx bx-chevron-right"></i>
                      </button>
                      <div
                        id="msgSubmit"
                        className="h3 text-center hidden"
                      ></div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="map-area">
        <div className="container-fluid m-0 p-0">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14025.33097670673!2d77.4!3d28.499635!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce8608c9639b3%3A0xb22aef7c819ffdd1!2sParametrique%20Electronic%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sus!4v1709974135020!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUS;
