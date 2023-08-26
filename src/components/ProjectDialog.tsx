import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import React from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ImGithub } from "react-icons/im";

interface ProjectDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
  project: Project;
}
const ProjectDialog = ({
  open,
  onOpenChange,
  project,
  children,
}: ProjectDialogProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
      <Dialog.Portal>
        <Dialog.Overlay className=" data-[state=open]:animate-overlayShow fixed inset-0 bg-gray-900 z-40 opacity-90" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] h-[85vh] max-h-[85vh] w-[90vw] max-w-[450px] sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-50">
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium text-center ">
            <h2 className="my-1">{project.title}</h2>
          </Dialog.Title>
          <Dialog.Description className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 h-[90%] overflow-y-scroll no-scrollbar">
            <div
              className="inset-0 bg-cover bg-center rounded-lg w-full py-40 shadow-md border-2 justify-self-center"
              style={{ backgroundImage: `url(${project.coverImage})` }}
            />
            <div className="flex flex-col ">
              <h3 className="mb-1">Project Info</h3>
              <p className="mb-2">{project.description}</p>
              <h3 className="mb-1">Project Details</h3>
              <div className="divide-y divide-solid">
                {project?.url && (
                  <div>
                    <Link href={project?.url}>Live Demo</Link>
                  </div>
                )}
                {project?.frontendUrl && (
                  <div className="py-2">
                    <Link
                      href={project.frontendUrl}
                      target="_blank"
                      className="text-blue-400 hover:underline flex gap-2 items-center"
                    >
                      <ImGithub /> Frontend Repo
                    </Link>
                  </div>
                )}
                {project?.backendUrl && (
                  <div className="py-2">
                    <Link
                      href={project.backendUrl}
                      target="_blank"
                      className="text-blue-400 hover:underline flex gap-2 items-center"
                    >
                      <ImGithub /> Backend Repo
                    </Link>
                  </div>
                )}
                <div className="py-2">
                  <p>Technologies: {project.technologies}</p>
                </div>
              </div>
            </div>
          </Dialog.Description>

          {/* <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild>
              <button className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                Save changes
              </button>
            </Dialog.Close>
          </div> */}
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ProjectDialog;
