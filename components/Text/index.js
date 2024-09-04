import React from "react";

const sizes = {
  textmd: "text-[0.88rem] font-normal not-italic",
  textlg: "text-[1.0rem] font-normal not-italic",
  textxl: "text-[1.13rem] font-normal not-italic",
};

const Text = ({ children, className ="", as,size = "textlg", ...restProps }) => {
  const Component = as || "p"; // Assuming you want to render a <p> element
  return (
    <Component
      className={`text-gray-500_05 font-avenirnext ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
