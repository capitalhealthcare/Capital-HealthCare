import React from 'react'
import { Footer } from '../components/Footer/Footer'
import { Navbar } from '../components/Header/Navbar'
import Head from "next/head";
import { fetchArticles } from '../../http';
import Link from 'next/link';
import { CommonBanner } from '../components/CommonBanner';
import { ServicesTwoColumn } from '../components/Services-Two-Column';
import { GetAQuote } from '../components/Get-A-Quote';
import { ServicesRightImageTwoColumn } from '../components/Services-Two-Column/ServicesRightImageTwoColumn';
import { GetInTouch } from '../components/Get-In-Touch';

export const doctorsMacraServices = ({articles}) => {
  return (
   <>
   <Navbar/>


   <CommonBanner
        B_title="MACRA"
        First_heading="MIPS Reporting "
        Last_heading="Services"
        ImageSrc="https://rrdevs.net/demos/html/consulter/assets/img/page-banner/page-banner.jpg"
        First_Breadcrumb="Home"
        Last_Breadcrumb="Solutions "
      />

  
<ServicesTwoColumn
        title="MACRA"
        ImageSrc="https://smartclinix.net/wp-content/uploads/2022/08/revenue-cycle.jpg"
      />


<GetAQuote/>    

<ServicesRightImageTwoColumn
        title="How CapitalHealthCare Mips Reporting Services Can Help Your Practice?"
        ImageSrc="https://smartclinix.net/wp-content/uploads/2022/08/revenue-cycle.jpg"
      />

<GetInTouch/>

   <Footer/>
   </>
  )
}

export default doctorsMacraServices;

// export const getServerSideProps = async ()=> {

//     const data = await fetchArticles();
    
//         return {
//           props: {
//             articles:{
//                 items:data.data
//             }
//           }, // will be passed to the page component as props
//         }
//       }
