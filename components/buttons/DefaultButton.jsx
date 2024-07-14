import React from "react";
import Image from "next/image";

function DefaultButton({ title }) {
  return (
    <div className="group flex flex-row items-center" key={title}>
      <p className="mr-5 font-inter text-[18px] font-semibold uppercase text-text-primary transition duration-200 ease-out group-hover:text-white group-hover:underline group-hover:transition group-hover:duration-200 group-hover:ease-out">
        {title}
      </p>
      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[7px] bg-[#ffffff21] p-[9px] transition duration-200 ease-out group-hover:bg-[#ffffffff] group-hover:transition group-hover:duration-200 group-hover:ease-out">
        <Image
          alt="Arrow Icon"
          src="/assets/icons/general/arrow.svg"
          height={25}
          width={25}
          className="invert-0 transition duration-200 ease-out group-hover:invert group-hover:transition group-hover:duration-200 group-hover:ease-out"
        />
      </div>
    </div>
  );
}

export default DefaultButton;
