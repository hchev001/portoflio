"use client";

import Image from "next/image";
import hamilton_avatar from "../../public/avatar_hamilton.svg";
import MenuDropdown from "./MenuButton";
import { cn } from "@/utils";
import { motion, useAnimate } from "framer-motion";
import { useAppStore } from "@/store";
import { useEffect } from "react";

const MenuBar = () => {
  const { content, setContent } = useAppStore();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animateLabel = animate(
      scope.current,
      {
        x: content === "projects" ? [0, 92] : [92, 0],
        width: content === "work" ? 60 : 88,
      },
      { duration: 0.4 }
    );
    animateLabel.play();
  }, [content]);

  return (
    <motion.div
      className="fixed z-50 xl:max-w-5xl w-full flex justify-between px-2 xl:px-0"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
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

      <div
        className={cn(
          "relative h-[60px] flex gap-5 py-1.5 px-6 rounded-[60px] drop-shadow-[0px_4px_48px_rgba(0,0,0,0.12)] bg-haze-100 text-btgray"
        )}
      >
        <div
          className="absolute left-[6px] top-[6px] py-6 px-10 rounded-[60px] z-10 bg-white drop-shadow-sm h-[20px] w-12"
          ref={scope}
        />
        <button
          className={cn("rounded-[60px] z-20 mr-6")}
          onClick={() => setContent("work")}
        >
          Work
        </button>
        <button
          className={cn("rounded-[60px] z-20")}
          onClick={() => setContent("projects")}
        >
          Projects
        </button>
      </div>

      <MenuDropdown />
    </motion.div>
  );
};

export default MenuBar;
