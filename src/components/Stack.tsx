"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const techLogos = [
  {
    name: "React",
    src: "/images/svg/react-logo.svg",
    width: 90,
    url: "https://reactjs.org",
  },
  {
    name: "Next.js",
    src: "/images/svg/nextjs-logotype-light-background.svg",
    width: 150,
    url: "https://nextjs.org",
  },
  {
    name: "TypeScript",
    src: "/images/svg/typescript-logo.svg",
    width: 70,
    url: "https://www.typescriptlang.org",
  },
  {
    name: "GSAP",
    src: "/images/svg/gsap-black.svg",
    width: 80,
    url: "https://gsap.com/",
  },
  {
    name: "Motion",
    src: "/images/svg/motion.svg",
    width: 80,
    url: "https://motion.dev/",
  },
  {
    name: "TailwindCSS",
    src: "/images/svg/tailwindcss-logo.svg",
    width: 70,
    url: "https://tailwindcss.com/",
  },
  {
    name: "Contentful",
    src: "/images/svg/contentful-logo.svg",
    width: 50,
    url: "https://www.contentful.com/",
  },
  {
    name: "Supabase",
    src: "/images/svg/supabase-logo.svg",
    width: 50,
    url: "https://supabase.com/",
  },
  {
    name: "Vercel",
    src: "/images/svg/vercel-logotype-light.svg",
    width: 90,
    url: "https://vercel.com/",
  },
  {
    name: "Figma",
    src: "/images/svg/figma-logo.svg",
    width: 60,
    url: "https://www.figma.com/",
  },
];

const words = ["MODERN", "TECHSTACK"];

export default function TechStack() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const letters = gsap.utils.toArray(".letter");

      letters.forEach((letter, i) => {
        gsap.fromTo(
          letter,
          { yPercent: 100, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            ease: "power3.out",
            duration: 1,
            delay: i * 0.05,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pb-24 px-4 lg:px-8">
      {/* Letter scroll animation */}
      <ul className="letter-scroll flex flex-col justify-center items-center h-[500px] lg:h-[800px] py-24">
        {words.map((word, wIndex) => (
          <li
            key={wIndex}
            className="text-[clamp(48px,14vw,250px)] font-bold tracking-tight leading-[0.85] overflow-hidden flex"
          >
            {[...word].map((letter, i) => (
              <span
                key={i}
                className="letter relative inline-block overflow-hidden"
              >
                <span className="block">{letter}</span>
                <span className="absolute bottom-full left-0 block">
                  {letter}
                </span>
              </span>
            ))}
            {wIndex === 0 && (
              <span className="inline-block mr-[clamp(16px,4.5vw,72px)]" />
            )}
          </li>
        ))}
      </ul>

      <h4 className="font-semibold uppercase mb-4 text-neutral-800">
        Professional at
      </h4>

      {/* Desktop grid */}
      <div className="relative hidden lg:block">
        <div className="grid grid-rows-2">
          <div className="grid grid-cols-3 border-b border-neutral-300 h-[clamp(200px,20vw,400px)]">
            {techLogos.slice(0, 3).map((tech, i) => (
              <a
                key={i}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${tech.name} website`}
                className={`grid-item flex items-center justify-center group border-r border-neutral-300 ${
                  i === 2 ? "border-r-0" : ""
                } cursor-pointer`}
              >
                <motion.img
                  src={tech.src}
                  alt={tech.name}
                  width={tech.width}
                  className="z-10 transition-all duration-300 group-hover:scale-110 group-hover:opacity-80"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                />
              </a>
            ))}
          </div>

          <div className="grid grid-cols-7 h-[clamp(200px,15vw,400px)]">
            {techLogos.slice(3, 10).map((tech, i) => (
              <a
                key={i}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${tech.name} website`}
                className={`grid-item flex items-center justify-center group border-r border-neutral-300 ${
                  i === 6 ? "border-r-0" : ""
                } cursor-pointer`}
              >
                <motion.img
                  src={tech.src}
                  alt={tech.name}
                  width={tech.width}
                  className="z-10 transition-all duration-300 group-hover:scale-110 group-hover:opacity-80"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  viewport={{ once: true }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile grid */}
      <div className="grid grid-cols-2 lg:hidden">
        {techLogos.map((tech, i) => (
          <a
            key={i}
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`grid-item flex items-center justify-center group cursor-pointer h-[clamp(200px,20vw,400px)] border-neutral-300 ${
              (i + 1) % 2 === 0 ? "border-l" : "border-r"
            } border-b`}
            aria-label={`Visit ${tech.name} website`}
          >
            <motion.img
              src={tech.src}
              alt={tech.name}
              width={tech.width}
              className="z-10 transition-all duration-300 group-hover:scale-110 group-hover:opacity-80"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true }}
            />
          </a>
        ))}
      </div>
    </section>
  );
}
