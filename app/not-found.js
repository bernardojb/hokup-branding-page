"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const notFound = () => {
  useEffect(() => {
    window.location.href = "https://landing.hokup.com.br/";
  }, []);
  return (
    <section className="bg-black flex h-screen items-center justify-center text-white"></section>
  );
};

export default notFound;
