"use client";

import Image from "next/image";
import Button from "../button/button";

type Props = {
  pic: string;
  name: string;
  location: string;
  paragraph: string;
  url: string;
};
export default function PortfolioCard(props: Props) {
  const { pic, name, location, paragraph, url } = props;
  return (
    <div className=" hover:scale-105 hover:shadow-2xl  border-b-[5px] border-t-[15px] min-h-full xs:w-[12rem] iPhone5:w-[17rem] rounded shadow-lg mx-auto border-slate-200 border-[0.10px] flex flex-col items-center justify-center py-4 px-2">
      <Image
        priority={true}
        src={pic}
        alt={"portfolio"}
        width={500}
        height={500}
        className=" drop-shadow-xl mt-3 "
      />
      <h1 className="xs:text-3xl iPhone5:text-4xl  font-fjalla mt-4 tracking-widest">
        {name}
      </h1>
      <hr className="h-[1px] w-3/4 bg-gray-50 " />
      <h2 className=" text-lg tracking-widest  font-fjalla text-gray-400 ">
        {location}
      </h2>
      <p className="xs:text-sm font-reddit p-3">{paragraph}</p>
      <Button
        type={"submit"}
        px="2"
        py="2"
        color="bg-gray-100 text-black mt-3 font-light hover:bg-orange-300 hover:text-white"
        className={"mt-4 mb-6 hover:bg-gray-200 xs:text-lg"}
        onClick={() => window.open(url, "_blank")}
      >
        visit ${name}
      </Button>
    </div>
  );
}
