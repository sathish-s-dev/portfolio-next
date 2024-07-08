"use client";
import Image from "next/image";
import React from "react";
import { projects } from "@/constants";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { ContentList } from "@/app/projects/[id]/page";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const InterceptedModalRoute = ({
  params: { id },
}: {
  params: { id: string };
}) => {
  let newProject = projects.find((project) => project.id === id);
  if (!newProject) return null;
  const router = useRouter();
  return (
    <div
      className="absolute inset-0 z-40 flex items-center justify-center bg-sky-900/20 backdrop-blur-sm"
      onClick={(e) => router.back()}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          router.back();
        }
      }}
    >
      <main className="flex flex-1 items-center justify-center py-24 pt-36">
        <div className="flex max-w-4xl flex-col justify-start overflow-hidden overflow-y-scroll rounded-xl bg-white p-6 pb-6 shadow-xl dark:bg-slate-950 max-h-[90vh]">
          <Image
            width={400}
            height={100}
            className="self-start object-contain"
            src={newProject?.image}
            alt={"Sathish Resume"}
          />
          <div className="space-y-3 py-6">
            <Link
              className="group flex items-center gap-2 hover:text-emerald-500"
              target="_blank"
              href={newProject?.liveUrl}
            >
              <h3 className="flex items-center gap-4 text-3xl font-bold">
                {newProject?.name}{" "}
              </h3>
              <ExternalLink
                className="text-slate-400 group-hover:text-emerald-500 "
                size={24}
              />
            </Link>
            <p className="flex flex-wrap items-center gap-2">
              Technologies used:{" "}
              {newProject?.tags.map((tag) => (
                <span className="rounded-full bg-slate-100 px-3 py-[2px] text-[10px] font-bold text-slate-900">
                  {tag}
                </span>
              ))}
            </p>

            <div className="">
              <h4 className="text-xl font-semibold">Description</h4>
              <p className="text-justify font-sans text-sm tracking-wide text-slate-600 first-letter:ml-10 first-letter:text-xl first-line:pl-4 dark:text-slate-300">
                {newProject?.description}
              </p>
            </div>
            <ContentList
              title={"Achievements"}
              list={newProject?.achievements}
            />
            <ContentList
              title={"Future Plans"}
              list={newProject?.futurePlans}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default InterceptedModalRoute;
