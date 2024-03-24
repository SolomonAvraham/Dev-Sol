import { ReactNode } from "react";

type ButtonProps = {
  type: "submit" | "button";
  color: string;
  px: string;
  py: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

export default function Button({
  type,
  px,
  py,
  color,
  children,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${className} text-xs px-${px} py-${py} rounded  ${color} cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
