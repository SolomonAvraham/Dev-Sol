import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Image
        priority={true}
        src="/logo/logo.png"
        width={500}
        height={500}
        alt="logo"
      />
    </Link>
  );
}
