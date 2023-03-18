import React, { useEffect } from 'react';
import UpperFooter from './UpperFooter';
import Footer from './Footer';
import LowerFooter from './LowerFooter';
import Navigation from './Navigation';
import Container from './Container';
import Head from 'next/head';
import Script from 'next/script';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(() => {
    Aos.init({
      offset: 170
    });
    


  }, [])


  return (
    <>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
        {/* google fonts and logo */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

      <Head>
        <title>Our Work | 12Grids</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>


      <Navigation />

      <Container />
      <UpperFooter />
      <Footer />
      <LowerFooter />

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous" />
    </>
  )
}

export default Home;
