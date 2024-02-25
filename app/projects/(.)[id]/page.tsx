import React from "react";
import { projects } from "@/constants";

const InterceptedProject = ({ params: { id } }: { params: { id: string } }) => {
  const project = projects.find((prroject) => id === prroject.id);
  console.log(project);

  return (
    <div className="flex-1">
      <h1>Intercepted Project</h1>
    </div>
  );
};

export default InterceptedProject;
