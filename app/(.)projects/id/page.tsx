"use client";
import Image from "next/image";
import React from "react";
import { projects } from "@/constants";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

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
      className="absolute inset-0 bg-sky-900/20 z-40 flex justify-center items-center backdrop-blur-sm"
      onClick={(e) => router.back()}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          router.back();
        }
      }}
    >
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

export default InterceptedModalRoute;
