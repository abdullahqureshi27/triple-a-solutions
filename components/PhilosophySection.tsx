"use client";

import { useState } from "react";
import Image from "next/image";

interface PhilosophyItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const PHILOSOPHY_ITEMS: PhilosophyItem[] = [
  {
    id: "strategy",
    title: "Brand Strategy",
    description:
      "Every successful brand starts with a clear strategy. We create purposeful brand foundations that help businesses stand out and grow with confidence.",
    icon: "https://thebrandif.com/wp-content/uploads/2026/06/h70_appr-02.webp",
  },
  {
    id: "creative",
    title: "Creative Excellence",
    description:
      "We blend creativity with strategy to design memorable brand identities that leave a lasting impression on your audience.",
    icon: "https://thebrandif.com/wp-content/uploads/2026/06/h70_appr-03.webp",
  },
  {
    id: "expertise",
    title: "Market Expertise",
    description:
      "We use industry insights, consumer behavior, and proven branding techniques to position your business for long-term success.",
    icon: "https://thebrandif.com/wp-content/uploads/2026/06/h70_appr-02.webp",
  },
  {
    id: "results",
    title: "Results-Driven Approach",
    description:
      "Every decision we make is focused on strengthening your brand, increasing visibility, and delivering measurable business growth.",
    icon: "https://thebrandif.com/wp-content/uploads/2026/06/h70_appr-03.webp",
  },
  {
    id: "solutions",
    title: "End-to-End Solutions",
    description:
      "From brand strategy and visual identity to marketing, SEO, and UX/UI, we provide comprehensive solutions that support your brand at every stage of its journey.",
    icon: "https://thebrandif.com/wp-content/uploads/2026/06/h70_appr-02.webp",
  },
];

export default function PhilosophySection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="about" className="w-full bg-[#141414] py-24 sm:py-32 px-6 sm:px-12 md:px-16 text-white">
      {/* Header Top Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end pb-16 gap-6 border-b border-white/10">
        <div>
          <h2 className="text-4xl sm:text-6xl font-medium tracking-tight">
            Process and philosophy
          </h2>
          <div className="flex gap-6 mt-4 text-white/50 text-base sm:text-lg">
            <span>Strategy</span>
            <span>✦</span>
            <span>Design</span>
            <span>✦</span>
            <span>Marketing</span>
          </div>
        </div>

        <a
          href="#contact"
          className="slide-up-btn bg-white/5 hover:bg-[#B5FF2F] hover:text-black border border-white/20 px-7 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300"
        >
          <div className="btn-text-wrapper">
            <span>Let&apos;s Chat</span>
            <span>Let&apos;s Chat</span>
          </div>
        </a>
      </div>

      {/* Philosophy Rows */}
      <div className="max-w-7xl mx-auto mt-12">
        {PHILOSOPHY_ITEMS.map((item, index) => {
          const isHovered = hoveredId === item.id;
          const hasHover = hoveredId !== null;

          return (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative flex flex-col md:flex-row items-start md:items-center py-10 sm:py-14 border-b-2 border-white transition-opacity duration-300 cursor-pointer ${
                index === 0 ? "border-t-2" : ""
              } ${hasHover && !isHovered ? "opacity-25" : "opacity-100"}`}
            >
              {/* Spinning Left Icon */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 mb-4 md:mb-0 md:mr-10">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  sizes="80px"
                  className={`object-contain transition-transform duration-700 ${
                    isHovered ? "animate-[spin_4s_linear_infinite]" : ""
                  }`}
                />

              </div>

              {/* Title & Description Grid */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center w-full">
                <div className="md:col-span-5">
                  <h3
                    className={`text-2xl sm:text-4xl font-semibold tracking-tight transition-colors duration-300 ${
                      isHovered ? "text-[#B5FF2F]" : "text-white"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>

                <div className="md:col-span-7">
                  <p
                    className={`text-base sm:text-lg leading-relaxed transition-colors duration-300 ${
                      isHovered ? "text-white" : "text-neutral-400"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
