import React from "react";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Header/Navbar";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { GrTarget } from "react-icons/gr";

export const searchEngineOptimization = () => {
  return (
    <>
      <Navbar />

      <section>
        <video
          autoPlay
          loop
          style={{ height: "660px", width: "100%", objectFit: "fill" }}
        >
          <source src="https://www.shutterstock.com/shutterstock/videos/1067816336/preview/stock-footage-young-attractive-asian-thai-woman-employee-busy-work-online-multiple-screen-laptop-computer-or.webm" />
        </video>
      </section>

      {/* <!-- our-company start --> */}
      <section className="our-company  pt-xs-50  pt-sm-100  pt-md-50 pt-50 pb-50  overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="our-company__content mt-md-50 mt-sm-40 mt-xs-35">
                {/* <span className="sub-title fw-500 color-primary text-uppercase mb-sm-10 mb-xs-5 mb-20 d-block text-center"><img src="assets/img/team-details/badge-line.svg" className="img-fluid mr-10" alt=""/>We Offer </span> */}
                <h2 className="title color-d_black mb-20 mb-sm-15 mb-xs-10 text-center">
                  More Control. More Money.
                </h2>

                <div className="descriiption font-la mb-30 mb-md-25 mb-sm-20 mb-xs-15">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip.Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Tabs>
        <section
          style={{ backgroundColor: "#E5E5E5" }}
          class="working_wrapper overflow-hidden pb-50 pt-50"
        >
          <h2 className="title color-d_black mb-20 mb-sm-15 mb-xs-10 text-center mb-4">
            Our SEO Process
          </h2>

          <TabList>
            <Tab>
              <i className="fas fa-search"></i>
              <br />
              <p>Discovery</p>
            </Tab>
            <Tab>
              <i className="fas fa-search"></i>
              <br />
              <p>Strartegy</p>
            </Tab>
            <Tab>
              <i className="fas fa-search"></i>
              <br />
              <p>On-site Optimization</p>
            </Tab>
            <Tab>
              <i className="fas fa-search"></i>
              <br />
              <p>Content Marketing</p>
            </Tab>
            <Tab>
              <i className="fas fa-search"></i>
              <br />
              <p>Analysis & Reporting</p>
            </Tab>
          </TabList>
        </section>
        <div className="container">
          <div className="row" style={{ alignItems: "center" }}>
            <TabPanel>
              {/* <!-- working_wrapper start--> */}
              <section class="working_wrapper overflow-hidden pt-50 pb-50">
                <div className="container">
                  <div className="row" style={{ alignItems: "center" }}>
                    <div className="col-lg-6">
                      <div className="our-company__content mt-md-50 mt-sm-40 mt-xs-35">
                        <span className="sub-title fw-500 color-primary text-uppercase mb-sm-10 mb-xs-5 mb-20 d-block">
                          <img
                            src="assets/img/team-details/badge-line.svg"
                            className="img-fluid mr-10"
                            alt=""
                          />
                          We Offer{" "}
                        </span>
                        <h2 className="title color-d_black mb-20 mb-sm-15 mb-xs-10">
                          Discover Opportunities
                        </h2>

                        <div className="descriiption font-la mb-30 mb-md-25 mb-sm-20 mb-xs-15">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut
                            aliquip.Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip.Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip.
                          </p>
                        </div>
                        <button type="" class="theme-btn btn-sm btn-red">
                          Free Consultant{" "}
                          <i class="far fa-chevron-double-right"></i>
                        </button>
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                      <div className="our-company__meida border-radius">
                        <div class="gallery-bar2 bg-yellow"></div>
                        <img
                          src="https://smartclinix.net/wp-content/uploads/2022/08/revenue-cycle.jpg"
                          alt=""
                          className="img-fluid"
                        />

                        <div className="horizental-bar"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* <!-- working_wrapper end--> */}
            </TabPanel>
            <TabPanel></TabPanel>
            <TabPanel>
              {/* <!-- working_wrapper start--> */}
              <section class="working_wrapper overflow-hidden pt-50 pb-50">
                <div className="container">
                  <div className="row" style={{ alignItems: "center" }}>
                    <div className="col-lg-6">
                      <div className="our-company__content mt-md-50 mt-sm-40 mt-xs-35">
                        <span className="sub-title fw-500 color-primary text-uppercase mb-sm-10 mb-xs-5 mb-20 d-block">
                          <img
                            src="assets/img/team-details/badge-line.svg"
                            className="img-fluid mr-10"
                            alt=""
                          />
                          We Offer{" "}
                        </span>
                        <h2 className="title color-d_black mb-20 mb-sm-15 mb-xs-10">
                          On-site Optimization
                        </h2>

                        <div className="descriiption font-la mb-30 mb-md-25 mb-sm-20 mb-xs-15">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut
                            aliquip.Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip.Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip.
                          </p>
                        </div>
                        <button type="" class="theme-btn btn-sm btn-red">
                          Free Consultant{" "}
                          <i class="far fa-chevron-double-right"></i>
                        </button>
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                      <div className="our-company__meida border-radius">
                        <div class="gallery-bar2 bg-yellow"></div>
                        <img
                          src="https://smartclinix.net/wp-content/uploads/2022/08/revenue-cycle.jpg"
                          alt=""
                          className="img-fluid"
                        />

                        <div className="horizental-bar"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* <!-- working_wrapper end--> */}
            </TabPanel>
            <TabPanel>
              {/* <!-- working_wrapper start--> */}
              <section class="working_wrapper overflow-hidden pt-50 pb-50">
                <div className="container">
                  <div className="row" style={{ alignItems: "center" }}>
                    <div className="col-lg-6">
                      <div className="our-company__content mt-md-50 mt-sm-40 mt-xs-35">
                        <span className="sub-title fw-500 color-primary text-uppercase mb-sm-10 mb-xs-5 mb-20 d-block">
                          <img
                            src="assets/img/team-details/badge-line.svg"
                            className="img-fluid mr-10"
                            alt=""
                          />
                          We Offer{" "}
                        </span>
                        <h2 className="title color-d_black mb-20 mb-sm-15 mb-xs-10">
                          Content Marketing
                        </h2>

                        <div className="descriiption font-la mb-30 mb-md-25 mb-sm-20 mb-xs-15">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut
                            aliquip.Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip.Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip.
                          </p>
                        </div>
                        <button type="" class="theme-btn btn-sm btn-red">
                          Free Consultant{" "}
                          <i class="far fa-chevron-double-right"></i>
                        </button>
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                      <div className="our-company__meida border-radius">
                        <div class="gallery-bar2 bg-yellow"></div>
                        <img
                          src="https://smartclinix.net/wp-content/uploads/2022/08/revenue-cycle.jpg"
                          alt=""
                          className="img-fluid"
                        />

                        <div className="horizental-bar"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* <!-- working_wrapper end--> */}
            </TabPanel>
            <TabPanel>
              {/* <!-- working_wrapper start--> */}
              <section class="working_wrapper overflow-hidden pt-50 pb-50">
                <div className="container">
                  <div className="row" style={{ alignItems: "center" }}>
                    <div className="col-lg-6">
                      <div className="our-company__content mt-md-50 mt-sm-40 mt-xs-35">
                        <span className="sub-title fw-500 color-primary text-uppercase mb-sm-10 mb-xs-5 mb-20 d-block">
                          <img
                            src="assets/img/team-details/badge-line.svg"
                            className="img-fluid mr-10"
                            alt=""
                          />
                          We Offer{" "}
                        </span>
                        <h2 className="title color-d_black mb-20 mb-sm-15 mb-xs-10">
                          Analysis & Reporting
                        </h2>

                        <div className="descriiption font-la mb-30 mb-md-25 mb-sm-20 mb-xs-15">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut
                            aliquip.Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip.Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip.
                          </p>
                        </div>
                        <button type="" class="theme-btn btn-sm btn-red">
                          Free Consultant{" "}
                          <i class="far fa-chevron-double-right"></i>
                        </button>
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                      <div className="our-company__meida border-radius">
                        <div class="gallery-bar2 bg-yellow"></div>
                        <img
                          src="https://smartclinix.net/wp-content/uploads/2022/08/revenue-cycle.jpg"
                          alt=""
                          className="img-fluid"
                        />

                        <div className="horizental-bar"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* <!-- working_wrapper end--> */}
            </TabPanel>
          </div>
        </div>
      </Tabs>

      <div className="our-company-financial overflow-hidden">
        <div className="overly">
          <div className="container"></div>
        </div>
        {/* <!-- financial-area start --> */}
        <section
          style={{ backgroundColor: "#E5E5E5" }}
          className="financial pb-xs-80 pt-xs-80 pt-sm-100 pb-sm-100 pt-md-100 pb-md-100 pt-120 pb-120 overflow-hidden"
        >
          <div className="container">
            <span className="sub-title fw-500 text-center color-red text-uppercase mb-sm-10 mb-xs-5 mb-20 d-block">
              <img
                src="/assets/img/team-details/badge-line-yellow.svg"
                className="img-fluid mr-10"
                alt=""
              />{" "}
              Know Our Company
            </span>
            <h2 className="title color-d_black mb-20 mb-sm-15 mb-xs-10 text-center mb-4">
              Our SEO Process
            </h2>
            <div className="row mb-minus-30">
              <div className="col-xl-6 col-md-6">
                <div
                  className="financial__item d-flex mb-30"
                  style={{ backgroundColor: "#fff" }}
                >
                  <div className="icon">
                    <img src="/assets/img/icon/growth.svg" alt="" />
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

              <div className="col-xl-6 col-md-6">
                <div
                  className="financial__item d-flex mb-30"
                  style={{ backgroundColor: "#fff" }}
                >
                  <div className="icon">
                    <img src="/assets/img/icon/planning-1.svg" alt="" />
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
            </div>
            <div className="row mb-minus-30 mt-4">
              <div className="col-xl-6 col-md-6">
                <div
                  className="financial__item d-flex mb-30"
                  style={{ backgroundColor: "#fff" }}
                >
                  <div className="icon">
                    <img src="/assets/img/icon/growth.svg" alt="" />
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

              <div className="col-xl-6 col-md-6">
                <div
                  className="financial__item d-flex mb-30"
                  style={{ backgroundColor: "#fff" }}
                >
                  <div className="icon">
                    <img src="/assets/img/icon/planning-1.svg" alt="" />
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
            </div>
          </div>
        </section>

        <section className="our-company pb-xs-80 pb-100 overflow-hidden">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <h4>On Page SEO checklist</h4>
              </div>

              <div className="col-lg-6 col-sm-6">
                <h4>Off Page SEO checklist</h4>
              </div>
            </div>
          </div>
        </section>

        <section className="our-company pb-xs-80 pb-100 overflow-hidden">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="our-company__meida">
                  {/* <img src="assets/img/about/our-company-1.png" alt="" className="img-fluid"/> */}
                  {/* <img src="https://rrdevs.net/demos/html/consulter/assets/img/about/our-company-1.png" alt="" className="img-fluid"/> */}

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
                  <img
                    src="https://rrdevs.net/demos/html/consulter/assets/img/about/our-company-2.png"
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

      <Footer />
    </>
  );
};

export default searchEngineOptimization;
