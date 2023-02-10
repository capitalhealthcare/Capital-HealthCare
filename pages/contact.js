import Head from "next/head";
import React from "react";
import Script from "next/Script";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Header/Navbar";
import { CommonBanner } from "./components/CommonBanner";
import Image from "next/image";

export const contact = () => {
  return (
    <>
      <Navbar />

      <CommonBanner
        B_title="Contact"
        First_heading="Contact"
        Last_heading="With Us"
        ImageSrc="https://rrdevs.net/demos/html/consulter/assets/img/page-banner/page-banner-1.jpg"
        First_Breadcrumb="Home"
        Last_Breadcrumb="Contact Us"
      />

      {/* <!-- contact-us start --> */}
      <section className="contact-us pb-xs-80 pt-xs-80 pt-sm-100 pb-sm-100 pt-md-100 pb-md-100 pt-120 pb-120 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-us__content">
                <h6 className="sub-title fw-500 color-primary text-uppercase mb-sm-15 mb-xs-10 mb-20">
                  <Image width="50" height="10"
                    src="assets/img/team-details/badge-line.svg"
                    className="img-fluid mr-10"
                    alt=""
                  />{" "}
                  contact us with Ease
                </h6>
                <h2 className="title color-d_black mb-sm-15 mb-xs-10 mb-20">
                  Get in Touch
                </h2>

                <div className="description font-la">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. ut enim ad minim veniam.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row contact-us__item-wrapper mt-xs-35 mt-sm-40 mt-md-45">
                <div className="col-sm-6">
                  <div className="contact-us__item mb-40">
                    <div className="contact-us__item-header mb-25 mb-md-20 mb-sm-15 mb-xs-10 d-flex align-items-center">
                      <div className="icon mr-10 color-primary">
                        <i className="fal fa-map-marker-alt"></i>
                      </div>

                      <h5 className="title color-d_black">London Office</h5>
                    </div>

                    <div className="contact-us__item-body font-la">
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="contact-us__item mb-40">
                    <div className="contact-us__item-header mb-25 mb-md-20 mb-sm-15 mb-xs-10 d-flex align-items-center">
                      <div className="icon mr-10 color-primary">
                        <i className="icon-home-location"></i>
                      </div>

                      <h5 className="title color-d_black">Ontario Office</h5>
                    </div>

                    <div className="contact-us__item-body font-la">
                      3891 Ranchview Dr. Richardson, California 62639
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="contact-us__item mb-40">
                    <div className="contact-us__item-header mb-25 mb-md-20 mb-sm-15 mb-xs-10 d-flex align-items-center">
                      <div className="icon mr-10 color-primary">
                        <i className="icon-phone"></i>
                      </div>

                      <h5 className="title color-d_black">Call Us Toll Free</h5>
                    </div>

                    <div className="contact-us__item-body font-la">
                      <ul>
                        <li>
                          <a href="tell:(406)555-0120">(406) 555-0120</a>
                        </li>
                        <li>
                          <a href="tell:(208)555-0112">(208) 555-0112</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="contact-us__item mb-40">
                    <div className="contact-us__item-header mb-25 mb-md-20 mb-sm-15 mb-xs-10 d-flex align-items-center">
                      <div className="icon mr-10 color-primary">
                        <i className="icon-email"></i>
                      </div>

                      <h5 className="title color-d_black">Email Us</h5>
                    </div>

                    <div className="contact-us__item-body font-la">
                      <ul>
                        <li>
                          <a href="mailto:consulter@example.com">
                            consulter@example.com{" "}
                          </a>
                        </li>
                        <li>
                          <a href="mailto:sara.cruz@example.com">
                            sara.cruz@example.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <hr className="mt-md-45 mt-sm-30 mt-xs-30 mt-60" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- contact-us end --> */}

      {/* <!-- contact-us form end --> */}
      <section className="contact-form  mb-xs-80 mb-sm-100 mb-md-100 mb-120 overflow-hidden">
        <div id="contact-map" className="mb-sm-30 mb-xs-25"></div>
        {/* <!-- contact-map --> */}

        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="contact-form pt-md-30 pt-sm-25 pt-xs-20 pb-md-40 pb-sm-35 pb-xs-30 pt-xl-30 pb-xl-50 pt-45 pr-xl-50 pl-md-40 pl-sm-30 pl-xs-25 pr-md-40 pr-sm-30 pr-xs-25 pl-xl-50 pr-85 pb-60 pl-85">
                <div className="contact-form__header mb-sm-35 mb-xs-30 mb-40">
                  <h6 className="sub-title fw-500 color-primary text-uppercase mb-15">
                    <Image width="50" height="10"
                      src="assets/img/team-details/badge-line.svg"
                      className="img-fluid mr-10"
                      alt=""
                    />{" "}
                    Need help?
                  </h6>
                  <h3 className="title color-d_black">Contact Us</h3>
                </div>

                <form>
                  <div className="single-personal-info">
                    <input
                      type="text"
                      id="name"
                      defaultValue="Search..."
                      name="name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="single-personal-info">
                    <input
                      type="email"
                      id="email"
                      defaultValue="Search..."
                      name="email"
                      placeholder="Your e-mail"
                    />
                  </div>
                  <div className="single-personal-info">
                    <input
                      type="text"
                      name="subject"
                      defaultValue="Search..."
                      placeholder="Subject"
                    />
                  </div>
                  <div className="single-personal-info">
                    <textarea
                      name="message"
                      placeholder="Your Massage"
                    ></textarea>
                  </div>

                  <button type="submit" className="theme-btn btn-sm">
                    Submit Message{" "}
                    <i className="far fa-chevron-double-right"></i>
                  </button>
                </form>
              </div>
            </div>
            <div className="col-6">
            <iframe class="mapframe" src="https://www.google.com/maps/d/embed?mid=1PhsRJaQXhBNF5hcey3Z4SzHZp1ncSqw&amp;ehbc=2E312F">
				    
            </iframe>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- contact-us form end --> */}

      <Footer />
    </>
  );
};

export default contact;
