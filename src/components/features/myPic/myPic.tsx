import Image from "next/image";

export default function MyPic() {
  return (
    <div className=" py-[0.10rem] px-[0.10rem] bg-gradient-to-r from-orange-300 to-black shadow-md border-[0.1px] border-gray-500 rounded-full w-44">
      <Image
        priority={true}
        src={"/me/1.jpeg"}
        alt="me"
        width={500}
        height={500}
        className=" mx-auto rounded-full w-44 border-[0.1px] border-gray-500"
      />
    </div>
  );
}
