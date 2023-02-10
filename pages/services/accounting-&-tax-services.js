import React from "react";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Header/Navbar";
import { CommonBanner } from "../components/CommonBanner";
import { ServicesTwoColumn } from "../components/Services-Two-Column";
import { GetAQuote } from "../components/Get-A-Quote";
import { ServicesRightImageTwoColumn } from "../components/Services-Two-Column/ServicesRightImageTwoColumn";
import { GetInTouch } from "../components/Get-In-Touch";

export const AccountingTaxServices = ({ articles }) => {
  return (
    <>
      <Navbar />

      <CommonBanner
        B_title="Solutions"
        First_heading="Accounting & Taxation "
        Last_heading="Services"
        ImageSrc="https://rrdevs.net/demos/html/consulter/assets/img/page-banner/page-banner.jpg"
        First_Breadcrumb="Home"
        Last_Breadcrumb="Solutions "
      />

      <div className="counter-area mt-5   overflow-hidden">
        <div className="container">
          <div className="row mb-minus-30">
            <div className="col-xl-3 col-lg-3 col-sm-6">
              <div className="counter-area__item d-flex align-items-center">
                <div className="icon color-primary">
                  <i className="icon-process-1"></i>
                </div>

                <div className="text text-center">
                  <div className="description font-la">Book Keeping</div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-sm-6">
              <div className="counter-area__item d-flex align-items-center">
                <div className="icon color-primary">
                  <i className="icon-support-2"></i>
                </div>

                <div className="text text-center">
                  <div className="description font-la">Payroll Services</div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-sm-6">
              <div className="counter-area__item d-flex align-items-center">
                <div className="icon color-primary">
                  <i className="icon-coffee-2"></i>
                </div>

                <div className="text text-center">
                  <div className="description font-la">Tax Services</div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-6">
              <div className="counter-area__item d-flex align-items-center">
                <div className="icon color-primary">
                  <i className="icon-coffee-2"></i>
                </div>

                <div className="text text-center">
                  <div className="description font-la">Financial Reporting</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServicesTwoColumn
        title="Optimize Financial Performance With Our Accounting And Taxation Services"
        ImageSrc="https://smartclinix.net/wp-content/uploads/2022/08/revenue-cycle.jpg"
      />

      <GetAQuote />

      <ServicesRightImageTwoColumn
        title="We Are Here To Help!"
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

      <Footer />
    </>
  );
};

export default AccountingTaxServices;
