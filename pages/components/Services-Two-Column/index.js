import React from 'react'

export const ServicesTwoColumn = ({title,ImageSrc}) => {
  return (
    <>

  {/* <!-- working_wrapper start--> */}
  <section
        style={{ backgroundColor: "#E5E5E5" }}
        class="working_wrapper overflow-hidden pt-50 pb-50"
      >
        <div className="container">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-lg-6">
              <div className="our-company__content mt-md-50 mt-sm-40 mt-xs-35">
                <span className="sub-title fw-500 color-primary text-uppercase mb-sm-10 mb-xs-5 mb-20 d-block">
                  <img
                    src="assets/img/team-details/badge-line.svg"
                    className="img-fluid mr-10"
                    alt=""
                  />
                  We Offer{" "}
                </span>
                <h2 className="title color-d_black mb-20 mb-sm-15 mb-xs-10">
                 {title}
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
                    nostrud exercitation ullamco laboris nisi ut aliquip.
                  </p>
                </div>
                <button type="" class="theme-btn btn-sm btn-red">
                  Free Consultant <i class="far fa-chevron-double-right"></i>
                </button>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6">
              <div className="our-company__meida border-radius">
                <div class="gallery-bar2 bg-yellow"></div>
                <img
                  src={ImageSrc}
                  alt=""
                  className="img-fluid"
                />

                <div className="horizental-bar"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- working_wrapper end--> */}

    </>
  )
}
