import React from "react";
import Intro from "../sections/intro/intro";

const CurvedTop = () => (
  <div className="relative ">
    <Intro />
    <div className="h-[22rem] md:h-[31rem]  bg-[#eea236]">
      <div className="h-full">
        <div className="bg-[url('/background/2.png')] sta opacity-20 bg-no-repeat bg-contain bg-top" />
        <div className="bg-[url('/background/2.png')] opacity-30 bg-no-repeat bg-contain bg-right " />
        <div className="bg-[url('/background/2.png')] opacity-20 bg-no-repeat bg-contain bg-left " />
      </div>

      <div className="custom-shape-divider-bottom-1735754290">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          />
        </svg>
      </div>
    </div>
    <div className="mt-20" />
  </div>
);

const CurvedBottom = () => (
  <div className="relative h-[8rem] xl:h-[11rem]">
    <div className=" h-full  bg-[#eea236]">
      <div className="  rotate-180">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            style={{ fill: "#ffffff" }}
          />
        </svg>
      </div>
    </div>
    <div className="mt-20" />
  </div>
);

export { CurvedTop, CurvedBottom };
