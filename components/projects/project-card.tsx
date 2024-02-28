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
      <div className="group hover:curosor-pointer max-w-[300px] shadow-md hover:shadow-lg overflow-clip  relative rounded-lg border border-transparent hover:border-slate-300 hover:dark:border-slate-700 hover:dark:bg-slate-800/30 transition-all duration-300">
        <Link href={`/projects/${id}`} className="block">
          <div className="relative overflow-clip">
            <Image
              src={image}
              alt="Vercel Logo"
              width={500}
              height={200}
              className={cn(
                "aspect-video object-cover w-full grout-hover:scale-105 transition-all duration-300 group-hover:scale-110",
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
              <div className="flex items-center">
                <p className="flex-wrap flex gap-1 font-semibold font-mono">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-slate-500 flex-shrink-0 dark:bg-slate-900 bg-slate-200 text-[10px] px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </p>
                <ChevronRightIcon className="-translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </MotionChild>
  );
}
