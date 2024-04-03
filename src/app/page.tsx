import BusinessModel from "@/components/sections/businessModel/businessModel";
import Costs from "@/components/sections/costs/costs";
import Intro from "@/components/sections/intro/intro";
import Portfolio from "@/components/sections/portfolio/portfolio";
import WhatWeDo from "@/components/sections/whatWeDo/whatWeDo";
import WhoWeAre from "@/components/sections/whoWeAre/whoWeAre";

export default function Home() {
  return (
    <>
      <Intro />
      <WhatWeDo />
      <BusinessModel />
      <div id="#portfolio">
        <Portfolio />
      </div>
      <WhoWeAre />
      <Costs />
    </>
  );
}
