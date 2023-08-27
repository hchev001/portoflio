import { cn } from "@/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { JobCard } from "./JobCard";

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
            width={32}
            priority
            src={"/shopmonkey-icon.svg"}
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
            width={32}
            priority
            src={"/logo_talogy_bubble.svg"}
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
          <Image
            height={28}
            width={24}
            priority
            src={"/massiveu.svg"}
            alt="MassiveU Icon"
          />
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

export default EmploymentHistory;
