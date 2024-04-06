"use client";

import CostsCard from "@/components/features/costsCard/costsCard";
import { MotionDiv } from "@/components/features/motion/motion";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Costs() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1.2]);

  return (
    <section className="min-h-screen text-center py-5">
      <MotionDiv
        style={{ scale }}
        viewport={{ amount: 0 }}
        className="  text-center"
      >
        <Image
          priority={true}
          src={"/background/2.png"}
          alt={"design icon"}
          width={500}
          height={500}
          className="-z-10 absolute  -top-32 -right-52    filter brightness-[.66] drop-shadow-xl  opacity-10  w-3/6 "
        />{" "}
        <Image
          priority={true}
          src={"/background/1.png"}
          alt={"design icon"}
          width={500}
          height={500}
          className="-z-10 absolute overflow-visible overflow-y-visible top-44 -left-32 filter brightness-[.66] drop-shadow-xl  opacity-5  w-2/6 "
        />
        <CostsCard />
      </MotionDiv>
    </section>
  );
}
