import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { Heading } from "../ui/heading";
import { ChevronRightIcon } from "lucide-react";
import { variants } from "../motion/variants";
import MotionChild from "../motion/motion-child";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({
  project: { codeUrl, image, liveUrl, name, tags, id },
}: ProjectCardProps) {
  const isMobile = tags.includes("React Native") || tags.includes("Expo");
  return (
    <MotionChild variants={variants}>
      <div className="group-hover:curosor-pointer group rotate-z max-w-[300px] shadow-md hover:shadow-slate-800 hover:bg-slate-900/15 hover:dark:bg-slate-100/50 hover:box-shadow  relative rounded-lg  transition-all duration-300 hover:rotate-x-12 preserve">
        <Link
          href={`/projects/${id}`}
          className="block relative group-hover:reverse-rotate group-hover:border-sky-200/50 group-hover:dark:border-sky-900/50 border group transition-all duration-500 bg-slate-50/10 overflow-  group-hover:rounded-lg z-10"
        >
          <div className="relative  group-hover:translate-z-52 overflow-clip">
            <Image
              src={image}
              alt="Vercel Logo"
              width={500}
              height={200}
              className={cn(
                "aspect-video object-cover w-full transition-all duration-300",
                isMobile && "object-contain scale-150 group-hover:scale-[2]"
              )}
            />
          </div>
          <div className="p-4 pt-1 flex justify-between items-center">
            <div className="flex flex-col">
              <Heading
                elementType="h4"
                className="text-sm md:text-md py-3 uppercase tracking-wider justify-start"
              >
                {name}
              </Heading>
              <div className="flex items-center gap-1">
                <p className="flex-wrap flex gap-1 font-semibold font-mono dark:text-white">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className=" flex-shrink-0 bg-slate-900 text-slate-200 text-[9px] px-3 py-[2px] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </p>
                <ChevronRightIcon className="-translate-x-2 group-hover:translate-x-0 group-hover:animate-bounce transition-all duration-300" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </MotionChild>
  );
}
