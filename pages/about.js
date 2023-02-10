import React from "react";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Header/Navbar";
import { Reviews } from "./components/Reviews";
import { CommonBanner } from "./components/CommonBanner";
import { KnowOurCompany } from "./components/Know-Our-Company";
import { OurTeam } from "./components/OurTeam";
import Image from "next/image";
import { GetInTouch } from "./components/Get-In-Touch";
import Head from "next/head";

export const about = () => {
  return (
    <>
     {/* <Head>
      <link rel="stylesheet" href="assets/css/bootstrap.min.css"/>
      </Head> */}

      <Navbar />

      <CommonBanner
        B_title="About Us"
        First_heading="know Our About"
        Last_heading="Company"
        ImageSrc="assets/img/page-banner/page-banner.jpg"
        First_Breadcrumb="Home"
        Last_Breadcrumb="About Us"
      />

      <KnowOurCompany />

      {/* <!-- employee-friendly start --> */}
      <section className="employee-friendly bg-dark_white pt-sm-60 pt-xs-80 pb-xs-80 pt-sm-100 pb-sm-100 pt-md-100 pb-md-100 pt-120 pb-120 overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-9">
              <div className="employee-friendly__content">
                <span className="sub-title fw-500 color-primary text-uppercase mb-sm-10 mb-xs-5 mb-15 d-block">
                  <Image
                    width="50"
                    height="10"
                    src="assets/img/team-details/badge-line.svg"
                    className="img-fluid mr-10"
                    alt=""
                  />{" "}
                  Services
                </span>
                <h2 className="title color-d_black">
                  Employee Friendly <span>Service</span>
                </h2>
              </div>
            </div>

            <div className="col-sm-3">
              <div className="slider-controls mt-sm-30">
                <div className="slider-arrows d-flex align-content-center justify-content-sm-end"></div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-4">
              <div className="employee-friendly__slider mt-65 mt-md-50 mt-sm-40 mt-xs-30">
                <div className="slider-item">
                  <div className="similar-work__item reade-more-hidden d-flex justify-content-between flex-column">
                    <div className="top d-flex align-items-center">
                      <div className="icon color-white text-center">
                        <i className="fal fa-analytics"></i>
                      </div>

                      <h4 className="title color-d_black">
                        <a href="services.html">
                          Finance &amp; Strategy Service
                        </a>
                      </h4>
                    </div>

                    <div className="bottom">
                      <div className="media overflow-hidden">
                        <Image
                          width="434"
                          height="250"
                          src="/assets/img/services/services-1.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>

                      <a
                        href="services.html"
                        className="theme-btn text-center fw-600"
                      >
                        Read Details{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="employee-friendly__slider mt-65 mt-md-50 mt-sm-40 mt-xs-30">
                <div className="slider-item">
                  <div className="similar-work__item reade-more-hidden d-flex justify-content-between flex-column">
                    <div className="top d-flex align-items-center">
                      <div className="icon color-white text-center">
                        <i className="fal fa-analytics"></i>
                      </div>

                      <h4 className="title color-d_black">
                        <a href="services.html">
                          Finance &amp; Strategy Service
                        </a>
                      </h4>
                    </div>

                    <div className="bottom">
                      <div className="media overflow-hidden">
                        <Image
                          width="434"
                          height="250"
                          src="/assets/img/services/services-1.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>

                      <a
                        href="services.html"
                        className="theme-btn text-center fw-600"
                      >
                        Read Details{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="employee-friendly__slider mt-65 mt-md-50 mt-sm-40 mt-xs-30">
                <div className="slider-item">
                  <div className="similar-work__item reade-more-hidden d-flex justify-content-between flex-column">
                    <div className="top d-flex align-items-center">
                      <div className="icon color-white text-center">
                        <i className="fal fa-analytics"></i>
                      </div>

                      <h4 className="title color-d_black">
                        <a href="services.html">
                          Finance &amp; Strategy Service
                        </a>
                      </h4>
                    </div>

                    <div className="bottom">
                      <div className="media overflow-hidden">
                        <Image
                          width="434"
                          height="250"
                          src="/assets/img/services/services-1.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>

                      <a
                        href="services.html"
                        className="theme-btn text-center fw-600"
                      >
                        Read Details{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- employee-friendly end --> */}
      <GetInTouch />

      <OurTeam />

      {/* <!-- testimonial start --> */}
      <Reviews />
      {/* <!-- testimonial end --> */}

      <Footer />
    </>
  );
};

export default about;
