import React from "react";

function About() {
  return (
    <div className="text-center text-xl font-serif mx-4">
      <h1 className="text-2xl my-10 animate__animated animate__bounce">
        About Us
      </h1>
      <div className="animate__animated animate__bounceInDown">
        <p className="mb-5">
          <b>History : </b>
          "Founded in 1985, Springdale Public School has been dedicated to
          providing quality education and holistic development to students."
        </p>
        <p className="">
          <b>Vision : </b>
          "To create a learning environment that fosters academic excellence,
          critical thinking, and ethical values."
        </p>
        <p className="my-5">
          <b>Mission : </b>
          "To empower students with the knowledge, skills, and values needed to
          thrive in a dynamic world."
        </p>
        <p>
          <b>Principal's Message : </b>
          "At Springdale, we believe in nurturing the potential of every student
          and guiding them towards a successful future."
        </p>
      </div>

      <div className="w-[96%] sm:w-[80%] lg:w-[60%] xl:[40%] text-left bg-blue-500 p-2 lg:p-10 mx-auto rounded-md my-10 shadow-2xl animate__animated animate__bounceInUp">
        <p className="">
          <b>Infrastructure and Facilities : </b>
        </p>
        <ul className="list-disc pl-5 text-white">
          <li>State-of-the-art science and computer labs</li>
          <li>Spacious and well-equipped classrooms</li>
          <li>Library with a vast collection of books and digital resources</li>
          <li>
            Sports facilities including a playground, gymnasium, and swimming
            pool
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
