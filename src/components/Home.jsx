import React from "react";
import Carousel from "./Carousel";
import ScienceCarousel from "./ScienceCarousel";
import CulturalCarousel from "./CulturalCarousel";
import Footer from "./Footer";

function Home() {

  return (
    <>
    <div className="text-center my-10 font-serif">
      <h1 className="text-2xl font-bold my-10 animate__animated animate__bounce">Springdale Public School</h1>
      <p className="text-xl font-serif animate__animated animate__backInRight">
        Welcome to Springdale Public School, where we nurture young minds for a
        brighter future
      </p>

      {/* Annual Sports Day */}
      <p className="my-10 text-xl font-serif animate__animated animate__backInLeft">Annual Sports Day - Celebrating Excellence in Sports</p>
      <Carousel/>

      {/* Science Exhibition */}
      <p className="my-10 text-xl font-serif" data-aos="fade-down">Science Exhibition - Showcasing Student Innovations</p>
      <ScienceCarousel/>

      {/* Cultural Fest */}
      <p className="my-10 text-xl font-serif" data-aos="fade-left">Cultural Fest - Embracing Diversity and Creativity</p>
     <CulturalCarousel/>
    </div>
     <Footer/>
    </>
  );
}

export default Home;
