import React from "react";
import ContactForm from "../components/ContactForm";

function Contact() {
  
  return (
    <>
      <div className="text-center mx-10 text-lg sm:text-xl animate__animated animate__backInUp">

        {/* Address */}
        <p className="mb-5 mt-10">
          Address: "Springdale Public School, 123 Education Lane, Cityville,
          State, ZIP Code"
        </p>

        {/* Phone number */}
        <p className="my-5">
          Phone:{" "}
          <a
            href="tel:+1 (123) 456-7890"
            className="text-blue-500 hover:text-red-700"
          >
            +1 (123) 456-7890
          </a>
        </p>

        {/* Email */}
        <p className="my-5 xl:my-0">
          Email:{" "}
          <a
            href="mailto:info@springdale.edu"
            className="text-blue-500 hover:text-red-700"
          >
            info@springdale.edu
          </a>
        </p>

      </div>

        {/* contact form */}
        <ContactForm />

      {/* Map */}
      <div className="mb-10 ml-[5%]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14889.168397575582!2d79.06552098715818!3d21.100917699999982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bfd1cfcbb637%3A0x7f42ba58ab467eeb!2sSambhaji%20Chandanbawne!5e0!3m2!1sen!2sin!4v1721767912935!5m2!1sen!2sin"
          className="absolute  w-[90%] h-[300px] sm:h-[500px] lg:h-[600px] z-0 mb-96"
          // allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Contact;
