import React from "react";

function Subtitle({ text, className }) {
  return (
    <div
      className={` pb-5 text-[18px] font-semibold uppercase text-text-secondary lg:text-[22px] ${className}`}
    >
      {text}
    </div>
  );
}

export default Subtitle;
