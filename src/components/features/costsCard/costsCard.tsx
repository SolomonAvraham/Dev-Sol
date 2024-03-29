import Button from "../button/button";

export default function CostsCard() {
  return (
    <div className="nexus7:w-[26rem] nexus7:h-[42rem] xl:w-[22rem] xl:h-[32rem] iPhone5:w-[17rem] iPhone5:h-[32rem]  border-b-[5px] mt-7 min-h-full h-[22rem] xs:w-[12rem] rounded-xl shadow-lg mx-auto border-slate-200 border-[2px] flex flex-col items-center justify-around py-4 px-2">
      <div className="nexus7:w-[28rem] nexus7:text-6xl xl:w-[25rem] mt-3 border-[0.2px] iPhone5:w-[19rem] bg-orange-300 iPhone5:text-4xl font-semibold text-center xs:w-[13rem] shadow-2xl border-black rounded-lg  iPhone5:py-2 ">
        STANDARD
      </div>
      <hr className=" opacity-90 w-full bg-black mt-4" />
      <div className=" iPhone5:text-4xl xl:text-4xl nexus7:text-5xl">
        5 PAGES
      </div>
      <hr className="opacity-90 w-full bg-black" />
      <div className=" text-2xl font-semibold nexus7:text-3xl  xl:text-2xl">
        $ 100/MO
      </div>
      <hr className="opacity-90 w-full bg-black" />
      <p className=" p-3  text-base nexus7:text-2xl  xl:text-xl">
        Unlimited Edits, Includes Hosting 24/7, Customer Service and Lifetime
        Updates
      </p>
      <hr className="opacity-90 w-full bg-black" />

      <Button
        type={"submit"}
        px="2"
        py="2"
        color="bg-gray-100 text-black mt-3 font-bold"
        className={
          "mt-4 mb-6 hover:bg-gray-200 iPhone5:text-xl nexus7:text-3xl"
        }
        children={`CONTACT US`}
      />
    </div>
  );
}
