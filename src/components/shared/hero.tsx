/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { Bowlby_One, Delius } from "next/font/google";
import { ArrowBigDownDash } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo_lia.png";

const bowlby = Bowlby_One({ weight: "400", subsets: ["latin"] });
const delius = Delius({ weight: "400", subsets: ["latin"] });

const Hero = () => {
  return (
    <div className="h-screen max-w-[2000px] bg-[url('/soec_1.jpg')] bg-center bg-cover">
      <div className="relative h-full bg-black/70">
        <Link href={"http://steveogah.com/"} className="absolute top-10 left-5 lg:left-10">
          <Image
            src={logo}
            alt=""
            className="w-28 md:w-36"
          />
        </Link>
        <Link
          href={"https://forms.gle/yrUuCnoCYNwr26pF6"}
          target="_blank"
          className="absolute top-10 right-5 lg:right-10 py-2 px-4 bg-primary text-light font-semibold rounded-xl duration-150 border border-primary hover:bg-light hover:text-primary"
        >
          Apply
        </Link>
        <div className="absolute top-1/2 left-1/2 md:w-2/3 space-y-4 text-light text-center -translate-y-1/2 -translate-x-1/2">
          <h1 className={`${bowlby.className} text-4xl md:text-8xl`}>
            From #ashtags to Action
          </h1>
          <h2 className={`${delius.className} text-xl md:text-4xl`}>
            Tackling Youth Unemployment in Nigeria
          </h2>
          <p className="text-sm md:text-base">Powered by Love In Action Foundation</p>
        </div>
        <button
          onClick={() => {
            window.scrollTo({ top: 750, behavior: "smooth" });
          }}
          className="absolute bottom-10 left-1/2 block p-2 bg-primary text-light rounded-xl animate-pulse -translate-x-1/2"
        >
          <ArrowBigDownDash size={32} className="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
