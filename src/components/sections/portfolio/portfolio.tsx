"use client";

import PortfolioCard from "@/components/features/portfolioCard/portfolioCard";
import { MdOutlineWork } from "react-icons/md";

export default function Portfolio() {
  const portfolio = [
    {
      pic: "/portfolio/homefit-screens.png",
      name: "HomeFit",
      paragraph:
        "HomeFit is a user-friendly platform that helps individuals discover, share, and follow personalized workout plans, making it easier to stay motivated and reach fitness goals.",
      url: "https://homefit-pro.vercel.app",
    },
    {
      pic: "/portfolio/barberas-screens.png",
      name: "BarbeRas",
      paragraph:
        "Barberas, a centrally-located barber shop in Hadera, offers easy appointment scheduling. Our robust management system enhances efficiency for both the business owner and customers, eliminating unnecessary small talk.",
      url: "https://www.barberas.co.il",
    },
  ];

  return (
    <section className="min-h-screen text-center py-10 ">
      <h1 className="xs:text-xl iPhone5:text-4xl  font-fjalla tracking-wider">
        <span className=" text-orange-400">OUR</span>PORTFOLIO
      </h1>
      <div className="mt-1 xs:text-lg iPhone5:text-2xl flex items-center justify-center text-base text-[#edb200] opacity-50">
        ---- <MdOutlineWork />
        ----
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:w-1/2 md:mx-auto gap-20 mt-12">
        {portfolio.map((item, i: number) => (
          <PortfolioCard
            key={i}
            pic={item.pic}
            name={item.name}
            paragraph={item.paragraph}
            url={item.url}
          />
        ))}
      </div>
    </section>
  );
}
