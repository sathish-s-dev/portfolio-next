"use client";
import Spline from "@splinetool/react-spline";
import useMouse from "@react-hook/mouse-position";
import { ElementRef, useRef } from "react";

export default function MouseTrackingBall() {
  console.log("hello world");
  const ref = useRef<ElementRef<"div">>(null);
  const { clientX, clientY } = useMouse(ref, {
    enterDelay: 400,
  });
  console.log(clientX, clientY);
  return (
    <div className="absolute inset-0 isolate  sr-only" ref={ref}>
      <div
        className="bg-blue-400 w-5 h-5 z-[100] rounded-full transition-transform duration-300 hover:scale-[3] animate-pulse hover:cursor-pointer"
        style={{
          transform: `translate(${clientX! - 100}px, ${clientY! - 100}px)`,
        }}
      />
    </div>
  );
}
