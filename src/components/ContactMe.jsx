import React, { useState } from "react";
import Container from "./Container";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name !== "" &&
      formData.phone !== "" &&
      formData.email !== "" &&
      formData.service !== ""
    ) {
      sendEmail();
      console.log(formData);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
      });
    } else {
      toast.error("Please fill in all the required fields");
    }
  };

  const sendEmail = () => {
    const formElement = document.getElementById("contactForm"); // Adjust the ID if needed

    emailjs
      .sendForm(
        "service_mumrn28",
        "template_j06mewf",
        formElement,
        "495iS5Gp1ZhoixcHY"
      )
      .then((result) => {
      toast.success("You response has been sent")
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      toast.error("something went wrong");
      });
  };

  return (
    <div className="mt-[4rem]" id="contactMe">
      <Container>
        <h2 className="text-4xl font-semibold mb-6 text-color-two text-center">
          Contact Me
        </h2>

        <div className="bg-[#19191D] py-10 px-10 text-white mt-10 w-full md:w-1/2 mx-auto rounded-2xl">
          <form onSubmit={handleSubmit} id="contactForm">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm md:text-xl font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full py-2 px-1 md:py-4 md:px-3 bg-white text-black rounded-md"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm md:text-xl font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                className="w-full py-2 px-1 md:py-4 md:px-3 bg-white text-black rounded-md"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm md:text-xl font-medium">
                Email ID
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full py-2 px-1 md:py-4 md:px-3 bg-white text-black rounded-md"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="service" className="block text-sm md:text-xl font-medium">
                What service do you need?
              </label>
              <input
                type="text"
                id="service"
                name="service"
                placeholder="Enter the service you need"
                className="w-full py-2 px-1 md:py-4 md:px-3 bg-white text-black rounded-md"
                value={formData.service}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-10/12 mx-auto mt-5">
              <button
                type="submit"
                className="bg-[#FF8E5E] text-white py-2 px-2 rounded-2xl mx-auto w-full text-lg md:text-2xl font-semibold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
