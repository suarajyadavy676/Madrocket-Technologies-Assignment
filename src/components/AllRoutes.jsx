import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../routes/Contact";
import Home from "./Home";
import About from "./About";
import Academics from "./Academics";
import Admissions from "./Admissions";
import Students from "./Students";
import Faculty from "./Faculty";
import Gallery from "./Gallery";
import Background from "./Background";

function AllRoutes() {
  return (
    <>  <Background/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/students" element={<Students />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> 
    </>
  );
}

export default AllRoutes;
