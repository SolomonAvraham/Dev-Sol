"use client";

import PortfolioCard from "@/components/features/portfolioCard/portfolioCard";
import { MdOutlineWork } from "react-icons/md";
import { MotionDiv } from "@/components/features/motion/motion";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

export default function Portfolio() {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [1, 11000], [0, 1], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-50, 50, v)}%`);

  useAnimationFrame(() => {
    baseX.set(baseX.get() + velocityFactor.get());
  });

  const portfolio = [
    {
      pic: "/portfolio/client-pic.png",
      name: "BarbeRas",
      location: "Tel-Aviv",
      paragraph:
        "Barberas, a centrally-located barber shop in Tel-Aviv, offers easy appointment scheduling. Our robust management system enhances efficiency for both the business owner and customers, eliminating unnecessary small talk.",
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
      <MotionDiv
        style={{ x }}
        viewport={{ amount: 0 }}
        className="flex flex-wrap  items-center  gap-12 xl:gap-1 mt-12 container px-3"
      >
        {portfolio.map((item, i: number) => (
          <PortfolioCard
            key={i}
            pic={item.pic}
            name={item.name}
            location={item.location}
            paragraph={item.paragraph}
            url={item.url}
          />
        ))}
      </MotionDiv>
    </section>
  );
}
