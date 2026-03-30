"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseScrollRevealOptions {
  triggerOnEnter?: boolean;
  start?: string;
  toggleActions?: string;
}

export function useScrollReveal(
  selector: string,
  options: UseScrollRevealOptions = {}
) {
  const {
    triggerOnEnter = true,
    start = "top 85%",
    toggleActions = "play none none reverse",
  } = options;

  useEffect(() => {
    const elements = gsap.utils.toArray<Element>(selector);

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el as Element,
            start,
            toggleActions,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [selector, start, toggleActions]);
}

export function useFadeInOnScroll(elementRef: React.RefObject<Element>) {
  useEffect(() => {
    if (!elementRef.current) return;

    gsap.fromTo(
      elementRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [elementRef]);
}