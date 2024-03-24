import Button from "@/components/features/button/button";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Intro() {
  async function redirectURL() {
    "use server";
    return redirect("/contact");
  }

  return (
    <section className="relative landScape5:mb-44">
      <div className="text-white bg-gradient-to-t from-[#f6b94f] via-[#eea236] to-[#edb200] min-h-screen custom-clip-path flex flex-col gap-1 items-baseline justify-start px-2">
        <h1 className="mt-5 font-extrabold ">Small Business</h1>
        <h2 className=" font-extrabold ">Web Design + Development</h2>
        <p className=" font-semibold">
          No page builders or WordPress - We offer 100% hand-coded websites with
          superior results starting at $150/mo.
        </p>
        <form action={redirectURL}>
          <Button
            type={"submit"}
            px="2"
            py="2"
            color="bg-gray-100 text-black mt-3 font-bold"
            className={
              "hover:bg-orange-300 hover:text-white iPhone5:text-base iPhone8:text-lg  iPhone8Plus:text-xl landScape8:text-2xl"
            }
            children={"GET IN TOUCH!"}
          />
        </form>
      </div>
      <div
        className=" absolute z-10  iPhone5:bottom-[25%] 
       iPhone5Landscape:top-[65%] iPhone5:w-[13rem] iPhone5Landscape:w-[17rem] iPhone5Landscape:left-[16rem]
        w-[10rem] iPhone5:left-20 left-14 drop-shadow
         iPhone8:top-[43%] iPhone8:w-[16rem] iPhone8:left-24
           iPhone8Plus:top-[47%] iPhone8Plus:w-[20rem] iPhone8Plus:left-16
           landScape5:top-[68%] landScape5:w-[18rem] landScape5:left-[40%]
           landScape8:top-[68%] landScape8:w-[21rem] landScape8:left-[44%]
           landScape8Plus:top-[70%] landScape8Plus:w-[23rem] landScape8Plus:left-[34%]"
      >
        <Image
          src={"/other/screens.png"}
          alt="logo"
          width={500}
          height={500}
          className=" drop-shadow-xl"
        />
      </div>
    </section>
  );
}
