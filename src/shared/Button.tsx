import * as React from "react";
import { IconType } from "react-icons";

type ButtonVariant = "filled" | "outlined" | "transparent";

interface ButtonProps {
  variant?: ButtonVariant;
  text?: string;
  Icon?: IconType;
  className?: string;
  iconColor?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = "filled",
  text,
  Icon,
  iconColor,
  className = "",
  onClick,
}) => {
  let baseStyles =
    "flex items-center justify-center gap-2 rounded-lg px-4 py-2 font-medium transition-all duration-300";

  let variantStyles = "";

  if (variant === "filled") {
    variantStyles = "bg-black text-white hover:bg-gray-800";
  } else if (variant === "outlined") {
    variantStyles =
      "border border-black text-black hover:bg-black hover:text-white";
  } else if (variant === "transparent") {
    variantStyles = "bg-transparent text-black hover:bg-gray-100";
  }

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} onClick={onClick}>
      {Icon && <Icon className={`text-gray-500 !${iconColor}`} />}
      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;
