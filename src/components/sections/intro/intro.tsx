import Button from "@/components/features/button/button";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Intro() {
  async function redirectURL() {
    "use server";
    return redirect("/contact");
  }

  return (
    <section className="relative landScape5:mb-44  nexus7:mb-0">
      <div className="text-white bg-gradient-to-t from-[#f6b94f] via-[#eea236] to-[#edb200] min-h-screen custom-clip-path flex flex-col xl:items-center   px-2">
        <h1 className="font-Satisfy mt-5 xl:tracking-wide font-extrabold">
          Small Business
        </h1>
        <h2 className=" font-extrabold xl:tracking-wide">
          Web Design + Development
        </h2>
        <p className=" font-semibold">
          No WordPress or page builders - We offer 100% hand-coded websites with
          superior results starting at $100/mo.
        </p>
        <form action={redirectURL} className="xl:ml-32 cursor-pointer">
          <Button
            type={"submit"}
            px="2"
            py="2"
            color="bg-gray-100 text-black mt-3 font-semibold"
            className={
              "hover:bg-orange-300 hover:text-white iPhone5:text-base iPhone8:text-lg  iPhone8Plus:text-xl landScape8:text-2xl xl:text-lg tracking-wide xl2:text-xl"
            }
            children={"GET IN TOUCH!"}
          />
        </form>
      </div>
      <div
        className=" absolute z-10 w-[10rem]  left-14 drop-shadow 
     iPhone5:w-[13rem] iPhone5:left-20 iPhone5:bottom-[25%]  
   iPhone8:top-[43%] iPhone8:w-[18rem] iPhone8:left-[4rem]
    iPhone8Plus:top-[47%] iPhone8Plus:w-[20rem] iPhone8Plus:left-16
    landScape5:top-[68%] landScape5:w-[18rem] landScape5:left-[40%]
   landScape8:top-[68%] landScape8:w-[21rem] landScape8:left-[44%]
    landScape8Plus:top-[70%] landScape8Plus:w-[ 1rem] landScape8Plus:left-[34%]
    
    nexus7:top-[40%] nexus7:w-[27rem] nexus7:left-[32%]
    ipad:top-[50%] ipad:w-[37rem] ipad:left-[38%]
    ipadMini:top-[40%] ipadMini:w-[40rem] ipadMini:left-[30%]
    ipadPro:top-[36%]
    xl:top-[30%] xl:left-[20%] xl:w-[28rem]
    xl2:top-[28%] xl2:left-[29%] xl2:w-[36rem]"
      >
        <Image
          priority={true}
          src={"/other/screens.png"}
          alt="logo"
          width={500}
          height={500}
          className=" drop-shadow-2xl"
        />
      </div>
    </section>
  );
}
