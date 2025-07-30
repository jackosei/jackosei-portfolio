"use client"

import { useEffect } from "react";

export default function GSAPInteractions() {
  useEffect(() => {
    // Custom cursor effect
    const cursor = document.createElement("div");
    cursor.className = "fixed w-4 h-4 bg-primary rounded-full pointer-events-none z-50 transition-transform duration-200 ease-out";
    document.body.appendChild(cursor);

    const cursorFollower = document.createElement("div");
    cursorFollower.className = "fixed w-8 h-8 border border-primary rounded-full pointer-events-none z-50 transition-transform duration-300 ease-out";
    document.body.appendChild(cursorFollower);

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX - 8}px, ${e.clientY - 8}px)`;
      cursorFollower.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
    };

    const handleMouseEnter = () => {
      cursor.style.transform += " scale(1.5)";
      cursorFollower.style.transform += " scale(1.5)";
    };

    const handleMouseLeave = () => {
      cursor.style.transform = cursor.style.transform.replace(" scale(1.5)", "");
      cursorFollower.style.transform = cursorFollower.style.transform.replace(" scale(1.5)", "");
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll("a, button, [role='button']");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      document.body.removeChild(cursor);
      document.body.removeChild(cursorFollower);
    };
  }, []);

  return null;
} 