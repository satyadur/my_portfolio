import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export const SmoothScrollWrapper = ({ children }) => {
  const scrollContainerRef = useRef();
  const contentRef = useRef();

  // Register GSAP plugins
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  }, []);

  useGSAP(() => {
    if (ScrollSmoother) {
      ScrollSmoother.create({
        wrapper: scrollContainerRef.current,
        content: contentRef.current,
        smooth: 1.5, // Adjust smoothness (seconds)
        effects: true,
        normalizeScroll: true,
      });
    }
  }, [scrollContainerRef, contentRef]);

  return (
    <div
      id="smooth-wrapper"
      ref={scrollContainerRef}
      className="fixed inset-0 overflow-hidden"
    >
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
};