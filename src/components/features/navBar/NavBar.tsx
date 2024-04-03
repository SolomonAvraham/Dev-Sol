"use client";

import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { useRouter, usePathname } from "next/navigation";
import Logo from "../logo/logo";
import Link from "next/link";

export default function NavBar() {
  const router = useRouter();
  const urlActive = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [routeToPortfolio, setRouteToPortfolio] = useState(false);

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

  const pages = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "PORTFOLIO", path: "/#portfolio" },
    // { name: "SERVICES", path: "/services" },
    { name: "CONTACT", path: "/contact" },
  ];

  useEffect(() => {
    if (routeToPortfolio) {
      console.log("wwww");
      router.push("/");
      // <Link href="/#portfolio" />;
      setRouteToPortfolio(false);
      const element = document.getElementById("#portfolio");
      return element?.scrollIntoView({ behavior: "smooth" });
    } else {
    }
  }, [routeToPortfolio, urlActive]);

  const scrollToSection = (path: string) => {
    setIsOpen(false);
    if (path === "/#portfolio") {
      return setRouteToPortfolio(true);
    }
    return router.push(path);
  };

  // const scrollToSection = (path: string) => {
  //   setIsOpen(false);
  //   if (path === "/#portfolio") {
  //     const element = document.getElementById("portfolio");
  //     element?.scrollIntoView({ behavior: "smooth" });
  //     router.push(path);
  //     <Link href="/#portfolio" />;
  //     return;
  //   }
  //   router.push(path);
  // };

  return (
    <nav
      className={`bg-gradient-to-t from-[#edb200] to-[#eea236] w-full ${
        isOpen && " fixed top-0 z-50 transition-all duration-300"
      }`}
    >
      <div
        className={`flex justify-between items-center px-5  py-1 nexus7:hidden`}
      >
        <div className="logo w-36">
          <Logo />
        </div>
        <button
          className={`text-5xl ml-2 ${isOpen && "text-4xl mr-5"}`}
          type="button"
          onClick={() => setIsOpen((val) => !val)}
        >
          {isOpen ? "X" : <IoMdMenu />}
        </button>{" "}
        <div
          style={{
            opacity: isOpen ? 1 : 0,
            transition: "opacity 500ms ease-in",
          }}
          className={`fixed w-full left-0 top-1 iPhone5:top-[10%] iPhone8:top-[8%]
        landScape5:top-[19%] z-20 h-full bg-gradient-to-t from-[#f6b94f] via-[#eea236] to-[#edb200] text-center`}
        >
          <div
            className={` mt-6 iPhone8:mt-16  flex flex-col gap-12 items-center justify-center
   p-1  text-xl   
     iPhone5:text-4xl  
   iPhone8:text-5xl
    landScape5:text-2xl landScape5:mt-0 landScape5:gap-3
   landScape8:text-3xl
   landScape8Plus:text-4xl`}
          >
            {pages.map((item, i: number) => (
              <ul
                key={item.name}
                className={` ${
                  urlActive === item.path && " font-extrabold bg-[#44372468]"
                } tracking-widest font-bold  ${
                  i % 2 === 0
                    ? "bg-[#eea236] w-full py-1 text-white hover:text-black hover:bg-[#f6b94f]"
                    : "bg-[#f6b94f] w-full py-1 text-white hover:text-black hover:bg-[#eea236]"
                }`}
              >
                <li
                  key={item.path}
                  className=" cursor-pointer shadow hover:shadow-xl"
                  onClick={() => scrollToSection(item.path)}
                >
                  {item.name}
                </li>
              </ul>
            ))}
            <div className=" landScape5:w-32  iPhone8:-mt-7 iPhone8Plus:-mt-0">
              <Logo />
            </div>
          </div>
        </div>
      </div>

      {/* BIG SCREEN */}
      <div className=" justify-evenly items-center px-12  py-1 hidden nexus7:flex xl:px-0 ">
        <div className="py-1 w-36 xl:w-80 mr-52">
          <Logo />
        </div>

        {pages.map((item, i: number) => (
          <ul key={item.name} className="text-xl font-semibold">
            <li
              key={i}
              className={`${
                urlActive === item.path &&
                " xl:text-black border-b-[1.5px] border-black font-extrabold xl:text-xl pb-1 "
              } cursor-pointer text-white hover:text-black`}
              onClick={() => scrollToSection(item.path)}
            >
              {item.name}
            </li>
          </ul>
        ))}
      </div>
    </nav>
  );
}
