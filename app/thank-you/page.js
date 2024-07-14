"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/contact-form/ContactForm";
import { motion } from "framer-motion";
import Hero from "@/components/hero/Hero";
import Marquee from "react-fast-marquee";
import Title from "@/components/texts/Title";
import Text from "@/components/texts/Text";
import Subtitle from "@/components/texts/Subtitle";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import Testimonial from "@/components/testimonial/Testimonial";

import DefaultButton from "@/components/buttons/DefaultButton";

//Integrations
import FacebookPixel from "@/components/pixel/FacebookPixel";

const ThankYou = () => {
  return (
    <>
      <FacebookPixel />
      <section className="min-w-screen flex h-full min-h-screen flex-col justify-between bg-contact text-center font-inter">
        {/* INTRO */}
        <div
          className="m-auto flex h-full w-full flex-col items-center justify-center"
          style={{ height: "100% !important" }}
        >
          <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-[7px] bg-[#ffffff33]">
            <Image
              src="/assets/icons/general/doublecheck.svg"
              height={32}
              width={32}
              alt="Check Icon"
            />
          </div>
          <Title
            className="mb-5 max-w-[1102px] text-center"
            text="Mensagem enviada com sucesso!"
          />
          <Text
            className="mb-10 max-w-[878px] text-center"
            text="Em breve, um de nossos especialistas irá retornar o contato."
          />
          <Link href="/">
            <PrimaryButton title="voltar para home" />
          </Link>
        </div>
        {/* FOOTER */}
        <footer className="flex flex-col items-center justify-center px-5 pb-5 text-[14px] uppercase tracking-[-0.7px] text-text-extra-0 lg:flex-row lg:items-center lg:justify-between ">
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
              crafting digital projects, <br className="lg:hidden" /> from
              concept to launch
            </p>
            <p className="hidden lg:block">são paulo - br</p>
          </div>
          <p>hokup © 2024 - All Rights Reserved.</p>
        </footer>
      </section>
    </>
  );
};

export default ThankYou;
