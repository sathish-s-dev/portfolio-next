"use client";
import React from "react";
import { motion, MotionProps, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { variants } from "./variants";

type MotionDIvProps = MotionProps & {
  className?: string;
};

const MotionChild = ({ children, ...restProps }: MotionDIvProps) => {
  return (
    <motion.div
      variants={variants}
      className={cn("preserve bg-transparent flex justify-center", restProps.className)}
      {...restProps}
    >
      {children}
    </motion.div>
  );
};

export default MotionChild;
