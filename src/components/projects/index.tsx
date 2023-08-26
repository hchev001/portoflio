"use client";

import { cn } from "@/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import ProjectDialog from "../ProjectDialog";
import { Project, projectData } from "@/data/projects";

interface ProjectsProps {
  className?: string;
}
const Projects = ({ className }: ProjectsProps) => {
  return (
    <motion.div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 items-stretch gap-5 mb-16",
        className
      )}
      initial={true}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <ProjectCard project={projectData[0]} />
    </motion.div>
  );
};

export default Projects;

type ProjectCardProps = {
  project: Project;
};
const ProjectCard = ({ project }: ProjectCardProps) => {
  const [open, setOpen] = useState(false);

  const _onClick = () => setOpen(true);
  return (
    <>
      <div className="py-40 px-36 relative cursor-pointer" onClick={_onClick}>
        <div
          className="absolute inset-0 bg-cover bg-center z-0 rounded-lg"
          style={{
            backgroundImage: `url(${project.coverImage})`,
          }}
        />
        <div className="opacity-0 hover:bg-haze-400 hover:opacity-100 duration-300 absolute inset-0 z-10 flex flex-col justify-center items-center rounded-lg">
          <div className="text-2xl text-btgray font-semibold text-center mb-2">
            {project.title}
          </div>
          <div className="text-sm font-normal text-btgray">
            {project.technologies}
          </div>
        </div>
      </div>
      <ProjectDialog
        open={open}
        onOpenChange={() => setOpen((prev) => !prev)}
        project={project}
      />
    </>
  );
};
