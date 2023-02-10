import Link from 'next/link'
import React from 'react'

export const CommonBanner = ({B_title,First_heading,Last_heading,ImageSrc,First_Breadcrumb,Last_Breadcrumb}) => {
  return (
   <>
    {/* <!-- page-banner start --> */}
    <section className="page-banner pt-xs-60 pt-sm-80 overflow-hidden">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="page-banner__content mb-xs-10 mb-sm-15 mb-md-15 mb-20">
                        <div className="transparent-text">{B_title}</div>
                        <div className="page-title">
                            <h1>{First_heading}<span>{Last_heading}</span></h1>
                        </div>
                    </div>

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item"><Link href="/">{First_Breadcrumb}</Link></li>
                          <li className="breadcrumb-item active" aria-current="page">{Last_Breadcrumb}</li>
                        </ol>
                    </nav>
                </div>

                <div className="col-md-6">
                    <div className="page-banner__media mt-xs-30 mt-sm-40">
                        {/* <img src="assets/img/page-banner/page-banner-start.svg" className="img-fluid start" alt=""/> */}
                        <img src={ImageSrc} className="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- page-banner end --> */}
   </>
  )
}
