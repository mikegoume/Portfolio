"use client";
import { motion } from "motion/react";
import { useState } from "react";

export default function Footer() {
  const [highlight, setHighlight] = useState({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    visible: false,
  });

  const handleHover = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const parent = e.currentTarget.parentElement.getBoundingClientRect();
    setHighlight({
      x: rect.left - parent.left,
      y: rect.top - parent.top,
      w: rect.width,
      h: rect.height,
      visible: true,
    });
  };

  const handleLeave = () => setHighlight((h) => ({ ...h, visible: false }));

  return (
    <footer className="bg-neutral-100 relative">
      <div className="px-2 lg:px-4 pt-8 lg:pt-16 pb-8 lg:pb-4 grid grid-cols-12 gap-2 lg:gap-4 relative">
        {/* ===== Center Logo Text ===== */}
        <h2
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[clamp(100px,14vw,250px)] tracking-tight"
          style={{ transform: "translateY(-4.69565vh)" }}
        >
          itsjay.us
        </h2>

        {/* ===== Highlight Box ===== */}
        <motion.div
          animate={{
            x: highlight.x,
            y: highlight.y,
            width: highlight.w,
            height: highlight.h,
            opacity: highlight.visible ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute top-0 left-0 bg-neutral-300/30 backdrop-blur-sm rounded-xl pointer-events-none z-0"
        />

        {/* ===== Links ===== */}
        <a
          href="/work"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          className="col-span-12 lg:col-span-8 flex items-end p-4 lg:p-6 bg-neutral-300/50 backdrop-blur-sm h-[200px] lg:h-[350px] rounded-lg lg:rounded-xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight cursor-pointer transition-all duration-500"
        >
          Work
        </a>

        <a
          href="/lab"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          className="col-span-12 lg:col-span-4 flex items-end p-4 lg:p-6 bg-neutral-300/50 backdrop-blur-sm h-[200px] lg:h-[350px] rounded-lg lg:rounded-xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight cursor-pointer transition-all duration-500"
        >
          Lab
        </a>

        {/* ===== Contact / Github ===== */}
        <div className="col-span-12 lg:col-span-4 grid grid-cols-2 lg:grid-rows-2 gap-2 lg:gap-4">
          <a
            href="mailto:jason@itsjay.us"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            className="lg:col-span-12 flex items-end p-4 lg:p-6 bg-neutral-300/50 backdrop-blur-sm h-[120px] lg:h-full rounded-lg lg:rounded-xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight cursor-pointer transition-all duration-500"
          >
            Contact
          </a>
          <a
            href="https://github.com/jasonzubiate"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            className="lg:col-span-12 flex items-end p-4 lg:p-6 bg-neutral-300/50 backdrop-blur-sm h-[120px] lg:h-full rounded-lg lg:rounded-xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight cursor-pointer transition-all duration-500"
          >
            Github
          </a>
        </div>

        {/* ===== Instagram / LinkedIn ===== */}
        <a
          href="https://www.instagram.com/itsjay.us/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          className="col-span-6 lg:col-span-4 flex items-end p-4 lg:p-6 bg-neutral-300/50 backdrop-blur-sm h-[120px] lg:h-[350px] rounded-lg lg:rounded-xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight cursor-pointer transition-all duration-500"
        >
          Instagram
        </a>

        <a
          href="https://www.linkedin.com/in/jasonzubiate/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          className="col-span-6 lg:col-span-4 flex items-end p-4 lg:p-6 bg-neutral-300/50 backdrop-blur-sm h-[120px] lg:h-[350px] rounded-lg lg:rounded-xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight cursor-pointer transition-all duration-500"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
