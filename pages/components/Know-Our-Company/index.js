import Image from "next/image";
import React from "react";

export const KnowOurCompany = () => {
  return (
    <>
      {/* <!-- our-company start --> */}
      <section className="our-company  pt-xs-80 pb-xs-80 pt-sm-100 pb-sm-100 pt-md-100 pb-md-100 pt-120 pb-120 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="our-company__meida">
                <Image
                  width="298"
                  height="350"
                  src="/assets/img/about/our-company-1.png"
                  alt=""
                  className="img-fluid"
                />

                <div className="years-experience overflow-hidden mt-20 mt-sm-10 mt-xs-10 text-center">
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
                <Image
                  width="318"
                  height="500"
                  src="/assets/img/about/our-company-2.png"
                  alt=""
                  className="img-fluid"
                />

                <div className="horizental-bar"></div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="our-company__content mt-md-50 mt-sm-40 mt-xs-35">
                <span className="sub-title fw-500 color-primary text-uppercase mb-sm-10 mb-xs-5 mb-20 d-block">
                  <img
                    src="assets/img/team-details/badge-line.svg"
                    className="img-fluid mr-10"
                    alt=""
                  />{" "}
                  Know Our Company
                </span>
                <h2 className="title color-d_black mb-20 mb-sm-15 mb-xs-10">
                  Our Company Provide High Quality Idea
                </h2>

                <div className="descriiption font-la mb-30 mb-md-25 mb-sm-20 mb-xs-15">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip
                  </p>
                </div>

                <div className="client-feedback d-flex flex-column flex-sm-row">
                  <div className="client-feedback__item text-center">
                    <div className="client-feedback__item-header">
                      <span className="color-primary font-la fw-600 text-uppercase">
                        Success Project
                      </span>
                    </div>

                    <div className="client-feedback__item-body">
                      <div className="number mb-10 mb-xs-5 color-d_black fw-600">
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

                  <div className="client-feedback__item text-center">
                    <div className="client-feedback__item-header">
                      <span className="color-primary font-la fw-600 text-uppercase">
                        Customer Review
                      </span>
                    </div>

                    <div className="client-feedback__item-body">
                      <div className="number mb-10 mb-xs-5 color-d_black fw-600">
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
    </>
  );
};
