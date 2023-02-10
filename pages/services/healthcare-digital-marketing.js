import React from "react";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Header/Navbar";
import Link from "next/link";
import { CommonBanner } from "../components/CommonBanner";
import { ServicesRightImageTwoColumn } from "../components/Services-Two-Column/ServicesRightImageTwoColumn";
import { GetAQuote } from "../components/Get-A-Quote";
import { ServicesTwoColumn } from "../components/Services-Two-Column";
import { GetInTouch } from "../components/Get-In-Touch";

export const healthCareDigitalMarketing = () => {
  return (
    <>
      <Navbar />

      <CommonBanner
        B_title="Solutions"
        First_heading="HealthCare Digital "
        Last_heading="Marketing"
        ImageSrc="/assets/img/home/digtal-marketing.jpg"
        First_Breadcrumb="Home"
        Last_Breadcrumb="Medical Billing "
      />

      <ServicesRightImageTwoColumn
        title="Why You Choose Us For Digital Marketing"
        ImageSrc="https://www.zeventeg.com/wp-content/uploads/2019/05/Digital-Marketing-1024x780-min-1024x780.jpg"
      />

      <GetAQuote />

      <section
        className="planning-success pb-xs-80 pt-xs-80 pt-sm-100 pb-sm-100 pt-md-100 pb-md-100 pt-120 pb-130 overflow-hidden"
        style={{
          backgroundImage:
            "url(https://apacetechnology.com/med/wp-content/uploads/2018/02/medical-digital-marketing.jpg);",
        }}
      >
        <div className="container text-center">
          <div className="mb-xs-35">
            <h2 className="title mb-20 mb-sm-15 mb-xs-10 color-white">
              Digital marketing solutions for practices of all sizes.
            </h2>

            <div className="description font-la color-white mb-40 mb-sm-30 mb-xs-20">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>

            <a href="services.html" className="theme-btn btn-sm btn-red">
              Get Started <i className="far fa-chevron-double-right"></i>
            </a>
          </div>
        </div>
      </section>

      <ServicesTwoColumn
        title="SEO - Search Engine Optimization"
        ImageSrc="https://adaptmediaagency.com/wp-content/uploads/2021/09/AdobeStock_224667763-1536x1024.jpeg"
      />

      <ServicesRightImageTwoColumn
        title="Website Developement"
        ImageSrc="https://cryptonewslab.com/wp-content/uploads/2020/10/Apa-Bedanya-Web-Page-dan-Website-yang-Harus-Diketahui.jpg"
      />

      <GetInTouch />

      <Footer />
    </>
  );
};

export default healthCareDigitalMarketing;
