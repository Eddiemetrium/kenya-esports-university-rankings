"use client";
import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
};

const variants = {
  tarFillWhiteA7006c: "bg-white-a700_6c",
};

const sizes = {
  xs: "h-[7.75rem] p-[1.25rem] text-[1.6rem]",
};

const TextArea = React.forwardRef(
  (
    {
      className="",
      name ="",
      placeholder="",
      shape,
      size = "xs",
      variant = "tarFillWhiteA7006c",
      onChange,
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <textarea
        ref={ref}
        className={`${className} ${shape && shapes[shape]} ${
          size && sizes[size]
        } ${variant && variants[variant]}`}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        {...restProps}
      />
    );
  }
);

TextArea.displayName = "TextArea";

TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(["square"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["tarFillWhiteA7006c"]),
};

export { TextArea };
