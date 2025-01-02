import { CurvedTop } from "@/components/layouts/curvedLayouts";
import BusinessModel from "@/components/sections/businessModel/businessModel";
import Costs from "@/components/sections/costs/costs";
import Portfolio from "@/components/sections/portfolio/portfolio";
import TechIcons from "@/components/sections/techIcons/techIcons";
import WhatWeDo from "@/components/sections/whatWeDo/whatWeDo";
import WhoWeAre from "@/components/sections/whoWeAre/whoWeAre";

export default function Home() {
  return (
    <>
      <CurvedTop />
      {/* <Intro /> */}
      <WhatWeDo />
      <section className="bg-white h-[35vh] grid place-items-center gap-10 mt-10">
        <h1 className="text-4xl mb-5 font-fjalla tracking-wider ">
          OUR<span className=" text-orange-400">STACK</span>
        </h1>{" "}
        <TechIcons />
      </section>
      <BusinessModel />
      <div id="#portfolio">
        <Portfolio />
      </div>
      <WhoWeAre />
      <Costs />
    </>
  );
}
