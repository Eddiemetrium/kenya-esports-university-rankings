import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[px]",
};

const variants = {
  FLL: {
    white: "bg-white-a70 text-white-a708",
  },
};

const sizes = {
  "h-[3.5rem] px-[1.13rem] text-[1.0rem]": null,
  "h-[4.38rem] px-[0.7rem] text-[1.0rem]": null,
};

const Input = React.forwardRef(function Input(
  { className, name, placeholder, type, label, shape, size, variant, color },
  ref
) {
  return (
    <div
      className={`${className} flex items-center justify-center text-center text-gray-900 font-sans border bg-white rounded-md ${shape} ${shapes[shape]} ${variant} ${variants[variant]} ${color} ${sizes[size]}`}
    ></div>
  );
});

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  shape: PropTypes.oneOf(["square"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["FLL"]),
  color: PropTypes.oneOf(["white"]),
};

export default Input;
