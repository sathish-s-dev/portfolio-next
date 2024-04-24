"use client";
import {
  Home,
  HomeIcon,
  Activity,
  Briefcase,
  Layers3,
  BadgeInfo,
  Phone,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion, spring } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMenuContext } from "@/lib/menu-context";
import { Tlink, links } from "@/constants";
import { NavItems } from "./nav-items";

export const navBarVariants = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      staggerChildren: 0.2,
      when: "beforeChildren",
      stiffness: 200,
    },
  },
};

const NavBar = () => {
  return (
    <motion.aside
      variants={navBarVariants}
      initial="initial"
      animate="animate"
      className="group fixed z-[2] hidden h-screen  items-center justify-center hover:cursor-pointer md:flex"
    >
      <div className="nav_mask absolute left-0 aspect-square h-[90%] w-48 -translate-x-24 bg-slate-100 transition-all  duration-200 group-hover:translate-x-0 dark:bg-slate-900" />
      <NavItems />
    </motion.aside>
  );
};

export default NavBar;
