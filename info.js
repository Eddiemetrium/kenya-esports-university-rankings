import { useMemo } from "react";
import PropTypes from "prop-types";

const Info = ({
  className = "",
  gEORGINOZ,
  backendDeveloper,
  propAlignSelf,
  propPadding,
  propWidth,
  propPadding1,
}) => {
  const infoStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding,
      width: propWidth,
    };
  }, [propAlignSelf, propPadding, propWidth]);

  const nameStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div
      className={`self-stretch bg-gray-1200 flex flex-col items-center justify-start pt-[0.812rem] px-[1.25rem] pb-[0.875rem] box-border max-w-full z-[2] mt-[-5.875rem] text-center text-[1.5rem] text-white font-hind ${className}`}
      style={infoStyle}
    >
      <div className="w-[22.5rem] h-[5.875rem] relative bg-gray-1200 hidden max-w-full" />
      <div
        className="h-[2.375rem] flex flex-row items-start justify-end py-[0rem] pl-[0.437rem] pr-[0.375rem] box-border"
        style={nameStyle}
      >
        <div className="relative tracking-[0.04em] font-semibold z-[3] mq450:text-[1.188rem]">
          {gEORGINOZ}
        </div>
      </div>
      <div className="relative text-[1.125rem] tracking-[0.04em] text-silver-200 z-[3]">
        {backendDeveloper}
      </div>
    </div>
  );
};

Info.propTypes = {
  className: PropTypes.string,
  gEORGINOZ: PropTypes.string,
  backendDeveloper: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propPadding: PropTypes.any,
  propWidth: PropTypes.any,
  propPadding1: PropTypes.any,
};

export default Info;
