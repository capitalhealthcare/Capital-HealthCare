import React from 'react'

export const GetAQuote = () => {
  return (
   <>
    {/* <!-- get-free end --> */}
    <section className="get-free">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="get-free__content-wrapper overflow-hidden" style={{backgroundImage: "url(assets/img/services/get-free-bg.png);"}}>
                        <div className="get-free__content d-flex align-items-center justify-content-between">
                            <div className="get-free__content-text">
                                <h2 className="title mb-10 mb-xs-5 color-white">Get Free Quote</h2>
                                
                                <div className="description color-white font-la fw-500">
                                    Perfect solution for your Company
                                </div>
                            </div>

                            <div className="get-free__content-form">
                                <form className="d-flex flex-column flex-lg-row" action="mail.php" method="POST"> 
                                    <div className="single-personal-info">
                                        <input type="text" defaultValue="Search..." name="name" placeholder="Your Name"/>                                         
                                    </div>                        
                                    <div className="single-personal-info">
                                        <input type="email" defaultValue="Search..." name="email" placeholder="Your e-mail"/>                                         
                                    </div>                          
                                    
                                    <button type="submit" className="theme-btn btn-sm">Get Quote <i className="far fa-chevron-double-right"></i></button>                            
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- get-free end --> */}
   </>
  )
}
