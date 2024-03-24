import Button from "../button/button";

export default function CostsCard() {
  return (
    <div className=" iPhone5:w-[13rem] iPhone5Landscape:w-[23rem] border-b-[5px] mt-7 min-h-full h-[22rem] iPhone5Landscape:h-[35rem] xs:w-[12rem] rounded shadow-lg mx-auto border-slate-200 border-[0.10px] flex flex-col items-center justify-around py-4 px-2">
      <div className="iPhone5:w-[15rem] bg-orange-300 iPhone5Landscape:text-5xl xs:text-2xl iPhone5:text-4xl font-semibold text-center iPhone5Landscape:w-[25rem] xs:w-[13rem] shadow-2xl border-black rounded iPhone5Landscape:py-3 iPhone5:py-2 ">
        STANDARD
      </div>
      <div className="xs:text-lg iPhone5:text-2xl  mt-4 iPhone5Landscape:text-3xl">
        5 PAGES
      </div>
      <div className="xs:text-lg iPhone5Landscape:text-3xl">$ 150/MO</div>
      <p className="xs:text-xs p-3 iPhone5Landscape:text-xl">
        Unlimited Edits Includes Hosting 24/7 Customer Service Lifetime Updates
      </p>
      <Button
        type={"submit"}
        fontSize="xs"
        px="2"
        py="2"
        color="bg-gray-100 text-black mt-3 font-bold"
        className={
          "mt-4 mb-6 hover:bg-gray-200 iPhone5:text-sm iPhone5Landscape:text-4xl iPhone5Landscape:font-normal xs:text-xl"
        }
        children={`CONTACT US`}
      />
    </div>
  );
}
