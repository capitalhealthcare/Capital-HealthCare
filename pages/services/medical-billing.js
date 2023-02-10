import React from "react";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Header/Navbar";
import Head from "next/head";
import { fetchArticles } from "../../http";
import Link from "next/link";
import { CommonBanner } from "../components/CommonBanner";
import { GetAQuote } from "../components/Get-A-Quote";
import { GetInTouch } from "../components/Get-In-Touch";
import { Reviews } from "../components/Reviews";
import { ServicesTwoColumn } from "../components/Services-Two-Column";
import { ServicesRightImageTwoColumn } from "../components/Services-Two-Column/ServicesRightImageTwoColumn";

export const medicalBilling = ({ articles }) => {
  return (
    <>
     <Head>
      <link rel="stylesheet" href="assets/css/bootstrap.min.css"/>
      </Head>
      
      <Navbar />

      <CommonBanner
        B_title="Solutions"
        First_heading="Medical Billing "
        Last_heading="Provides"
        ImageSrc="https://rrdevs.net/demos/html/consulter/assets/img/page-banner/page-banner.jpg"
        First_Breadcrumb="Home"
        Last_Breadcrumb="Medical Billing "
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
      {/* <!-- our-company end --> */}

      <GetAQuote />

      <ServicesTwoColumn
        title="Structured Charge Entry"
        ImageSrc="https://smartclinix.net/wp-content/uploads/2022/08/revenue-cycle.jpg"
      />

      <ServicesRightImageTwoColumn
        title="Fast Claim Submission"
        ImageSrc="https://smartclinix.net/wp-content/uploads/2022/08/revenue-cycle.jpg"
      />

      <ServicesTwoColumn
        title="Payment Posting Process"
        ImageSrc="https://smartclinix.net/wp-content/uploads/2022/08/revenue-cycle.jpg"
      />

      <ServicesRightImageTwoColumn
        title=" Claim Scrubbing"
        ImageSrc="https://smartclinix.net/wp-content/uploads/2022/08/revenue-cycle.jpg"
      />

      <ServicesTwoColumn
        title="Pre Authorization"
        ImageSrc="https://smartclinix.net/wp-content/uploads/2022/08/revenue-cycle.jpg"
      />

      <ServicesRightImageTwoColumn
        title=" Reporting and Analytics"
        ImageSrc="https://smartclinix.net/wp-content/uploads/2022/08/revenue-cycle.jpg"
      />

      {/* <!-- blog-news start --> */}
      {/* <section className="blog-news pb-xs-80 pb-sm-100 pb-md-100 pb-120 overflow-hidden">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12">
                    <div className="blog-news__content text-center">
                        <span className="sub-title fw-500  text-uppercase mb-sm-10 mb-xs-5 mb-15 d-block color-red"><img src="/assets/img/team-details/badge-line-yellow.svg" className="img-fluid mr-10" alt=""/> Blog & News</span>
                        <h2 className="title color-d_black">Consulter Latest Blog & News</h2>
                    </div>
                </div>
            </div>

            <div className="blog-news__bottom mt-60 mt-sm-50 mt-xs-40">
                <div className="row mb-minus-30">

 {articles.items && articles.items.data.map((item)=>{

    return (
        <div className="col-xl-4 col-md-6 col-12" key={item.id}>
        <div className="blog-item blog-item-three mb-30">
            <div className="blog-featured-thumb mb-xs-30 mb-sm-30 mb-md-35 mb-lg-40 mb-50">
                <div className="media overflow-hidden">
                    <img src={item.attributes.Image.data && `http://localhost:1337`+item.attributes.Image.data.attributes.url} className="img-fluid" alt=""/>
                </div>
                <div className="date">
                    <span>27</span>
                    <span>April</span>
                    <span>2020</span>
                </div>
            </div>

            <div className="content pr-sm-25 pr-xs-15 pl-xs-15 pl-sm-25 pr-xs-15 pr-30 pb-30 pl-30">
                <div className="post-author mb-5">
                    <a href="blog.html"></a>
                </div>

                <h4><a href="">{item.attributes.Title}</a></h4>

                <div className="btn-link-share mt-xs-10 mt-sm-10 mt-15">
                    <Link href={`/blog/${item.id}`} className="theme-btn btn-border">Read More <i className="fas fa-long-arrow-alt-right"></i></Link>
                </div>
            </div>
        </div>
    </div>
    )
 })}

                </div>
            </div>
        </div>
    </section> */}
      {/* <!-- blog-news end --> */}

      <Reviews />

      <GetInTouch/>

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

export default medicalBilling;

// export const getServerSideProps = async ()=> {

//     const data = await fetchArticles();

//         return {
//           props: {
//             articles:{
//                 items:data.data
//             }
//           }, // will be passed to the page component as props
//         }
//       }
