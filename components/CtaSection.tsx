"use client";

import { useState, useRef } from "react";
import { ArrowUpRight, PenTool } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

export default function CtaSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePos({ x: x * 0.05, y: y * 0.03 });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setMousePos({ x: 0, y: 0 });
      }}

      className="relative w-full bg-[#040404] py-32 sm:py-44 px-6 sm:px-12 md:px-16 text-white overflow-hidden"
    >
      {/* Background Neon Aura Backing */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-[#16A34A]/20 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-10 right-1/3 w-[400px] h-[400px] bg-[#B5FF2F]/15 rounded-full blur-[160px]"></div>
      </div>

      {/* 3D Liquid Ribbon Simulation */}
      <div
        className="absolute inset-0 pointer-events-none z-10 flex items-center justify-end transition-transform duration-700 ease-out opacity-80"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) scale(1.05)`,
        }}
      >
        <svg
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover min-h-[400px]"
        >
          <defs>
            <linearGradient id="brandifGlass" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#030A04" stopOpacity="0.98" />
              <stop offset="20%" stopColor="#05220C" stopOpacity="0.95" />
              <stop offset="45%" stopColor="#0F4D1C" stopOpacity="0.85" />
              <stop offset="70%" stopColor="#1E8B36" stopOpacity="0.65" />
              <stop offset="88%" stopColor="#26DF5B" stopOpacity="0.45" />
              <stop offset="95%" stopColor="#A6F13C" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.35" />
            </linearGradient>
            <linearGradient id="glossyEdge" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
              <stop offset="25%" stopColor="#A6F13C" stopOpacity="0.9" />
              <stop offset="65%" stopColor="#16A34A" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.95" />
            </linearGradient>
          </defs>

          <path
            d="M 320,560 C 400,380 480,290 640,360 C 760,420 830,240 880,120 C 720,220 560,430 320,560 Z"
            fill="url(#brandifGlass)"
            stroke="url(#glossyEdge)"
            strokeWidth="2.5"
          />
          <path
            d="M 580,600 C 740,280 860,60 1080,90 C 1180,100 1120,320 920,530 C 790,420 690,480 580,600 Z"
            fill="url(#brandifGlass)"
            stroke="url(#glossyEdge)"
            strokeWidth="3.5"
          />
        </svg>
      </div>

      {/* Main Content Layout */}
      <div className="relative z-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
        {/* Left Headline */}
        <div>
          <h2 className="text-5xl sm:text-7xl lg:text-[100px] font-bold tracking-tight leading-[1.05]">
            Have a project<br />
            <span className="text-neutral-200">in mind?</span>
          </h2>
        </div>

        {/* Right Interactive CTA Box */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-start gap-6 cursor-pointer"
        >
          {/* Animated Trigger Button */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-[#B5FF2F] group-hover:text-black">
            {/* Pen Icon (Default) */}
            <PenTool className="w-8 h-8 transition-all duration-300 group-hover:opacity-0 group-hover:scale-50 absolute text-white" />

            {/* Arrow Icon (Hover) */}
            <ArrowUpRight className="w-10 h-10 transition-all duration-300 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 text-black absolute" />
          </div>

          <p className="text-lg sm:text-xl text-neutral-300 font-normal group-hover:text-white transition-colors">
            Share your project idea with us! →
          </p>
        </a>
      </div>
    </section>
  );
}
