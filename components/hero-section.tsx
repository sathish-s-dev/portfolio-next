import React from "react";
import { Heading } from "./ui/heading";
import Image from "next/image";

import { Button } from "./ui/button";
import Link from "next/link";
import Circles from "./circles";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="w-full relative grid-cols-1 items-start grid md:grid-cols-2 gap-16 md:py-12 md:gap-0 place-items-center"
    >
      <div className="grid gap-4 place-items-start place-content-start">
        {/* <Circles className='-left-24' /> */}
        <Heading className="lg:text-5xl text-4xl block">
          Nice to Meet you!
          <span className="block pt-2 bg-gradient-to-br text-4xl from-sky-500 via-teal-300 to-sky-900 bg-clip-text text-transparent">
            I&apos;m SATHISH
          </span>
          <span className="block pt-2 bg-gradient-to-b text-xl from-fuchsia-500 to-sky-500 bg-clip-text text-transparent">
            Front End Developer
          </span>
        </Heading>
        <p className="md:text-sm max-w-sm text-xs line-clamp-3">
          I am a React developer specializing in
          developing user-centric web applications with seamless integration.
          Proficient in performance optimization and Agile methodologies, I
          excel in collaborative environments, adept at translating design
          mockups into visually appealing and functional interfaces.
          Additionally, I possess advanced skills in front-end technologies and
          frameworks, ensuring a well-rounded expertise to deliver high-quality
          projects.
        </p>
        <Button
          placeholder={"hire me"}
          color="teal"
          className="w-full max-w-[150px] mt-4"
        >
          <Link href="#contact">Hire me</Link>
        </Button>
      </div>
      <Image
        src={"/svg/landing_page.svg"}
        alt="sathish photo"
        width={250}
        height={250}
        className="w-full max-w-[350px] md:w-auto mx-auto place-self-center"
      />
    </section>
  );
};

export default HeroSection;
