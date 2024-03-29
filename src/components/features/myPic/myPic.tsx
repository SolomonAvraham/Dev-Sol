import Image from "next/image";

export default function MyPic() {
  return (
    <div className=" h-[8rem] w-[8rem] nexus7:h-[15rem] nexus7:w-[15rem] rounded-full border-[0.2rem] nexus7:border-[0.5rem] nexus7:border-b-[16rem] nexus7:outline-[1.5px] shadow-xl border-b-[9rem]  border-black  outline outline-[0.5px] outline-orange-300 ">
      <Image
        priority={true}
        src={"/me/1.jpeg"}
        alt="me"
        width={500}
        height={500}
        className=" p-[1px] rounded-full blur-[0.09px] nexus7:border-1 nexus7:mt-0   border-[0.1px] border-orange-100 mt-[2px]"
      />
    </div>
  );
}
