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
      <div className="group-hover:curosor-pointer max-h-[450px] group rotate-z max-w-3xl shadow-md hover:shadow-slate-700/50 darl:hover:shadow-slate-100 hover:shadow-2xl relative rounded-lg  transition-all duration-700 preserve">
        <Link
          href={`/projects/${id}`}
          className="block relative  group-hover:border-sky-200/50 group-hover:dark:border-sky-900/50 border group transition-all duration-500 bg-slate-50/10 group-hover:rounded-lg z-10"
        >
          <div className="relative overflow-clip">
            <Image
              src={image}
              alt="Vercel Logo"
              width={500}
              height={200}
              className={cn(
                "aspect-video object-cover max-h-full w-full transition-all duration-300",
                isMobile && "aspect-auto object-contain max-h-[350px]"
              )}
            />
          </div>
          <div className="p-4 pt-1 flex justify-between items-center">
            <div className="flex flex-col w-full">
              <Heading
                elementType="h4"
                className="text-sm md:text-md py-3 uppercase tracking-wider justify-start"
              >
                {name}
              </Heading>
              <div className="flex items-center gap-1 justify-between w-full">
                <p className="flex-wrap flex gap-1 font-semibold font-mono dark:text-white">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className=" flex-shrink-0 bg-slate-900 text-slate-200 text-xs px-4 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </p>
                <ChevronRightIcon className="-translate-x-2 group-hover:translate-x-0  transition-all duration-300" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </MotionChild>
  );
}
