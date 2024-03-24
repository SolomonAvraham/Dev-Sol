import { IoPeople } from "react-icons/io5";

export default function WhoWeAre() {
  return (
    <section className="min-h-screen text-center py-10 flex flex-col items-center justify-center gap-2">
      {" "}
      <h1 className="xs:text-xl font-bold iPhone5:text-4xl iPhone5Landscape:text-6xl">
        WHO<span className=" text-orange-400">WE</span>ARE
      </h1>
      <div className="mt-1 iPhone5Landscape:text-4xl iPhone5:text-2xl flex items-center justify-center xs:text-xl text-[#edb200] opacity-50">
        ---- <IoPeople />
        ----
      </div>
      <p className="xs:text-lg p-3 iPhone5Landscape:text-xl">
        My name is Ryan, I am a stay at home dad and web developer. I started
        this business to help provide for the family while still being able to
        be home and raise the kids. I spent a year and a half teaching myself
        the right way to make websites and learning to write the code myself.
        Now after being in business professionally for over 5 years I have built
        hundreds websites and have my method down to a science. LEARN MORE
      </p>
      <div className="bg-black h-28 w-28 rounded-full mx-auto mt-5 iPhone5Landscape:h-64">
        <div className="bg-white h-[5.6rem] w-[5.6rem] rounded-full mx-auto mt-5 iPhone5Landscape:h-64"></div>
      </div>
      <h4 className="font-bold xs:text-xl iPhone5Landscape:text-5xl iPhone5Landscape:mt-8">
        Solomon<span className="text-orange-400">Avraham</span>.
      </h4>
      <h5 className="xs:text-sm text-gray-500 iPhone5Landscape:text-3xl">
        <span className="text-orange-400">OWNER</span>/DEVELOPER
      </h5>
    </section>
  );
}
