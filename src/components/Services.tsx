import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "01",
    title: "Brand Strategy",
    description: [
      "Helping others uncover their brand's purpose",
      "and uniqueness – and the game plan to deliver it",
      "to win their customers' devotion.",
    ],
    tags: [
      "Research & Insights",
      "Brand Strategy",
      "Competitive Study",
      "Voice & Tone",
      "Naming & Copywriting",
      "Workshops",
    ],
    image: "/images/services/brand-strategy.png",
  },
  {
    id: "02",
    title: "Digital Design",
    description: [
      "Designing engaging digital experiences that",
      "combine brand strategy and creativity with UX",
      "insights to deliver functionality and ease of use.",
    ],
    tags: [
      "Identity Design",
      "Wireframing",
      "UI",
      "UX",
      "Web Design",
      "Product Design",
    ],
    image: "/images/services/digital-design.png",
  },
  {
    id: "03",
    title: "Development",
    description: [
      "Building digital products that combine design,",
      "technology, and business strategy to deliver",
      "seamless user experiences.",
    ],
    tags: [
      "Frontend Development",
      "SEO",
      "Motion",
      "Animation",
      "WebGL",
      "CMS Development",
      "Databases",
    ],
    image: "/images/services/development.png",
  },
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".line").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            ease: "power3.out",
            duration: 1,
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-2 lg:px-4 py-16 lg:py-24">
      <div className="flex flex-col gap-16 lg:gap-24 bg-neutral-900 px-4 pt-16 lg:pt-24 pb-4 rounded-2xl lg:rounded-[20px]">
        {/* Header */}
        <div className="lg:grid lg:grid-cols-12 gap-24">
          <div className="flex flex-col col-span-12 lg:col-span-10 lg:col-start-3">
            <h2 className="text-xs lg:text-[clamp(14px,0.8vw,18px)] text-neutral-400 uppercase font-medium tracking-wider mb-2">
              <div className="line-mask">
                {["Services"].map((line, i) => (
                  <div key={i} className="line">
                    {line}
                  </div>
                ))}
              </div>
            </h2>
            <p className="text-neutral-100 text-[clamp(24px,3.3vw,56px)] font-medium leading-[1.1] lg:leading-[1.05]">
              {[
                "Evolving with every brief and built for impact, my process ",
                "spans design, development, and brand strategy—aligning ",
                "vision with execution to bring clarity and edge to every ",
                "project.",
              ].map((line, i) => (
                <div key={i} className="line">
                  {line}
                </div>
              ))}
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col bg-neutral-800 rounded-xl lg:rounded-2xl px-4 lg:px-5">
          <ul className="flex flex-col">
            {services.map((service, idx) => (
              <li
                key={service.id}
                className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 pt-10 last:pb-4 not-last:pb-10 lg:last:pb-10 not-last:border-b not-last:border-neutral-700"
              >
                <p className="text-xs lg:text-[clamp(14px,0.8vw,18px)] text-neutral-300 uppercase font-medium tracking-wider mb-1 lg:col-span-2">
                  <div className="line-mask">
                    <div className="line">{service.id}</div>
                  </div>
                </p>
                <h3 className="text-[clamp(24px,3.3vw,56px)] text-neutral-100 font-medium lg:col-span-4 mb-6 lg:mb-0 lg:-mt-4">
                  <div className="line-mask">
                    <div className="line">{service.title}</div>
                  </div>
                </h3>
                <div className="flex flex-col gap-4 lg:gap-6 lg:col-span-3 mb-8 lg:mb-0">
                  {service.description.map((line, i) => (
                    <p
                      key={i}
                      className="text-[clamp(16px,1.2vw,20px)] text-neutral-100 font-medium leading-[1.3]"
                    >
                      <div className="line-mask">
                        <div className="line">{line}</div>
                      </div>
                    </p>
                  ))}
                  <ul className="flex gap-1.5 flex-wrap">
                    {service.tags.map((tag, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: i * 0.05,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        className="text-[10px] text-neutral-100 uppercase tracking-[1.1] bg-neutral-100/10 px-2 3xl:px-3 pt-2 pb-1.5 rounded-md whitespace-nowrap"
                      >
                        {tag}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-3">
                  <div className="h-[220px] sm:h-[400px] md:h-[450px] lg:h-[clamp(220px,15vw,360px)] rounded-lg overflow-hidden relative">
                    <div className="absolute inset-0 w-full h-[120%] lg:-top-[10%]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
