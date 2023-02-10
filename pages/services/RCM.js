import React from "react";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Header/Navbar";
import { CommonBanner } from "../components/CommonBanner";
import { GetAQuote } from "../components/Get-A-Quote";
import { ServicesTwoColumn } from "../components/Services-Two-Column";
import { ServicesRightImageTwoColumn } from "../components/Services-Two-Column/ServicesRightImageTwoColumn";
import { GetInTouch } from "../components/Get-In-Touch";
import { Reviews } from "../components/Reviews";

export const RCM = ({ articles }) => {
  return (
    <>
      <Navbar />

      <CommonBanner
        B_title="R C M"
        First_heading="Revenue Cycle "
        Last_heading="Management"
        ImageSrc="https://rrdevs.net/demos/html/consulter/assets/img/page-banner/page-banner.jpg"
        First_Breadcrumb="Home"
        Last_Breadcrumb="RCM"
      />

      <div className="counter-area mt-5   overflow-hidden">
        <div className="container">
          <div className="row mb-minus-30">
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div className="counter-area__item d-flex align-items-center">
                <div className="icon color-primary">
                  <i className="icon-process-1"></i>
                </div>

                <div className="text text-center">
                  <div className="number fw-600 color-primary">
                    <span className="counter">25%</span>
                  </div>
                  <div className="description font-la">Boost Revenue</div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div className="counter-area__item d-flex align-items-center">
                <div className="icon color-primary">
                  <i className="icon-support-2"></i>
                </div>

                <div className="text text-center">
                  <div className="number fw-600 color-primary">
                    <span className="counter">98.8%</span>
                  </div>
                  <div className="description font-la">
                    Increased Reimbursements
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div className="counter-area__item d-flex align-items-center">
                <div className="icon color-primary">
                  <i className="icon-coffee-2"></i>
                </div>

                <div className="text text-center">
                  <div className="number fw-600 color-primary">
                    <span className="counter">30%</span>
                  </div>
                  <div className="description font-la">AR Reduction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- our-company start --> */}
      <section className="our-company  pt-xs-50  pt-sm-100  pt-md-50 pt-50 pb-50  overflow-hidden">
        <div
          className="container"
          style={{
            backgroundColor: "#E5E5E5",
            borderRadius: "150px 150px 0px 0px",
            padding: "40px",
          }}
        >
          <div className="row">
            <div className="col-lg-12">
              <div className="our-company__content mt-md-50 mt-sm-40 mt-xs-35">
                {/* <span className="sub-title fw-500 color-primary text-uppercase mb-sm-10 mb-xs-5 mb-20 d-block text-center"><img src="assets/img/team-details/badge-line.svg" className="img-fluid mr-10" alt=""/>We Offer </span> */}
                <h2 className="title color-d_black mb-20 mb-sm-15 mb-xs-10 text-center">
                  Boost Productivity with (RCM)
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
      {/* <!-- our-company end --> */}

      <GetAQuote />

      <ServicesTwoColumn
        title="Provider Credentialing"
        ImageSrc="https://smartclinix.net/wp-content/uploads/2022/08/revenue-cycle.jpg"
      />

      <ServicesRightImageTwoColumn
        title="Eligibility Verification"
        ImageSrc="https://smartclinix.net/wp-content/uploads/2022/08/revenue-cycle.jpg"
      />

      <ServicesTwoColumn
        title="Claims Submission"
        ImageSrc="https://smartclinix.net/wp-content/uploads/2022/08/revenue-cycle.jpg"
      />

      <ServicesRightImageTwoColumn
        title="Payment Posting"
        ImageSrc="https://smartclinix.net/wp-content/uploads/2022/08/revenue-cycle.jpg"
      />

      <ServicesTwoColumn
        title="A/R Follow Up"
        ImageSrc="https://smartclinix.net/wp-content/uploads/2022/08/revenue-cycle.jpg"
      />

      <ServicesRightImageTwoColumn
        title="Denial Management"
        ImageSrc="https://smartclinix.net/wp-content/uploads/2022/08/revenue-cycle.jpg"
      />

      <GetInTouch />

      <section class="working_wrapper overflow-hidden  pb-50">
        <div className="container text-center">
          <h2 className="title color-d_black pb-30 mb-20 mb-sm-15 mb-xs-10">
            Our Healthcare Software Expertise
          </h2>
          <img
            src="https://www.medbillingexperts.com/images/medical-billing-sofware-tools.png"
            alt=""
            className="img-fluid"
          />
        </div>
      </section>

      <Reviews />

      <Footer />
    </>
  );
};

export default RCM;

