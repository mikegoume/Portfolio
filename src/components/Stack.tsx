"use client";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef, useState } from "react";

export default function ModernTechstackSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth scroll-driven spring
  const ySlow = useSpring(useTransform(scrollYProgress, [0, 1], [-100, 0]));
  const yMedium = useSpring(useTransform(scrollYProgress, [0, 1], [-150, 0]));
  const yFast = useSpring(useTransform(scrollYProgress, [0, 1], [-200, 0]));

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

  const gridItems = [
    // Top row (3)
    { src: "/images/svg/react-logo.svg", href: "https://reactjs.org" },
    {
      src: "/images/svg/nextjs-logotype-light-background.svg",
      href: "https://nextjs.org",
    },
    {
      src: "/images/svg/typescript-logo.svg",
      href: "https://www.typescriptlang.org",
    },
    // Bottom row (7)
    { src: "/images/svg/gsap-black.svg", href: "https://gsap.com/" },
    { src: "/images/svg/motion.svg", href: "https://motion.dev/" },
    {
      src: "/images/svg/tailwindcss-logo.svg",
      href: "https://tailwindcss.com/",
    },
    {
      src: "/images/svg/contentful-logo.svg",
      href: "https://www.contentful.com/",
    },
    { src: "/images/svg/supabase-logo.svg", href: "https://supabase.com/" },
    {
      src: "/images/svg/vercel-logotype-light.svg",
      href: "https://vercel.com/",
    },
    { src: "/images/svg/figma-logo.svg", href: "https://www.figma.com/" },
  ];

  const firstLine = "MODERN";
  const secondLine = "TECHSTACK";

  return (
    <section
      ref={sectionRef}
      className="relative pb-24 px-4 lg:px-8 overflow-hidden"
    >
      {/* ===== TEXT SECTION ===== */}
      <div className="flex flex-col justify-center items-center h-[500px] lg:h-[800px] py-24 text-center">
        <motion.h1 className="font-bold tracking-tight leading-[0.85] text-[clamp(48px,14vw,250px)] flex overflow-hidden">
          {[...firstLine].map((ch, i) => (
            <motion.span
              key={i}
              className="inline-block"
              style={{
                y: i % 3 === 0 ? ySlow : i % 3 === 1 ? yMedium : yFast,
              }}
            >
              {ch}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h1 className="font-bold tracking-tight leading-[0.9] text-[clamp(48px,14vw,250px)] flex overflow-hidden">
          {[...secondLine].map((ch, i) => (
            <motion.span
              key={i}
              className="inline-block"
              style={{
                y: i % 3 === 0 ? yFast : i % 3 === 1 ? yMedium : ySlow,
              }}
            >
              {ch}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      {/* ===== SUBHEADING ===== */}
      <h4 className="font-semibold uppercase mb-8">Professional at</h4>

      {/* ===== GRID SECTION ===== */}
      <div className="relative hidden lg:flex flex-col gap-0">
        {/* Highlight Background */}
        <motion.div
          animate={{
            x: highlight.x,
            y: highlight.y,
            width: highlight.w,
            height: highlight.h,
            opacity: highlight.visible ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute top-0 left-0 bg-neutral-900 rounded-2xl pointer-events-none z-0"
        />

        {/* Top Row */}
        <div className="grid grid-cols-3 border-b border-neutral-300">
          {gridItems.slice(0, 3).map(({ src, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
              className="grid-item relative flex items-center justify-center border-r border-neutral-300 p-8 cursor-pointer overflow-hidden"
            >
              <img
                src={src}
                width="90"
                height="90"
                alt={href}
                className="z-10 transition-all duration-300"
              />
            </a>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-7 border-neutral-300">
          {gridItems.slice(3).map(({ src, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
              className="grid-item relative flex items-center justify-center border-r border-neutral-300 p-6 cursor-pointer overflow-hidden"
            >
              <img
                src={src}
                width="70"
                height="70"
                alt={href}
                className="z-10 transition-all duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
