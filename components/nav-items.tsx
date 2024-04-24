"use client";
import { Tlink, links } from "@/constants";
import { useMenuContext } from "@/lib/menu-context";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { useState } from "react";
import { navBarVariants } from "./nav-bar";
export function NavItems({
  linkStyles,
  containerStyles,
}: {
  linkStyles?: string;
  containerStyles?: string;
}) {
  const menu = useMenuContext();

  if (!menu) return null;

  const { close } = menu;
  const pathName = usePathname();

  const [current, setCurrent] = useState(pathName);

  console.log("pathname", pathName);

  return (
    <motion.nav
      variants={navBarVariants}
      initial="initial"
      animate="animate"
      onClick={close}
      className={cn(
        "relative grid h-fit w-fit -translate-x-0 content-center gap-10 rounded-r-full px-4 py-24 transition-all duration-300 group-hover:translate-x-0",
        containerStyles,
      )}
    >
      {links.map(({ name, href, Icon }: Tlink) => (
        <motion.li
          variants={navBarVariants}
          key={name + href}
          className="list-none"
          onClick={() => setCurrent(href)}
        >
          <Link
            href={href}
            className={cn(
              "flex items-center gap-2 font-semibold transition-colors duration-100 hover:text-teal-500 dark:hover:text-teal-400",
              current === href && "font-bold text-teal-500",
            )}
          >
            <Icon size={18} strokeWidth={2} />
            <p
              className={cn(
                "origin-left scale-x-0 opacity-0 transition-transform delay-200 duration-200 group-hover:scale-x-100 group-hover:opacity-100",
                linkStyles,
              )}
            >
              {name}
            </p>
          </Link>
        </motion.li>
      ))}
    </motion.nav>
  );
}
