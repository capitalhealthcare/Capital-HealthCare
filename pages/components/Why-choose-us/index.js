import React from 'react'

export const WhyChooseUs = () => {
  return (
    <>
     {/* <!-- why-choose start --> */}
     <section className="why-choose why-choose__home pb-xs-80 pt-xs-80 pt-sm-100 pb-sm-100 pt-md-100 pb-md-100 pt-120 pb-120 overflow-hidden">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="why-choose__content why-choose__content-home">
                        <div className="why-choose__text">
                            <span className="sub-title d-block fw-500 color-red text-uppercase mb-sm-10 mb-xs-5 mb-15">
                                {/* <img src="/assets/img/team-details/badge-line-yellow.svg" className="img-fluid mr-10" alt=""/>  */}
                                <img src="/assets/img/team-details/badge-line-yellow.svg" className="img-fluid mr-10" alt=""/> 
                                Our solutions</span>
                            <h2 className="title color-pd_black">Solutions We Offer</h2>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="why-choose__content why-choose__content-home mt-md-25 mt-sm-20 mt-xs-20">
                        <div className="description font-la">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                        </div>

                        <a href="services-2.html" className="theme-btn btn-sm btn-red mt-30 mt-sm-25 mt-xs-20">View All Services <i className="far fa-chevron-double-right"></i></a>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="why-choose__item-wrapper why-choose__item-two-wrapper d-grid justify-content-between mt-60 mt-md-50 mt-sm-40 mt-xs-30"> 
                        <div className="why-choose__item why-choose__item-two" style={{backgroundImage: "url(assets/img/home/why-choose__item-two-overly.png)"}}>
                            <div className="icon mb-30 mb-lg-20 mb-md-10 mb-xs-5 color-red">
                                <i className="icon-consultation"></i>
                            </div>
                        
                            <h6 className="title color-pd_black fw-600 mb-15 mb-xs-10">Business Consulting</h6>
                            
                            <div className="description font-la mb-20 mb-sm-15 mb-xs-10">
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntu.</p>
                            </div>

                            <a href="services-details.html" className="color-red d-block">Read More <i className="far fa-chevron-double-right"></i></a>
                        </div> 
                        
                        <div className="why-choose__item why-choose__item-two" style={{backgroundImage: "url(assets/img/home/why-choose__item-two-overly.png)"}}>
                            <div className="icon mb-30 mb-lg-20 mb-md-10 mb-xs-5 color-red">
                                <i className="icon-lawyer"></i>
                            </div>
                        
                            <h6 className="title color-pd_black fw-600 mb-15 mb-xs-10">Lawyer Consulting</h6>
                            
                            <div className="description font-la mb-20 mb-sm-15 mb-xs-10">
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntu.</p>
                            </div>

                            <a href="services-details.html" className="color-red d-block">Read More <i className="far fa-chevron-double-right"></i></a>
                        </div> 

                        <div className="why-choose__item why-choose__item-two" style={{backgroundImage: "url(assets/img/home/why-choose__item-two-overly.png)"}}>
                            <div className="icon mb-30 mb-lg-20 mb-md-10 mb-xs-5 color-red">
                                <i className="icon-financial"></i>
                            </div>
                        
                            <h6 className="title color-pd_black fw-600 mb-15 mb-xs-10">Financial Consulting</h6>
                            
                            <div className="description font-la mb-20 mb-sm-15 mb-xs-10">
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntu.</p>
                            </div>

                            <a href="services-details.html" className="color-red d-block">Read More <i className="far fa-chevron-double-right"></i></a>
                        </div>
                        
                        <div className="why-choose__item why-choose__item-two" style={{backgroundImage: "url(assets/img/home/why-choose__item-two-overly.png)"}}>
                            <div className="icon mb-30 mb-lg-20 mb-md-10 mb-xs-5 color-red">
                                <i className="icon-management"></i>
                            </div>
                        
                            <h6 className="title -pd_black secondary-500 6b-15 mb-xs-10">IT Management</h6>
                            
                            <div className="description font-la mb-20 mb-sm-15 mb-xs-10">
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntu.</p>
                            </div>

                            <a href="services-details.html" className="color-red d-block">Read More <i className="far fa-chevron-double-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- why-choose end --> */}
    </>
  )
}
