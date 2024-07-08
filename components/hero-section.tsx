"use client";
import React from "react";
import { Heading } from "./ui/heading";
import Image from "next/image";

import { Button } from "./ui/button";
import Link from "next/link";
import Circles from "./circles";
// import Typical from "react-typical";
import { TypingText } from "typing-text-animation";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative grid w-full grid-cols-1 place-items-center items-start gap-16 md:grid-cols-2 md:gap-0 md:py-12"
    >
      <div className="grid place-content-start place-items-start gap-4">
        {/* <Circles className='-left-24' /> */}
        <Heading className="block text-4xl lg:text-5xl">
          Nice to Meet you!
          <span className="block bg-gradient-to-br from-sky-500 via-teal-300 to-sky-900 bg-clip-text pt-2 text-4xl text-transparent">
            I&apos;m SATHISH
          </span>
          <span className="block bg-gradient-to-b from-fuchsia-500 to-sky-500 bg-clip-text pt-2 text-xl text-transparent">
            <TypingText
              text={["React Developer", "Frontend Developer","React Native Developer"]}
              // className="text-xs md:text-sm"
              // speed={100}
            />
          </span>
        </Heading>
        <p className="line-clamp-3 max-w-sm text-xs md:text-sm">
          I am a React developer specializing in developing user-centric web
          applications with seamless integration. Proficient in performance
          optimization and Agile methodologies, I excel in collaborative
          environments, adept at translating design mockups into visually
          appealing and functional interfaces. Additionally, I possess advanced
          skills in front-end technologies and frameworks, ensuring a
          well-rounded expertise to deliver high-quality projects.
        </p>
        <Button
          placeholder={"hire me"}
          color="teal"
          className="mt-4 w-full max-w-[150px]"
        >
          <Link href="#contact">Hire me</Link>
        </Button>
      </div>
      <Image
        src={"/svg/landing_page.svg"}
        alt="sathish photo"
        width={250}
        height={250}
        className="mx-auto w-full max-w-[350px] place-self-center md:w-auto"
      />
    </section>
  );
};

export default HeroSection;
