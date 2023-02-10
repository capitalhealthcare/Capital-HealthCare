import Head from 'next/head'
import React from 'react'
import { Footer } from '../components/Footer/Footer'
import { Navbar } from '../components/Header/Navbar'
import { CommonBanner } from "../components/CommonBanner";
import Link from 'next/link'

export const blog = () => {
  return (
    <>

    <Navbar/>

    <CommonBanner
        B_title="News & Blog"
        First_heading="Blog"
        Last_heading="Standard"
        ImageSrc="assets/img/page-banner/page-banner.jpg"
        First_Breadcrumb="Home"
        Last_Breadcrumb="Blog"
      />



    {/* <!-- team-area start --> */}
    <section className="blog pb-xs-80 pt-xs-80 pt-sm-100 pb-sm-100 pt-md-100 pb-md-100 pt-120 pb-120 overflow-hidden">
        <div className="container">
            <div className="row" data-sticky_parent>
                <div className="col-xl-8" data-sticky_column>
                    <div className="blog-item blog-standard mb-xs-30 mb-sm-35 mb-md-40 mb-50">
                        <div className="blog-featured-thumb mb-xs-30 mb-sm-30 mb-md-35 mb-lg-40 mb-40">
                            <div className="media overflow-hidden">
                                <img src="assets/img/blog/blog-12.png" className="img-fluid" alt=""/>
                            </div>
                        </div>

                        <div className="content pr-sm-25 pr-xs-15 pl-xs-15 pl-sm-25 pr-xs-15 pr-30 pl-30 pb-xs-25 pb-sm-30 pb-40">
                            <div className="post-meta mb-10">
                                <Link  href="blog-details.html"><i className="icon-category"></i>Business, Consulting</Link>
                                <Link  href="blog-details.html"><i className="fal fa-clock"></i>27 jun, 2023</Link>
                                <Link  href="blog-details.html"><img src="assets/img/icon/messages-1.svg" alt=""/>02 Comments</Link>
                            </div>

                            <h3><Link  href="blog-details.html">Consulted admitting wooded is power acuteness.</Link></h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                            <div className="btn-link-share mt-xs-10 mt-sm-10 mt-md-15 mt-25">
                                <Link  href="blog-details.html" className="theme-btn btn-border btn-fill">Read More <i className="fas fa-long-arrow-alt-right"></i></Link>
                            </div>
                        </div>
                    </div>

                    <div className="blog-item blog-standard mb-xs-30 mb-sm-35 mb-md-40 mb-50">
                        <div className="blog-featured-thumb mb-xs-30 mb-sm-30 mb-md-35 mb-lg-40 mb-40">
                            <div className="media overflow-hidden">
                                <img src="assets/img/blog/blog-12.png" className="img-fluid" alt=""/>
                            </div>
                        </div>

                        <div className="content pr-sm-25 pr-xs-15 pl-xs-15 pl-sm-25 pr-xs-15 pr-30 pl-30 pb-xs-25 pb-sm-30 pb-40">
                            <div className="post-meta mb-10">
                                <Link  href="blog-details.html"><i className="icon-category"></i>Business, Consulting</Link>
                                <Link  href="blog-details.html"><i className="fal fa-clock"></i>27 jun, 2023</Link>
                                <Link  href="blog-details.html"><img src="assets/img/icon/messages-1.svg" alt=""/>02 Comments</Link>
                            </div>

                            <h3><Link  href="blog-details.html">Consulted admitting wooded is power acuteness.</Link></h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                            <div className="btn-link-share mt-xs-10 mt-sm-10 mt-md-15 mt-25">
                                <Link  href="blog-details.html" className="theme-btn btn-border btn-fill">Read More <i className="fas fa-long-arrow-alt-right"></i></Link>
                            </div>
                        </div>
                    </div>

                    <div className="blog-item blog-standard mb-xs-30 mb-sm-35 mb-md-40 mb-50">
                        <div className="blog-featured-thumb mb-xs-30 mb-sm-30 mb-md-35 mb-lg-40 mb-40">
                            <div className="media overflow-hidden">
                                <img src="assets/img/blog/blog-12.png" className="img-fluid" alt=""/>
                            </div>
                        </div>

                        <div className="content pr-sm-25 pr-xs-15 pl-xs-15 pl-sm-25 pr-xs-15 pr-30 pl-30 pb-xs-25 pb-sm-30 pb-40">
                            <div className="post-meta mb-10">
                                <Link  href="blog-details.html"><i className="icon-category"></i>Business, Consulting</Link>
                                <Link  href="blog-details.html"><i className="fal fa-clock"></i>27 jun, 2023</Link>
                                <Link  href="blog-details.html"><img src="assets/img/icon/messages-1.svg" alt=""/>02 Comments</Link>
                            </div>

                            <h3><Link  href="blog-details.html">Consulted admitting wooded is power acuteness.</Link></h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                            <div className="btn-link-share mt-xs-10 mt-sm-10 mt-md-15 mt-25">
                                <Link  href="blog-details.html" className="theme-btn btn-border btn-fill">Read More <i className="fas fa-long-arrow-alt-right"></i></Link>
                            </div>
                        </div>
                    </div>

                    <div className="blog-item blog-standard mb-xs-30 mb-sm-35 mb-md-40 mb-50">
                        <div className="blog-featured-thumb mb-xs-30 mb-sm-30 mb-md-35 mb-lg-40 mb-40">
                            <div className="media overflow-hidden">
                                <img src="assets/img/blog/blog-12.png" className="img-fluid" alt=""/>
                            </div>
                        </div>

                        <div className="content pr-sm-25 pr-xs-15 pl-xs-15 pl-sm-25 pr-xs-15 pr-30 pl-30 pb-xs-25 pb-sm-30 pb-40">
                            <div className="post-meta mb-10">
                                <Link  href="blog-details.html"><i className="icon-category"></i>Business, Consulting</Link>
                                <Link  href="blog-details.html"><i className="fal fa-clock"></i>27 jun, 2023</Link>
                                <Link  href="blog-details.html"><img src="assets/img/icon/messages-1.svg" alt=""/>02 Comments</Link>
                            </div>

                            <h3><Link  href="blog-details.html">Consulted admitting wooded is power acuteness.</Link></h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                            <div className="btn-link-share mt-xs-10 mt-sm-10 mt-md-15 mt-25">
                                <Link  href="blog-details.html" className="theme-btn btn-border btn-fill">Read More <i className="fas fa-long-arrow-alt-right"></i></Link>
                            </div>
                        </div>
                    </div>

                    <div className="page-nav-wrap text-center">
                        <ul>
                            {/* <!-- <li className="arrow left"><Link  href="#"><i className="far fa-chevron-double-left"></i></Link></li> --> */}
                            <li><Link  href="#">1</Link></li>
                            <li><Link  href="#">2</Link></li>
                            <li><Link  href="#">3</Link></li>
                            <li className="arrow right"><Link  href="#"><i className="far fa-chevron-double-right"></i></Link></li>
                        </ul>
                    </div>
                     {/* <!-- /page-nav-wrap -->  */}
                </div>

                <div className="col-xl-4">
                    <div className="main-sidebar" data-sticky_column>
                        <div className="single-sidebar-widget mb-40 pt-30 pr-30 pb-40 pl-30 pl-xs-20 pr-xs-20">
                            <h4 className="wid-title mb-30 mb-xs-20 color-d_black text-capitalize">Search Here</h4>

                            <div className="search_widget">
                                <form action="#">
                                    <input type="text" defaultValue="Search..." placeholder="Enter Keyword..."/>
                                    <button type="submit"><i className="fal fa-search"></i></button>
                                </form>
                            </div>
                        </div>

                        <div className="single-sidebar-widget mb-40 pt-30 pr-30 pb-40 pl-30 pl-xs-20 pr-xs-20">
                            <h4 className="wid-title mb-30 mb-xs-20 color-d_black text-capitalize">Our provide</h4>
                            
                            <div className="widget_categories">
                                <ul>
                                    <li><Link  href="#">Business Consulting <i className="fas fa-long-arrow-alt-right"></i></Link></li>
                                    <li><Link  href="#">Business Solutions <i className="fas fa-long-arrow-alt-right"></i></Link></li>
                                    <li><Link  href="#">Investment Planning <i className="fas fa-long-arrow-alt-right"></i></Link></li>
                                    <li><Link  href="#">Strategy & Research <i className="fas fa-long-arrow-alt-right"></i></Link></li>
                                    <li><Link  href="#">Tax Management <i className="fas fa-long-arrow-alt-right"></i></Link></li>
                                </ul>                                
                            </div>
                        </div>

                        <div className="single-sidebar-widget mb-40 pt-30 pr-30 pb-40 pl-30 pl-xs-20 pr-xs-20"> 
                            <h4 className="wid-title mb-30 mb-xs-20 color-d_black text-capitalize">Resent Post</h4>

                            <div className="resent-posts">
                                <div className="single-post-item mb-20">
                                    <div className="thumb overflow-hidden">
                                        <img src="assets/img/blog/blog-12.png" className="img-fluid" alt=""/>
                                    </div>

                                    <div className="post-content">
                                        <Link  href="blog-details.html" className="post-date d-block mb-10 text-uppercase">
                                            <i className="far fa-clock"></i>12 jun, 2022
                                        </Link>
                                        <h6><Link  href="blog-details.html">Saving Time Achieving Success in Business</Link></h6>
                                    </div>
                                </div>

                                <div className="single-post-item mb-20">
                                    <div className="thumb overflow-hidden">
                                        <img src="assets/img/blog/blog-12.png" className="img-fluid" alt=""/>
                                    </div>

                                    <div className="post-content">
                                        <Link  href="blog-details.html" className="post-date d-block mb-10 text-uppercase">
                                            <i className="far fa-clock"></i>25 Feb, 2023
                                        </Link>
                                        <h6><Link  href="blog-details.html">Finances and Accounting are One of the Hardest</Link></h6>
                                    </div>
                                </div>

                                <Link  href="blog-standard.html" className="theme-btn d-block"><i className="far fa-sync-alt"></i>More Post</Link>
                            </div>
                        </div>

                        <div className="single-sidebar-widget widget__tags mb-40 pt-30 pr-30 pb-40 pl-30 pl-xs-20 pr-xs-20">
                            <h4 className="wid-title mb-30 mb-xs-20 color-d_black text-capitalize">Popular Tags</h4>

                            <div className="tags">
                                <ul>
                                    <li><Link  href="#">Business</Link></li>
                                    <li><Link  href="#">Finance</Link></li>
                                    <li><Link  href="#">Solution</Link></li>
                                    <li><Link  href="#">Research</Link></li>
                                    <li><Link  href="#">Technology</Link></li>
                                    <li><Link  href="#">Growth</Link></li>
                                    <li><Link  href="#">Strategy</Link></li>
                                    <li><Link  href="#">Services</Link></li>
                                    <li><Link  href="#">Planning</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- team-area end -->     */}

    <Footer/>
    </>
  )
}

export default blog;