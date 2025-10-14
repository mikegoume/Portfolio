import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);
  const textRefs = useRef([]);
  const videoRefs = useRef({ mobile: null, desktop: null });

  const addToTextRefs = (el) => {
    if (el && !textRefs.current.includes(el)) textRefs.current.push(el);
  };

  useEffect(() => {
    textRefs.current.forEach((el, i) => {
      const direction = i % 2 === 0 ? 1 : -1;
      const distance = 80 + Math.random() * 100; // increased for more visible movement
      const duration = 1 + Math.random() * 0.5;

      gsap.fromTo(
        el,
        { x: distance * direction, opacity: 0.3 },
        {
          x: 0,
          opacity: 1,
          duration,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            end: "bottom 30%",
            scrub: true,
          },
        }
      );
    });

    // Animate both videos
    Object.values(videoRefs.current).forEach((video) => {
      if (video) {
        gsap.fromTo(
          video,
          { opacity: 0, scale: 1.1 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: video,
              start: "top 80%",
              end: "bottom 60%",
              scrub: true,
            },
          }
        );
      }
    });
  }, []);

  const text =
    "Passionate about merging design and engineering, I craft smooth, interactive experiences with purpose. With a focus on motion, performance, and detail, I help bring digital products to life for forward-thinking brands around the world.";

  return (
    <section
      ref={sectionRef}
      id="about"
      className="grid grid-cols-12 gap-4 lg:gap-8 pt-56 pb-28 p-4 lg:px-8"
    >
      {/* Text Column */}
      <div className="flex flex-col col-span-12 lg:col-span-7">
        <h4 className="font-semibold uppercase mb-4">Myself</h4>

        {/* Desktop Animated Text */}
        <p className="hidden lg:block text-[clamp(28px,3.5vw,96px)] font-semibold tracking-tight leading-none flex flex-wrap">
          {text.split(" ").map((word, idx) => (
            <span
              key={idx}
              ref={addToTextRefs}
              className="inline-block mr-[1.2em] mb-[0.2em]" // ✅ added big spacing
              style={{ display: "inline-block" }}
            >
              {word}
            </span>
          ))}
        </p>

        {/* Mobile Text */}
        <p className="lg:hidden text-[clamp(28px,3.5vw,96px)] font-semibold tracking-tight leading-none">
          {text}
        </p>

        {/* Mobile Video */}
        <div className="lg:hidden col-span-12 aspect-video rounded-lg overflow-hidden mb-4">
          <video
            ref={(el) => (videoRefs.current.mobile = el)}
            src="/videos/about-video-compressed.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="pointer-events-none w-full h-full object-cover"
            poster="/images/about-poster.jpg"
          ></video>
        </div>
      </div>

      {/* Desktop Video */}
      <div className="hidden lg:block h-full col-span-5">
        <div className="sticky top-[calc(100vh-20vw-172px)] w-full aspect-video rounded-lg lg:rounded-xl overflow-hidden">
          <video
            ref={(el) => (videoRefs.current.desktop = el)}
            src="/videos/about-video-compressed.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="pointer-events-none w-full h-full object-cover"
          ></video>
        </div>
      </div>
    </section>
  );
}
