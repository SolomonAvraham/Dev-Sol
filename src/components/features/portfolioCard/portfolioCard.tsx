import Image from "next/image";
import Button from "../button/button";

type Props = {
  name: string;
  location: string;
  paragraph: string;
};
export default function PortfolioCard(props: Props) {
  const { name, location, paragraph } = props;
  return (
    <div className="border-b-[5px] mt-7 border-t-[5px] min-h-full xs:w-[12rem] iPhone5:w-[15rem]  iPhone5Landscape:w-[22rem] rounded shadow-lg mx-auto border-slate-200 border-[0.10px] flex flex-col items-center justify-center py-4 px-2">
      <Image
        src={"/portfolio/1.png"}
        alt={"portfolio"}
        width={250}
        height={250}
        className=" drop-shadow-xl iPhone5Landscape:w-[22rem]"
      />
      <h1 className="xs:text-xl font-bold mt-4 iPhone5Landscape:text-5xl tracking-widest">
        {name}
      </h1>
      <hr className="h-[1px] mt-2 w-3/4 bg-gray-100 " />
      <h2 className="xs:text-base tracking-wide font-semibold text-gray-500 iPhone5Landscape:text-2xl">
        {location}
      </h2>
      <p className="xs:text-xs p-3 iPhone5Landscape:text-xl">{paragraph}</p>
      <Button
        type={"submit"}
        fontSize="xs"
        px="2"
        py="2"
        color="bg-gray-100 text-black mt-3 font-bold"
        className={
          "mt-4 mb-6 hover:bg-gray-200 iPhone5:text-sm iPhone5Landscape:text-4xl iPhone5Landscape:font-normal xs:text-lg"
        }
        children={` Visit ${name}`}
      />
    </div>
  );
}
