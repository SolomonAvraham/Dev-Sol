import Link from "next/link";
import Image from "next/image";

export default function Logo(props: { className?: string }) {
  return (
    <Link href={"/"}>
      <Image
        priority={true}
        src="/logo/logo.png"
        width={500}
        height={500}
        alt="logo"
        className={props.className}
      />
    </Link>
  );
}
