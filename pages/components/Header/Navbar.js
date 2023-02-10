import React from 'react'
import Link from "next/link"

export const Navbar = () => {
  return (
   <>
   
   <header className="header header-1 header-3">
        <div className="top-header test d-none d-xl-block">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-4">
                <div className="header-right-socail d-flex align-items-center">
                  {/* <h6 className="font-la color-white fw-normal">Follow On:</h6> */}

                  <div className="social-profile">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-8">
                <div className="header-cta d-flex justify-content-end">
                  <ul>
                    <li>
                      <a>
                        <i className="icon-phone"></i> (+212)-226-3126
                      </a>
                    </li>
                    <li>
                      <a href="mailto:consulter@example.com">
                        <i className="icon-email"></i>consulter@example.com
                      </a>
                    </li>
                    {/* <li>
                      <a>
                        <i className="fal fa-clock"></i> Mon – Fri: 8.00 – 18.00
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-header-wraper">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="header-logo">
                    <div className="logo">
                      <Link href="/">
                        <img height="90px"  src="assets/img/logo/logo-3.png" alt="logo" />
                      </Link>
                    </div>
                  </div>

                  <div className="header-menu d-none d-xl-block">
                    <div className="main-menu">
                      <ul>
                        <li>
                          <Link href="/">Home</Link>
                         
                        </li>
                        <li>
                          <Link href="/services">Solutions We Provide</Link>

                          <ul style={{width:"750px"}}>
                            <div className="row">
                              <div className="col-md-6">
                              <li>
                              <Link href="/services/medical-billing">Medical Billing Services</Link>
                            </li>
                            <li>
                              <Link href="/services/provider-credentialing">Provider Credentialing</Link>
                            </li>
                            <li>
                              <Link href="/services/chronic-care-management">Chronic Care Management</Link>
                            </li>
                            <li>
                              <Link href="/services/healthcare-digital-marketing">HealthCare Digital Marketing</Link>
                            </li>
                              </div>
                              <div className="col-md-6">
                              <li>
                              <Link href="/services/medical-billing-audits">Medical Billing Audits</Link>
                            </li>
                            <li>
                              <Link href="/services/RCM">Revenue Cycle Management</Link>
                            </li>
                            <li>
                              <Link href="/services/doctors-macra-services">Doctor MACRA Servies</Link>
                            </li>
                            <li>
                              <Link href="/services/accounting-&-tax-services">Accounting and Taxation Services</Link>
                            </li>
                              </div>
                            </div>
                           
                          </ul>
                        </li>
                        <li>
                          <a>Company</a>

                          <ul>
                            
                            <li>
                            <Link href="/about">
                              About 
                              </Link>
                            </li>
                            <li>
                            <Link href="/contact">
                              Contact Us
                              </Link>
                            </li>
                            {/* <li>
                              <a href="table.html">Pricing Table</a>
                            </li>
                            <li>
                              <a href="team.html">Team</a>
                            </li>
                            <li>
                              <a href="team-details.html">Team Details</a>
                            </li>
                            <li>
                              <a href="services-details.html">
                                Services Details
                              </a>
                            </li>
                            <li>
                              <a href="our-project-details.html">
                                Our Project Details
                              </a>
                            </li>
                            <li>
                              <a href="blog-details.html">Blog Details</a>
                            </li>
                            <li>
                              <a href="404.html">404</a>
                            </li> */}
                          </ul>
                        </li>
                        <li>
                          <a href="our-project.html">Pricing</a>
                        </li>
                        <li>
                          <Link href="/blog">Blog</Link>

                          <ul>
                            <li>
                              <Link href="/singleBlog">Blog Details</Link>
                            </li>
                          </ul>
                          
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="header-right d-flex align-items-center">
                    <div className="header-search">
                      <a className="search-toggle" data-selector=".header-search">
                        <span className="fas fa-search"></span>
                      </a>

                      <form className="search-box" action="mail.php" method="POST">
                        <div className="form-group d-flex align-items-center">
                          <input
                            type="search"
                            name="s"
                       
                            className="search-input"
                            id="search"
                            placeholder="Search"
                          />
                          <button type="submit" className="search-submit">
                            <i className="fas fa-search"></i>
                          </button>
                        </div>
                      </form>
                    </div>

                    <a href="contact.html" className="header-btn">
                      INQUIRE NOW <i className="far fa-chevron-double-right"></i>
                    </a>
                    <div className="mobile-nav-bar d-block ml-3 ml-sm-5 d-xl-none">
                      <div className="mobile-nav-wrap">
                        <div id="hamburger">
                          <i className="fal fa-bars"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- mobile menu - responsive menu  --> */}
      <div className="mobile-nav mobile-nav-red">
        <button type="button" className="close-nav">
          <i className="fal fa-times-circle"></i>
        </button>

        <nav className="sidebar-nav">
          <div className="navigation">
            <div className="consulter-mobile-nav">
              <ul>
                <li>
                  <a href="#">Home</a>
                  <ul>
                    <li>
                      <a href="index.html">home 1</a>
                    </li>
                    <li>
                      <a href="index-2.html">home 2</a>
                    </li>
                    <li>
                      <a href="index-3.html">home 3</a>
                    </li>
                    <li>
                      <a href="index-4.html">home 4</a>
                    </li>
                    <li>
                      <a href="index-5.html">home 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="services.html">Our Services</a>

                  <ul>
                    <li>
                      <a href="services.html">Our Services 1</a>
                    </li>
                    <li>
                      <a href="services-2.html">Our Services 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Pages</a>

                  <ul>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                    <li>
                      <a href="table.html">Pricing Table</a>
                    </li>
                    <li>
                      <a href="team.html">Team</a>
                    </li>
                    <li>
                      <a href="team-details.html">Team Details</a>
                    </li>
                    <li>
                      <a href="services-details.html">Services Details</a>
                    </li>
                    <li>
                      <a href="our-project-details.html">Our Project Details</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Details</a>
                    </li>
                    <li>
                      <a href="404.html">404</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="our-project.html">Portfolio</a>
                </li>
                <li>
                  <a href="blog.html">Blog</a>

                  <ul>
                    <li>
                      <a href="blog.html">Blog 1</a>
                    </li>
                    <li>
                      <a href="blog-standard.html">Blog 2</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="sidebar-nav__bottom mt-20">
              <div className="sidebar-nav__bottom-contact-infos mb-20">
                <h6 className="color-black mb-5">Contact Info</h6>

                <ul>
                  <li>
                    <a>
                      <i className="fal fa-clock"></i> Mon – Fri: 8.00 – 18.00
                    </a>
                  </li>
                  <li>
                    <a href="mailto:consulter@example.com">
                      <i className="icon-email"></i>consulter@example.com
                    </a>
                  </li>
                  <li>
                    <a className="header-contact d-flex align-items-center">
                      <div className="icon">
                        <i className="icon-call"></i>
                        {/* <!-- <img src="assets/img/icon/phone-1.svg" alt=""> --> */}
                      </div>
                      <div className="text">
                        <span className="font-la mb-5 d-block fw-500">
                          Contact For Support
                        </span>
                        <h5 className="fw-500">+123 556 8824</h5>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="sidebar-nav__bottom-social">
                <h6 className="color-black mb-5">Follow On:</h6>

                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="offcanvas-overlay"></div>
      {/* <!-- offcanvas-overlay -->
    <!-- header end --> */}

      <div className="header-gutter home"></div>
      {/* <!-- header end --> */}

    
   </>
  )
}
