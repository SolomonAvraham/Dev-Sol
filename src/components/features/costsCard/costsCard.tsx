"use client";

import { useRouter } from "next/navigation";
import Button from "../button/button";

export default function CostsCard() {
  const router = useRouter();

  return (
    <div className="nexus7:w-[26rem] nexus7:h-[42rem] xl:w-[16rem] xl:h-[28rem] iPhone5:w-[17rem] iPhone5:h-[32rem]  border-b-[5px] mt-7 min-h-full h-[22rem] xs:w-[12rem] rounded-xl shadow-lg mx-auto border-slate-200 border-[2px] flex flex-col items-center justify-around py-4 px-2">
      <div className="nexus7:w-[28rem] nexus7:text-6xl xl:text-3xl xl:w-[19rem] mt-3 border-[0.2px] iPhone5:w-[19rem] bg-orange-300 iPhone5:text-4xl font-fjalla tracking-wider text-center xs:w-[13rem] shadow-2xl border-black rounded-lg  iPhone5:py-2 ">
        STANDARD
      </div>
      <hr className=" opacity-90 w-full bg-black mt-4" />
      <div className="py-3 font-fjalla tracking-wider iPhone5:text-4xl  nexus7:text-5xl">
        5 PAGES
      </div>
      <hr className="opacity-90 w-full bg-black" />
      <div className=" text-2xl font-bebas nexus7:text-3xl  xl:text-3xl py-3">
        $ 100/MO
      </div>
      <hr className="opacity-90 w-full bg-black" />
      <p className=" font-reddit p-3  text-base nexus7:text-2xl  xl:text-base">
        Unlimited Edits, Includes Hosting 24/7, Customer Service and Lifetime
        Updates
      </p>
      <hr className="opacity-90 w-full bg-black" />
      <Button
        type={"submit"}
        px="2"
        py="2"
        color="bg-gray-100 text-black  font-light hover:bg-orange-300 hover:text-white"
        className={" mt-5 mb-7 hover:bg-gray-200 xs:text-lg"}
        onClick={() => router.push("/contact")}
      >
        CONTACT US
      </Button>
    </div>
  );
}
