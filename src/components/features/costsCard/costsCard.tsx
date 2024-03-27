import Button from "../button/button";

export default function CostsCard() {
  return (
    <div className="xl:w-[16rem] xl:h-[32rem] iPhone5:w-[13rem]  border-b-[5px] mt-7 min-h-full h-[22rem] xs:w-[12rem] rounded-xl shadow-lg mx-auto border-slate-200 border-[0.10px] flex flex-col items-center justify-around py-4 px-2">
      <div className="xl:w-[19rem] mt-3 border-[0.2px] iPhone5:w-[15rem] bg-orange-300 xs:text-2xl iPhone5:text-4xl font-semibold text-center xs:w-[13rem] shadow-2xl border-black rounded-lg  iPhone5:py-2 ">
        STANDARD
      </div>
      <hr className=" opacity-30 w-full bg-black mt-4" />
      <div className="xs:text-lg iPhone5:text-2xl xl:text-5xl">5 PAGES</div>
      <hr className="opacity-30 w-full bg-black" />
      <div className="xs:text-lg xl:text-2xl">$ 100/MO</div>
      <hr className="opacity-30 w-full bg-black" />
      <p className="xs:text-xs p-3 xl:text-base">
        Unlimited Edits, Includes Hosting 24/7, Customer Service and Lifetime
        Updates
      </p>
      <hr className="opacity-30 w-full bg-black" />

      <Button
        type={"submit"}
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
