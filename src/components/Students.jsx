import React from "react";

function Students() {
  return (
    <div className="font-serif text-xl w-[96%] lg:w-[60%] mx-auto text-justify animate__animated animate__backInUp">
      <h1 className="text-2xl my-10 text-center">Students</h1>
      <p className="my-5">
        <b>Life at Springdale : </b>
      </p>
      <ul className="list-disc pl-5 text-white">
        <li className="my-2">
          Extracurricular Activities : "Music, Dance, Drama, Art, Sports,
          Robotics, Debate Club, Science Club"
        </li>
        <li className="my-2">
          Clubs and Societies : "Literary Society, Environmental Club, Astronomy
          Club, Coding Club"
        </li>
      </ul>
      <p className="my-5">
        <b>Achievements : </b>
      </p>
      <ul className="list-disc pl-5 text-white">
        <li className="my-2">"John Smith - National Level Math Olympiad Winner"</li>
        <li className="my-2">"Sarah Lee - Gold Medalist in State Swimming Championship"</li>
        <li className="my-2">
          "Tech Innovators Club - Winners of Inter-School Robotics Competition"
        </li>
      </ul>
      <p className="my-5">
        <b>Student Council : </b>
      </p>
      <ul className="list-disc pl-5 text-white">
        <li className="my-2"> President : Amy Parker, Grade 12</li>
        <li className="my-2"> Vice President : Rajiv Mehta, Grade 11</li>
        <li className="my-2"> Secretary : Lisa Wong, Grade 10</li>
      </ul>
    </div>
  );
}

export default Students;
