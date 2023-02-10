import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Navbar } from "../components/Header/Navbar";
import { Footer } from "../components/Footer/Footer";
import axios from "axios";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

export const test = ({ items }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="modinatheme" />
        {/* <!-- ======== Page title ============ --> */}
        <title>CONSULTER - Business Consulting HTML Template</title>
        {/* <!-- ========== Favicon Icon ========== --> */}
        {/* <link rel="shortcut icon" href="assets/img/favicon.png" /> */}
        {/* <!-- ===========  All Stylesheet ================= --> */}
        {/* <!--  Icon css plugins --> */}
        {/* <link rel="stylesheet" href="../assets/css/icons.css" /> */}
        {/* <!--  magnific-popup css plugins --> */}
        {/* <link rel="stylesheet" href="../assets/css/magnific-popup.css" /> */}
        {/* <!-- slick slider menu css file --> */}
        {/* <link rel="stylesheet" href="../assets/css/slick.min.css" /> */}
        {/* <!-- animate animation css file --> */}
        {/* <link rel="stylesheet" href="../assets/css/animate.min.css" /> */}
        {/* <!--  Bootstrap css plugins --> */}
        {/* <link rel="stylesheet" href="../assets/css/bootstrap.min.css" /> */}
        {/* <!-- template main style css file --> */}
        {/* <link rel="stylesheet" href="../../styles/style.css" />
        <link rel="stylesheet" href="" /> */}

        {/* <script
          src="https://kit.fontawesome.com/a076d05399.js"
          crossorigin="anonymous"
        ></script> */}
      </Head>

      <Navbar />

      {/* <!-- page-banner start --> */}
      <section className="page-banner pt-xs-60 pt-sm-80 overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="page-banner__content mb-xs-10 mb-sm-15 mb-md-15 mb-20">
                <div className="transparent-text">Details</div>
                <div className="page-title">
                  {/* <h1>Blog <span>{title[0].attributes.Title}</span></h1> */}
                </div>
              </div>

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  {/* <li className="breadcrumb-item"><Link href="index.html">Home</Link></li> */}
                  {/* <li className="breadcrumb-item active" aria-current="page">Blog Details</li> */}
                </ol>
              </nav>
            </div>

            <div className="col-md-6">
              <div className="page-banner__media mt-xs-30 mt-sm-40">
                <img
                  src="../assets/img/page-banner/page-banner-start.svg"
                  className="img-fluid start"
                  alt=""
                />
                <img
                  src="../assets/img/page-banner/page-banner.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- page-banner end --> */}

      {/* <!-- team-area start --> */}
      <section className="blog pb-xs-80 pt-xs-80 pt-sm-100 pb-sm-100 pt-md-100 pb-md-100 pt-120 pb-120 overflow-hidden">
        <div className="container">
          <div className="row" data-sticky_parent>
            <div className="col-xl-8" data-sticky_column>
              <div className="blog-item blog-standard blog-post-details">
                <div className="blog-featured-thumb mb-xs-30 mb-sm-30 mb-md-35 mb-lg-40 mb-40">
                  <div className="media overflow-hidden">
                    <img
                      src="assets/img/blog/blog-12.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>

                <div className="content pr-sm-25 pr-xs-15 pl-xs-15 pl-sm-25 pr-xs-15 pr-30 pl-30 pb-xs-25 pb-sm-30 pb-40">
                  {/* <div className="post-meta mb-10">
                            <Link href="blog-details.html"><i className="icon-user"></i>By Admin</Link>
                            <Link href="blog-details.html"><i className="icon-category"></i>Business, Consulting</Link>
                            <Link href="blog-details.html"><i className="fal fa-clock"></i>27 jun, 2023</Link>
                            <Link href="blog-details.html"><img src="assets/img/icon/messages-1.svg" alt=""/>02 Comments</Link>
                        </div> */}

                  <h3>{items.attributes.Title}</h3>

                  <p>
                    <ReactMarkdown>{items.attributes.Body}</ReactMarkdown>
                  </p>

                  {/* <blockquote>
                            <p>    
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.”
                            </p>

                            <h6>Richard Paul <span>/Company CEO</span></h6>
                        </blockquote>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.</p>

                        <figure>
                            <img src="assets/img/blog-details/blog-details-1.jpg" alt=""/>
                            <img src="assets/img/blog-details/blog-details-1.jpg" alt=""/>
                        </figure>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}

                  {/* <div className="tag-share_wrapper d-flex align-center justify-content-between flex-wrap mb-sm-40 mb-xs-30 mb-60"> 
                            <div className="tags">
                                <ul>
                                    <li><Link href="#">Business</Link></li>
                                    <li><Link href="#">Finance</Link></li>
                                    <li><Link href="#">Solution</Link></li>
                                </ul>
                            </div> 

                            <div className="social-profile">
                                <ul>
                                    <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                                    <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                </ul>
                            </div> 
                        </div> */}
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="main-sidebar" data-sticky_column>
                <div className="single-sidebar-widget mb-40 pt-30 pr-30 pb-40 pl-30 pl-xs-20 pr-xs-20">
                  <h4 className="wid-title mb-30 mb-xs-20 color-d_black text-capitalize">
                    Search Here
                  </h4>

                  <div className="search_widget">
                    <form action="#">
                      <input type="text" placeholder="Enter Keyword..." />
                      <button type="submit">
                        <i className="fal fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>

                <div className="single-sidebar-widget mb-40 pt-30 pr-30 pb-40 pl-30 pl-xs-20 pr-xs-20">
                  <h4 className="wid-title mb-30 mb-xs-20 color-d_black text-capitalize">
                    Our provide
                  </h4>

                  <div className="widget_categories">
                    <ul>
                      <li>
                        <Link href="#">
                          Business Consulting{" "}
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Business Solutions{" "}
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Investment Planning{" "}
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Strategy & Research{" "}
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Tax Management{" "}
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="single-sidebar-widget mb-40 pt-30 pr-30 pb-40 pl-30 pl-xs-20 pr-xs-20">
                  <h4 className="wid-title mb-30 mb-xs-20 color-d_black text-capitalize">
                    Resent Post
                  </h4>

                  <div className="resent-posts">
                    <div className="single-post-item mb-20">
                      <div className="thumb overflow-hidden">
                        <img
                          src="assets/img/blog/blog-12.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>

                      <div className="post-content">
                        <Link
                          href="blog-details.html"
                          className="post-date d-block mb-10 text-uppercase"
                        >
                          <i className="far fa-clock"></i>12 jun, 2022
                        </Link>
                        <h6>
                          <Link href="blog-details.html">
                            Saving Time Achieving Success in Business
                          </Link>
                        </h6>
                      </div>
                    </div>

                    <div className="single-post-item mb-20">
                      <div className="thumb overflow-hidden">
                        <img
                          src="assets/img/blog/blog-12.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>

                      <div className="post-content">
                        <Link
                          href="blog-details.html"
                          className="post-date d-block mb-10 text-uppercase"
                        >
                          <i className="far fa-clock"></i>25 Feb, 2023
                        </Link>
                        <h6>
                          <Link href="blog-details.html">
                            Finances and Accounting are One of the Hardest
                          </Link>
                        </h6>
                      </div>
                    </div>

                    <Link href="blog.html" className="theme-btn d-block">
                      <i className="far fa-sync-alt"></i>More Post
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- team-area end --> */}


      <Footer />
    </>
  );
};

export default test;


export const getServerSideProps = async ({ query: { id } }) => {
  const postRes = await axios.get(`http://localhost:1337/api/articles/${id}`);
  const post = await postRes.data.data;


  // const data = await fetchArticles();

  return {
    props: {
      items: post,
    }, // will be passed to the page component as props
  };
};
