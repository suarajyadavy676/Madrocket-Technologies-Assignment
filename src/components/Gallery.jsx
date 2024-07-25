import React from "react";

function Gallery() {
  return (
    <div className="text-center my-10 animate__animated animate__backInUp">
      <h1 className="text-3xl font-bold my-10">Gallery</h1>
      <p className="text-xl font-serif my-5">Students participating in various sports events,science projects,cultural fest,A glimpse of our interactive classrooms,school library.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center mx-4">
        <img src="./cultural4.jpg" alt="cultural image" className="w-[90%] rounded-md" />
        <img src="./cultural4.jpg" alt="cultural image" className="w-[90%] rounded-md" />
        <img src="./cultural4.jpg" alt="cultural image" className="w-[90%] rounded-md" />
        <img src="./cultural4.jpg" alt="cultural image" className="w-[90%] rounded-md" />
        <img src="./cultural4.jpg" alt="cultural image" className="w-[90%] rounded-md" />
        <img src="./cultural4.jpg" alt="cultural image" className="w-[90%] rounded-md" />
        <img src="./cultural4.jpg" alt="cultural image" className="w-[90%] rounded-md" />
        <img src="./cultural4.jpg" alt="cultural image" className="w-[90%] rounded-md" />
      </div>
      <p className="text-2xl font-serif my-5">Videos</p>
      <p className="text-xl font-serif my-5">Annual Function 2024.</p>
      <div>
        <iframe
          src="https://www.youtube.com/embed/R1B9Z63gpG8?si=Uyw1KME0kKpYO4Hi"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="mx-auto w-[90%] sm:w-[80%] md:w-[70%] h-96"
        ></iframe>
        
        <iframe
          width="600"
          height="340"
          src="https://www.youtube.com/embed/q9mIjUIiLGo?si=5wME_rDAWWXUSjaW"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="mx-auto w-[90%] sm:w-[80%] md:w-[70%] h-96 my-20"
        ></iframe>
      </div>
    </div>
  );
}

export default Gallery;
