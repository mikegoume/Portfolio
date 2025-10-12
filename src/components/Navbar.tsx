import { gsap } from "gsap";
import { Briefcase, FlaskConical, Home } from "lucide-react";
import React, { useLayoutEffect, useRef, useState } from "react";

interface LinkItem {
  href: string;
  label: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Refs
  const menuContainer = useRef<HTMLDivElement | null>(null);
  const navLinks = useRef<HTMLAnchorElement[]>([]);
  const divider = useRef<HTMLDivElement | null>(null);
  const iconLines = useRef<SVGPathElement[]>([]);
  const subtitleTrack = useRef<HTMLDivElement | null>(null);

  // Animation timeline for the menu
  const tl = useRef<gsap.core.Timeline>(null);

  const links: LinkItem[] = [
    { href: "/", label: "Home", Icon: Home },
    { href: "/work", label: "Work", Icon: Briefcase },
    { href: "/lab", label: "Lab", Icon: FlaskConical },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        paused: true,
        defaults: { ease: "power3.inOut" },
      });

      timeline
        .to(menuContainer.current, {
          height: "auto",
          opacity: 1,
          duration: 0.5,
        })
        .to(divider.current, { width: "100%", duration: 0.4 }, "-=0.3")
        .fromTo(
          navLinks.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.4 },
          "-=0.3"
        );

      // Icon morph animation
      timeline.addLabel("iconStart", 0);
      timeline.to(
        iconLines.current[0],
        { rotation: 45, y: 6, transformOrigin: "center center", duration: 0.3 },
        "iconStart"
      );
      timeline.to(
        iconLines.current[1],
        { opacity: 0, duration: 0.2 },
        "iconStart"
      );
      timeline.to(
        iconLines.current[2],
        {
          rotation: -45,
          y: -6,
          transformOrigin: "center center",
          duration: 0.3,
        },
        "iconStart"
      );

      tl.current = timeline;
    });

    return () => ctx.revert();
  }, []);

  // 🔁 Continuous subtitle scrolling
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!subtitleTrack.current) return;

      const track = subtitleTrack.current;
      const width = track.scrollWidth / 2; // because we duplicate the text
      gsap.set(track, { x: 0 });

      gsap.to(track, {
        x: -width,
        duration: 20, // adjust speed
        ease: "none",
        repeat: -1,
        modifiers: {
          x: (x) => `${parseFloat(x) % -width}px`, // seamless loop
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => {
      const next = !prev;
      if (next) {
        tl.current?.play();
      } else {
        tl.current?.reverse();
      }
      return next;
    });
  };

  return (
    <div className="py-2 pl-2 pr-4 md:pr-8 rounded-2xl md:rounded-[20px] bg-neutral-900 border border-neutral-800 fixed left-4 md:left-1/2 right-4 md:right-auto md:-translate-x-1/2 bottom-4 md:bottom-6 md:w-[700px] z-50 overflow-hidden">
      {/* Hidden menu */}
      <div
        ref={menuContainer}
        className="overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <nav className="flex flex-col gap-4 mb-4">
          {links.map(({ href, label, Icon }, i) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-5 group cursor-pointer"
              ref={(el) => {
                if (el) navLinks.current[i] = el;
              }}
            >
              <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-lg md:rounded-xl bg-neutral-800 flex items-center justify-center">
                <Icon className="w-8 h-8 text-neutral-100 transition-all group-hover:scale-110" />
              </div>
              <div className="overflow-hidden h-8">
                <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-1/2">
                  <span className="text-lg md:text-xl font-semibold text-neutral-100 mb-1.5">
                    {label}
                  </span>
                  <span className="text-lg md:text-xl font-semibold text-neutral-100 mb-1.5">
                    {label}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </nav>
        <div className="pb-4">
          <div
            ref={divider}
            className="h-px rounded bg-neutral-800"
            style={{ width: "0%" }}
          ></div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-5">
          <div className="h-[60px] w-[60px] md:h-[80px] md:w-[80px] rounded-lg md:rounded-xl bg-neutral-100 overflow-hidden relative flex items-center justify-center">
            <span className="text-neutral-900 text-2xl">👋</span>
          </div>

          <div className="flex flex-col gap-1.5 md:gap-2 w-[250px] sm:w-[500px] relative">
            <a
              className="md:text-lg font-semibold text-neutral-100 uppercase"
              href="/"
            >
              Michail Goumenakis
            </a>

            {/* ✅ Moving subtitle */}
            <div className="relative h-4 md:h-4.5 overflow-hidden w-full">
              <div className="absolute left-0 h-full w-10 bg-gradient-to-r from-neutral-900/95 to-neutral-900/0 z-10"></div>
              <div className="absolute right-0 h-full w-10 bg-gradient-to-l from-neutral-900/95 to-neutral-900/0 z-10"></div>

              <div ref={subtitleTrack} className="flex whitespace-nowrap">
                <p className="text-[10px] md:text-xs tracking-widest text-neutral-300 uppercase pr-1.5">
                  Creative Design Engineer, Awwwards Stalker, Product Builder,
                  Next.js Enthusiast,
                </p>
                <p className="text-[10px] md:text-xs tracking-widest text-neutral-300 uppercase pr-1.5">
                  Creative Design Engineer, Awwwards Stalker, Product Builder,
                  Next.js Enthusiast,
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Animated menu icon */}
        <svg
          onClick={toggleMenu}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-7 h-7 text-neutral-100 hover:text-neutral-400 transition-all duration-300 cursor-pointer"
        >
          <path ref={(el) => (iconLines.current[0] = el!)} d="M4 6h16" />
          <path ref={(el) => (iconLines.current[1] = el!)} d="M4 12h16" />
          <path ref={(el) => (iconLines.current[2] = el!)} d="M4 18h16" />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
