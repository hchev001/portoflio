"use client";

import Image from "next/image";
import hamilton_avatar from "../../public/avatar_hamilton.svg";
import MenuDropdown from "./MenuButton";
import { cn } from "@/utils";
import { motion } from "framer-motion";

interface MenuBarProps {
  content?: "projects" | "work";
  setContent?: (content: "projects" | "work") => void;
}

const MenuBar = ({ content, setContent }: MenuBarProps) => {
  return (
    <motion.div
      className="fixed z-50 xl:max-w-5xl w-full flex justify-between px-2 xl:px-0"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative w-[60px] h-[60px] bg-white rounded-full overflow-hidden">
        <Image
          className="absolute top-0 left-1 translate-x-2 translate-y-2"
          height={40}
          priority
          src={hamilton_avatar}
          alt="Hamilton Memoji"
        />
      </div>
      {content && setContent && (
        <div
          className={
            "h-[60px] flex gap-3 py-1.5 px-1.5 rounded-[60px] drop-shadow-[0px_4px_48px_rgba(0,0,0,0.12)] bg-haze-100 text-btgray"
          }
        >
          <button
            className={cn("py-2 px-4 rounded-[60px]", {
              "bg-white drop-shadow-sm": content === "work",
              "bg-plomo-100": content === "projects",
            })}
            onClick={() => setContent("work")}
          >
            Work
          </button>
          <button
            className={cn("py-2 px-4 rounded-[60px]", {
              "bg-white drop-shadow-sm": content === "projects",
              "bg-plomo-100 text-plomo-300": content === "work",
            })}
            onClick={() => setContent("projects")}
          >
            Projects
          </button>
        </div>
      )}
      <MenuDropdown />
    </motion.div>
  );
};

export default MenuBar;
