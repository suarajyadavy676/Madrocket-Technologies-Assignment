import React, { useState,useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

function CulturalCarousel() {
  let arr = ["./cultural1.avif", "./cultural2.avif", "./cultural3.avif"]

  const [currentIndex, setCurrentIndex] = useState(0);

  function handleRight() {
    setCurrentIndex(prevIndex => (prevIndex === arr.length - 1 ? 0 : prevIndex + 1));
  }

  function handleLeft() {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? arr.length - 1 : prevIndex - 1));
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex === arr.length - 1 ? 0 : prevIndex + 1));
    }, 10000);

    return () => clearInterval(intervalId);
  }, [arr.length]);
  return (
    <div>
      <div className="relative">
        <div>
          <button onClick={handleLeft} className="absolute left-[2%] top-[50%] bg-white rounded-full p-2 opacity-60 ">
            <FaAngleLeft className="text-xl md:text-3xl text-red-700" />
          </button>
          <img src={arr[currentIndex]} alt="sport image" className="w-full relative -z-20" />
          {/* <h1>{arr[currentIndex]}</h1> */}
          <button onClick={handleRight} className="absolute right-[2%] top-[50%] bg-white rounded-full p-2 opacity-60">
            <FaAngleRight className="text-xl md:text-3xl text-red-700" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CulturalCarousel
