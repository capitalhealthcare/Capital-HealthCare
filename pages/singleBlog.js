import Head from 'next/head'
import React from 'react'
import Script from "next/Script"
import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Header/Navbar'

export const singleBlog = () => {
  return (
    <>
    
    <Navbar/>

    {/* <!-- page-banner start --> */}
    <section className="page-banner pt-xs-60 pt-sm-80 overflow-hidden">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="page-banner__content mb-xs-10 mb-sm-15 mb-md-15 mb-20">
                        <div className="transparent-text">Details</div>
                        <div className="page-title">
                            <h1>Blog <span>Details</span></h1>
                        </div>
                    </div>

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                          <li className="breadcrumb-item active" aria-current="page">Blog Details</li>
                        </ol>
                    </nav>
                </div>

                <div className="col-md-6">
                    <div className="page-banner__media mt-xs-30 mt-sm-40">
                        <img src="assets/img/page-banner/page-banner-start.svg" className="img-fluid start" alt=""/>
                        <img src="assets/img/page-banner/page-banner.jpg" className="img-fluid" alt=""/>
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
                                <img src="assets/img/blog/blog-12.png" className="img-fluid" alt=""/>
                            </div>
                        </div>

                        <div className="content pr-sm-25 pr-xs-15 pl-xs-15 pl-sm-25 pr-xs-15 pr-30 pl-30 pb-xs-25 pb-sm-30 pb-40">
                            <div className="post-meta mb-10">
                                <a href="blog-details.html"><i className="icon-user"></i>By Admin</a>
                                <a href="blog-details.html"><i className="icon-category"></i>Business, Consulting</a>
                                <a href="blog-details.html"><i className="fal fa-clock"></i>27 jun, 2023</a>
                                <a href="blog-details.html"><img src="assets/img/icon/messages-1.svg" alt=""/>02 Comments</a>
                            </div>

                            <h3>Consulted admitting wooded is power acuteness.</h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.</p>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit. But I must explain to you how all this mistaken idea.</p>

                            <blockquote>
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

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                            <div className="tag-share_wrapper d-flex align-center justify-content-between flex-wrap mb-sm-40 mb-xs-30 mb-60"> 
                                <div className="tags">
                                    <ul>
                                        <li><a href="#">Business</a></li>
                                        <li><a href="#">Finance</a></li>
                                        <li><a href="#">Solution</a></li>
                                    </ul>
                                </div> 

                                <div className="social-profile">
                                    <ul>
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div> 
                            </div>

                            {/* <!-- comments section wrap start --> */}
                            <div className="comments-section-wrap overflow-hidden"> 
                                <h4>02 <span>Comments</span></h4>

                                <ul className="comments-item-list">
                                    <li>
                                        <div className="author-img">
                                            <img src="assets/img/blog-details/auhor-1.jpg" alt=""/>
                                        </div>

                                        <div className="author-info-comment">
                                            <div className="info mb-10">
                                                <h5><a href="#">Md Ashikul Islam</a></h5>
                                                <span>January 22, 2023 at 7:30pm</span>
                                            </div>

                                            <div className="comment-text">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                <a href="#">Reply</a>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="author-img">
                                            <img src="assets/img/blog-details/auhor-1.jpg" alt=""/>
                                        </div>

                                        <div className="author-info-comment">
                                            <div className="info mb-10">
                                                <h5><a href="#">Md jhon Islam</a></h5>
                                                <span>January 22, 2023 at 7:30pm</span>
                                            </div>

                                            <div className="comment-text">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                                <a href="#">Reply</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="comment-form-wrap">
                                <h4>Leave a Reply</h4>

                                <form action="#" className="comment-form">
                                    <div className="single-form-input">
                                        <textarea placeholder="Your comment"></textarea>
                                    </div>
                                    <div className="input__wrapper w-100 d-flex flex-column flex-sm-row">
                                        <div className="single-form-input">
                                            <input type="text"  defaultValue="Search..." placeholder="Your name"/>
                                        </div>
                                        <div className="single-form-input">
                                            <input type="email" defaultValue="Search..." placeholder="Your e-mail"/>
                                        </div>
                                    </div>
                                    <div className="single-form-input">
                                        <input type="text" defaultValue="Search..." placeholder="Your topic"/>
                                    </div>
                                    
                                    <button className="theme-btn submit-btn" type="submit">Post Comment</button>
                                </form>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-xl-4">
                    <div className="main-sidebar" data-sticky_column>
                        <div className="single-sidebar-widget mb-40 pt-30 pr-30 pb-40 pl-30 pl-xs-20 pr-xs-20">
                            <h4 className="wid-title mb-30 mb-xs-20 color-d_black text-capitalize">Search Here</h4>

                            <div className="search_widget">
                                <form action="#">
                                    <input defaultValue="Search..." type="text" placeholder="Enter Keyword..."/>
                                    <button type="submit"><i className="fal fa-search"></i></button>
                                </form>
                            </div>
                        </div>

                        <div className="single-sidebar-widget mb-40 pt-30 pr-30 pb-40 pl-30 pl-xs-20 pr-xs-20">
                            <h4 className="wid-title mb-30 mb-xs-20 color-d_black text-capitalize">Our provide</h4>
                            
                            <div className="widget_categories">
                                <ul>
                                    <li><a href="#">Business Consulting <i className="fas fa-long-arrow-alt-right"></i></a></li>
                                    <li><a href="#">Business Solutions <i className="fas fa-long-arrow-alt-right"></i></a></li>
                                    <li><a href="#">Investment Planning <i className="fas fa-long-arrow-alt-right"></i></a></li>
                                    <li><a href="#">Strategy & Research <i className="fas fa-long-arrow-alt-right"></i></a></li>
                                    <li><a href="#">Tax Management <i className="fas fa-long-arrow-alt-right"></i></a></li>
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
                                        <a href="blog-details.html" className="post-date d-block mb-10 text-uppercase">
                                            <i className="far fa-clock"></i>12 jun, 2022
                                        </a>
                                        <h6><a href="blog-details.html">Saving Time Achieving Success in Business</a></h6>
                                    </div>
                                </div>

                                <div className="single-post-item mb-20">
                                    <div className="thumb overflow-hidden">
                                        <img src="assets/img/blog/blog-12.png" className="img-fluid" alt=""/>
                                    </div>

                                    <div className="post-content">
                                        <a href="blog-details.html" className="post-date d-block mb-10 text-uppercase">
                                            <i className="far fa-clock"></i>25 Feb, 2023
                                        </a>
                                        <h6><a href="blog-details.html">Finances and Accounting are One of the Hardest</a></h6>
                                    </div>
                                </div>

                                <a href="blog.html" className="theme-btn d-block"><i className="far fa-sync-alt"></i>More Post</a>
                            </div>
                        </div>

                        <div className="single-sidebar-widget widget__tags mb-40 pt-30 pr-30 pb-40 pl-30 pl-xs-20 pr-xs-20">
                            <h4 className="wid-title mb-30 mb-xs-20 color-d_black text-capitalize">Popular Tags</h4>

                            <div className="tags">
                                <ul>
                                    <li><a href="#">Business</a></li>
                                    <li><a href="#">Finance</a></li>
                                    <li><a href="#">Solution</a></li>
                                    <li><a href="#">Research</a></li>
                                    <li><a href="#">Technology</a></li>
                                    <li><a href="#">Growth</a></li>
                                    <li><a href="#">Strategy</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Planning</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
    {/* <!-- team-area end --> */}

    <section className="cta-banner overflow-hidden">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="cta-banner__content d-flex flex-column flex-lg-row justify-content-between align-items-center pl-xs-20  pr-xs-20 pl-sm-30  pr-sm-30 pl-lg-50 pr-lg-50 pr-85 pl-85 overflow-hidden">
                        <div className="cta-banner__content-text">
                            <h3 className="title text-capitalize color-white">Small Business Grow Fast With Our Consulting Services</h3>
                        </div>
                        <div className="cta-banner__content-btn">
                            <a href="contact.html" className="theme-btn btn-white">Let’s Work Together <i className="far fa-chevron-double-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

<Footer/>
    </>
  )
}

export default singleBlog;
