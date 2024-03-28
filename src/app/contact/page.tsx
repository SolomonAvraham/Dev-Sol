"use client";

import Button from "@/components/features/button/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // You can send the form data to your backend or perform any necessary action
  };

  return (
    <div className="min-h-screen ">
      <div className=" relative h-24   flex items-center justify-center  bg-gradient-to-t from-[#f6b94f] via-[#eea136c0] to-[#edb200]">
        <div className="text-7xl opacity-5 mb-10 font-bold ">CONTACT</div>
        <div className="text-5xl tracking-[2rem] opacity-5 font-bold">
          CONTACT
        </div>{" "}
        <div className="text-7xl tracking-[2rem] opacity-5 mb-10 font-bold ">
          CONTACT
        </div>
        <h1 className=" absolute top-1/4 text-4xl nexus7:text-6xl  tracking-[0.3rem] opacity-60 font-bold ">
          CONTACT US
        </h1>
        <div className="text-9xl tracking-[2rem] opacity-5 mb-1 font-bold ">
          CONTACT
        </div>{" "}
        <div className="text-6xl  tracking-[2rem] opacity-5 mb-1 font-bold ">
          CONTACT
        </div>
      </div>

      <Image
        src={"/page/contact.jpeg"}
        alt="s"
        width={500}
        height={500}
        className=" mx-auto nexus7:w-full xl:w-[16rem]  rounded-b-3xl shadow-md "
      />

      <div className="xs:text-sm  gap-3 iPhone8:text-base  text-center  font-bold flex flex-col mt-10 mb-3">
        <div className="flex flex-col w-1/2 items-start mx-auto justify-center border-orange-300 text-gray-500  border-l-2 pl-2 text-sm">
          <span className=" cursor-default">Email:</span>
          <Link
            href={"mailto:Devsoldev@gmail.com"}
            className="hover:text-gray-700 "
          >
            Devsoldev@gmail.com
          </Link>
        </div>
        <div className="flex flex-col w-1/2 items-start mx-auto justify-center border-orange-300 text-gray-500  border-l-2 pl-2 text-sm">
          <span className=" cursor-default">Phone:</span>
          <Link
            href={"tel:+972 (54) 972-7138"}
            className="hover:text-gray-700 "
          >
            +972 (54) 972-7138
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center py-10 mt-10">
        <form
          onSubmit={handleSubmit}
          className=" w-[17rem] mx-auto bg-orange-300 py-11 px-5 rounded-lg "
        >
          <div className="mb-4">
            <label htmlFor="fullName" className="block mb-1"></label>
            <input
              placeholder="Full Name"
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="businessName" className="block mb-1"></label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
              placeholder="Business Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1"></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
              placeholder="Email Address"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block mb-1"></label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
              placeholder="Phone Number"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-1"></label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              rows="5"
              required
              placeholder="Message"
            ></textarea>
          </div>
          <Button
            type={"submit"}
            px="3"
            py="2"
            color="bg-gray-100 text-black mt-3 font-semibold"
            className={
              "hover:bg-orange-300 hover:text-white iPhone5:text-xl iPhone8:text-lg  iPhone8Plus:text-xl landScape8:text-2xl xl:text-sm tracking-wide  "
            }
            children={"SEND"}
          />
        </form>
      </div>
    </div>
  );
}
