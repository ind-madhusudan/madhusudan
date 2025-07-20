import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import About from './components/About'
import Education from './components/Education'
import Banner from './components/Banner'
import Footer from './components/Footer'
import CapsuleText from './components/CapsuleText'
import Projects from './components/Projects'
import { useEffect } from 'react'
import ContactUs from './components/ContactUs'

const App = () => {

useEffect(() => {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }

  // Wait for the full DOM render before scrolling
  const handle = setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 50000); // Delay slightly more (50ms) to allow full render

  return () => clearTimeout(handle);
}, []);



  return (
    <>
    <div className=''>
      <Navbar/>
      <Hero/>
      <Marquee/>
      <Services/>
      <About/>
      <Education/>
      <Projects/>
      <Banner/>
      <CapsuleText/>
      <Footer/>
      {/* <ContactUs/> */}
      </div>
    </>
  )
}

export default App