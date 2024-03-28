'use client'
import { projects } from "@/constants";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ProjectPage = ({ params: { id } }: { params: { id: string } }) => {
  console.log(id);
  let newProject = projects.find((project) => project.id === id);
  if (!newProject) return null;
  const router = useRouter();
  return (
    <div className="flex-1 justify-center items-center flex">
      <div className="bg-white dark:bg-slate-950 pb-6 rounded-xl shadow-xl overflow-hidden max-w-[400px]">
        <Image
          width={400}
          height={100}
          className="aspect-square object-cover"
          src={newProject?.image}
          alt={"Sathish Resume"}
        />
        <div className="p-4 space-y-3">
          <p className="text-xl font-bold">{newProject?.name}</p>
          <p className="text-justify line-clamp-2 text-xs">
            {newProject?.description}
          </p>
          <p className="flex gap-2 flex-wrap">
            {newProject?.tags.map((tag) => (
              <span className="text-[10px] font-bold rounded-full px-3 py-[2px] text-slate-900 bg-slate-100">
                {tag}
              </span>
            ))}
          </p>
          <div className="grid grid-cols-2 gap-2">
            <Button
              placeholder={"Visit"}
              className="w-full"
              variant="filled"
              color="teal"
              onClick={() => {
                window.open(newProject?.codeUrl, "_blank");
              }}
            >
              Github
            </Button>
            <Button
              placeholder={"Visit"}
              className="w-full"
              variant="filled"
              color="teal"
              onClick={() => {
                window.open(newProject?.liveUrl, "_blank");
              }}
            >
              Visit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
