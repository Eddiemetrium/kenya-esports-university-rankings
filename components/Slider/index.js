"use Client";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Slider = React.forwardRef(
  (
    {
      items = [],
      activeIndex = 0,
      centerMode,
      magnifiedIndex = 0,
      activeIndexClass = "scale-75",
      ...props
    },
    ref
  ) => {
    const isSmall = (index) => {
      if (
        props?.activeIndex &&
        centerMode &&
        magnifiedIndex >= 0 &&
        items?.length
      ) {
        return (
          index !== props?.activeIndex + magnifiedIndex &&
          index !== magnifiedIndex
        );
      } else {
        return index !== props?.activeIndex + magnifiedIndex;
      }
    };

    const slideItems = centerMode
      ? items.map((child, index) => {
          if (isSmall(index)) {
            return React.cloneElement(child, {
              ...child.props,
              className: [child.props?.className, activeIndexClass]
                .filter(Boolean)
                .join(" "),
            });
          }

          return React.cloneElement(child);
        })
      : items;

    return (
      <AliceCarousel
        items={slideItems}
        infinite
        ref={ref}
        {...props}
        mouseTracking
        disableButtonsControls
      />
    );
  }
);

Slider.displayName = "Slider";

export { Slider };
