import React from "react";

function Text({ text, className, children }) {
  return (
    <p
      className={`text-[18px] font-normal  text-text-primary lg:text-[22px] ${className}`}
    >
      {text}
      {children}
    </p>
  );
}

export default Text;
