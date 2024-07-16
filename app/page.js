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

//cases
import Case1 from "@/public/assets/images/case-1.jpg";
import Case2 from "@/public/assets/images/case-2.jpg";
import Case3 from "@/public/assets/images/case-3.jpg";
import Case4 from "@/public/assets/images/case-4.jpg";
import Case5 from "@/public/assets/images/case-5.jpg";
import Case6 from "@/public/assets/images/case-6.jpg";
import Case7 from "@/public/assets/images/case-7.jpg";
import Case8 from "@/public/assets/images/case-8.jpg";
import Case9 from "@/public/assets/images/case-9.jpg";
import Case10 from "@/public/assets/images/case-10.jpg";
import Case11 from "@/public/assets/images/case-11.jpg";
import Case12 from "@/public/assets/images/case-12.jpg";
import Case13 from "@/public/assets/images/case-13.jpg";
import DefaultButton from "@/components/buttons/DefaultButton";

//Integrations
import FacebookPixel from "@/components/pixel/FacebookPixel";

const Home = () => {
  let services = [
    {
      id: 1,
      icon: "/assets/icons/general/eye.svg",
      title: "branding e identidade visual",
      text: "Criamos marcas do zero, com identidades visuais fortes e consistentes que transmitem os valores, a personalidade e as promessas da sua empresa. Muito mais do que apenas logotipos, construímos a imagem que seu negócio passa aos seus consumidores.",
      pills: [
        { id: "1", value: "logo" },
        { id: "2", value: "design gráfico" },
      ],
    },
    {
      id: 2,
      icon: "/assets/icons/general/cursor.svg",
      title: "desenvolvimento de sites",
      text: "Desenvolvemos sites personalizados e de alta performance, utilizando as tecnologias mais modernas do mercado, que refletem a identidade da sua marca e promovem uma experiência digital única aos seus clientes.",
      pills: [
        { id: "1", value: "LAYOUT DO 0" },
        { id: "2", value: "RESPONSIVOS" },
        { id: "3", value: "RÁPIDOS" },
      ],
    },

    {
      id: 3,
      icon: "/assets/icons/general/layout.svg",
      title: "Design UI e UX",
      text: "Nossa abordagem centrada na experiência do usuário garante o desenvolvimento de interfaces intuitivas e estéticas, aumentando o engajamento e satisfação dos seus clientes e fortalecendo a conexão com sua marca.",
      pills: [
        { id: "1", value: "interface" },
        { id: "2", value: "protótipos" },
        { id: "3", value: "web e mobile" },
      ],
    },
    {
      id: 4,
      icon: "/assets/icons/general/phone.svg",
      title: "Aplicativos (APPs)",
      text: "Criamos aplicativos mobile sob medida para atender às suas necessidades específicas, proporcionando funcionalidades avançadas e uma experiência excepcional aos usuários.",
      pills: [
        { id: "1", value: "ios" },
        { id: "2", value: "android" },
        { id: "3", value: "pwa" },
      ],
    },
    {
      id: 5,
      icon: "/assets/icons/general/browser.svg",
      title: "landing pages",
      text: "Desenvolvemos landing pages otimizadas para conversão, ajudando você a capturar leads e aumentar suas vendas de forma eficaz, sem deixar de lado a qualidade, desempenho e personalidade.",
      pills: [
        { id: "1", value: "conversão" },
        { id: "2", value: "vendas" },
        { id: "3", value: "desempenho" },
      ],
    },
    {
      id: 6,
      icon: "/assets/icons/general/image.svg",
      title: "mídias sociais",
      text: "Desenvolvemos pacotes de mídias personalizados para divulgação do seu negócio nas redes sociais, ajudando você a transmitir a essência e identidade do seu negócio de forma orgânica.",
      pills: [
        { id: "1", value: "posts" },
        { id: "2", value: "vídeos" },
        { id: "3", value: "mídias físicas" },
      ],
    },
  ];

  let cards = [
    {
      id: 1,
      icon: "/assets/icons/general/design.svg",
      title: "DESIGN PERSONALIZADO",
      text: "Cada projeto de branding é cuidadosamente elaborado para refletir a essência e os valores únicos da sua empresa, criando uma identidade visual que realmente fala com seu público.",
      bg: "/assets/images/bg-1.jpg",
    },
    {
      id: 2,
      icon: "/assets/icons/general/users.svg",
      title: "posicionamento",
      text: "Definição dos atributos que representam e definem o conceito, tom de voz e posicionamento da sua marca, enaltecendo suas qualidades e diferenciais em relação aos concorrentes do mercado.",
      bg: "/assets/images/bg-2.jpg",
    },
    {
      id: 3,
      icon: "/assets/icons/general/eye.svg",
      title: "comunicação visual",
      text: "Garantimos que todos os elementos da sua identidade visual, desde o logotipo até a paleta de cores e tipografia, estejam harmonizados para proporcionar uma comunicação visual coesa e profissional.",
      bg: "/assets/images/bg-3.jpg",
    },
    {
      id: 4,
      icon: "/assets/icons/general/smartphone.svg",
      title: "material digital",
      text: "Desenvolvemos pacotes de mídias personalizados para divulgação do seu negócio nas redes sociais, ajudando você a transmitir a essência e identidade do seu negócio de forma orgânica.",
      bg: "/assets/images/bg-4.jpg",
    },
    {
      id: 5,
      icon: "/assets/icons/general/printer.svg",
      title: "material gráfico",
      text: "Sua empresa com a comunicação coerente em todos os lugares! Pacotes de peças personalizadas para impressão tais como cartão de visitas, crachás, envelopes e embalagens com a identidade e essência do seu negócio. ",
      bg: "/assets/images/bg-5.jpg",
    },
    {
      id: 6,
      icon: "/assets/icons/general/files.svg",
      title: "documentos",
      text: "Elaboração de documentos institucionais para elevar o profissionalismo da sua empresa. Criamos layouts para todo tipo de documento como apresentação comercial, modelo de proposta e orçamento.",
      bg: "/assets/images/bg-6.jpg",
    },
  ];

  return (
    <div className="bg-background-0 font-inter">
      <FacebookPixel />
      {/* INTRO */}
      <section>
        <Hero>
          <div className="mb-10 flex flex-col items-center justify-center sm:flex-row">
            <Image
              width={132}
              height={48}
              src="/assets/images/clients.png"
              className="mb-5 mr-0 sm:mb-0 sm:mr-5"
            />
            <Subtitle
              text={"30+ empresas transformadas"}
              className="mb-[-20px] text-center"
            />
          </div>
          <Title
            className="mb-5 max-w-[1102px] text-center"
            text="Aumente seus resultados com um posicionamento visual que comunica diretamente com seus clientes."
          />
          <Text
            className="mb-10 max-w-[878px] text-center"
            text="Descubra como uma identidade adequada pode impulsionar a comunicação e posicionamento da sua empresa. Solicite uma proposta de identidade visual agora!"
          />
          <a href="#contato" className="no-underline">
            <PrimaryButton title="Começar Projeto Agora Mesmo" />
          </a>
        </Hero>
      </section>

      <section className="py-8">
        <Marquee
          gradient
          gradientColor="#000"
          direction="right"
          className="pb-10"
        >
          <div className="mx-20 h-[50px] w-[180px]">
            <Image
              // placeholder="blur"
              priority
              quality={100}
              unoptimized="true"
              src="/assets/clients/client-01.svg"
              alt="Client 01"
              height={50}
              width={180}
            />
          </div>
          <div className="mx-10 h-[50px] w-[180px] md:mx-20">
            <Image
              // placeholder="blur"
              priority
              quality={100}
              unoptimized="true"
              src="/assets/clients/client-02.svg"
              alt="Client 02"
              height={50}
              width={180}
            />
          </div>
          <div className="mx-10 h-[50px] w-[180px] md:mx-20">
            <Image
              // placeholder="blur"
              priority
              quality={100}
              unoptimized="true"
              src="/assets/clients/client-03.svg"
              alt="Client 03"
              height={50}
              width={180}
            />
          </div>
          <div className="mx-10 h-[50px] w-[180px] md:mx-20">
            <Image
              // placeholder="blur"
              priority
              quality={100}
              unoptimized="true"
              src="/assets/clients/client-04.svg"
              alt="Client 04"
              height={50}
              width={180}
            />
          </div>
          <div className="mx-10 h-[50px] w-[180px] md:mx-20">
            <Image
              // placeholder="blur"
              priority
              quality={100}
              unoptimized="true"
              src="/assets/clients/client-05.svg"
              alt="Client 05"
              height={50}
              width={180}
            />
          </div>
          <div className="mx-10 h-[50px] w-[180px] md:mx-20">
            <Image
              // placeholder="blur"
              priority
              quality={100}
              unoptimized="true"
              src="/assets/clients/client-06.svg"
              alt="Client 06"
              height={50}
              width={180}
            />
          </div>
          <div className="mx-10 h-[50px] w-[180px] md:mx-20">
            <Image
              // placeholder="blur"
              priority
              quality={100}
              unoptimized="true"
              src="/assets/clients/client-07.svg"
              alt="Client 07"
              height={50}
              width={180}
            />
          </div>
          <div className="mx-10 h-[50px] w-[180px] md:mx-20">
            <Image
              // placeholder="blur"
              priority
              quality={100}
              unoptimized="true"
              src="/assets/clients/client-08.svg"
              alt="Client 08"
              height={50}
              width={180}
            />
          </div>
          <div className="mx-10 h-[50px] w-[180px] md:mx-20">
            <Image
              // placeholder="blur"
              priority
              quality={100}
              unoptimized="true"
              src="/assets/clients/client-09.svg"
              alt="Client 09"
              height={50}
              width={180}
            />
          </div>
          <div className="mx-10 h-[50px] w-[180px] md:mx-20">
            <Image
              // placeholder="blur"
              priority
              quality={100}
              unoptimized="true"
              src="/assets/clients/client-10.svg"
              alt="Client 10"
              height={50}
              width={180}
            />
          </div>
        </Marquee>
        <Marquee gradient gradientColor="#000" direction="left" className="">
          <div className="mx-10 h-[50px] w-[180px] md:mx-20">
            <Image
              // placeholder="blur"
              priority
              quality={100}
              unoptimized="true"
              src="/assets/clients/client-11.svg"
              alt="Client 11"
              height={50}
              width={180}
            />
          </div>
          <div className="mx-10 h-[50px] w-[180px] md:mx-20">
            <Image
              // placeholder="blur"
              priority
              quality={100}
              unoptimized="true"
              src="/assets/clients/client-12.svg"
              alt="Client 12"
              height={50}
              width={180}
            />
          </div>
          <div className="mx-10 h-[50px] w-[180px] md:mx-20">
            <Image
              // placeholder="blur"
              priority
              quality={100}
              unoptimized="true"
              src="/assets/clients/client-13.svg"
              alt="Client 13"
              height={50}
              width={180}
            />
          </div>
          <div className="mx-10 h-[50px] w-[180px] md:mx-20">
            <Image
              // placeholder="blur"
              priority
              quality={100}
              unoptimized="true"
              src="/assets/clients/client-14.svg"
              alt="Client 14"
              height={50}
              width={180}
            />
          </div>
          <div className="mx-10 h-[50px] w-[180px] md:mx-20">
            <Image
              // placeholder="blur"
              priority
              quality={100}
              unoptimized="true"
              src="/assets/clients/client-15.svg"
              alt="Client 15"
              height={50}
              width={180}
            />
          </div>
          <div className="mx-10 h-[50px] w-[180px] md:mx-20">
            <Image
              // placeholder="blur"
              priority
              quality={100}
              unoptimized="true"
              src="/assets/clients/client-16.svg"
              alt="Client 16"
              height={50}
              width={180}
            />
          </div>
          <div className="mx-10 h-[50px] w-[180px] md:mx-20">
            <Image
              // placeholder="blur"
              priority
              quality={100}
              unoptimized="true"
              src="/assets/clients/client-17.svg"
              alt="Client 17"
              height={50}
              width={180}
            />
          </div>
          <div className="mx-10 h-[50px] w-[180px] md:mx-20">
            <Image
              // placeholder="blur"
              priority
              quality={100}
              unoptimized="true"
              src="/assets/clients/client-18.svg"
              alt="Client 18"
              height={50}
              width={180}
            />
          </div>
          <div className="mx-10 h-[50px] w-[180px] md:mx-20">
            <Image
              // placeholder="blur"
              priority
              quality={100}
              unoptimized="true"
              src="/assets/clients/client-19.svg"
              alt="Client 19"
              height={50}
              width={180}
            />
          </div>
          <div className="mx-10 h-[50px] w-[180px] md:mx-20">
            <Image
              // placeholder="blur"
              priority
              quality={100}
              unoptimized="true"
              src="/assets/clients/client-20.svg"
              alt="Client 20"
              height={50}
              width={180}
            />
          </div>
        </Marquee>
      </section>

      <section className="px-5 pt-[120px]">
        <div className="mb-[120px] flex flex-col items-center justify-center">
          <Subtitle className={"text-center"} text={"o que oferecemos"} />
          <Title
            className="max-w-[1102px] text-center"
            text="Transforme a comunicação visual do seu negócio online e alcance novos patamares com a Hokup!"
          />
        </div>
        <div className="m-auto grid max-w-[1366px] grid-cols-1 gap-5 pb-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((index) => (
            <div
              className="shad relative min-h-[555px] overflow-hidden rounded-[20px] object-cover object-center"
              key={index.id}
            >
              <div className="relative z-10 flex h-full flex-col justify-end">
                <div className="border-black min-h-[400px] rounded-[20px] border-b-[1px] bg-bg-gradient-cases p-5">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-white">
                    <Image
                      src={index.icon}
                      height={32}
                      width={32}
                      // placeholder="blur"
                      priority
                      quality={100}
                      unoptimized="true"
                      alt={`Icon`}
                    />
                  </div>
                  <h1 className="mb-5 max-w-[541px] text-[24px] font-bold uppercase text-white md:text-[28px]">
                    {index.title}
                  </h1>
                  <p className="min-h-[200px] max-w-[541px] pb-10 text-[22px] font-normal text-text-primary">
                    {index.text}
                  </p>
                  <div className="w-fit">
                    <a href="#contato" className="no-underline">
                      <DefaultButton title={"Começar projeto"} />
                    </a>
                  </div>
                </div>
              </div>
              <Image
                alt={`Background Card ${index.id}`}
                src={index.bg}
                fill
                // placeholder="blur"
                priority
                quality={100}
                unoptimized="true"
                className="border-black z-0 rounded-b-[25px] rounded-t-[22px] border-b-[1px] object-cover object-center"
              />
            </div>
          ))}
        </div>
        <div className="m-auto max-w-[1366px]">
          <a href="#contato" className="no-underline">
            <PrimaryButton
              className="flex w-full justify-center"
              title="Começar Projeto Agora Mesmo"
            />
          </a>
        </div>
      </section>

      <section className="px-5 py-[120px]">
        <div className="flex flex-col items-center justify-center">
          <Subtitle className={"text-center"} text={"depoimentos"} />
          <Title className="mb-20 max-w-[1102px] text-center">
            Experiências reais:
            <br />O que nossos clientes têm a dizer
          </Title>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <div className="mb-10 grid w-full grid-cols-12">
            <div className="relative col-span-12 w-full rounded-3xl pb-10 lg:col-span-10 lg:col-start-2">
              <Testimonial />
            </div>
          </div>
          {/* <Testimonial /> */}
          <a href="#contato" className="no-underline">
            <PrimaryButton title="Começar Projeto Agora Mesmo" />
          </a>
        </div>
      </section>

      <section className="bg-hokup-image bg-cover bg-top bg-no-repeat px-5 py-[120px]">
        <div className="grid grid-cols-12 gap-5">
          <div className=" col-span-12 lg:col-span-10 lg:col-start-2">
            <Subtitle text={"sobre nós"} />
            <Title
              className="mb-10 max-w-[650px] text-start"
              text="Conheça a hokup. Sua parceira em soluções digitais de alta performance."
            />
            <Text className="mb-20 max-w-[989px]">
              Na Hokup, nossa missão é transformar a presença digital de
              empresas como a sua. Somos especialistas em desenvolver sites,
              landing pages, aplicativos e marcas de alta qualidade que atendem
              às necessidades específicas de negócios de todos os tamanhos e
              setores.
              <br />
              <br />
              Com origem na indústria de games, adotamos uma abordagem única na
              concepção e desenvolvimento de projetos. Nosso processo criativo
              interdisciplinar promove a união entre design e tecnologia de
              forma orgânica, proporcionando experiências marcantes e com
              propósito por meio de projetos fundamentados em usabilidade,
              performance e assertividade. Nosso compromisso é criar produtos
              que não apenas impressionem visualmente, mas que também
              proporcionem resultados tangíveis para seu negócio.
              <br />
              <br />
              Valorizamos a estética e personalidade atreladas a funcionalidade
              e propósito! Nossas soluções asseguram que sua presença digital
              acompanhe o crescimento de seu negócio, mantendo-se atualizada,
              competitiva e segura em um mercado em constante evolução.
              <br />
              <br />
              Na Hokup, não desenvolvemos apenas sites; criamos experiências
              digitais que impulsionam suas vendas, fortalecem sua marca e fazem
              seu negócio prosperar. Descubra como podemos ajudar sua empresa a
              alcançar novos patamares.
            </Text>
            <a href="#contato" className="no-underline">
              <PrimaryButton
                title="Começar Projeto Agora Mesmo"
                className="w-fit"
              />
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 pt-[120px]">
        <div className="flex flex-col items-center justify-center">
          <Subtitle
            className={"text-center"}
            text={"PROJETOS & CASOS DE SUCESSO"}
          />
          <Title
            className="mb-10 max-w-[1102px] text-center"
            text="Veja como transformamos negócios com soluções digitais de alta performance."
          />
          <div className="mb-20 flex flex-col items-center justify-center sm:flex-row">
            <Image
              width={132}
              height={48}
              src="/assets/images/clients.png"
              className="mb-5 mr-0 sm:mb-0 sm:mr-5"
            />
            <Subtitle
              text={"30+ empresas transformadas"}
              className="mb-[-20px] text-center"
            />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-5 pb-5">
          <div className="col-span-12 object-cover md:col-span-8">
            <Image
              alt="Case Image 01"
              src={Case1}
              height={"auto"}
              width={"1920"}
              className="object-cover"
              placeholder="blur"
              quality={100}
              unoptimized="true"
            ></Image>
          </div>
          <div className="col-span-12  object-cover md:col-span-4">
            <Image
              alt="Case Image 02"
              src={Case2}
              height={"auto"}
              width={"1920"}
              placeholder="blur"
              className="object-cover"
              quality={100}
              unoptimized="true"
            ></Image>
          </div>
          <div className="col-span-12  object-cover md:col-span-4">
            <Image
              alt="Case Image 03"
              src={Case3}
              height={"auto"}
              width={"1920"}
              placeholder="blur"
              className="object-cover"
              quality={100}
              unoptimized="true"
            ></Image>
          </div>
          <div className="col-span-12  object-cover md:col-span-8">
            <Image
              alt="Case Image 04"
              src={Case4}
              height={"auto"}
              width={"1920"}
              placeholder="blur"
              className="object-cover"
              quality={100}
              unoptimized="true"
            ></Image>
          </div>
          <div className="col-span-12  object-cover md:col-span-12">
            <Image
              alt="Case Image 05"
              src={Case5}
              height={"auto"}
              width={"1920"}
              placeholder="blur"
              className="object-cover"
              quality={100}
              unoptimized="true"
            ></Image>
          </div>
          <div className="col-span-12 object-cover">
            <Image
              alt="Case Image 06"
              src={Case6}
              height={"auto"}
              width={"1920"}
              placeholder="blur"
              className="object-cover"
              quality={100}
              unoptimized="true"
            ></Image>
          </div>
          <div className="col-span-12  object-cover md:col-span-8">
            <Image
              alt="Case Image 07"
              src={Case7}
              height={"auto"}
              width={"1920"}
              placeholder="blur"
              className="object-cover"
              quality={100}
              unoptimized="true"
            ></Image>
          </div>
          <div className="col-span-12  object-cover md:col-span-4">
            <Image
              alt="Case Image 08"
              src={Case8}
              height={"auto"}
              width={"1920"}
              placeholder="blur"
              className="object-cover"
              quality={100}
              unoptimized="true"
            ></Image>
          </div>
          <div className="col-span-12  object-cover md:col-span-6">
            <Image
              alt="Case Image 09"
              src={Case9}
              height={"auto"}
              width={"1920"}
              placeholder="blur"
              className="object-cover"
              quality={100}
              unoptimized="true"
            ></Image>
          </div>
          <div className="col-span-12  object-cover md:col-span-6">
            <Image
              alt="Case Image 10"
              src={Case10}
              height={"auto"}
              width={"1920"}
              placeholder="blur"
              className="object-cover"
              quality={100}
              unoptimized="true"
            ></Image>
          </div>
          <div className="col-span-12 object-cover">
            <Image
              alt="Case Image 11"
              src={Case11}
              height={"auto"}
              width={"1920"}
              placeholder="blur"
              className="object-cover"
              quality={100}
              unoptimized="true"
            ></Image>
          </div>
          <div className="col-span-12 object-cover md:col-span-4">
            <Image
              alt="Case Image 12"
              src={Case12}
              height={"auto"}
              width={"1920"}
              placeholder="blur"
              className="object-cover"
              quality={100}
              unoptimized="true"
            ></Image>
          </div>
          <div className="col-span-12 object-cover md:col-span-8">
            <Image
              alt="Case Image 13"
              src={Case13}
              height={"auto"}
              width={"1920"}
              placeholder="blur"
              className="object-cover"
              quality={100}
              unoptimized="true"
            ></Image>
          </div>
        </div>
        <a href="#contato" className="no-underline">
          <PrimaryButton
            title="Começar Projeto Agora Mesmo"
            className="flex w-full justify-center"
          />
        </a>
      </section>

      <section className="px-5 pt-[120px]">
        <div className="mb-20 flex flex-col items-center justify-center">
          <Subtitle className="text-center" text="O QUE FAZEMOS" />
          <Title
            className="max-w-[765px] text-center"
            text="Transforme sua presença online com nossos serviços digitais"
          />
        </div>
        <div className="m-auto grid max-w-[1366px] grid-cols-1 gap-x-20 md:grid-cols-2">
          {services.map((index) => (
            <div
              className={`flex min-h-[336px] justify-center ${index.id % 2 == 0 ? "md:justify-end" : "md:justify-start"} mb-20 `}
              key={index.id}
            >
              <div>
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-white">
                  <Image
                    src={index.icon}
                    height={32}
                    width={32}
                    alt={`Icon ${index.id}`}
                  />
                </div>
                <h1 className="mb-5 max-w-[541px] text-[24px] font-bold uppercase text-white md:text-[28px]">
                  {index.title}
                </h1>
                <p className="max-w-[541px] pb-10 text-[22px] font-normal text-text-primary">
                  {index.text}
                </p>
                <div className="flex flex-row flex-wrap">
                  {index.pills.map((pill) => (
                    <div
                      className="mb-5 mr-5 whitespace-nowrap rounded-3xl border-[1px] border-[#303030] bg-pill px-5 py-[10px] uppercase text-text-extra-2"
                      key={pill.id}
                    >
                      {pill.value}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 pt-[120px]">
        <div className="flex flex-col items-center justify-center">
          <Subtitle className="text-center" text="vamos começar" />
          <Title
            className="mb-5 max-w-[1102px] text-center"
            text="A primeira impressão é a que fica!"
          />
          <Text
            className="mb-10 max-w-[878px] text-center"
            text="Nossa missão é fornecer soluções de identidade visual que impulsionem o crescimento do seu negócio e conectem sua marca com o seu público. Entre em contato conosco hoje para descobrir como podemos transformar a percepção visual da sua marca."
          />
          <div className="mb-20 w-fit">
            <a href="#contato" className="no-underline">
              <PrimaryButton title="Começar Projeto Agora Mesmo" />
            </a>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="bg-contact px-5  pt-[120px]">
        <div className="mb-[60px] flex flex-col items-center justify-center">
          <Subtitle className="text-center" text="Chegou a hora de agir!" />
          <Title
            className="max-w-[1139px] text-center"
            text="Entre em contato agora mesmo e descubra como a Hokup pode transformar a presença digital do seu negócio."
          />
        </div>
        <div className="flex w-full items-center justify-center pb-[120px]">
          <ContactForm />
        </div>
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
    </div>
  );
};

export default Home;
