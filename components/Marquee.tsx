"use client";

import { useEffect, useRef } from "react";

interface MarqueeProps {
  items: string[];
  textColor?: string;
  starColor?: string;
  speed?: number;
  className?: string;
}

export default function Marquee({
  items,
  textColor = "#bfff00",
  starColor = "#bfff00",
  speed = 1.8,
  className = "",
}: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let currentPos = 0;
    let extraSpeed = 0;
    let targetExtraSpeed = 0;
    let lastScroll = window.scrollY;
    let timeoutId: NodeJS.Timeout;

    const onScroll = () => {
      const delta = Math.abs(window.scrollY - lastScroll);
      if (delta > 0) {
        targetExtraSpeed = Math.min(delta * 0.35, 12);
      }
      lastScroll = window.scrollY;

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        targetExtraSpeed = 0;
      }, 50);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    let animId: number;
    const animate = () => {
      extraSpeed += (targetExtraSpeed - extraSpeed) * 0.08;
      const totalSpeed = speed + extraSpeed;
      currentPos -= totalSpeed;

      const singleWidth = track.scrollWidth / 2;
      if (Math.abs(currentPos) >= singleWidth) {
        currentPos = 0;
      }

      track.style.transform = `translate3d(${currentPos}px, 0, 0)`;
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animId);
      clearTimeout(timeoutId);
    };
  }, [speed]);

  // Duplicate items array for seamless infinite looping
  const combinedItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`w-full overflow-hidden py-8 sm:py-14 select-none ${className}`}
    >
      <div
        ref={trackRef}
        className="flex items-center whitespace-nowrap will-change-transform"
        style={{ width: "max-content" }}
      >
        {combinedItems.map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center text-5xl sm:text-8xl lg:text-[110px] font-light font-funnel tracking-tight px-4 sm:px-8"
            style={{ color: textColor }}
          >
            <span>{item}</span>
            <span
              className="ml-6 sm:ml-12 text-[0.8em] font-normal"
              style={{ color: starColor }}
            >
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
