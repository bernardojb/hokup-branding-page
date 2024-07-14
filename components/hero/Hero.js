import React from "react";

function Hero({ children, ...props }) {
  return (
    <div
      className="bg-hero-image flex h-[100svh] min-h-[900px] flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-5 sm:min-h-[768px]"
      {...props}
    >
      {children}
    </div>
  );
}

export default Hero;
