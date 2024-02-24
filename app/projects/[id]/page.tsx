import React from "react";

const ProjectPage = ({ params: { id } }: { params: { id: string } }) => {
  console.log(id);
  return <div className="flex-1">Project Page</div>;
};

export default ProjectPage;
