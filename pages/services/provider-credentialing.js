import React from 'react'
import { CommonBanner } from '../components/CommonBanner';
import { GetInTouch } from "../components/Get-In-Touch";
import { Footer } from '../components/Footer/Footer'
import { Navbar } from '../components/Header/Navbar'
import { ServicesTwoColumn } from "../components/Services-Two-Column";


export const providerCredentialing = () => {
  return (
   <>
   <Navbar/>

 
   <CommonBanner
        B_title="Solutions"
        First_heading="Provider "
        Last_heading="Credentialing"
        ImageSrc="https://rrdevs.net/demos/html/consulter/assets/img/page-banner/page-banner.jpg"
        First_Breadcrumb="Home"
        Last_Breadcrumb="Medical Billing "
      />


    <ServicesTwoColumn
        title="Provider Credentialing"
        ImageSrc="https://smartclinix.net/wp-content/uploads/2022/08/revenue-cycle.jpg"
      />


<GetInTouch/>


    <section style={{backgroundColor:"#e5e5e5"}} class="working_wrapper overflow-hidden pt-50 pb-50">
    <div className="container">
            <div className="row" style={{alignItems:"center"}}>
            <div className="col-lg-6">
                    <div className="our-company__content mt-md-50 mt-sm-40 mt-xs-35">
                       
                        <h4 className="title color-d_black mb-20 mb-sm-15 mb-xs-10">Make Your Practice Great with Us!</h4>

                        <div className="descriiption font-la mb-30 mb-md-25 mb-sm-20 mb-xs-15">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                        </div>
                       
                        
                    </div>
                </div>
               
                <div className="col-lg-6">
                    <div className="our-company__content mt-md-50 mt-sm-40 mt-xs-35">
                    
                        <h4 className="title color-d_black mb-20 mb-sm-15 mb-xs-10">Are You Ready to Embrace the Change?</h4>

                        <div className="descriiption font-la mb-30 mb-md-25 mb-sm-20 mb-xs-15">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                        </div>
                   
                        
                    </div>
                </div>
            
            </div>
            <div className="row" style={{alignItems:"center",marginTop:"50px"}}>
            <div className="col-lg-6">
                    <div className="our-company__content mt-md-50 mt-sm-40 mt-xs-35">
                       
                        <h4 className="title color-d_black mb-20 mb-sm-15 mb-xs-10">What Capital Healthcare Do for Providers</h4>

                        <div className="descriiption font-la mb-30 mb-md-25 mb-sm-20 mb-xs-15">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                        </div>
                       
                        
                    </div>
                </div>
               
                <div className="col-lg-6">
                    <div className="our-company__content mt-md-50 mt-sm-40 mt-xs-35">
                    
                        <h4 className="title color-d_black mb-20 mb-sm-15 mb-xs-10">Benefits of Provider Credentialing</h4>

                        <div className="descriiption font-la mb-30 mb-md-25 mb-sm-20 mb-xs-15">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
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

export default providerCredentialing;


