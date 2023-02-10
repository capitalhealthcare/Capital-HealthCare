import React from 'react'

export const Footer = () => {
  return (
   <>
     {/* <!-- cta start --> */}
     <section className="cta-banner overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cta-banner__content d-flex flex-column flex-lg-row justify-content-between align-items-center pl-xs-20  pr-xs-20 pl-sm-30  pr-sm-30 pl-lg-50 pr-lg-50 pr-85 pl-85 overflow-hidden">
                <div className="cta-banner__content-text">
                  <h3 className="title text-capitalize color-white">
                    Small Business Grow Fast With Our Consulting Services
                  </h3>
                </div>
                <div className="cta-banner__content-btn">
                  <a href="contact.html" className="theme-btn btn-white">
                    Let’s Work Together{" "}
                    <i className="far fa-chevron-double-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- cta start --> */}
    {/* <!-- footer start --> */}
    <footer className="footer-1 footer-3 cta-info overflow-hidden" style={{backgroundImage: "url(/assets/img/footer/footer-bg-3.png)"}}>
        <div className="overly">
            <div className="container"></div>
        </div>

        {/* <div className="footer-top__box pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-top__box-wrapper d-flex flex-column flex-sm-row text-center text-sm-start justify-content-sm-between align-items-center" style={{backgroundImage: "url(assets/img/footer/footer-box-bg.png)"}}>
                            <div className="text">
                                <h3 className="title color-white">Get updated Informed to Subscribe our Newsletter</h3>
                            </div>

                            <div className="theme-btn__wrapper d-flex flex-column"> 
                                <input type="email" className="theme-btn" placeholder="Your e-mail"/>
                                <a href="#" className="theme-btn">Subscribe Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

        <div className="container pt-5">
            <div className="row justify-content-between">
                <div className="col-md-6 col-xl-3">
                    <div className="single-footer-wid widget-description">
                        <a href="index.html" className="d-block mb-30 mb-xs-20">
                            {/* <img src="assets/img/logo/footer-logo-3.png" alt=""/> */}
                        </a>
                        
                        <div className="description font-la color-white mb-40 mb-sm-30 mb-xs-25">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam</p>
                        </div>

                        <a href="#" className="theme-btn btn-red btn-md fw-600">Purchase Now <i className="far fa-chevron-double-right"></i></a>
                    </div>
                </div> 
                {/* <!-- /.col-lg-3 - single-footer-wid --> */}

                <div className="col-md-6 col-xl-2">                        
                    <div className="single-footer-wid pl-xl-10 pl-50">
                        <h4 className="wid-title mb-30 color-white">Quick Link</h4>
                        
                        <ul>
                            <li><a href="about.html">About Company</a></li>
                            <li><a href="services.html">Our Services</a></li>
                            <li><a href="services-2.html">Investor Presentation</a></li>
                            <li><a href="table.html">Investor Career</a></li>
                            <li><a href="team.html">Meet Our Team</a></li>
                            <li><a href="contact.html">Support</a></li>
                        </ul>
                    </div>
                </div> 
                {/* <!-- /.col-lg-2 - single-footer-wid --> */}

                <div className="col-md-6 col-xl-4">
                    <div className="single-footer-wid recent_post_widget pl-xl-10 pl-65 pr-50 pr-xl-30">
                        <h4 className="wid-title mb-30 color-white">Resent Post</h4>

                        <div className="recent-post-list">
                            <a href="blog.html" className="single-recent-post mb-20 pb-20 d-flex align-items-center">
                                <div className="thumb">
                                    <img src="/assets/img/footer/resent-post-1.jpg" alt=""/>
                                </div>

                                <div className="post-data">
                                    <h5 className="color-white mb-10 fw-600">Why Purpose-Driven Employers Succeed</h5>
                                    <span className="color-white d-flex ailign-items-center"><i className="far fa-clock"></i>January 11, 2018</span>
                                </div>
                            </a>

                            <a href="blog.html" className="single-recent-post mb-20 pb-20 d-flex align-items-center">
                                <div className="thumb">
                                    <img src="/assets/img/footer/resent-post-1.jpg" alt=""/>
                                </div>

                                <div className="post-data">
                                    <h5 className="color-white mb-10 fw-600">Saving Time Achieving Success in Business</h5>
                                    <span className="color-white d-flex ailign-items-center"><i className="far fa-clock"></i>november 12, 2019</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                 {/* <!-- /.col-lg-4 - single-footer-wid --> */}

                <div className="col-md-6 col-xl-3">                        
                    <div className="single-footer-wid">
                        <h4 className="wid-title mb-30 color-white">Office Location</h4>

                        <div id="map" className="pinRed"></div>
                    </div>
                </div>
                 {/* <!-- /.col-lg-3 - single-footer-wid --> */}
            </div>
        </div>

        <div className="footer-bottom overflow-hidden mt-20 mt-sm-15 mt-xs-10">
            <div className="container">
                <div className="footer-bottom-content d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <div className="coppyright text-center text-md-start">
                        &copy; 2022 <a href="index.html">Consulter</a> | All Rights Reserved by <a href="https://themeforest.net/user/rrdevs">RRDevs</a>
                    </div>

                    <div className="footer-bottom-list last_no_bullet">
                        <ul>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- footer end --> */}

   </>
  )
}
