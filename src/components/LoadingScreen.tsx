import gsap from "gsap";
import { AnimatePresence, motion } from "motion/react"; // ✅ from motion.dev
import { useEffect, useRef } from "react";

interface LoadingScreenProps {
  isLoading: boolean;
  onFinish: () => void;
}

export default function LoadingScreen({
  isLoading,
  onFinish,
}: LoadingScreenProps) {
  const numberRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!isLoading || !numberRef.current) return;

    // Reset text and position before starting
    gsap.set(numberRef.current, { y: "0%", textContent: "0" });

    const obj = { val: 0 };

    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      onComplete: onFinish,
    });

    // Count 0 → 100
    tl.to(obj, {
      val: 100,
      duration: 2,
      onUpdate: () => {
        if (numberRef.current) {
          numberRef.current.textContent = Math.floor(obj.val).toString();
        }
      },
    });

    // Move number upward
    tl.to(
      numberRef.current,
      {
        y: "-100%",
        duration: 1,
        ease: "power2.inOut",
      },
      "-=0.5" // overlaps slightly
    );

    return () => tl.kill();
  }, [isLoading, onFinish]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeOut" } }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-neutral-100 w-screen h-screen pointer-events-none"
        >
          <div className="overflow-hidden">
            <p
              ref={numberRef}
              className="text-4xl font-bold tracking-tight"
              style={{ transform: "translateY(0%)" }}
            >
              0
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
