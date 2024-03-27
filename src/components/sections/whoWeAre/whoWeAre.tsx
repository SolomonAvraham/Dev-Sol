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
      <p className="xs:text-lg p-3 xl:px-52">
        My name is Solomon, and I'm a full-stack developer with a deep passion
        for my profession. After dedicating over a year to self-study in
        full-stack development, I've honed my skills to not just build websites,
        but to craft digital experiences. My journey into web development was
        driven by my desire to offer my expertise to clients while engaging in
        work I truly love. Having built numerous sites, each project has been a
        step in refining my approach and solidifying my commitment to
        excellence. I'm here to bring your vision to life with dedication and
        precision, eager to provide top-notch services to my clients.
      </p>
      <div className="bg-black h-28 w-28 rounded-full mx-auto mt-5 xl:h-64 xl:w-64">
        <div className="bg-white h-[5.6rem] w-[5.6rem] rounded-full mx-auto mt-5 xl:h-64 xl:w-44"></div>
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
