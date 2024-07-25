import React from "react";

function Academics() {
  return (
    <div className="font-serif text-xl w-[96%] lg:w-[60%] mx-auto text-justify animate__animated animate__backInDown">
      <h1 className="text-2xl my-10 text-center">Academics</h1>
      <div className="mb-5">
      <p className="my-5"><b>Curriculum : </b></p>
        
        <ul className="list-disc pl-5 text-white">
          <li className="my-2">
            <b>Primary (Grades 1-5) : </b> English, Mathematics, Science, Social
            Studies, Art, Physical Education
          </li>
          <li className="my-2">
            <b>Secondary (Grades 6-10) : </b> English, Mathematics, Science
            (Physics, Chemistry, Biology), Social Studies, Computer Science,
            Physical Education, Art
          </li>
          <li className="my-2">
            <b>Senior Secondary (Grades 11-12) : </b> <br />
            <ul className="list-disc pl-5 text-white">
              <li className="my-2">Science Stream: Physics, Chemistry, Biology, Mathematics, Computer, Science, English</li>
              <li className="my-2">Commerce Stream: Accountancy, Business Studies,
              Economics, Mathematics, English</li>
            </ul>
          </li>
        </ul>
        <p className="my-5">Teaching Methodologies: "We use a blend
        of traditional and modern teaching techniques to cater to different
        learning styles."</p>
          <p className="my-5"> Educational Resources: "Digital classrooms,
        interactive learning modules, and access to online educational
        platforms."</p>
      </div>
    </div>
  );
}

export default Academics;
