// 'use client'
import Link from "next/link";
import Image from "next/image";
import { footerData } from "@/data/footer-data";
import { generalData } from "@/data/general-data";

const Footer = () => {
  return (
    <footer className="text-text-extra-0 bg-background-0 flex flex-col items-center justify-center px-5 pb-5 text-[14px] uppercase tracking-[-0.7px] lg:flex-row lg:items-center lg:justify-between ">
      <div className="flex flex-col items-center justify-center text-center lg:flex-row lg:text-start">
        <div className="mb-5 h-5 w-5 lg:mb-0 lg:mr-5">
          <Image
            alt="hokup"
            src="/assets/main/icon-small-hokup.svg"
            height={20}
            width={20}
          />
        </div>
        <p className=" mb-5 lg:mb-0 lg:mr-5 ">
          crafting digital projects, <br className="lg:hidden" /> from concept
          to launch
        </p>
        <p className="hidden lg:block">são paulo - br</p>
      </div>
      <p>hokup © 2024 - All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
