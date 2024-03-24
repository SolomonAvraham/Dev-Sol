import Image from "next/image";
import { FaMobileAlt } from "react-icons/fa";

export default function WhatWeDo() {
  const servicesExplanation = [
    {
      icon: "/whatWeDo/1.png",
      header: "Mobile-First Design",
      paragraph:
        "We start building your site for mobile devices first, then we add on to it to make tablet and desktop.",
    },
    {
      icon: "/whatWeDo/2.png",
      header: "Fully Responsive",
      paragraph:
        "Your website will fit all mobile screens sizes, tablets, and desktop sizes so new clients can access your site from anywhere.",
    },
    {
      icon: "/whatWeDo/3.png",
      header: "Optimization",
      paragraph:
        "60% of all internet traffic is on mobile devices, so we optimize your mobile to perform their best in search engines.",
    },
  ];

  return (
    <section className="min-h-screen text-center">
      <h1 className="xs:text-2xl iPhone5:text-4xl font-bold iPhone5Landscape:text-6xl">
        WHAT<span className=" text-orange-400">WE DO</span>
      </h1>
      <div className="mt-1 flex items-center justify-center xs:text-lg iPhone5:text-2xl text-[#edb200] iPhone5Landscape:text-4xl opacity-50">
        ---- <FaMobileAlt />
        ----
      </div>
      <p className="text-sm iPhone5:text-lg  p-2 font-medium iPhone5Landscape:text-xl">
        We specialize in small business web design and development for clients
        anywhere in the US. Every line of code is written by hand to ensure the
        best performance, which helps bring in more customers to your site and
        bring more revenue to your business. LEARN MORE
      </p>

      {servicesExplanation.map((item, i: number) => (
        <div
          key={i}
          className="flex flex-col items-center justify-center py-5 p-3 text-sm iPhone5Landscape:text-2xl"
        >
          <Image
            src={item.icon}
            alt={item.header}
            width={100}
            height={100}
            key={item.icon}
            className="iPhone5Landscape:w-52"
          />

          <h1 key={item.header} className="font-bold iPhone5:text-xl">
            {item.header}
          </h1>
          <p
            key={item.paragraph}
            className=" text-sm iPhone5:text-lg px-1 iPhone5Landscape:text-xl"
          >
            {item.paragraph}
          </p>
        </div>
      ))}
    </section>
  );
}
