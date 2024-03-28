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
    <section className="text-center flex flex-col items-center justify-center py-10 ">
      <Image
        src={"/businessModel/1.png"}
        alt={"business model"}
        width={500}
        height={500}
        className="xs:w-44 xl:w-[33rem]"
      />
      <h1 className="text-xl iPhone5:text-3xl font-bold mt-5 ">
        $100 Per Month, 12 Month Minimum Contract
      </h1>
      <div className="xl:px-52">
        <p className="text-sm iPhone5:text-lg p-3">
          $100 a month for a standard 5 page small business website. If you need
          more than that then we have to do custom pricing based on the scope of
          work, number of additional pages, and time involved.
        </p>
        <p className="text-sm iPhone5:text-lg p-3 ">
          You own your domain, content, listing, and profiles. Cancel anytime
          with no fees or hassle.
        </p>
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

              <h1
                key={item.header}
                className="font-bold iPhone5:text-xl  iPhone5Landscape:text-3xl"
              >
                {item.header}
              </h1>
            </div>

            <p
              key={item.paragraph}
              className=" text-sm px-1 iPhone5:text-lg  iPhone5Landscape:text-xl"
            >
              {item.paragraph}
            </p>
          </div>
        ))}{" "}
      </div>
    </section>
  );
}
