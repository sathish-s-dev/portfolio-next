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
      className="absolute inset-0 z-40 flex items-center justify-center bg-sky-900/20 backdrop-blur-sm"
      onClick={(e) => router.back()}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          router.back();
        }
      }}
    >
      <div className="max-w-[400px] overflow-hidden rounded-xl bg-white pb-6 shadow-xl dark:bg-slate-950">
        <Image
          width={400}
          height={100}
          className="aspect-square object-cover"
          src={newProject?.image}
          alt={"Sathish Resume"}
        />
        <div className="space-y-3 p-4">
          <p className="text-xl font-bold">{newProject?.name}</p>
          <p className="line-clamp-2 text-justify text-xs">
            {newProject?.description}
          </p>
          <p className="flex flex-wrap gap-2">
            {newProject?.tags.map((tag) => (
              <span className="rounded-full bg-slate-100 px-3 py-[2px] text-[10px] font-bold text-slate-900">
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
