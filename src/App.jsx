import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

import AOS from "aos";


import './App.scss';
import Homepage from './components/homepage/homepage';
// import Gallery from './components/gallery/gallery';
import MainLayout from './components/layouts/MainLayout';
import NotFound from './components/not-found/not-found';
import ContactUs from './components/contact-us/contact-us';


function App() {

useEffect(() => {
    AOS.init({
      duration: 1000,   // animation duration
      once: true,       // animate only once
      infinite: true,   // disable infinite animations
      onscroll: true,    // animate on scroll
      repeat: true,     // disable repeat animations
    });
  }, []);

  return (
    <>
    <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/contact" element={<ContactUs />} /> */}
        </Route>

        {/* 404 without Header/Footer */}
        <Route path="*" element={<NotFound />} />
      </Routes> 
  </>
  )
}

export default App
