import React from 'react'
import Header from '../components/Header';
import Hero from '../components/sub-pages/Hero';
import Footer from '../components/Footer';
import About from '../components/About';
import Gallery from '../components/Gallery';

function Abouts() {
  return (
    <>
      <Header />
      <Hero pageTitle="About Us"/>
      <About />
      <Gallery />
      <Footer />
    </>
  )
}

export default Abouts