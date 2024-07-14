import React from "react";

function Title({ text, className, children }) {
  return (
    <h1
      className={`text-[36px] font-bold text-white lg:text-[42px] ${className}`}
    >
      {text}
      {children}
    </h1>
  );
}

export default Title;
