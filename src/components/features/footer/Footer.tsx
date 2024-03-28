import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Footer() {
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
      path: "/",
      name: "WEB DESIGN",
    },
    {
      path: "/",
      name: "WEBSITE MAINTENANCE",
    },
  ];

  async function redirectURL() {
    "use server";
    return redirect(`/`);
  }

  return (
    <footer className=" bg-gradient-to-b from-[#f6b94f] to-[#eea236] w-full min-h-[33rem] relative z-0 ">
      <div className="h-52 z-50 footer-clip-path bg-white" />
      <div className="flex flex-col p-1">
        <Image src={"/logo/logo.png"} alt="logo" width={400} height={400} />

        <div className=" flex flex-col justify-center items-start text-white xl:ml-10">
          <h5 className=" tracking-wide font-bold drop-shadow-2xl iPhone8:text-lg xl:text-2xl">
            NAVIGATION
          </h5>
          <hr className=" w-[60%] border-[#ffbe4d]  border-[1px] outline-[#000] outline-8 h-1 shadow-xl bg-white bg-opacity-25 " />

          <div className="flex items-center ">
            <div className="">
              <form action={redirectURL}>
                {navigation.map((item, i: number) => (
                  <ul
                    key={i}
                    className="text-xs text-left  iPhone5Landscape:text-lg"
                  >
                    <li
                      key={item.name}
                      className="hover:drop-shadow-xl iPhone8:text-base  mt-1 font-semibold tracking-wide hover:text-gray-700 cursor-pointer xl:text-lg"
                    >
                      {item.name}
                    </li>
                  </ul>
                ))}
              </form>
            </div>
            <div className="iPhone5Landscape:ml-56 ml-32 opacity-80 xl:ml-52">
              <Image
                src={"/logo/2.png"}
                alt="logo"
                width={100}
                height={100}
                className="iPhone5Landscape:w-44"
              />
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div className=" flex flex-col justify-center items-end text-white  xl:mr-10">
        <h5 className=" xl:text-2xl iPhone8:text-lg tracking-wide font-bold drop-shadow-2xl mr-2 iPhone5Landscape:text-2xl">
          SERVICES
        </h5>
        <hr className=" w-[60%] border-[#ffbe4d]  border-[1px] outline-[#000] outline-8 h-1 shadow-xl bg-white bg-opacity-25 " />
        <form action={redirectURL}>
          {services.map((item, i: number) => (
            <ul
              key={i}
              className="text-xs iPhone8:text-base text-right mr-1 iPhone5Landscape:text-lg"
            >
              <li
                key={item.name}
                className="xl:text-lg hover:drop-shadow-xl  mt-1 font-semibold tracking-wide hover:text-gray-700 cursor-pointer"
              >
                {item.name}
              </li>
            </ul>
          ))}
        </form>
      </div> */}

      <div className="xs:text-sm  iPhone8:text-base  text-center text-white font-bold flex flex-col mt-10 mb-3">
        <Link
          href={"mailto:Devsoldev@gmail.com"}
          className="hover:text-gray-700 "
        >
          Devsoldev@gmail.com
        </Link>
        <Link href={"tel:+972 (54) 972-7138"} className="hover:text-gray-700 ">
          +972 (54) 972-7138
        </Link>
      </div>

      <div className="bg-black bg-opacity-20  mt-1 text-xs iPhone5Landscape:text-sm text-white py-2 text-center w-full font-semibold">
        <span>
          Copyright © 2024 | Dev-Sol Web Designs & Development | All Rights
          Reserved
        </span>
      </div>
    </footer>
  );
}
