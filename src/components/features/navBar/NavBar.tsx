"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import ReactDOM from "react-dom";
import { useRouter } from "next/navigation";

const pages = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "SERVICES", path: "/services" },
  { name: "PORTFOLIO", path: "/portfolio" },
  { name: "CONTACT", path: "/contact" },
];

export default function NavBar() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const menu = (
    <div className="fixed top-1 iPhone5:top-[5%] landScape5:top-[11%] z-20  w-full  min-h-screen bg-gradient-to-t from-[#f6b94f] via-[#eea236] to-[#edb200] text-center">
      <div
        className="overflow-y-auto flex flex-col 
       p-1 items-center justify-center text-xl mt-5  gap-2 
       iPhone5:gap-1 iPhone5:text-4xl  
       iPhone8:text-5xl
       iPhone8Plus:gap-2
       landScape5:text-xl
       landScape8:text-3xl
       landScape8Plus:text-4xl"
      >
        {pages.map((item, i: number) => (
          <ul
            key={item.name}
            className={` tracking-widest font-bold  mt-5 landScape5:mt-0 ${
              i % 2 === 0
                ? "bg-[#eea236] w-full py-1 text-white hover:text-black hover:bg-[#f6b94f]"
                : "bg-[#f6b94f] w-full py-1 text-white hover:text-black hover:bg-[#eea236]"
            }`}
          >
            <li
              key={item.name}
              className=" cursor-pointer"
              onClick={() => {
                if (item.path === "/") {
                  setIsOpen(false);
                }
                router.push(item.path);
              }}
            >
              {item.name}
            </li>
          </ul>
        ))}
        <Image
          src={"/logo/2.png"}
          alt="logo"
          width={100}
          height={100}
          className=" mt-10 landScape5:mt-0 landScape5:w-[2.5rem]"
        />
      </div>
    </div>
  );

  return (
    <nav
      className={`bg-gradient-to-t from-[#edb200] to-[#eea236] w-full ${
        isOpen && " fixed top-0 z-50"
      }`}
    >
      <div className={`flex justify-between items-center px-1  py-1`}>
        <div className="logo w-36">
          <Image src={"/logo/logo.png"} alt="logo" width={400} height={400} />
        </div>
        <button
          className={`text-5xl ml-2 ${isOpen && "text-4xl mr-5"}`}
          type="button"
          onClick={() => setIsOpen((val) => !val)}
        >
          {isOpen ? "X" : <IoMdMenu />}
        </button>{" "}
        {isOpen &&
          ReactDOM.createPortal(menu, document.getElementById("portal-root")!)}
      </div>
    </nav>
  );
}
