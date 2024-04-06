import MyPic from "@/components/features/myPic/myPic";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dev-Sol About US",
  description: `Giving Small Businesses The Big Business Treatment Hello there! I'm Solomon Avraham, the proud owner and sole developer of DEV-SOL.
Two years ago, I embarked on a journey into programming after mastering coding skills. Finding employment was challenging due to the unstable job market. That's when I decided to take matters into my own hands and establish DEV-SOL.
My focus is on assisting small businesses in promoting their ventures, whether locally or globally. I started by crafting websites meticulously by hand and reaching out to small businesses to offer my assistance. What I discovered was a common challenge: many small businesses struggled to afford high-quality websites. Those who did invest often found themselves with subpar results, trapped in outdated design trends.
Recognizing this frustration, I pivoted my business model to better serve their needs. Thus, I introduced the $100 a month model. This approach offers affordability and flexibility, ensuring that small businesses can have a professional online presence without straining their finances.
At DEV-SOL, I'm committed to delivering top-notch websites that reflect the essence and aspirations of each business. My goal is to empower small businesses with the tools they need to thrive in today's competitive landscape. Let's work together to elevate your business's online presence and unlock its full potential.`,
};

export default function About() {
  return (
    <div className="min-h-screen ">
      <div className=" relative h-24  flex items-center justify-center  bg-gradient-to-t from-[#f6b94f] via-[#eea136c0] to-[#edb200]">
        <div className="text-9xl opacity-5  font-bold font-bebas ">ABOUT</div>
        <div className="text-7xl tracking-[2rem] font-bebas opacity-5 font-bold">
          ABOUT
        </div>{" "}
        <div className="text-7xl font-bebas tracking-[2rem] opacity-5 mb-10 font-bold ">
          ABOUT
        </div>
        <h1 className="font-bebas absolute top-[5%] text-4xl nexus7:text-8xl  tracking-[0.7rem] opacity-60 font-bold ">
          ABOUT US
        </h1>
        <div className="text-9xl font-bebas mt-5 tracking-[2rem] opacity-5 mb-1 font-bold ">
          ABOUT
        </div>
        <div className="text-4xl font-bebas tracking-[2rem] opacity-5 mb-1 font-bold ">
          ABOUT
        </div>
      </div>

      <div className="dd">
        <Image
          priority={true}
          src={"/page/about.jpeg"}
          alt="s"
          width={500}
          height={500}
          className=" mx-auto nexus7:w-full xl:w-[16rem]  rounded-b-3xl shadow-md "
        />

        <div className=" relative flex flex-col gap-5 items-center  py-16 mt-10 text-center">
          <MyPic />
          <Image
            priority={true}
            src={"/background/1.png"}
            alt={"design icon"}
            width={500}
            height={500}
            className="-z-10 absolute -top-10 left-0 right-0   mx-auto filter brightness-[.66] drop-shadow-xl  opacity-5  w-4/6 "
          />{" "}
          <Image
            priority={true}
            src={"/background/2.png"}
            alt={"design icon"}
            width={500}
            height={500}
            className="-z-10 absolute opacity-[0.07] -bottom-24 -right-72 filter brightness-[.66] drop-shadow-xl w-3/6 transform rotate-6"
          />{" "}
          <Image
            priority={true}
            src={"/background/2.png"}
            alt={"design icon"}
            width={500}
            height={500}
            className="-z-10 absolute  bottom-52 -left-64    filter brightness-[.66] drop-shadow-xl  opacity-[0.07]  w-3/6 "
          />
          <h4 className=" font-fjalla tracking-wide text-3xl nexus7:text-5xl  ">
            Solomon<span className="text-orange-400">Avraham</span>.
          </h4>
          <div className="  mb-10 ">
            <h5 className="text-2xl nexus7:text-4xl xl:text-3xl  font-fjalla tracking-wider">
              <span className="text-orange-400">DEV</span>SOL
            </h5>
            <h6 className="text-sm nexus7:text-2xl xl:text-base font-fjalla tracking-wider">
              WEB DESIGNS <span className="text-orange-400">& DEVELOPMENT</span>
            </h6>
            <p className="p-3 xl:px-52 text-lg nexus7:text-2xl nexus7:p-10  font-reddit text-center xl:text-xl">
              Giving Small Businesses The Big Business Treatment Hello there!
              I'm Solomon Avraham, the proud owner and sole developer of{" "}
              <span className="text-orange-400">DEV-SOL</span>.<br /> Two years
              ago, I embarked on a journey into programming after mastering
              coding skills. Finding employment was challenging due to the
              unstable job market. That's when I decided to take matters into my
              own hands and establish{" "}
              <span className="text-orange-400">DEV-SOL</span>.<br /> My focus
              is on assisting small businesses in promoting their ventures,
              whether locally or globally. I started by crafting websites
              meticulously by hand and reaching out to small businesses to offer
              my assistance. What I discovered was a common challenge: many
              small businesses struggled to afford high-quality websites. Those
              who did invest often found themselves with subpar results, trapped
              in outdated design trends.
              <br />
              Recognizing this frustration, I pivoted my business model to
              better serve their needs. Thus, I introduced the $100 a month
              model. This approach offers affordability and flexibility,
              ensuring that small businesses can have a professional online
              presence without straining their finances.
              <br />
              At <span className="text-orange-400">DEV-SOL</span>, I'm committed
              to delivering top-notch websites that reflect the essence and
              aspirations of each business. My goal is to empower small
              businesses with the tools they need to thrive in today's
              competitive landscape. Let's work together to elevate your
              business's online presence and unlock its full potential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
