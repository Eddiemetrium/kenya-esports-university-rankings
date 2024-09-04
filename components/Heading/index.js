import React from "react";

const sizes = {
  textxs: "text-[0.63rem] font-medium",
  textsm: "text-[0.75rem] font-medium",
  textmd: "text-[1.25rem] font-medium md:text-[1.38rem]",
  textlg: "text-[1.50rem] font-medium md:text-[1.88rem] sm:text-[1.50rem]",
  text2xl: "text-[2.00rem] font-semibold",
  text3xl: "text-[2.50rem] font-semibold md:text-[2.25rem] sm:text-[2.00rem]",
  text4xl: "text-[3.00rem] font-bold md:text-[2.50rem] sm:text-[2.50rem]",
  headingxs: "text-[0.88rem] font-semibold",
  headingsm: "text-[1.00rem] font-semibold",
  headingmd: "text-[1.25rem] font-bold md:text-[1.38rem] sm:text-[1.25rem]",
  headinglg: "text-[1.50rem] font-bold md:text-[1.38rem] sm:text-[1.50rem]",
  headingxl: "text-[1.88rem] font-bold md:text-[1.63rem] sm:text-[1.88rem]",
  heading2xl: "text-[2.75rem] font-bold md:text-[2.38rem] sm:text-[2.13rem]",
  heading3xl: "text-[3.50rem] font-bold md:text-[3.00rem] sm:text-[2.88rem]",
  heading4xl: "text-[4.00rem] font-bold md:text-[3.38rem] sm:text-[2.88rem]",
};

const Heading = ({
  children,
  className = "",
  size = "heading1xl",
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export default Heading;
