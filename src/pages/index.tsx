import React from "react";

import Navbar from "@/components/navbar/Navbar";
import Home from "@/components/home/Home";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Services from "@/components/services/Services";
import Projects from "@/components/projects/Projects";
import Footer from "@/components/footer/Footer";

const Portfolio = () => {
  return (
    <div className="dark:bg-gradient-to-br from-[#261c33] via-[#344ab4] to-[#b65881] dark:text-light duration-100 h-[100vh] w-[100vw]">
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Portfolio;