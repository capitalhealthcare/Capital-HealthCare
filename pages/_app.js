import "../styles/globals.css";
import "../styles/style.css";
import Head from "next/head";
import Script from "next/Script";
import 'bootstrap/dist/css/bootstrap.css';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
   
        {/* <link rel="stylesheet" href="assets/css/icons.css" />
      
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" /> */}
  
       
      </Head>
       
      <Script src="https://kit.fontawesome.com/a076d05399.js" async  crossorigin="anonymous"></Script>

      <Script src="/assets/js/bootstrap.min.js" async ></Script> 
      {/* <Script src="/assets/js/slick.min.js"></Script> */}
      {/* <Script src="/assets/js/scrollUp.min.js"></Script> */}
      {/* <Script src="/assets/js/counterup.min.js"></Script> */}
      {/* <Script src="/assets/js/jquery.sticky-kit.js"></Script> */}
      {/* <Script src="/assets/js/magnific-popup.min.js"></Script> */}
      {/* <Script src="/assets/js/jquery.easypiechart.min.js"></Script> */}
      {/* <Script src="/assets/js/active.js"></Script> */}
      <Component {...pageProps} />
    </>
  );
}
