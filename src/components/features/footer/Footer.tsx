"use client";

import Image from "next/image";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import Logo from "../logo/logo";
import { adminEmail, adminPhoneNumber } from "@/utils/shortCut";

export default function Footer() {
  const router = useRouter();

  const navigation = [
    {
      path: "/",
      name: "HOME",
    },
    {
      path: "/about",
      name: "ABOUT",
    },
    // {
    //   path: "/services",
    //   name: "SERVICES",
    // },
    {
      path: "/#portfolio",
      name: "PORTFOLIO",
    },
    {
      path: "/contact",
      name: "CONTACT",
    },
  ];

  const services = [
    {
      name: "WEB DESIGN",
    },
    {
      name: "WEBSITE MAINTENANCE",
    },
  ];

  async function redirectURL(path: string) {
    return router.push(path);
  }

  return (
    <footer className=" bg-[#eea236] w-full  relative z-0 ">
      {" "}
      <div className="grid w-full  grid-cols-2 place-items-between text-white  xl:mr-10">
        <span className="md:w-72 mt-2">
          <Logo />
        </span>{" "}
        <div className=" flex flex-col justify-center items-end text-white  xl:mr-10">
          {" "}
          <h5 className=" text-2xl tracking-widest  font-bebas drop-shadow-2xl mr-2">
            SERVICES
          </h5>
          <hr className=" w-[60%] border-[#ffbe4d]  border-[1px] outline-[#000] outline-8 h-1 shadow-xl bg-white bg-opacity-25 " />
          {services.map((item, i: number) => (
            <ul key={i} className="text-xl text-right mr-1 ">
              <li
                key={item.name}
                className="xl:text-lg   mt-1 font-ojuju font-semibold tracking-wide  cursor-default"
              >
                {item.name}
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div className="flex flex-col p-1">
        <div className=" flex flex-col justify-center items-start text-white xl:ml-10">
          <h5 className=" tracking-widest  font-fjalla drop-shadow-2xl text-2xl">
            NAVIGATION
          </h5>
          <hr className=" w-[60%] border-[#ffbe4d]  border-[1px] outline-[#000] outline-8 h-1 shadow-xl bg-white bg-opacity-25 " />

          <div className="flex items-center ">
            <div className="">
              {navigation.map((item, i: number) => (
                <ul key={i} className="text-xl text-left">
                  <li
                    onClick={() => redirectURL(item.path)}
                    key={item.name}
                    className="hover:drop-shadow-xl iPhone8:text-base  mt-1  font-ojuju font-semibold tracking-wide hover:text-gray-700 cursor-pointer xl:text-lg"
                  >
                    {item.name}
                  </li>
                </ul>
              ))}
            </div>
            <div className="iPhone5Landscape:ml-56 ml-32 opacity-80 xl:ml-52"></div>
          </div>
        </div>
      </div>
      <div className="  text-center cursor-pointer text-white font-reddit flex flex-col ">
        <span className="hover:text-gray-700 ">{adminEmail}</span>
        <span className="hover:text-gray-700 ">{adminPhoneNumber}</span>
      </div>
      <div className="bg-black bg-opacity-20 text-xs  text-white py-2 text-center w-full font-semibold">
        Copyright © 2024 | Dev-Sol Web Designs & Development | All Rights
        Reserved
      </div>
    </footer>
  );
}
