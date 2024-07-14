"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import DefaultButton from "../buttons/DefaultButton";

export default function Header() {
  return (
    <>
      <div className="bg-[linear-gradient(90deg, rgba(0, 0, 0, 0.70) 0%, rgba(38, 38, 38, 0.70) 100%);] fixed z-[999] flex min-h-[80px] w-full border-b-[1px] border-[#ffffff33] px-[20px] backdrop-blur-lg">
        {/* <div className='backdrop'></div> */}
        <div className="flex h-[80px] min-h-[80px] w-full flex-row items-center">
          {/* Logo */}
          <div className="hidden h-[40px] min-h-[40px] w-[150px] min-w-[150px] md:block">
            <a href="/">
              <Image
                priority
                src="/assets/main/main-logo.svg"
                alt="hokup"
                width={150}
                height={40}
              />
            </a>
          </div>

          <div className="h-[40px] min-h-[40px] w-[40px] min-w-[40px] md:hidden">
            <a href="/">
              <Image
                priority
                src="/assets/main/icon-hokup.svg"
                alt="hokup"
                width={40}
                height={40}
              />
            </a>
          </div>

          {/* Navigation */}
          <div className="flex w-full flex-row items-center justify-end pl-5 text-[18px] md:justify-end lg:pl-[80px]">
            <div className="w-fit whitespace-nowrap text-text-primary ">
              <Link href="#contato">
                <DefaultButton title="COMEÇAR PROJETO" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
