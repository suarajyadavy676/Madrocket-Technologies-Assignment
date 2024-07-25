import React from "react";

function Faculty() {
  return (
    <div className="font-serif text-xl w-[96%] lg:w-[60%] mx-auto text-justify animate__animated animate__backInDown">
      <h1 className="text-2xl my-10 text-center">Faculty</h1>
      <p>
        <b>Profiles : </b>
      </p>
      <ul className="list-disc pl-5 text-white">
        <li className="my-3">
          John Doe: Principal, M.Ed, 20 years of experience in educational
          administration.
        </li>
        <li className="my-3">
          Jane Smith: Vice Principal, M.Sc. in Physics, 15 years of teaching
          experience
        </li>
        <li className="my-3">
          Emily Johnson: English Teacher, M.A. in English, 10 years of teaching
          experience. 
        </li>
        <li className="my-3">Michael Brown: Mathematics Teacher, M.Sc. in Mathematics, 8 years of teaching
        experience. </li>
        <li className="my-3"> David Wilson: Computer Science Teacher, B.Tech
        in Computer Science, 5 years of teaching experience.</li>
        <li className="my-3">Sophia Davis: Science Teacher, M.Sc. in Chemistry, 12 years
        of teaching experience.</li>
      </ul>
      <p>
        
      </p>
    </div>
  );
}

export default Faculty;
