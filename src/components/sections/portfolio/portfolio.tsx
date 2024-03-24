import PortfolioCard from "@/components/features/portfolioCard/portfolioCard";
import { MdOutlineWork } from "react-icons/md";

export default function Portfolio() {
  const portfolio = [
    {
      name: "fsf sfgs",
      location: "tel aviv",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptatibus esse quisquam consequuntur doloribus neque enim non reprehenderit saepe at?",
    },
    {
      name: "fsf sfgs",
      location: "tel aviv",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptatibus esse quisquam consequuntur doloribus neque enim non reprehenderit saepe at?",
    },
    {
      name: "fsf sfgs",
      location: "tel aviv",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptatibus esse quisquam consequuntur doloribus neque enim non reprehenderit saepe at?",
    },
  ];
  return (
    <section className="min-h-screen text-center py-10 ">
      <h1 className="xs:text-xl font-bold iPhone5:text-3xl  iPhone5Landscape:text-5xl">
        <span className=" text-orange-400">OUR</span>PORTFOLIO
      </h1>
      <div className="mt-1 xs:text-lg  iPhone5Landscape:text-3xl iPhone5:text-2xl flex items-center justify-center text-base text-[#edb200] opacity-50">
        ---- <MdOutlineWork />
        ----
      </div>
      {portfolio.map((item, i: number) => (
        <PortfolioCard
          key={i}
          name={item.name}
          location={item.location}
          paragraph={item.paragraph}
        />
      ))}
    </section>
  );
}
