import MyPic from "@/components/features/myPic/myPic";
import { IoPeople } from "react-icons/io5";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className=" relative min-h-screen text-center py-10 flex flex-col items-center justify-center gap-2">
      <Image
        priority={true}
        src={"/background/1.png"}
        alt={"design icon"}
        width={500}
        height={500}
        className="-z-10 absolute  -top-10 -right-30 filter brightness-[.66] drop-shadow-xl  opacity-5  w-3/6 "
      />
      <h1 className="xs:text-xl  iPhone5:text-4xl font-fjalla tracking-wider">
        WHO<span className=" text-orange-400">WE</span>ARE
      </h1>
      <div className="mt-1 mb-10 iPhone5:text-2xl flex items-center justify-center xs:text-xl text-[#edb200] opacity-50">
        ---- <IoPeople />
        ----
      </div>
      <MyPic />
      <h4 className=" font-fjalla tracking-wide xs:text-xl nexus7:mt-8 xl:text-4xl">
        Solomon<span className="text-orange-400">Avraham</span>.
      </h4>
      <h5 className="xs:text-sm text-gray-500 xl:text-xl">
        <span className="text-orange-400">OWNER</span>/DEVELOPER
      </h5>{" "}
      <p className=" font-reddit xs:text-lg p-3 xl:px-52">
        My name is Solomon, and I&apos;m a full-stack developer with a deep passion
        for my profession. After dedicating over a year to self-study in
        full-stack development, I&apos;ve honed my skills to not just build websites,
        but to craft digital experiences. My journey into web development was
        driven by my desire to offer my expertise to clients while engaging in
        work I truly love. Having built numerous sites, each project has been a
        step in refining my approach and solidifying my commitment to
        excellence. I&apos;m here to bring your vision to life with dedication and
        precision, eager to provide top-notch services to my clients.
      </p>
    </section>
  );
}
