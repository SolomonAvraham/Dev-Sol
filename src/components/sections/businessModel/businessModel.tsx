import Image from "next/image";
import { BiSolidCheckboxChecked } from "react-icons/bi";

export default function BusinessModel() {
  const servicesExplanation = [
    {
      header: "Hosting Fees Included",
      paragraph: "Hosting fees are built right into the monthly payment.",
    },
    {
      header: "Unlimited Edits",
      paragraph:
        "Change anything you want at anytime and it will be done that day.",
    },
    {
      header: "24/7 Customer Service",
      paragraph:
        "Call direct anytime day or night, no phone trees or automated responses.",
    },
    {
      header: "Web Design & Development",
      paragraph: "Includes over 40 hours of design, development, and testing.",
    },
  ];
  return (
    <section className=" relative text-center flex flex-col items-center justify-center py-10 ">
      <Image
        priority={true}
        src={"/background/2.png"}
        alt={"design icon"}
        width={500}
        height={500}
        className="-z-10 absolute  -bottom-52 -left-20 filter brightness-[.66] drop-shadow-xl  opacity-10  w-3/6 "
      />
      <Image
        priority={true}
        src={"/businessModel/1.png"}
        alt={"business model"}
        width={500}
        height={500}
        className="xs:w-44 xl:w-[23rem] xl:hidden block "
      />
      <h1 className="text-xl px-1 iPhone5:text-4xl  font-fjalla mt-5 ">
        <span className="text-orange-400">$100</span> Per Month, 12 Month
        Minimum Contract
      </h1>
      <div className="xl:px-52">
        <p className="text-sm iPhone5:text-lg p-3  font-reddit ">
          $100 a month for a standard 5 page small business website. If you need
          more than that then we have to do custom pricing based on the scope of
          work, number of additional pages, and time involved.
        </p>
        <p className="text-sm iPhone5:text-xl p-3 font-fjalla">
          You own your domain, content, listing, and profiles. Cancel anytime
          with no fees or hassle.
        </p>
        <div className="xl:flex p-2">
          {" "}
          <Image
            priority={true}
            src={"/businessModel/1.png"}
            alt={"business model"}
            width={500}
            height={500}
            className=" xl:w-[30rem] xl:block hidden"
          />
          <div className="">
            {servicesExplanation.map((item, i: number) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center py-3 gap-1 p-3 text-sm "
              >
                <div
                  key={i + "12"}
                  className="flex items-center gap-1 justify-center"
                >
                  <BiSolidCheckboxChecked
                    key={i + "22"}
                    className="text-2xl text-orange-400"
                  />

                  <h1 key={item.header} className="  font-fjalla text-lg  ">
                    {item.header}
                  </h1>
                </div>

                <p
                  key={item.paragraph}
                  className=" text-base px-1  font-reddit"
                >
                  {item.paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>{" "}
      </div>
    </section>
  );
}
