"use client";

import Image from "next/image";
import { FaMobileAlt } from "react-icons/fa";
import { useTransform, useScroll } from "framer-motion";
import { MotionDiv } from "@/components/features/motion/motion";

export default function WhatWeDo() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 2]);

  const servicesExplanation = [
    {
      icon: "/whatWeDo/1.png",
      header: "Mobile-First Design",
      paragraph:
        "We kick off by designing your site specifically for mobile devices, then expand it to cater to tablets and desktops.",
    },
    {
      icon: "/whatWeDo/2.png",
      header: "Fully Responsive",
      paragraph:
        "Your website will seamlessly adapt to all screen sizes, ensuring accessibility for new clients whether they're on mobile, tablet, or desktop devices, from anywhere around the globe.",
    },
    {
      icon: "/whatWeDo/3.png",
      header: "Optimization",
      paragraph:
        "With 60% of internet traffic originating from mobile devices, we prioritize optimizing your mobile presence to excel in search engine performance.",
    },
  ];

  return (
    <MotionDiv
      style={{ scale }}
      viewport={{ amount: 0 }}
      className="relative  text-center"
    >
      <Image
        priority={true}
        src={"/background/1.png"}
        alt={"design icon"}
        width={500}
        height={500}
        className="-z-10 absolute top-0 -right-56 filter brightness-[.66] drop-shadow-xl  opacity-10  w-4/6 "
      />
      <h1 className="xs:text-2xl iPhone5:text-4xl font-fjalla tracking-wider ">
        WHAT<span className=" text-orange-400">WE</span>DO
      </h1>
      <div className="mt-1 flex items-center justify-center xs:text-lg iPhone5:text-2xl text-[#edb200] iPhone5Landscape:text-4xl opacity-50">
        ---- <FaMobileAlt />
        ----
      </div>
      <p className="text-sm iPhone5:text-xl  p-2 font-reddit  xl:px-52">
        We're experts in crafting custom web designs and development solutions
        for small businesses globally. Our hand-written code ensures top
        performance, driving traffic and revenue. Whether you're in the US or
        anywhere else, we're here to boost your online presence and business
        success.
      </p>

      <div className="xl:grid grid-cols-3 place-items-center  justify-items-center justify-center xl:px-16 py-10">
        {servicesExplanation.map((item, i: number) => (
          <div
            key={i}
            className="flex flex-col items-center justify-start justify-center py-5 p-3 text-sm"
          >
            <Image
              priority={true}
              src={item.icon}
              alt={item.header}
              width={100}
              height={100}
              key={item.icon}
              className=" "
            />

            <h1 key={item.header} className="font-fjalla iPhone5:text-2xl">
              {item.header}
            </h1>
            <p
              key={item.paragraph}
              className=" font-reddit text-sm iPhone5:text-base px-1  "
            >
              {item.paragraph}
            </p>
          </div>
        ))}
      </div>
    </MotionDiv>
  );
}
