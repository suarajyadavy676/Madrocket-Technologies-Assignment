import React from "react";

function Admissions() {
  return (
    <div className="font-serif text-xl w-[96%] lg:w-[60%] mx-auto text-justify animate__animated animate__backInDown">
      <h1 className="text-center text-2xl my-10">Admission</h1>
      <p className="my-5">
        <b>Process : </b> "Admission forms are available for download. Submit the
        completed form along with required documents at the school office."
      </p>
      <p className="my-5">
        <b>Criteria : </b> "Admission is based on merit and availability of seats.
        Entrance tests may be conducted for certain grades."
      </p>
      <p className="my-5">
        <b>Important Dates : </b>
      </p>
      <ul className="list-disc pl-5 ">
        <li className="pb-2">"Admission Form Availability: March 1st" </li>
        <li className="py-2">"Last Date for Submission: March 31st"  </li>
        <li className="py-2">"Entrance Test: April 15th"</li>
        <li className="py-2">"Announcement of Results: April 30th"</li>
      </ul>
    </div>
  );
}

export default Admissions;
