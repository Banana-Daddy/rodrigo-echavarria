// 21st.dev component cache for HANDOFF MODE.
// Query: "hero editorial magazine portrait"
// Component: Hero 04 (Ali Imam) — oversized condensed display with portrait inset.
// Date cached: 2026-05-13
// Use: Direction A — "The Feature" (editorial magazine). Pattern borrowed:
//   massive uppercase letterforms with tight negative tracking, photo inset
//   inside a colored block, name as caption running vertical-rl alongside.

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ArrowDownRight } from "@aliimam/icons";
import { Button } from "@/components/ui/button";

export function HeroSection04() {
  return (
    <section className="min-h-screen overflow-hidden relative py-20">
      <div className="mx-auto max-w-7xl relative z-20 px-6">
        <div className="relative ">
          <p className="text-sm absolute -top-4 left-20 font-medium tracking-wider">
            1,996
          </p>
          <h1
            className={`z-20 text-primary relative font-bold text-center tracking-[-7px] text-7xl md:text-9xl xl:tracking-[-1rem] md:tracking-[-14px] xl:text-[10rem]`}
          >
            CREATIVE DESIGNER
          </h1>
          <p className="text-4xl hidden xl:block absolute -bottom-12 right-24 font-thin tracking-[6px]">
            ALI IMAM
          </p>
        </div>

        <div className="grid relative">
          <div className="space-y-8 pt-20 flex gap-6 justify-center">
            <div className="flex gap-6 bg-secondary w-full max-w-xl h-fit p-10 items-end space-y-2 text-xl font-bold md:text-2xl lg:text-3xl">
              <div className="font-semibold text-xl">
                <div>/ ART DIRECTION</div>
                <div>/ WEB DESIGN (UX/UI)</div>
                <div>/ WEB DEVELOPMENT</div>
              </div>
              <div className="absolute hidden md:flex left-1/2 -top-10 w-fit overflow-hidden bg-secondary">
                <img
                  src="https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/ai.jpg"
                  alt="Designer portrait"
                  className="h-100 w-full object-contain grayscale"
                />
                <div className="text-left p-2 rotate-180 [writing-mode:vertical-rl] text-xs font-medium tracking-widest">
                  BASED IN BOKARO STEEL CITY
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex mt-20 items-end justify-between">
          <div>
            <div className="flex items-center md:justify-end gap-2">
              <span className="text-lg font-medium tracking-wider">RECENT WORK</span>
              <ArrowDownRight className="size-6" />
            </div>
            <div className="mt-3 md:text-right">
              <h2 className={`text-5xl uppercase tracking-[-4px]`}>
                Design without Limits
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
