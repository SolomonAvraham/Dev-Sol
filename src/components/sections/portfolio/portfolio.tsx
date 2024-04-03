import PortfolioCard from "@/components/features/portfolioCard/portfolioCard";
import { MdOutlineWork } from "react-icons/md";

export default function Portfolio() {
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
            pic={item.pic}
            name={item.name}
            location={item.location}
            paragraph={item.paragraph}
            url={item.url}
          />
        ))}
      </div>
    </section>
  );
}
