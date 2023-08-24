"use client";

import Image from "next/image";
import massiveuIcon from "../../public/massiveu.svg";
import talogyIcon from "../../public/logo_talogy_bubble.svg";
import shopmonkeyIcon from "../../public/shopmonkey-icon.svg";
import MenuBar from "@/components/MenuBar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { cn } from "@/utils";
import { motion } from "framer-motion";

export default function Home() {
  const [content, setContent] = useState<"work" | "projects">("work");

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between bg-plomo-100 p-4 md:px-24 pt-8">
        <div className="z-10 w-full max-w-5xl items-center justify-between text-sm flex flex-col">
          <MenuBar content={content} setContent={setContent} />
          {/* the hero */}
          <div className="w-full max-w-4xl mt-28 lg:mt-32 mb-20 p-5">
            <div className="w-full flex flex-col items-center gap-3">
              <h1 className="mb-3 text-center lg:text-left font-inter font-bold text-transparent bg-clip-text bg-gradient-to-tr sm:bg-gradient-to-br from-plomo-500 to-plomo-900">
                Hello, I'm Hamilton
              </h1>
              <p className="max-w-[500px] mb-5 text-center text-lg font-barlow text-btgray">
                I'm a Full-Stack Software Engineer with a passion for building
                web apps, actively seeking work opportunities.
              </p>
              <div>
                <button
                  className=" px-4 py-2 text-lg bg-white rounded-lg border font-inter text-plomo-600 hover:text-btgray hover:bg-gray-100 drop-shadow-sm disabled:opacity-30 disabled:pointer-events-none"
                  disabled
                >
                  Let's Connect!
                </button>
              </div>
            </div>
          </div>

          {content === "work" && <EmploymentHistory />}
          {content === "projects" && <Projects />}
        </div>
      </main>
      <Footer />
    </>
  );
}

interface JobCardProps {
  title: string;
  icon?: React.ReactNode | string;
  company: string;
  tenure: string;
  technologies: string[];
  text: string[];
}

const JobCard = ({
  title,
  icon,
  company,
  tenure,
  technologies,
  text,
}: JobCardProps) => {
  return (
    <div className="w-full max-w-4xl py-16 px-8 grid grid-cols-1 lg:grid-cols-[424px_1fr] gap-4 lg:gap-0 bg-haze-200 p-8 rounded-3xl">
      <div className="flex flex-col">
        {icon && <div className="mb-1">{icon}</div>}
        <h2 className="font-inter font-semibold mb-0.5">{title}</h2>
        <div className="mb-0.5 small font-inter uppercase">{company}</div>
        <div className="mb-12 small font-inter uppercase">{tenure}</div>
        <div className="max-w-[246px] flex flex-wrap gap-x-2 gap-y-1.5">
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className="tag py-1 px-1.5 bg-white rounded-xl font-barlow font-light "
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-plomo-600 to-plomo-900">
                {tech}
              </span>
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 [&>p]:font-barlow [&>p]:text-btgray">
        {text.map((t) => (
          <p>{t}</p>
        ))}
      </div>
    </div>
  );
};

interface ProjectsProps {
  className?: string;
}
const Projects = ({ className }: ProjectsProps) => {
  return (
    <motion.div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 items-stretch gap-5 mb-16 duration-400",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="py-40 px-36 relative">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 rounded-lg"
          style={{
            backgroundImage: `url(/InventoryManagementCard.jpg)`,
          }}
        />
        <div className="opacity-0 hover:bg-haze-400 hover:opacity-100 duration-300 absolute inset-0 z-10 flex flex-col justify-center items-center rounded-lg">
          <div className="text-2xl text-btgray font-semibold text-center mb-2">
            Inventory <br /> Management
          </div>
          <div className="text-sm font-normal text-btgray">
            .Net 7, PostgreSQL, NextJS
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface EmploymentHistoryProps {
  className?: string;
}
const EmploymentHistory = ({ className }: EmploymentHistoryProps) => {
  return (
    <motion.div
      className={cn("flex flex-col gap-20 mb-16", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <JobCard
        icon={
          <Image
            height={32}
            priority
            src={shopmonkeyIcon}
            alt="Shopmonkey Icon"
          />
        }
        title="Software Engineer II"
        company="Shopmonkey"
        tenure=" NOV 2022 - JUL 2023"
        text={[
          `Created an invoice dashboard, empowering auto shop service providers
to generate statements, enabling customers to pay for multiple
services at once.`,
          `Revamped the data importing service for Excel files, ensuring
uninterrupted user interaction and smooth platform functioning by
using NATs to scale performance.`,
          `Routinely collaborated with diverse teams (1 to 30 members) to
collectively build a high-quality CRM for automotive repair shops.`,
        ]}
        technologies={[
          "React",
          "TailwindCSS",
          "Typescript",
          "Redux Toolkit",
          "NextJS",
          "NodeJS",
          "Fastify",
          "Nats",
          "CockroachDB",
        ]}
      />
      <JobCard
        icon={
          <Image
            className="relative -left-1"
            height={32}
            priority
            src={talogyIcon}
            alt="Talogy Icon"
          />
        }
        title="Software Engineer"
        company="Talogy"
        tenure="FEB 2022 - NOV 2022"
        text={[
          `Contributed to the successful integration of Solvably, the acquired product from MassiveU, 
as a centerpiece of a new platform aimed at consolidating multiple web applications into a unified and science-backed solution for workforce training`,
          `Created a wizard feature using empowering platform admins to efficiently generate new learning content and enhance the training capabilities of the system.`,
          `Assisted the QA team during peak testing periods by performing End-to-End testing of the platform, ensuring smooth testing workflows and timely delivery of quality software.`,
        ]}
        technologies={[
          "Javascript",
          "React",
          "Bootstrap",
          "LESS",
          "SCSS",
          "NodeJS",
          "Socket.IO",
          "Express",
          "MySQL",
        ]}
      />
      <JobCard
        icon={
          <Image height={28} priority src={massiveuIcon} alt="MassiveU Icon" />
        }
        title="Software Engineer"
        company="MassiveU"
        tenure="FEB 2022 - NOV 2022"
        text={[
          `Developed pixel-perfect designs for responsive web applications using Bootstrap, SCSS, and LESS to enhance the user experience across multiple screen sizes.`,
          `Pioneered the creation of a resume-like portfolio feature, enabling learners to showcase evaluations on the platform's measured competencies, thereby boosting learner engagement.`,
          `Spearheaded a significant refactoring effort in the React client, employing modern design patterns, particularly React hooks, to optimize codebase maintainability and performance.`,
          `Designed and developed a custom diffing tool, streamlining the migration process of new platform features to different vendor versions, significantly reducing manual coding efforts.`,
        ]}
        technologies={[
          "Javascript",
          "React",
          "Bootstrap",
          "LESS",
          "SCSS",
          "NodeJS",
          "Socket.IO",
          "Express",
          "MySQL",
        ]}
      />
    </motion.div>
  );
};
