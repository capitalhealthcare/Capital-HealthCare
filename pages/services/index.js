import Head from "next/head";
import Link from "next/link";
import React from "react";
import { CommonBanner } from "../components/CommonBanner";
import { Footer } from "../components/Footer/Footer";
import { GetAQuote } from "../components/Get-A-Quote";
import { WhyChooseUs } from "../components/Why-choose-us";
import { Navbar } from "../components/Header/Navbar";
import { Reviews } from "../components/Reviews";
import Image from "next/image";

export const services = () => {
  return (
    <>
      <Navbar />

      <CommonBanner
        B_title="Solutions"
        First_heading="Solutions We"
        Last_heading="Provides"
        ImageSrc="https://rrdevs.net/demos/html/consulter/assets/img/page-banner/page-banner.jpg"
        First_Breadcrumb="Home"
        Last_Breadcrumb="Solutions"
      />

      {/* <!-- digital-area end --> */}
      <section className="digital-area pb-xs-80 pt-xs-80 pt-sm-100 pb-sm-100 pt-md-100 pb-md-100 pt-120 pb-120 overflow-hidden">
        <div className="container">
          <div className="row mb-minus-30">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="why-choose__item">
                <div className="icon mb-30 mb-lg-20 mb-md-10 mb-xs-5 color-primary">
                  <i className="icon-consultant"></i>
                </div>

                <h5 className="title color-d_black mb-15 mb-xs-10">
                  Digital Consulting
                </h5>

                <div className="description font-la">
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit sed quia consequuntu.
                  </p>
                </div>

                <Link href="services-details.html">
                  Read More <i className="far fa-chevron-double-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="why-choose__item">
                <div className="icon mb-30 mb-lg-20 mb-md-10 mb-xs-5 color-primary">
                  <i className="icon-analysis"></i>
                </div>

                <h5 className="title color-d_black mb-15 mb-xs-10">
                  Strategy & Research
                </h5>

                <div className="description font-la">
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit sed quia consequuntu.
                  </p>
                </div>

                <Link href="services-details.html">
                  Read More <i className="far fa-chevron-double-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="why-choose__item">
                <div className="icon mb-30 mb-lg-20 mb-md-10 mb-xs-5 color-primary">
                  <i className="icon-balance"></i>
                </div>

                <h5 className="title color-d_black mb-15 mb-xs-10">
                  Tax Consulting
                </h5>

                <div className="description font-la">
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit sed quia consequuntu.
                  </p>
                </div>

                <Link href="services-details.html">
                  Read More <i className="far fa-chevron-double-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="why-choose__item">
                <div className="icon mb-30 mb-lg-20 mb-md-10 mb-xs-5 color-primary">
                  <i className="icon-file"></i>
                </div>

                <h5 className="title color-d_black mb-15 mb-xs-10">
                  Project Management
                </h5>

                <div className="description font-la">
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit sed quia consequuntu.
                  </p>
                </div>

                <Link href="services-details.html">
                  Read More <i className="far fa-chevron-double-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- digital-area end --> */}

      <GetAQuote />

      {/* <!-- similar-work start --> */}
      <section className="similar-work similar-work-services  bg-dark_white pb-xs-80 pb-sm-100 pb-md-100 pb-120 overflow">
        <div className="container">
          <div className="row mb-minus-30">
            <div className="col-lg-4 col-md-6">
              <div className="similar-work__item reade-more-hidden mb-30 d-flex justify-content-between flex-column">
                <div className="top d-flex align-items-center">
                  <div className="icon color-white text-center">
                    <i className="fal fa-analytics"></i>
                  </div>

                  <h4 className="title color-d_black">
                    <Link href="services-details.html">
                      Medical Billing Services
                    </Link>{" "}
                  </h4>
                </div>

                <div className="bottom">
                  <div className="media overflow-hidden">
                    <Image width="434" height="250"
                      src="/assets/img/services/services-1.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>

                  <Link
                    href="services-details.html"
                    className="theme-btn text-center fw-600"
                  >
                    Read Details <i className="fas fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="similar-work__item reade-more-hidden mb-30 d-flex justify-content-between flex-column">
                <div className="top d-flex align-items-center">
                  <div className="icon color-white text-center">
                    <i className="icon-planning"></i>
                  </div>

                  <h4 className="title color-d_black">
                    <Link href="services-details.html">
                      Provider Credentialing
                    </Link>{" "}
                  </h4>
                </div>

                <div className="bottom">
                  <div className="media overflow-hidden">
                    <img
                      src="assets/img/project-details/project-details-1.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>

                  <Link
                    href="services-details.html"
                    className="theme-btn text-center fw-600"
                  >
                    Read Details <i className="fas fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="similar-work__item reade-more-hidden mb-30 d-flex justify-content-between flex-column">
                <div className="top d-flex align-items-center">
                  <div className="icon color-white text-center">
                    <i className="icon-outline"></i>
                  </div>

                  <h4 className="title color-d_black">
                    <Link href="services-details.html">
                      Chronic Care Management
                    </Link>{" "}
                  </h4>
                </div>

                <div className="bottom">
                  <div className="media overflow-hidden">
                    <img
                      src="assets/img/project-details/project-details-1.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>

                  <Link
                    href="services-details.html"
                    className="theme-btn text-center fw-600"
                  >
                    Read Details <i className="fas fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="similar-work__item reade-more-hidden mb-30 d-flex justify-content-between flex-column">
                <div className="top d-flex align-items-center">
                  <div className="icon color-white text-center">
                    <i className="fal fa-analytics"></i>
                  </div>

                  <h4 className="title color-d_black">
                    <Link href="services-details.html">
                      Medical Billing Audits
                    </Link>{" "}
                  </h4>
                </div>

                <div className="bottom">
                  <div className="media overflow-hidden">
                  <Image width="434" height="250"
                      src="/assets/img/services/services-1.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>

                  <Link
                    href="services-details.html"
                    className="theme-btn text-center fw-600"
                  >
                    Read Details <i className="fas fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="similar-work__item reade-more-hidden mb-30 d-flex justify-content-between flex-column">
                <div className="top d-flex align-items-center">
                  <div className="icon color-white text-center">
                    <i className="icon-planning"></i>
                  </div>

                  <h4 className="title color-d_black">
                    <Link href="services-details.html">
                      Revenue Cycle Management
                    </Link>{" "}
                  </h4>
                </div>

                <div className="bottom">
                  <div className="media overflow-hidden">
                    <img
                      src="assets/img/project-details/project-details-1.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>

                  <Link
                    href="services-details.html"
                    className="theme-btn text-center fw-600"
                  >
                    Read Details <i className="fas fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="similar-work__item reade-more-hidden mb-30 d-flex justify-content-between flex-column">
                <div className="top d-flex align-items-center">
                  <div className="icon color-white text-center">
                    <i className="icon-outline"></i>
                  </div>

                  <h4 className="title color-d_black">
                    <Link href="services-details.html">
                      Doctor MACRA Servies
                    </Link>{" "}
                  </h4>
                </div>

                <div className="bottom">
                  <div className="media overflow-hidden">
                    <img
                      src="assets/img/project-details/project-details-1.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>

                  <Link
                    href="services-details.html"
                    className="theme-btn text-center fw-600"
                  >
                    Read Details <i className="fas fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- similar-work end --> */}

      <WhyChooseUs />

      {/* <!-- can-help start --> */}
      <section className="can-help services-two bg-dark_white pb-xs-80 pt-xs-80 pt-sm-100 pb-sm-100 pt-md-100 pb-md-100 pt-120 pb-115 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div className="can-help__content  mb-sm-40 mb-xs-40 mb-md-45 mb-lg-50">
                <h2 className="title color-d_black mb-sm-15 mb-xs-10 mb-20">
                  Experience The Evolution Of Your Business
                </h2>

                <div className="description font-la mb-md-25 mb-sm-25 mb-xs-20 mb-lg-30 mb-50">
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look
                  </p>
                </div>

                <div className="help-text mb-md-25 mb-sm-25 mb-xs-20 mb-lg-25 mb-40">
                  <Link href="contact.html">
                    <img
                      src="assets/img/icon/question-comment.svg"
                      className="img-fluid mr-xs-10 mr-20"
                      alt=""
                    />
                    Need help? <span>Contact Us</span>
                  </Link>
                </div>

                <div className="can-help__content-btn-group d-flex flex-column flex-sm-row">
                  <Link
                    href="tel:+1235568824"
                    className="theme-btn d-flex flex-column flex-md-row align-items-md-center"
                  >
                    <div className="icon">
                      <i className="icon-call"></i>
                      {/* <!-- <img src="assets/img/icon/phone-1.svg" alt=""> --> */}
                    </div>
                    <div className="text">
                      <span className="font-la mb-10 d-block fw-500 color-d_black">
                        Call Us Everyday
                      </span>
                      <h5 className="fw-500 color-d_black">+123 556 8824</h5>
                    </div>
                  </Link>

                  <Link
                    href="mailto:consulter@gmail.com"
                    className="theme-btn d-flex flex-column flex-md-row align-items-md-center"
                  >
                    <div className="icon">
                      <i className="icon-email-1"></i>
                      {/* <!-- <img src="assets/img/icon/phone-1.svg" alt=""> --> */}
                    </div>
                    <div className="text">
                      <span className="font-la mb-10 d-block fw-500 color-d_black">
                        Email Drop Us
                      </span>
                      <h5 className="fw-500 color-d_black">
                        consulter@gmail.com
                      </h5>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-5">
              <div className="contact-form pt-md-30 pt-sm-25 pt-xs-20 pb-md-40 pb-sm-35 pb-xs-30 pt-xl-30 pb-xl-50 pt-45 pr-xl-50 pl-md-40 pl-sm-30 pl-xs-25 pr-md-40 pr-sm-30 pr-xs-25 pl-xl-50 pr-85 pb-60 pl-85">
                <div className="contact-form__header mb-sm-35 mb-xs-30 mb-40">
                  <h6 className="sub-title fw-500 color-primary text-uppercase mb-15">
                    <img
                      src="assets/img/team-details/badge-line.svg"
                      className="img-fluid mr-10"
                      alt=""
                    />{" "}
                    Get In Touch
                  </h6>
                  <h3 className="title color-d_black">Free Consultation</h3>
                </div>

                <form>
                  <div className="single-personal-info">
                    <input
                      defaultValue="Search..."
                      type="text"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="single-personal-info">
                    <input
                      defaultValue="Search..."
                      type="email"
                      placeholder="Your e-mail"
                    />
                  </div>
                  <div className="single-personal-info">
                    <input
                      defaultValue="Search..."
                      type="text"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="single-personal-info">
                    <textarea placeholder="Your Massage"></textarea>
                  </div>

                  <button type="submit" className="theme-btn btn-sm">
                    Free Consultant{" "}
                    <i className="far fa-chevron-double-right"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- can-help end --> */}

      <Reviews />

      <Footer />
    </>
  );
};

export default services;
