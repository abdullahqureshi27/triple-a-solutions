"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const PHRASES = ["What ", "No More ", "Just Brand "];

export default function HeroSection() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 1. Text sliding ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  // 2. 3D Scroll Rotation Engine
  useEffect(() => {
    let targetFactor = 0;
    let currentFactor = 0;
    const smoothing = 0.06;
    let animationFrameId: number;

    const handleScroll = () => {
      if (!scrollTrackRef.current) return;
      const track = scrollTrackRef.current;
      const bounds = track.getBoundingClientRect();
      const maxScroll = track.offsetHeight - window.innerHeight;
      if (maxScroll <= 0) return;
      const f = -bounds.top / maxScroll;
      targetFactor = Math.max(0, Math.min(1, f));
    };

    const render = () => {
      currentFactor += (targetFactor - currentFactor) * smoothing;
      if (cardRef.current) {
        const isMobile = window.innerWidth <= 768;

        const startRotX = isMobile ? 4 : 8;
        const startRotY = isMobile ? -10 : -20;
        const startRotZ = isMobile ? 5 : 10;
        const startScale = isMobile ? 0.95 : 0.84;

        const rotX = startRotX - currentFactor * startRotX;
        const rotY = startRotY - currentFactor * startRotY;
        const rotZ = startRotZ - currentFactor * startRotZ;
        const scale = startScale + currentFactor * (1 - startScale);

        cardRef.current.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg) scale(${scale})`;

        if (isMobile) {
          const width = 90 + currentFactor * 10;
          cardRef.current.style.width = `${width}vw`;
        } else {
          const width = 68 + currentFactor * 32;
          const height = 74 + currentFactor * 26;
          cardRef.current.style.width = `${width}vw`;
          cardRef.current.style.height = `${height}vh`;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    render();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const toggleSound = () => {
    if (!videoRef.current) return;
    const newMuted = !videoRef.current.muted;
    videoRef.current.muted = newMuted;
    setIsMuted(newMuted);
  };

  return (
    <section id="Top" className="relative w-full bg-[#141414] overflow-visible">
      {/* Title Header */}
      <div className="w-full pt-32 sm:pt-44 px-6 sm:px-12 md:px-16 text-left">
        <h1 className="font-dm-sans text-[52px] sm:text-[90px] md:text-[130px] lg:text-[160px] font-medium leading-[1.05] tracking-tight text-white flex items-center flex-wrap sm:flex-nowrap">
          {/* Animated Phrase Ticker */}
          <span className="relative inline-block h-[1.15em] overflow-hidden align-top transition-all duration-700">
            <span
              className="inline-block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] whitespace-pre"
              style={{
                transform: `translateY(-${currentPhraseIndex * 1.15}em)`,
              }}
            >
              {PHRASES.map((phrase) => (
                <span
                  key={phrase}
                  className="block h-[1.15em] leading-[1.15em] text-[#f2f2f4]"
                >
                  {phrase}
                </span>
              ))}
            </span>
          </span>

          {/* Static Suffix */}
          <span className="text-[#B5FF2F] font-medium ml-1">if.</span>
        </h1>
      </div>

      {/* 3D Scroll Track */}
      <div
        ref={scrollTrackRef}
        className="relative w-full h-[140vh] sm:h-[180vh] mt-4 sm:mt-8"
      >
        <div className="sticky top-0 h-screen w-full flex items-center justify-center [perspective:2000px] overflow-hidden">
          {/* 3D Rotating Video Card */}
          <div
            ref={cardRef}
            className="relative will-change-transform [transform-style:preserve-3d] shadow-[0_35px_80px_rgba(0,0,0,0.8)] border border-white/10 overflow-hidden bg-black transition-all duration-100 ease-out"
            style={{
              width: "68vw",
              height: "74vh",
              transform: "rotateX(8deg) rotateY(-20deg) rotateZ(10deg) scale(0.84)",
            }}
          >
            <video
              ref={videoRef}
              src="https://thebrandif.com/wp-content/uploads/2026/07/Show-reel-Final-revision-1-1-1-1-1.mov"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover"
            />

            {/* Audio Toggle Button */}
            <button
              onClick={toggleSound}
              aria-label={isMuted ? "Unmute showreel audio" : "Mute showreel audio"}
              className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 w-12 h-12 rounded-full bg-white/95 text-black hover:bg-[#B5FF2F] hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-xl z-20 cursor-pointer"
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-black" />
              ) : (
                <Volume2 className="w-5 h-5 text-black" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
