"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Logo from "../logo/logo";

export default function NavBar() {
  const router = useRouter();
  const urlActive = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [routeToPortfolio, setRouteToPortfolio] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  const pages = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "PORTFOLIO", path: "/#portfolio" },
    { name: "CONTACT", path: "/contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (routeToPortfolio) {
      const handlePortfolioNavigation = async () => {
        // If we're not on the home page, navigate first
        if (urlActive !== "/") {
          await router.push("/");
          // Wait for navigation and DOM update
          setTimeout(() => {
            const portfolioSection = document.getElementById("#portfolio");
            if (portfolioSection) {
              portfolioSection.scrollIntoView({ behavior: "smooth" });
            }
          }, 100);
        } else {
          // If we're already on home page, just scroll
          const portfolioSection = document.getElementById("#portfolio");
          if (portfolioSection) {
            portfolioSection.scrollIntoView({ behavior: "smooth" });
          }
        }
        setRouteToPortfolio(false);
      };

      handlePortfolioNavigation();
    }
  }, [routeToPortfolio, urlActive, router]);

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    if (dropdownRef.current) {
      dropdownRef.current.tabIndex = -1;
      dropdownRef.current.blur();
    }

    if (path === "/#portfolio") {
      setRouteToPortfolio(true);
    } else {
      router.push(path);
    }
  };

  return (
    <div className="navbar bg-[#eea236] text-white z-50">
      <div className="navbar-start">
        <div className="w-36">
          <Logo />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="navbar-end md:hidden bg-[#eea236]">
        <div className="dropdown dropdown-end bg-[#eea236] text-white">
          <label
            tabIndex={0}
            className="btn btn-ghost"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            ref={dropdownRef}
            tabIndex={0}
            className={`bg-[#eea236] border-black border-[0.1px] menu menu-md dropdown-content mt-3 p-2 shadow grid place-items-center rounded-box w-[50vh]   z-50 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            {pages.map((item) => (
              <li key={item.name} className="border-b-2 border-[#ffbe4d]">
                <button
                  onClick={() => handleNavigation(item.path)}
                  className={`${
                    urlActive === item.path ? "font-bold" : ""
                  } text-5xl font-fjalla tracking-widest`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-end hidden md:flex">
        <ul className="menu menu-horizontal gap-4 w- font-fjalla tracking-widest">
          {pages.map((item) => (
            <li
              key={item.name}
              onClick={() => handleNavigation(item.path)}
              className={`hover:text-black lg:w-32 text-center cursor-pointer ${
                urlActive === item.path
                  ? "font-semibold border-b-[1px] text-xl text-black rounded-lg"
                  : " text-white"
              }`}
            >
              {item.name}{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
