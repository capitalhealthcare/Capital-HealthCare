import React from 'react'

export const OurTeam = () => {
  return (
    <>
     {/* <!-- our-team start --> */}
     <section className="our-team bg-dark_white pb-xs-80 pt-xs-80 pt-sm-100 pb-sm-100 pt-md-100 pb-md-100 pt-120 pb-120 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="our-team__content mb-65 mb-md-50 mb-sm-40 mb-xs-30 text-center">
                <span className="sub-title fw-500 color-primary text-uppercase mb-sm-10 mb-xs-5 mb-15 d-block">
                  <img
                    src="assets/img/team-details/badge-line.svg"
                    className="img-fluid mr-10"
                    alt=""
                  />{" "}
                  Our Team
                </span>
                <h2 className="title color-d_black">
                  Meet Our Team <span>Member</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="row mb-minus-30">
            <div className="col-xxl-3 col-lg-4 col-md-6">
              <a
                href="team-details.html"
                className="team-item team-about-item text-center mb-30 d-block overflow-hidden"
              >
                <div className="media">
                  <img
                    src="assets/img/about/about-member-1.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>

                <div className="text d-flex align-items-center justify-content-center">
                  <div className="left">
                    <h5 className="title color-white">Stephen Larry</h5>
                    <span className="position color-white font-la fw-500">
                      Product Manager
                    </span>
                  </div>

                  <div className="right">
                    <div className="icon">
                      <i className="icon-arrow-right-2"></i>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            {/* <!-- team-item --> */}

            <div className="col-xxl-3 col-lg-4 col-md-6">
              <a
                href="team-details.html"
                className="team-item team-about-item text-center mb-30 d-block overflow-hidden"
              >
                <div className="media">
                  <img
                    src="assets/img/about/about-member-1.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>

                <div className="text d-flex align-items-center justify-content-center">
                  <div className="left">
                    <h5 className="title color-white">Nusrat Jahan</h5>
                    <span className="position color-white font-la fw-500">
                      Assistent Manager, Finance
                    </span>
                  </div>

                  <div className="right">
                    <div className="icon">
                      <i className="icon-arrow-right-2"></i>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            {/* <!-- team-item --> */}

            <div className="col-xxl-3 col-lg-4 col-md-6">
              <a
                href="team-details.html"
                className="team-item team-about-item text-center mb-30 d-block overflow-hidden"
              >
                <div className="media">
                  <img
                    src="assets/img/about/about-member-1.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>

                <div className="text d-flex align-items-center justify-content-center">
                  <div className="left">
                    <h5 className="title color-white">Stephen Larry</h5>
                    <span className="position color-white font-la fw-500">
                      Product Manager
                    </span>
                  </div>

                  <div className="right">
                    <div className="icon">
                      <i className="icon-arrow-right-2"></i>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            {/* <!-- team-item --> */}

            <div className="col-xxl-3 col-lg-4 col-md-6">
              <a
                href="team-details.html"
                className="team-item team-about-item text-center mb-30 d-block overflow-hidden"
              >
                <div className="media">
                  <img
                    src="assets/img/about/about-member-1.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>

                <div className="text d-flex align-items-center justify-content-center">
                  <div className="left">
                    <h5 className="title color-white">Stephen Larry</h5>
                    <span className="position color-white font-la fw-500">
                      Product Manager
                    </span>
                  </div>

                  <div className="right">
                    <div className="icon">
                      <i className="icon-arrow-right-2"></i>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            {/* <!-- team-item --> */}
          </div>

          <div className="row">
            <div className="col-12">
              <div className="our-team__btn-wrapper text-center mt-70 mt-md-50 mt-sm-40 mt-xs-30">
                <a href="team.html" className="theme-btn">
                  See All Member <i className="far fa-chevron-double-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- our-team end --> */}
    </>
  )
}
