"use client";
import React from "react";
import Lottie from "lottie-react";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

const NotFoundPage = () => {
  return (
    <div className="flex-1 flex items-center justify-center flex-col">
      <div className="max-w-xl">
        <Lottie className="hue-rotate-[260deg]" animationData={require("../public/404.json")} />
      </div>
      <Link href={"/"} className="text-lg">
        <Button placeholder={''} color="teal">Back to Home</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
