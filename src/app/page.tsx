"use client";

import MenuBar from "@/components/MenuBar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import EmploymentHistory from "@/components/employment";
import Projects from "@/components/projects";

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

          <AnimatePresence>
            {content === "work" && <EmploymentHistory key="1" />}
            {content === "projects" && <Projects key="2" />}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </>
  );
}
