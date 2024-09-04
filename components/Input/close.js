import React from "react";

const Closesvs = ({ fillColor = "#002200", className = "", ...props }) => {
  return (
    <svg
      height={props?.width || 20}
      width={props?.height || 20}
      viewBox={`0 0 ${props?.width || 28} ${props?.height || 29}`}
    >
      <path d="M 4.7979312 3.2929685 L 3.2929688 4.7976312 L 19.585935 12 L 3.2929583 19.292969 L 4.7979312 20.787831 L 12 13.414862 L 19.292959 28.707831 L 20.797931 13.292955 L 13.419062 12 L 29.767831 4.7979312 L 19.292569 3.2929685 L 12 10.585932 L 4.7978312 3.292938 2" />
    </svg>
  );
};
