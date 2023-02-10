import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Script from "next/Script";
import { Navbar } from "./components/Header/Navbar";
import { Footer } from "./components/Footer/Footer.js";
import Link from "next/link";
import { fetchArticles } from "../http";
import { Reviews } from "./components/Reviews";
import { WhyChooseUs } from "./components/Why-choose-us";
import { OurTeam } from "./components/OurTeam";
import { GetInTouch } from "./components/Get-In-Touch";

export default function Home({ articles }) {
  return (
    <>
      <Navbar />

      {/* <!-- banner-home start --> */}
      <section className="banner-home overflow-hidden pt-lg-100 pt-md-90 pt-sm-80 pt-xs-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="banner-home__content pb-lg-60 pb-md-50 pb-sm-45 pb-xs-40">
                <h6 className="sub-title color-white mb-20 mb-sm-15 mb-xs-10 d-inline-block">
                  Welcome To <span>CapitalHealthCare</span> Solutions
                </h6>
                <h1 className="title color-white fw-bold mb-20 mb-sm-15 mb-xs-10">
                  A Better Revenue Cycle Starts Here
                  {/* <Typewriter
  options={{
    strings: ['Hello', 'World'],
    autoStart: true,
    loop: true,
  }}
/> */}
                </h1>

                <div className="description font-la color-white mb-45 mb-md-30 mb-sm-25 mb-xs-20">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                  </p>
                </div>

                <div className="theme-btn__wrapper d-flex flex-wrap">
                  <Link href="blog.html" className="theme-btn fw-600 btn-red">
                    Read More <i className="far fa-chevron-double-right"></i>
                  </Link>
                  <Link
                    href="/contact/"
                    className="theme-btn fw-600 btn-white-border"
                  >
                    {" "}
                    Contact Us <i className="far fa-chevron-double-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="banner-home__media">
                {/* <img src="/assets/img/banner/banner-start.svg" className="img-fluid start" alt=""/> */}
                {/* <img src="/assets/img/banner/banner-home.png" className="img-fluid" alt=""/> */}
                <Image
                  width="6000"
                  height="6000"
                  src="/assets/img/banner/homebanner.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- banner-home end --> */}

      <div className="our-company-financial overflow-hidden">
        <div className="overly">
          <div className="container"></div>
        </div>
        {/* <!-- financial-area start --> */}
        <section className="financial pb-xs-80 pt-xs-80 pt-sm-100 pb-sm-100 pt-md-100 pb-md-100 pt-120 pb-120 overflow-hidden">
          <div className="container">
            <div className="row mb-minus-30">
              <div className="col-xl-4 col-md-6">
                <div
                  className="financial__item d-flex mb-30"
                  style={{
                    backgroundImage:
                      "url(assets/img/home/financial__item-bg.png)",
                  }}
                >
                  <div className="icon">
                    <Image
                      width="45"
                      height="45"
                      src="/assets/img/icon/growth.svg"
                      alt=""
                    />
                    {/* <!-- <i className="fal fa-analytics"></i> --> */}
                  </div>

                  <div className="text">
                    <h6 className="title color-pd_black mb-10 mb-xs-5">
                      10+ Years Of Experience
                    </h6>

                    <div className="description font-la">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        sed do eiusmod tempor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6">
                <div
                  className="financial__item d-flex mb-30"
                  style={{
                    backgroundImage:
                      "url(assets/img/home/financial__item-bg.png)",
                  }}
                >
                  <div className="icon">
                    <Image
                      width="45"
                      height="45"
                      src="/assets/img/icon/planning-1.svg"
                      alt=""
                    />
                    {/* <!-- <i className="fal fa-analytics"></i> --> */}
                  </div>

                  <div className="text">
                    <h6 className="title color-pd_black mb-10 mb-xs-5">
                      Free Coaching
                    </h6>

                    <div className="description font-la">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        sed do eiusmod tempor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6">
                <div
                  className="financial__item d-flex mb-30"
                  style={{
                    backgroundImage:
                      "url(assets/img/home/financial__item-bg.png)",
                  }}
                >
                  <div className="icon">
                    <Image
                      width="45"
                      height="45"
                      src="/assets/img/icon/international.svg"
                      alt=""
                    />
                    {/* <!-- <i className="fal fa-analytics"></i> --> */}
                  </div>

                  <div className="text">
                    <h6 className="title color-pd_black mb-10 mb-xs-5">
                      Your Style of Support
                    </h6>

                    <div className="description font-la">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        sed do eiusmod tempor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- financial-area end -->

    <!-- our-company start --> */}
        <section className="our-company pb-xs-80 pb-100 overflow-hidden">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="our-company__meida">
                  {/* <img src="assets/img/about/our-company-1.png" alt="" className="img-fluid"/> */}
                  <Image
                    src="/assets/img/about/our-company-1.png"
                    width="298"
                    height="350"
                    alt=""
                    className="img-fluid"
                  />

                  <div className="years-experience overflow-hidden bg-red mt-20 mt-sm-10 mt-xs-10 text-center">
                    <div className="number mb-5 color-white">
                      <span className="counter">23</span>
                      <sup>+</sup>
                    </div>

                    <h5 className="title color-white">Years Experience</h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="our-company__meida border-radius">
                  {/* <img src="assets/img/about/our-company-2.png" alt="" className="img-fluid"/> */}
                  <Image
                    width="318"
                    height="500"
                    src="/assets/img/about/our-company-2.png"
                    alt=""
                    className="img-fluid"
                  />

                  <div className="horizental-bar bg-red"></div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="our-company__content mt-md-50 mt-sm-40 mt-xs-35">
                  <span className="sub-title fw-500 color-red text-uppercase mb-sm-10 mb-xs-5 mb-20 d-block">
                    <img
                      src="/assets/img/team-details/badge-line-yellow.svg"
                      className="img-fluid mr-10"
                      alt=""
                    />{" "}
                    Know Our Company
                  </span>
                  <h2 className="title color-pd_black mb-20 mb-sm-15 mb-xs-10">
                    Your Healthcare BPO Service Partner for Life
                  </h2>

                  <div className="descriiption font-la mb-30 mb-md-25 mb-sm-20 mb-xs-15">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip
                    </p>
                  </div>

                  <div className="client-feedback d-flex flex-column flex-sm-row">
                    <div className="client-feedback__item client-feedback__item-two text-center">
                      <div className="client-feedback__item-header">
                        <span className="color-red font-la fw-600 text-uppercase">
                          Success Project
                        </span>
                      </div>

                      <div className="client-feedback__item-body">
                        <div className="number mb-10 mb-xs-5 color-pd_black fw-600">
                          +<span className="counter">95</span>%
                        </div>
                        <div className="description font-la mb-10 mb-xs-5">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit sed do.
                          </p>
                        </div>
                        <div className="starts">
                          <ul>
                            <li>
                              <span></span>
                            </li>
                            <li>
                              <span></span>
                            </li>
                            <li>
                              <span></span>
                            </li>
                            <li>
                              <span></span>
                            </li>
                            <li>
                              <span></span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="client-feedback__item client-feedback__item-two text-center">
                      <div className="client-feedback__item-header">
                        <span className="color-red font-la fw-600 text-uppercase">
                          Customer Review
                        </span>
                      </div>

                      <div className="client-feedback__item-body">
                        <div className="number mb-10 mb-xs-5 color-pd_black fw-600">
                          +<span className="counter">4.7</span>
                        </div>
                        <div className="description font-la mb-10 mb-xs-5">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit sed do.
                          </p>
                        </div>
                        <div className="starts">
                          <ul>
                            <li>
                              <span></span>
                            </li>
                            <li>
                              <span></span>
                            </li>
                            <li>
                              <span></span>
                            </li>
                            <li>
                              <span></span>
                            </li>
                            <li>
                              <span></span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- our-company end --> */}
      </div>

      {/* <!-- planning-success start --> */}
      {/* <section className="planning-success pb-xs-80 pt-xs-80 pt-sm-100 pb-sm-100 pt-md-100 pb-md-100 pt-120 pb-130 overflow-hidden" style={{backgroundImage: "url(/assets/img/home/planning-success-bg.png);"}} > */}
      <section
        className="planning-success pb-xs-80 pt-xs-80 pt-sm-100 pb-sm-100 pt-md-100 pb-md-100 pt-120 pb-130 overflow-hidden"
        style={{
          backgroundImage:
            "url(https://www.healthleadersmedia.com/sites/hlmp/files/files/shutterstock_243756790%282%29.jpg)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-9">
              <div className="planning-success__content mb-xs-35">
                <h2 className="title mb-20 mb-sm-15 mb-xs-10 color-white">
                  Good Business Planning Ensures Success.
                </h2>

                <div className="description font-la color-white mb-40 mb-sm-30 mb-xs-20">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>

                <Link href="services" className="theme-btn btn-sm btn-red">
                  View All Services{" "}
                  <i className="far fa-chevron-double-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-sm-3">
              <div className="planning-success__video">
                <Link
                  href="https://www.youtube.com/watch?v=9xwazD5SyVg"
                  className="popup-video mx-auto"
                  data-effect="mfp-move-from-top"
                >
                  <i className="icon-play"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- planning-success end -->  */}

      <WhyChooseUs />

      {/* <!-- get-free end --> */}
      <section className="get-free get-free-home overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="get-free__content-wrapper overflow-hidden"
                style={{
                  backgroundImage: "url(assets/img/services/get-free-bg.png)",
                }}
              >
                <div className="get-free__content d-flex align-items-center justify-content-between">
                  <div className="get-free__content-text">
                    <h2 className="title mb-10 mb-xs-5 color-white">
                      Get Free Quote
                    </h2>

                    <div className="description color-white font-la fw-500">
                      Perfect solution for your Company
                    </div>
                  </div>

                  <div className="get-free__content-form">
                    <form
                      className="d-flex flex-column flex-lg-row"
                      action="mail.php"
                      method="POST"
                    >
                      <div className="single-personal-info">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="single-personal-info">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your e-mail"
                        />
                      </div>

                      <button type="submit" className="theme-btn btn-sm">
                        Get Quote{" "}
                        <i className="far fa-chevron-double-right"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- get-free end --> */}

      {/* <!-- work-process end --> */}
      <section className="work-process work-process-home bg-dark_red pb-xs-80 pb-sm-100 pb-md-100 pb-120 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="pricing__content mb-60 mb-sm-40 mb-xs-30 text-center">
                <span className="sub-title d-block fw-500 color-red text-uppercase mb-sm-10 mb-xs-5 mb-15">
                  <img
                    src="/assets/img/team-details/badge-line-yellow.svg"
                    className="img-fluid mr-10"
                    alt=""
                  />{" "}
                  Our Work Process
                </span>
                <h2 className="title color-pd_black">How Our Services Work</h2>
              </div>
            </div>
          </div>

          <div className="row mb-minus-30 last_no_bullet">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="work-process__item work-process__item-two mb-30 text-center">
                <div className="icon-wrapper d-flex">
                  <div className="icon">
                    <i className="icon-research"></i>
                  </div>

                  <button
                    className="theme-btn color-pd_black"
                    style={{
                      backgroundImage:
                        "url(assets/img/home/theme-btn-overly-1.png)",
                    }}
                  >
                    Step - 1
                  </button>
                </div>

                <div className="text">
                  <h6 className="title color-pd_black mb-15 mb-sm-10 mb-xs-5">
                    Research Your Problem
                  </h6>

                  <div className="description font-la">
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="work-process__item work-process__item-two mb-30 text-center">
                <div className="icon-wrapper d-flex">
                  <div className="icon">
                    <i className="icon-worker-1"></i>
                  </div>

                  <button
                    className="theme-btn color-pd_black"
                    style={{
                      backgroundImage:
                        "url(assets/img/home/theme-btn-overly-1.png)",
                    }}
                  >
                    Step - 2
                  </button>
                </div>

                <div className="text">
                  <h6 className="title color-pd_black mb-15 mb-sm-10 mb-xs-5">
                    Identifying Problem
                  </h6>

                  <div className="description font-la">
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="work-process__item work-process__item-two mb-30 text-center">
                <div className="icon-wrapper d-flex">
                  <div className="icon">
                    <i className="icon-outline"></i>
                  </div>

                  <button
                    className="theme-btn color-pd_black"
                    style={{
                      backgroundImage:
                        "url(assets/img/home/theme-btn-overly-1.png)",
                    }}
                  >
                    Step - 3
                  </button>
                </div>

                <div className="text">
                  <h6 className="title color-pd_black mb-15 mb-sm-10 mb-xs-5">
                    Solutions Your Problem
                  </h6>

                  <div className="description font-la">
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="work-process__item work-process__item-two mb-30 text-center">
                <div className="icon-wrapper d-flex">
                  <div className="icon">
                    <i className="icon-target-2"></i>
                  </div>

                  <button
                    className="theme-btn color-pd_black"
                    style={{
                      backgroundImage:
                        "url(assets/img/home/theme-btn-overly-1.png)",
                    }}
                  >
                    Step - 4
                  </button>
                </div>

                <div className="text">
                  <h6 className="title color-pd_black mb-15 mb-sm-10 mb-xs-5">
                    Success Your Business
                  </h6>

                  <div className="description font-la">
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- work-process end --> */}

      {/* <!-- our-portfolio-home start --> */}
      <section className="our-portfolio-home pb-xs-80 pt-xs-80 pt-sm-100 pb-sm-100 pt-md-100 pb-md-100 pt-120 pb-120 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="why-choose__media-wrapper d-flex flex-column">
                <div className="gallery-bar bg-yellow"></div>

                <div className="why-choose__media">
                  {/* <img src="assets/img/services/why-choose-1.png" alt="" className="img-fluid"/> */}
                  <Image
                    width="500"
                    height="780"
                    src="/assets/img/services/why-choose-1.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <div className="global-country text-center bg-yellow">
                  <div className="number mb-5 color-white">
                    <span className="counter">120</span>+
                  </div>
                  <h6 className="title color-white font-la">
                    Global Country in <br />
                    Our Company
                  </h6>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="why-choose__content mt-lg-60 mt-md-50 mt-sm-40 mt-xs-35">
                <div className="why-choose__text mb-40 mb-md-35 mb-sm-30 mb-xs-30">
                  <span className="sub-title d-block fw-500 color-red text-uppercase mb-sm-10 mb-xs-5 mb-md-15 mb-lg-20 mb-25">
                    <img
                      src="assets/img/team-details/badge-line-yellow.svg"
                      className="img-fluid mr-10"
                      alt=""
                    />{" "}
                    Why choose us
                  </span>
                  <h2 className="title color-pd_black">
                    Developing Solutions For The Future
                  </h2>

                  <div className="description font-la mt-20 mt-sm-15 mt-xs-10">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </p>
                  </div>
                </div>

                <div className="why-choose__item-wrapper d-grid justify-content-between">
                  <div className="why-choose__item">
                    <div className="icon mb-15 mb-md-10 mb-xs-5 color-red">
                      <i className="icon-consultation"></i>
                    </div>

                    <h5 className="title color-secondary fw-500 mb-10">
                      Business Consulting
                    </h5>

                    <div className="description font-la">
                      <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                    </div>
                  </div>

                  <div className="why-choose__item">
                    <div className="icon mb-15 mb-md-10 mb-xs-5 color-red">
                      <i className="icon-lawyer"></i>
                    </div>

                    <h5 className="title color-secondary fw-500 mb-10">
                      Lawyer Consulting
                    </h5>

                    <div className="description font-la">
                      <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                    </div>
                  </div>
                </div>
                <div className="faq  mt-40">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          01. What should i included my personal details?{" "}
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          02. We can help your business to grow?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          03. Best financial and consultancy advisors?{" "}
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container">
            <div className="row align-items-center">
                <div className="col-12">
                    <div className="our-portfolio-home__content text-center mb-60 mb-sm-50 mb-xs-40">
                        <span className="sub-title fw-500  text-uppercase mb-sm-10 mb-xs-5 mb-15 d-block color-red"><img src="/assets/img/team-details/badge-line-yellow.svg" className="img-fluid mr-10" alt=""/> Our Portfolio</span>
                        <h2 className="title color-pd_black">Our Consulting Case Study</h2>
                    </div>
                </div>
            </div>
 
            <div className="row mb-minus-30">
                <div className="col-xl-4 col-md-6 col-12">
                    <div className="our-portfolio-home__item mb-30">
                        <div className="featured-thumb">
                            <div className="media overflow-hidden">
                                <img src="/assets/img/home/our-portfolio-home__item-1.png" className="img-fluid" alt=""/>
                            </div>
                        </div>

                        <div className="content d-flex flex-row">
                            <div className="left">
                                <div className="post-author mb-5 mb-xs-5 text-uppercase">
                                    <Link href="blog-details.html">Business, Finance</Link >
                                </div>
                                
                                <h5 className="color-pd_black mb-15 mb-xs-10"><Link href="blog-details.html">Business & Strategy</Link ></h5>
                                <div className="description font-la">
                                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut</p>
                                </div>
                            </div>

                            <div className="btn-link-share">
                                <Link href="blog-details.html" className="theme-btn color-pd_black" style={{backgroundImage: "url(assets/img/home/theme-btn-overly.png)"}}>View Details <i className="icon-arrow-right-2"></i></Link >
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-md-6 col-12">
                    <div className="our-portfolio-home__item mb-30">
                        <div className="featured-thumb">
                            <div className="media overflow-hidden">
                                <img src="/assets/img/home/our-portfolio-home__item-1.png" className="img-fluid" alt=""/>
                            </div>
                        </div>

                        <div className="content d-flex flex-row">
                            <div className="left">
                                <div className="post-author mb-5 mb-xs-5 text-uppercase">
                                    <Link href="blog-details.html">Financial solution</Link >
                                </div>
                                
                                <h5 className="color-pd_black mb-15 mb-xs-10"><Link href="blog-details.html">Financial Reporting</Link ></h5>
                                <div className="description font-la">
                                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut</p>
                                </div>
                            </div>

                            <div className="btn-link-share">
                                <Link href="blog-details.html" className="theme-btn color-pd_black" style={{backgroundImage: "url(assets/img/home/theme-btn-overly.png)"}}>View Details <i className="icon-arrow-right-2"></i></Link >
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-md-6 col-12">
                    <div className="our-portfolio-home__item mb-30">
                        <div className="featured-thumb">
                            <div className="media overflow-hidden">
                                <img src="/assets/img/home/our-portfolio-home__item-1.png" className="img-fluid" alt=""/>
                            </div>
                        </div>

                        <div className="content d-flex flex-row">
                            <div className="left">
                                <div className="post-author mb-5 mb-xs-5 text-uppercase">
                                    <Link href="blog-details.html">Business, Consulting</Link >
                                </div>
                                
                                <h5 className="color-pd_black mb-15 mb-xs-10"><Link href="blog-details.html">Business Consulting</Link ></h5>
                                <div className="description font-la">
                                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut</p>
                                </div>
                            </div>

                            <div className="btn-link-share">
                                <Link href="blog-details.html" className="theme-btn color-pd_black" style={{backgroundImage: "url(assets/img/home/theme-btn-overly.png)"}}>View Details <i className="icon-arrow-right-2"></i></Link >
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="our-portfolio-home__read-more text-center mt-50 mt-md-40 mt-sm-35 mt-xs-30">
                        <Link href="blog.html" className="theme-btn  btn-border">View All Project <i className="far fa-chevron-double-right"></i></Link >
                    </div>
                </div>
            </div>
        </div> */}
      </section>
      {/* <!-- our-portfolio-home end --> */}

      <OurTeam />

      <Reviews />

      <div className="can-help-overly-home overflow-hidden">
        <div className="can-help-overly">
          <div className="container"></div>
        </div>

        <GetInTouch />

        {/* <!-- blog-news start --> */}
        <section className="blog-news pb-xs-80 pb-sm-100 pb-md-100 pb-120 overflow-hidden">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="blog-news__content text-center">
                  <span className="sub-title fw-500  text-uppercase mb-sm-10 mb-xs-5 mb-15 d-block color-red">
                    <img
                      src="/assets/img/team-details/badge-line-yellow.svg"
                      className="img-fluid mr-10"
                      alt=""
                    />{" "}
                    Blog & News
                  </span>
                  <h2 className="title color-d_black">
                    Consulter Latest Blog & News
                  </h2>
                </div>
              </div>
            </div>

            <div className="blog-news__bottom mt-60 mt-sm-50 mt-xs-40">
              <div className="row mb-minus-30">
                {articles.items &&
                  articles.items.data.map((item) => {
                    return (
                      <div className="col-xl-4 col-md-6 col-12" key={item.id}>
                        <Link href={`/blog/${item.id}`}>
                          <div className="blog-item blog-item-three mb-30">
                            <div className="blog-featured-thumb mb-xs-30 mb-sm-30 mb-md-35 mb-lg-40 mb-50">
                              <div className="media overflow-hidden">
                                <img
                                  src={
                                    item.attributes.Image.data &&
                                    `http://localhost:1337` +
                                      item.attributes.Image.data.attributes.url
                                  }
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                            </div>

                            <div className="content pr-sm-25 pr-xs-15 pl-xs-15 pl-sm-25 pr-xs-15 pr-30 pb-30 pl-30">
                              <div className="post-author mb-5"></div>

                              <h4>{item.attributes.Title}</h4>

                              <div className="btn-link-share mt-xs-10 mt-sm-10 mt-15">
                                <Link
                                  href={`/blog/${item.id}`}
                                  style={{ border: "1px solid" }}
                                  className="theme-btn btn-border"
                                >
                                  Read More{" "}
                                  <i className="fas fa-long-arrow-alt-right"></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </section>
        {/* <!-- blog-news end --> */}
      </div>

      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  const data = await fetchArticles();

  return {
    props: {
      articles: {
        items: data.data,
      },
    }, // will be passed to the page component as props
  };
};
