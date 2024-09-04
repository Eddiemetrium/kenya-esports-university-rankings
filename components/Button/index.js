import React from "react";
import PropTypes from "prop-types";

const Button = ({
  children,
  className = "",
  shape = "RoundedBorder5",
  variant = "OutlineIndigo900",
  size = "sm",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape]} ${variants[variant]} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </button>
  );
};

const shapes = {
  RoundedBorder5: "rounded-radius5",
};
const variants = {
  OutlineIndigo900: "bg-white_A700 border-2 border-indigo_900 border-solid",
  FillBlueA700: "bg-blue_A700 text-white_A700",
  OutlineBlack900:
    "bg-gray_50 border-2 border-black_900 border-solid text-black_900",
};
const sizes = {
  sm: "p-[5px] text-[12.25px]",
  md: "p-[8px] text-[14.25px]",
  lg: "p-[12px] text-[16.25px]",
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder5"]),
  variant: PropTypes.oneOf([
    "OutlineIndigo900",
    "FillBlueA700",
    "OutlineBlack900",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

Button.defaultProps = {
  className: "",
  shape: "RoundedBorder5",
  variant: "OutlineIndigo900",
  size: "sm",
};

export default Button;
