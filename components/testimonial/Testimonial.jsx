import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import Subtitle from "../texts/Subtitle";
import Image from "next/image";

export default function EmblaCarousel() {
  let clients = [
    {
      id: 1,
      project: "projeto de branding",
      text: `“Com a ajuda da Hokup conseguimos dar maior visibilidade para a Jetcross através de uma identidade moderna, criativa e com personalidade. Estamos 100% satisfeitos!”`,
      name: "Guilherme Samaia",
      office: "Fundador da Jetcross",
      img: "/assets/images/testimonials/guilherme.png",
    },
    {
      id: 2,
      project: "projeto de branding + website",
      text: `"Com uma visão moderna, a hokup acertou em cheio na criação da identidade visual e do website da SFLEX. A atenção aos detalhes garantiu a excelência da entrega."`,
      name: "Nicholas Neves",
      office: "Sócio Diretor na Sflex",
      img: "/assets/images/testimonials/nicholas.png",
    },
    {
      id: 3,
      project: "projeto de branding + website",
      text: `"A hokup renovou o posicionamento digital da Brite através de um rebranding único e profissional. O website, além de bonito, ficou super performático.”`,
      name: "Gabriel Giraldes",
      office: "Diretor Executivo na Brite",
      img: "/assets/images/testimonials/gabriel.png",
    },
  ];

  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      pagination={{
        clickable: true,
      }}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      className="mySwiper h-full rounded-3xl shadow-[0px_25px_80px_10px_rgba(255,255,255,0.15)] lg:px-10"
    >
      {clients.map((index) => (
        <SwiperSlide
          className="h-full w-full cursor-grab rounded-3xl bg-testimonial p-5 py-10 text-center active:cursor-grabbing "
          key={index.id}
        >
          <div className="flex h-full flex-col items-center justify-between">
            <Subtitle text={index.project} />
            <h1 className="mb-10 max-w-[878px] text-center text-[24px] font-medium text-text-primary lg:text-[32px]">
              {index.text}
            </h1>
            <div className="flex flex-row items-center justify-center">
              <div className=" mr-5 h-[48px] w-[48px] rounded-full border border-text-primary ">
                <Image
                  src={index.img}
                  height={48}
                  width={48}
                  alt={index.name}
                />
              </div>
              <div className="flex flex-col text-start">
                <h1 className=" text-[24px] font-bold text-white lg:text-[28px]">
                  {index.name}
                </h1>
                <p className="text-[18px] text-text-secondary">
                  {" "}
                  {index.office}{" "}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
