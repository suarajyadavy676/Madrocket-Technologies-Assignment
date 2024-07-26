import { useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

function ContactForm() {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const toast = useToast();
  let apiUrl = import.meta.env.VITE_API_SURL;
  console.log(apiUrl);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(data);
    axios.post(apiUrl, data).then((res) => {
      console.log(res);

      // clear form
      setData({ name: "", email: "", message: "" });
    });
  };
  return (
    <div className="min-h-screen  flex items-center justify-center animate__animated animate__backInDown">
      <form onSubmit={handleSubmit} method="post" className="text-black">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h1>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className="border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="johndoe@example.com"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={data.message}
              onChange={(e) => setData({ ...data, message: e.target.value })}
              className="border-2 border-gray-300 p-2 rounded-lg w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Your message"
              required
            />
          </div>
          <button
            type="submit"
            onClick={() =>
              toast({
                title: "Messege Sent Successfully.",
                description: `Thank you for contacting us ${data.name}!.`,
                status: "success",
                duration: 9000,
                isClosable: true,
              })
            }
            className="bg-indigo-500 text-white p-2 rounded-lg font-semibold w-full hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          >
            Send
          </button>
          <div className="mt-4 text-sm text-gray-600">
            If you prefer not to use web forms, you can reveal our email address
            on{" "}
            <a
              href="mailto:info@springdale.edu"
              className="text-blue-500 hover:text-red-700 underline"
              target="_blank"
            >
              info@springdale.edu
            </a>
            .
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
