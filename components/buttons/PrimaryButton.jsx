import React from "react";
import Image from "next/image";

function PrimaryButton({ title, className }) {
  return (
    <div
      className={`group group flex flex-row items-center rounded-lg bg-[#FF2847] p-5 shadow-[0px_10px_63px_0px_rgba(255,40,71,0.50)] transition-all duration-200 ease-in hover:bg-[#8f091d] hover:transition-all hover:duration-200 hover:ease-out ${className}`}
      key={title}
    >
      <p className="mr-5 hidden font-inter text-[18px] font-semibold uppercase text-white transition-all duration-200 ease-out group-hover:text-white group-hover:underline group-hover:transition-all group-hover:duration-200 group-hover:ease-out md:block">
        {title}
      </p>
      <p className="mr-5 font-inter text-[18px] font-semibold uppercase text-white transition-all duration-200 ease-out group-hover:text-white group-hover:underline group-hover:transition-all group-hover:duration-200 group-hover:ease-out md:hidden">
        COMEÇAR PROJETO
      </p>
      <div className="flex h-fit w-fit items-center justify-center rounded-[7px] transition-all duration-200 ease-out group-hover:transition-all group-hover:duration-200 group-hover:ease-out">
        <Image
          alt="Arrow Icon"
          src="/assets/icons/general/arrow.svg"
          height={25}
          width={25}
          className="invert-0 transition-all duration-200 ease-out group-hover:transition-all group-hover:duration-200 group-hover:ease-out"
        />
      </div>
    </div>
  );
}

export default PrimaryButton;
