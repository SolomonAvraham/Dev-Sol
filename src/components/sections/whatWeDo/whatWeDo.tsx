import Image from "next/image";
import { FaMobileAlt } from "react-icons/fa";

export default function WhatWeDo() {
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
    <section className="min-h-screen text-center">
      <h1 className="xs:text-2xl iPhone5:text-4xl font-bold iPhone5Landscape:text-6xl">
        WHAT<span className=" text-orange-400">WE DO</span>
      </h1>
      <div className="mt-1 flex items-center justify-center xs:text-lg iPhone5:text-2xl text-[#edb200] iPhone5Landscape:text-4xl opacity-50">
        ---- <FaMobileAlt />
        ----
      </div>
      <p className="text-sm iPhone5:text-lg  p-2 font-medium xl:px-52">
        We're experts in crafting custom web designs and development solutions
        for small businesses globally. Our hand-written code ensures top
        performance, driving traffic and revenue. Whether you're in the US or
        anywhere else, we're here to boost your online presence and business
        success.
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
            className=" text-sm iPhone5:text-lg px-1 iPhone5Landscape:text-xl xl:px-52"
          >
            {item.paragraph}
          </p>
        </div>
      ))}
    </section>
  );
}
