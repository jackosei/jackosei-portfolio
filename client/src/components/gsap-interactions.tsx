import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GSAPInteractions() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Custom cursor with GSAP
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (!cursor || !cursorDot) return;

    let mouse = { x: 0, y: 0 };
    let delayedMouse = { x: 0, y: 0 };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onMouseEnterInteractive = () => {
      gsap.to(cursor, { scale: 4, duration: 0.3 });
      gsap.to(cursorDot, { scale: 0, duration: 0.3 });
    };

    const onMouseLeaveInteractive = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3 });
      gsap.to(cursorDot, { scale: 1, duration: 0.3 });
    };

    // Animate cursor following mouse
    gsap.ticker.add(() => {
      const speed = 0.2;
      
      delayedMouse.x += (mouse.x - delayedMouse.x) * speed;
      delayedMouse.y += (mouse.y - delayedMouse.y) * speed;
      
      gsap.set(cursor, { x: delayedMouse.x, y: delayedMouse.y });
      gsap.set(cursorDot, { x: mouse.x, y: mouse.y });
    });

    // Add event listeners
    document.addEventListener("mousemove", onMouseMove);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [data-cursor="pointer"]');
    interactiveElements.forEach(el => {
      el.addEventListener("mouseenter", onMouseEnterInteractive);
      el.addEventListener("mouseleave", onMouseLeaveInteractive);
    });

    // Scroll-triggered animations
    gsap.utils.toArray<HTMLElement>(".gsap-fade-up").forEach((element) => {
      gsap.fromTo(element, 
        { 
          opacity: 0, 
          y: 60,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Parallax effect for hero image
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
      gsap.to(heroImage, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: heroImage,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    }

    // Stagger animation for client logos
    gsap.set(".client-logo", { opacity: 0, y: 20 });
    gsap.to(".client-logo", {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".client-logo",
        start: "top 90%"
      }
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: "-16px",
          top: "-16px",
          borderRadius: "50%",
          border: "1px solid white",
          transform: "translate(-50%, -50%)"
        }}
      />
      <div
        ref={cursorDotRef}
        className="fixed w-1 h-1 bg-white pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: "-2px",
          top: "-2px",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)"
        }}
      />
    </>
  );
}