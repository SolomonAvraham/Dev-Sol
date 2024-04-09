import Button from "@/components/features/button/button";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Intro() {
  async function redirectURL() {
    "use server";
    return redirect("/contact");
  }

  return (
    <section className="relative  landScape8:pb-52 nexus7:pb-0 nexus7:mb-0 landScape5:mb-44  ">
      <div className="  text-white bg-gradient-to-t from-[#f6b94f] via-[#eea236] to-[#edb200] min-h-screen custom-clip-path flex flex-col nexus7:items-center nexus7:text-center  px-2">
        <h1 className=" font-fjalla mt-5 xl:tracking-widest">Small Business</h1>
        <hr className="h-1 -mt-4 landScape5:w-4/6  shadow shadow-slate-200 bg-orange-900  opacity-10 " />
        <h2 className="-mt-1 font-bebas font-semibold tracking-widest">
          Web Design + Development
        </h2>
        <hr className="h-1 landScape5:w-7/12 -mt-2 shadow shadow-slate-200 bg-orange-900 opacity-5 " />
        <p className="font-reddit ">
          No WordPress or page builders - We offer 100% hand-coded websites with
          superior results starting at $100/mo.
        </p>
        <form action={redirectURL} className="xl:ml-32 cursor-pointer">
          <Button
            type={"submit"}
            px="2"
            py="2"
            color="bg-gray-100 text-black mt-6 font-light"
            className={
              "hover:bg-orange-300   hover:text-white iPhone5:text-base iPhone8:text-lg  iPhone8Plus:text-xl landScape8:text-2xl xl:text-base tracking-wide xl2:text-xl"
            }
          >
            GET IN TOUCH!
          </Button>
        </form>
      </div>
      <div
        className="screensImage absolute z-10 w-[10rem]  left-14 drop-shadow  opacity-95
     iPhone5:w-[13rem] iPhone5:left-20 iPhone5:bottom-[25%]  
   iPhone8:top-[47%] iPhone8:w-[18rem] iPhone8:left-[4rem]
    iPhone8Plus:top-[55%] iPhone8Plus:w-[20rem] iPhone8Plus:left-16

    landScape5:top-[56%] landScape5:w-[16rem] landScape5:left-[40%]
    landScape8:top-[58%] landScape8:w-[27rem] landScape8:left-[14%]
    landScape8Plus:top-[55%] landScape8Plus:left-[14%]
    
    nexus7:top-[38%] nexus7:w-[76rem] nexus7:left-10  nexus7:mx-auto
    ipad:top-[50%] ipad:w-[37rem] ipad:left-[38%]
    ipadMini:top-[30%] ipadMini:w-[40rem] ipadMini:left-[20%]
    

    landScapeNexus7:top-[45%]  landScapeNexus7:left-40 landScapeNexus7:right-0 landScapeNexus7:mx-auto
    landScapeIpadPro:top-[39%] landScapeIpadPro:w-full landScapeIpadPro:left-72 landScapeIpadPro:right- landScapeIpadPro:mx-auto
landScapeIpad:top-[39%]


    xl:top-[38%] xl:left-[26%] xl:w-[45rem]  xl:mx-auto
    xl2:top-[28%] xl2:left-[29%] xl2:w-[36rem]"
      >
        <Image
          priority={true}
          src={"/other/screens.png"}
          alt="screens"
          width={500}
          height={500}
          className=" drop-shadow-2xl"
        />
      </div>
    </section>
  );
}
