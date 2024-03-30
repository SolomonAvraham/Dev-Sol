import PortfolioCard from "@/components/features/portfolioCard/portfolioCard";
import { MdOutlineWork } from "react-icons/md";

export default function Portfolio() {
  const portfolio = [
    {
      name: "test test",
      location: "tel aviv",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptatibus esse quisquam consequuntur doloribus neque enim non reprehenderit saepe at?",
    },
    {
      name: "test test",
      location: "tel aviv",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptatibus esse quisquam consequuntur doloribus neque enim non reprehenderit saepe at?",
    },
    {
      name: "test test",
      location: "tel aviv",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptatibus esse quisquam consequuntur doloribus neque enim non reprehenderit saepe at?",
    },
  ];
  return (
    <section id="#portfolio" className="min-h-screen text-center py-10 ">
      <h1 className="xs:text-xl font-bold iPhone5:text-4xl">
        <span className=" text-orange-400">OUR</span>PORTFOLIO
      </h1>
      <div className="mt-1 xs:text-lg iPhone5:text-2xl flex items-center justify-center text-base text-[#edb200] opacity-50">
        ---- <MdOutlineWork />
        ----
      </div>
      <div className="flex flex-wrap  items-center  gap-12 xl:gap-1 mt-12 container px-3">
        {portfolio.map((item, i: number) => (
          <PortfolioCard
            key={i}
            name={item.name}
            location={item.location}
            paragraph={item.paragraph}
          />
        ))}
      </div>
    </section>
  );
}
