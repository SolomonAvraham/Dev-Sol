 
import { redirect } from "next/navigation";

export default function Intro() {
  async function redirectURL() {
    "use server";
    return redirect("/contact");
  }

  return (
    <div className=" absolute top-5 left-0   right-0 z-10 h-full flex flex-col">
      <div className=" text-center text-white flex flex-col gap-2 md:gap-4 justify-center">
        <h1 className=" font-fjalla tracking-widest text-4xl md:text-7xl lg:text-8xl">
          Small Business
        </h1>
        <hr className=" w-3/4 -mt-2 md:-mt-4 mx-auto border-t border-black  bg-black opacity-5 " />
        <h2 className=" font-bebas font-semibold tracking-widest md:text-3xl lg:text-5xl">
          Web Design + Development
        </h2>
        <hr className="border-t -mt-2 md:-mt-4  mx-auto  w-1/2  border-black bg-orange-900  opacity-5 " />
        <p className="font-reddit text-xs px-1 md:px-3 md:text-xl">
          No WordPress or page builders - We offer 100% hand-coded websites with
          superior results starting at $75/mo.
        </p>
        <form action={redirectURL} className=" cursor-pointer">
          <button
            type="submit"
            className="bg-gray-100 py-2 rounded-lg px-2 md:px-3 md:py-3 text-sm md:text-lg text-black mt-4 font-light hover:bg-orange-300   hover:text-white"
          >
            GET IN TOUCH!
          </button>
        </form>{" "}
      </div>
    </div>
  );
}
