"use client";
import React, { useState } from "react";
import validate from "@/app/contato/validateInfo";
import useForm from "@/app/contato/useForm";
import Image from "next/image";
import Animation from "../animations/Animation";
import Link from "next/link";
import { motion } from "framer-motion";
import TextareaAutosize from "react-textarea-autosize";
import InputMask from "react-input-mask";

const ContactForm = ({ ...props }) => {
  const {
    isSubmitting,
    handleChange,
    values,
    handlePress,
    errors,
    isLoading,
    // showSuccess,
    showFail,
  } = useForm(validate);

  return (
    <div className="w-full max-w-[650px]">
      <form className="flex h-full w-full flex-col justify-center">
        <div
          className={`mb-[20px] w-full border-b-[1px] ${
            errors.name ? "border-[#FF2847]" : "border-text-primary"
          } `}
        >
          <span className="relative my-2">
            <input
              className={`h-[70px] w-full bg-[transparent] ps-5 font-inter text-[18px] font-bold uppercase text-white placeholder-white outline-0`}
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={handleChange}
              placeholder="seu nome"
            ></input>
            {errors.name && (
              <div className="absolute right-1 top-[50%] -translate-y-1/2">
                <Image
                  src="/assets/icons/general/warning-icon.svg"
                  width={8}
                  height={8}
                  alt="Error Icon"
                />{" "}
              </div>
            )}
          </span>
        </div>
        <div
          className={`mb-[20px] mr-2 w-full border-b-[1px] no-underline ${
            errors.email ? "border-[#FF2847]" : "border-text-primary"
          }`}
        >
          <span className="relative my-2 no-underline ">
            <input
              className={`h-[70px] w-full bg-[transparent] ps-5 font-inter text-[18px] font-bold uppercase text-white no-underline placeholder-white outline-0`}
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              placeholder="EMAIL"
            ></input>
            {errors.email && (
              <div className="absolute right-1 top-[50%] -translate-y-1/2">
                <Image
                  src="/assets/icons/general/warning-icon.svg"
                  width={8}
                  height={8}
                  alt="Error Icon"
                />{" "}
              </div>
            )}
          </span>
        </div>
        <div
          className={`mb-5 w-full border-b-[1px] no-underline ${
            errors.phone ? "border-[#FF2847]" : "border-text-primary"
          }`}
        >
          <span className="relative my-2 no-underline">
            <InputMask
              mask="+55 (99) 99999-9999"
              maskChar={null}
              className={`h-[70px] w-full bg-[transparent] ps-5 font-inter text-[18px] font-bold uppercase text-white no-underline placeholder-white outline-0`}
              type="tel"
              name="phone"
              id="phone"
              value={values.phone}
              onChange={handleChange}
              placeholder="ddd + telefone"
            ></InputMask>
            {errors.phone && (
              <div className="absolute right-1 top-[50%] -translate-y-1/2">
                <Image
                  src="/assets/icons/general/warning-icon.svg"
                  width={8}
                  height={8}
                  alt="Error Icon"
                />{" "}
              </div>
            )}
          </span>
        </div>
        <div
          className={`mb-[20px] w-full border-b-[1px] no-underline ${
            errors.message ? "border-[#FF2847]" : "border-text-primary"
          }`}
        >
          <span className="relative my-2 no-underline">
            <TextareaAutosize
              className={`w-full resize-none bg-[transparent] py-[20px] ps-5 font-inter text-[18px] font-bold uppercase text-white no-underline placeholder-white outline-0`}
              type="text"
              name="message"
              id="message"
              value={values.message}
              onChange={handleChange}
              placeholder="fale sobre seu projeto"
            />
            {errors.message && (
              <div className="absolute right-1 top-[50%] -translate-y-[145%]">
                <Image
                  src="/assets/icons/general/warning-icon.svg"
                  width={8}
                  height={8}
                  alt="Error Icon"
                />{" "}
              </div>
            )}
          </span>
        </div>

        {/* {showSuccess && (
          <motion.div
            initial={{ y: "1.1em", opacity: 0 }}
            animate={{ y: "0em", opacity: 1 }}
            transition={{
              delay: 0.2,
              ease: [0.2, 0.65, 0.3, 0.9],
              duration: 0.4,
            }}
            className="mb-10 flex items-center justify-center text-text-primary"
          >
            <div className="flex flex-col items-center justify-center text-center">
              <Image
                src="/assets/icons/general/check-icon.svg"
                height={20}
                width={20}
                alt="Check Icon"
              />
              <h1 className="gradient-text font-inter text-[32px] font-bold tracking-tighter">
                Mensagem enviada!
              </h1>
              <p className="font-inter text-[22px] tracking-tighter text-text-secondary">
                Retornaremos com você em breve.
              </p>
            </div>
          </motion.div>
        )} */}

        {showFail && (
          <motion.div
            initial={{ y: "1.1em", opacity: 0 }}
            animate={{ y: "0em", opacity: 1 }}
            transition={{
              delay: 0.2,
              ease: [0.2, 0.65, 0.3, 0.9],
              duration: 0.4,
            }}
            className="mb-10 flex items-center justify-center text-text-primary"
          >
            <div className="flex flex-col items-center justify-center text-center">
              <Image
                src="/assets/icons/general/warning-icon.svg"
                height={10}
                width={10}
                alt="Warning Icon"
              />
              <h1 className="gradient-text font-inter text-[32px] font-bold tracking-tighter">
                Erro ao enviar a mensagem!
              </h1>
              <p className="font-inter text-[22px] tracking-tighter text-text-secondary">
                Tente novamente em breve.
              </p>
            </div>
          </motion.div>
        )}

        {!isSubmitting && (
          <button onClick={handlePress} className="">
            <div className="flex h-fit w-full items-center justify-center rounded-lg bg-[#FF2847] p-5 shadow-[0px_10px_63px_0px_rgba(255,40,71,0.50)] transition-all duration-200 ease-in hover:bg-[#8f091d] hover:transition-all hover:duration-200 hover:ease-out">
              <div className="group flex flex-row items-center">
                {isLoading ? (
                  <></>
                ) : (
                  <p className="mr-5 font-inter text-[18px] font-semibold uppercase text-text-primary transition duration-200 ease-out group-hover:text-white group-hover:underline group-hover:transition group-hover:duration-200 group-hover:ease-out">
                    Enviar mensagem
                  </p>
                )}
                <div className="flex items-center justify-center rounded-[7px] transition duration-200 ease-out group-hover:transition group-hover:duration-200 group-hover:ease-out">
                  {isLoading ? (
                    <Image
                      src="/assets/icons/general/loader-icon.svg"
                      height={25}
                      width={25}
                      className="animate-spin"
                      alt="Spin Icon"
                    />
                  ) : (
                    <Image
                      src="/assets/icons/general/arrow.svg"
                      height={25}
                      width={25}
                      className=" transition duration-200 ease-out group-hover:transition group-hover:duration-200 group-hover:ease-out"
                      alt="Arrow Icon"
                    />
                  )}
                </div>
              </div>
            </div>
          </button>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
