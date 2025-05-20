import React from "react";

interface Props {
  children?: React.ReactNode;
  padding?: "xs" | "sm" | "md" | "lg" | "xlg" | "2xl" | "none";
  bgColor?: "dark" | "white" | "theme";
  border?: "top" | "bottom" | "none";
  className?: string;
}
const bgColors: Record<string, string> = {
  dark: "bg-gray-700",
  white: "bg-gray-100",
  theme: "bg-gray-50 dark:bg-gray-800",
};
const borders: Record<string, string> = {
  top: "border-t border-t-gray-300 dark:border-t-gray-700",
  bottom: "border-b border-b-gray-300 dark:border-b-gray-700",
};
const CardBody = ({ padding = "xs", bgColor = "dark", border = "none", className = "", children }: Props) => {
  const paddings = {
    none: "px-0 py-0",
    xs: "px-[10px] py-[10px]",
    sm: "px-[12px] py-[12px]",
    md: "px-[16px] py-[16px]",
    lg: "px-[20px] py-[20px]",
    xlg: "px-[25px] py-[25px]",
    "2xl": "px-[48px] py-[48px]",
  }[padding];
  const cardBodyBgColors = bgColors[bgColor] || "";
  const cardBodyBorderColor = borders[border] || "";
  const finalClasses = `w-full ${cardBodyBgColors} ${cardBodyBorderColor} ${paddings} ${className}`;
  return <div className={finalClasses}> {children} </div>;
};

export default CardBody;
