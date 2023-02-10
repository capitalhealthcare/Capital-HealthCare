import React from "react";
import { GetInTouch } from "../components/Get-In-Touch";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Header/Navbar";
import { Reviews } from "../components/Reviews";
import { CommonBanner } from "../components/CommonBanner";
import { ServicesTwoColumn } from "../components/Services-Two-Column";
import { ServicesRightImageTwoColumn } from "../components/Services-Two-Column/ServicesRightImageTwoColumn";

export const chronicCareManagement = () => {
  return (
    <>
      <Navbar />

      <CommonBanner
        B_title="Solutions"
        First_heading="Chronic Care "
        Last_heading="Management"
        ImageSrc="https://rrdevs.net/demos/html/consulter/assets/img/page-banner/page-banner.jpg"
        First_Breadcrumb="Home"
        Last_Breadcrumb="Medical Billing "
      />

      <ServicesTwoColumn
        title="Our Chronic Care Management Program Offers   "
        ImageSrc="https://smartclinix.net/wp-content/uploads/2022/08/revenue-cycle.jpg"
      />

      <GetInTouch />

      <ServicesRightImageTwoColumn
        title="About the Process"
        ImageSrc="https://prgmd.com/wp-content/uploads/2022/10/CCM-Process.png"
      />

      {/* <!-- working_wrapper end--> */}

      {/* <!-- our-company start --> */}
      <section
        className="our-company pt-xs-50  pt-sm-100  pt-md-50 pt-50 pb-50  overflow-hidden"
        style={{ backgroundColor: "#E5E5E5", padding: "40px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="our-company__content mt-md-50 mt-sm-40 mt-xs-35">
                {/* <span className="sub-title fw-500 color-primary text-uppercase mb-sm-10 mb-xs-5 mb-20 d-block text-center"><img src="assets/img/team-details/badge-line.svg" className="img-fluid mr-10" alt=""/>We Offer </span> */}
                <h2 className="title color-d_black mb-20 mb-sm-15 mb-xs-10 text-center">
                  How CCM Program Works?
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

      <Reviews />

      <Footer />
    </>
  );
};

export default chronicCareManagement;
