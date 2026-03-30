"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HeroImage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)" });

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollY = window.scrollY;
      
      // Basic logic to rotate and scale slightly on scroll
      const rotateX = Math.min(scrollY * 0.05, 15);
      const scale = 1 - Math.min(scrollY * 0.0005, 0.1);
      
      // Only apply if we haven't hovered heavily (mouse hover will override this)
      setStyle((prev) => ({
        ...prev,
        transform: `perspective(1000px) rotateX(${rotateX}deg) scale(${scale}) translateY(${scrollY * 0.2}px)`,
      }));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to center of image
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);
    
    // Max rotation 15 degrees
    const rotateX = -y * 15;
    const rotateY = x * 15;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
      transition: "transform 0.1s ease-out",
    });
  };

  const handleMouseLeave = () => {
    // Reset to scroll-based transform or zero
    setStyle({
      transform: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`,
      transition: "transform 0.5s ease-out",
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="hero-image-container relative w-full max-w-2xl aspect-[4/3] cursor-pointer mt-12 mx-auto"
      style={style}
    >
      <Image
        src="/cheese.png"
        alt="la-cremossa premium cheesecake"
        fill
        className="object-contain drop-shadow-2xl"
        priority
      />
    </div>
  );
}
