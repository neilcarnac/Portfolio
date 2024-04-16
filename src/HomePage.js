import React from 'react'
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

function HomePage() {
  return (
    <>
    <div className='overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      {/* <Contact /> */}
      {/* <div className='h-[4000px]'></div> */}
    </div>
    </>
  )
}

export default HomePage
