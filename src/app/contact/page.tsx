"use client";

import Button from "@/components/features/button/button";
import Logo from "@/components/features/logo/logo";
import { adminEmail, adminPhoneNumber } from "@/utils/shortCut";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { BsTelephoneInbound } from "react-icons/bs";
import { PulseLoader } from "react-spinners";

export const socialMedia = [
  {
    url: `tel:${adminPhoneNumber}`,
    icon: <BsTelephoneInbound className=" hover:text-black " />,
  },
  {
    url: `mailto:${adminEmail}`,
    icon: <AiOutlineMail className=" hover:text-blue-900 " />,
  },
  {
    url: "https://wa.me/972549727138",
    icon: <AiOutlineWhatsApp className=" hover:text-green-500 " />,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(false);
    }, 2100);
  }, [showMessage]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          fullName: "",
          businessName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
        setLoading(false);
        setShowMessage(true);
      } else {
        console.error("Failed to send email");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <div className=" relative h-24  landScape8:top-[10%]   flex items-center justify-center  bg-gradient-to-t from-[#f6b94f] via-[#eea136c0] to-[#edb200]">
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
        priority={true}
        src={"/page/contact.jpeg"}
        alt="s"
        width={500}
        height={500}
        className=" mx-auto nexus7:w-full xl:w-[16rem]  rounded-b-3xl shadow-md mb-20 "
      />

      <div className="w-fit px-5 flex justify-center items-center mx-auto gap-8 rounded-3xl bg-[#f6b94f] py-3 text-3xl text-white shadow-lg border-s-[0.1px] border-e-[0.1px] border-black">
        {socialMedia.map((item, index: number) => (
          <Link
            className=" hover:scale-150  "
            href={item.url}
            key={index}
            target="_blank"
            rel="noreferrer"
          >
            {item.icon}
          </Link>
        ))}
      </div>

      <div className="  ">
        <div className=" nexus7:flex gap-24 justify-center items-center">
          <div className="xs:text-sm  gap-3 iPhone8:text-base   text-center  font-bold flex flex-col py-10">
            <div className="flex flex-col  nexus7:text-lg w-1/2 items-start mx-auto justify-center border-orange-300 text-gray-500  border-l-2 pl-2 text-sm">
              <span className=" cursor-default">Email:</span>
              <Link
                href={`mailto:${adminEmail}`}
                className="hover:text-gray-700 "
              >
                {adminEmail}
              </Link>
            </div>
            <div className="flex flex-col  items-start mx-auto justify-center border-orange-300 text-gray-500  border-l-2 pl-2 text-sm">
              <span className=" cursor-default">Phone:</span>
              <Link
                href={`tel:${adminPhoneNumber}`}
                className="hover:text-gray-700"
              >
                {adminPhoneNumber}
              </Link>
            </div>
          </div>

          <div className=" relative flex items-center justify-center py-10 mt-10">
            {showMessage && (
              <div
                className={`transform translate-y-[-10] duration-1000 ease-in-out p-2 absolute top-1/3 z-20 shadow-lg border-black border-[0.1px] cursor-default w-72 bg-orange-300 rounded-2xl flex flex-col items-center justify-center ${
                  showMessage && "opacity-100"
                }`}
              >
                <Logo />
                <span className="mb-3 text-xl animate-bounce font-semibold text-white">
                  Sent Successfully!
                </span>
              </div>
            )}
            <form
              onSubmit={handleSubmit}
              className=" shadow-lg border-black border-b-[0.9px] border-s-[0.9px] border-e-[0.5px] relative w-[17rem] nexus7:w-[19rem] mx-auto bg-orange-300 py-11 px-5 rounded-lg "
            >
              <div className=" -tracking-widest border-black border-t-[0.9px]  border-s-[0.9px]  cursor-default absolute -top-5   -right-0 mx-auto rounded-2xl text-[26px] iPhone8:text-3xl nexus7:text-4xl bg-orange-300 px-7 py-1 font-semibold shadow-md ">
                WRITE<span className=" text-white drop-shadow-md">US</span>A
                <span className=" text-white drop-shadow-md">MESSAGE</span>.
              </div>
              {loading ? (
                <div className="   min-h-[400px] flex items-center justify-center ">
                  <PulseLoader color="rgba(55, 55, 55, 1)" size={30} />
                </div>
              ) : (
                <>
                  {[
                    { label: "Full Name", name: "fullName", type: "text" },
                    { label: "Business Name", name: "businessName", type: "text" },
                    { label: "Email Address", name: "email", type: "email" },
                    { label: "Phone Number", name: "phoneNumber", type: "tel" },
                    { label: "Message", name: "message", type: "textarea" },
                  ].map((field, index) => (
                    <div className="mb-4" key={index}>
                      <label htmlFor={field.name} className="block mb-1"></label>
                      {field.type === "textarea" ? (
                        <textarea
                          id={field.name}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-md"
                          rows={5}
                          required
                          placeholder={field.label}
                        ></textarea>
                      ) : (
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-md"
                          required
                          placeholder={field.label}
                        />
                      )}
                    </div>
                  ))}
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
                </>
              )}

              <div className="shadow-md  -tracking-widest border-black  border-e-[0.9px]  cursor-default absolute  -bottom-0  -right-3 iPhone8:-right-7 mx-auto rounded-2xl iPhone8:text-2xl bg-orange-300 px-5 py-1 font-semibold ">
                LET'S
                <span className=" text-white drop-shadow-md">TALK</span>.
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
