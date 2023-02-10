import React from 'react'

export const GetInTouch = () => {
  return (
    <>
     {/* <!-- can-help start --> */}
     <section className="can-help can-help-home-1 pb-xs-50 pt-xs-80 pt-sm-100 pb-sm-50 pt-md-100 pb-md-50 pt-120 pb-50 overflow-hidden">
        {/* <div className="can-help-background" style={{backgroundImage: "url(assets/img/home/can-help-background.png)"}}></div> */}
        <div className="can-help-background" style={{backgroundImage: "url(https://fibohealth.com/wp-content/uploads/2021/01/doktor-randevusu.jpg)"}}></div>
        <div className="container">
            <div className="row">
                <div className="col-xl-7">
                    <div className="can-help__content  mb-sm-40 mb-xs-40 mb-md-45 mb-lg-50">
                        <h2 className="title color-white mb-sm-15 mb-xs-10 mb-20">Experience The Evolution Of Your Business</h2>

                        <div className="description font-la mb-md-25 mb-sm-25 mb-xs-20 mb-lg-30 mb-40 color-white">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look</p>
                        </div>

                        <div className="can-help__content-btn-group d-flex flex-column flex-sm-row">
                            <a href="tel:+1235568824" className="theme-btn d-flex flex-column flex-md-row align-items-md-center">
                                <div className="icon color-red">
                                    <i className="icon-call"></i>
                                    {/* <!-- <img src="assets/img/icon/phone-1.svg" alt=""> --> */}
                                </div>
                                <div className="text">
                                    <span className="font-la mb-10 d-block fw-500 color-white">Call Us Everyday</span>
                                    <h5 className="fw-500 color-white">+123 556 8824</h5>
                                </div>
                            </a>

                            <a href="mailto:consulter@gmail.com" className="theme-btn d-flex flex-column flex-md-row align-items-md-center">
                                <div className="icon color-red">
                                    <i className="icon-email-1"></i>
                                    {/* <!-- <img src="assets/img/icon/phone-1.svg" alt=""> --> */}
                                </div>
                                <div className="text">
                                    <span className="font-la mb-10 d-block fw-500 color-white">Email Drop Us</span>
                                    <h5 className="fw-500 color-white">consulter@gmail.com</h5>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-xl-5">
                    <div className="contact-form pt-md-30 pt-sm-25 pt-xs-20 pb-md-40 pb-sm-35 pb-xs-30 pt-xl-30 pb-xl-50 pt-45 pr-xl-50 pl-md-40 pl-sm-30 pl-xs-25 pr-md-40 pr-sm-30 pr-xs-25 pl-xl-50 pr-85 pb-60 pl-85">
                        <div className="contact-form__header mb-sm-35 mb-xs-30 mb-40">
                            <h6 className="sub-title fw-500 color-red text-uppercase mb-15">
                                <img src="/assets/img/team-details/badge-line-yellow.svg" className="img-fluid mr-10" alt=""/>
                                 Get In Touch</h6>
                            <h3 className="title color-d_black">Free Consultation</h3>
                        </div>

                        <form action="mail.php" method="POST">
                            <div className="single-personal-info">
                                <input type="text" placeholder="Your Name"/>                                         
                            </div>                        
                            <div className="single-personal-info">
                                <input type="email"  placeholder="Your e-mail"/>                                         
                            </div> 
                            <div className="single-personal-info">
                                <input type="text"  placeholder="Subject"/>                                         
                            </div>                                                 
                            <div className="single-personal-info">
                                <textarea placeholder="Your Massage"></textarea>                                        
                            </div>                              
                            
                            <button type="" className="theme-btn btn-sm btn-red" >Free Consultant <i className="far fa-chevron-double-right"></i></button>                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- can-help end --> */}
    </>
  )
}
