"use client";
import { projects } from "@/constants";
import { Button } from "@material-tailwind/react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";

const ProjectPage = ({ params: { id } }: { params: { id: string } }) => {
  console.log(id);
  let newProject = projects.find((project) => project.id === id);
  if (!newProject) return null;
  const router = useRouter();
  return (
    <main className="flex-1 py-24 justify-center items-center flex">
      <div className="bg-white dark:bg-slate-950 pb-6 rounded-xl shadow-xl overflow-hidden max-w-3xl">
        <Image
          width={400}
          height={100}
          className="aspect-square object-cover w-full max-h-[400px]"
          src={newProject?.image}
          alt={"Sathish Resume"}
        />
        <div className="p-4 space-y-3">
          <Link
            className="hover:text-emerald-500 group flex items-center gap-2"
            href={newProject?.liveUrl}
          >
            <h3 className="text-3xl font-bold flex items-center gap-4">
              {newProject?.name}{" "}
            </h3>
            <ExternalLink
              className="text-slate-400 group-hover:text-emerald-500 "
              size={24}
            />
          </Link>
          <p className="flex gap-2 flex-wrap items-center">
            Technologies used:{" "}
            {newProject?.tags.map((tag) => (
              <span className="text-[10px] font-bold rounded-full px-3 py-[2px] text-slate-900 bg-slate-100">
                {tag}
              </span>
            ))}
          </p>

          <div className="">
            <h4 className="text-xl font-semibold">Description</h4>
            <p className="text-justify text-sm first-letter:text-xl font-sans text-slate-600 dark:text-slate-300 first-line:pl-4 tracking-wide first-letter:ml-10">
              {newProject?.description}
            </p>
          </div>
          <ContentList title={"Achievements"} list={newProject?.achievements} />
          <ContentList title={"Future Plans"} list={newProject?.futurePlans} />
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;

function ContentList({ list, title }: { list?: string[]; title: string }) {
  return (
    <div className="">
      <h4 className="text-xl font-semibold">{title}</h4>
      <ul className="text-justify text-sm first-letter:text-xl font-sans text-slate-600 dark:text-slate-300 first-line:pl-4 tracking-wide space-y-2">
        {list?.map((achievement) => (
          <li className=" ml-10 list-[circle]">{achievement}</li>
        ))}
      </ul>
    </div>
  );
}
