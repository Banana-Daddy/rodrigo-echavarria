// 21st.dev component cache for HANDOFF MODE.
// Query: "hero cinematic dark athlete"
// Component: DarkProjectHero (progressive-hero) — full-bleed video bg with overlay,
//   secondary chip CTA, animated cycling word.
// Date cached: 2026-05-13
// Use: Direction B — "The Operator" (cinematic dark pro sport). Pattern borrowed:
//   full-bleed dark canvas, semi-transparent black overlay over hero media,
//   warm-accent secondary chip CTA, big drop-shadow on display type.

"use client";
import * as React from "react";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";

function DarkProjectHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ["vivid", "progressive", "limitless"], []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) setTitleNumber(0);
      else setTitleNumber(titleNumber + 1);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="fixed inset-0 w-full h-full min-h-screen min-w-screen z-[-1] font-sans">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://videos.pexels.com/video-files/18526841/uhd_30fps.mp4"
        autoPlay loop muted playsInline
      />
      <div className="absolute inset-0 bg-black/80 z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-screen">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col w-full">
          <button className="gap-4 shadow-md shadow-red-900/40 bg-black/70 text-red-300 border border-red-700 rounded-md h-9 px-4">
            Explore VividCore vision <MoveRight className="w-4 h-4" />
          </button>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tight text-center font-extrabold text-red-400 drop-shadow-[0_2px_16px_rgba(255,0,0,0.7)] font-sans">
              <span className="text-red-500 font-extrabold">Welcome to</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">&nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-extrabold text-orange-400 drop-shadow-[0_2px_16px_rgba(255,80,0,0.7)] font-sans"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={titleNumber === index ? { y: 0, opacity: 1 } : { y: titleNumber > index ? -150 : 150, opacity: 0 }}
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-red-200 max-w-2xl text-center drop-shadow-[0_2px_8px_rgba(255,0,0,0.4)] font-sans">
              VividCore is igniting the future of computation with vibrant, progressive technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { DarkProjectHero };
