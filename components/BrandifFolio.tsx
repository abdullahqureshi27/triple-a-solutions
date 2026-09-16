"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Volume2, VolumeX, ArrowUpRight } from "lucide-react";

interface VideoProject {
  id: string;
  client: string;
  tag: string;
  thumb: string;
  videoSrc: string;
}

interface ImageProject {
  id: string;
  client: string;
  tag: string;
  image: string;
  gridClass: string;
  heightClass: string;
}

const VIDEO_PROJECTS: VideoProject[] = [
  {
    id: "crumble",
    client: "Crumble",
    tag: "Motion Graphics",
    thumb: "https://thebrandif.com/wp-content/uploads/2026/07/Crumble-Cover-image-2.jpg",
    videoSrc: "https://thebrandif.com/wp-content/uploads/2026/07/Crumble-FINAL-ANIMATION-1-1-1.mp4",
  },
  {
    id: "od",
    client: "OD Donuts",
    tag: "Motion Graphics",
    thumb: "https://thebrandif.com/wp-content/uploads/2026/07/OD-Cover-image.jpg",
    videoSrc: "https://thebrandif.com/wp-content/uploads/2026/07/OD-1-1-1.mp4",
  },
  {
    id: "kalakar",
    client: "Kalakar",
    tag: "Motion Graphics",
    thumb: "https://thebrandif.com/wp-content/uploads/2026/07/Kalakar-cover-2.jpg",
    videoSrc: "https://thebrandif.com/wp-content/uploads/2026/07/kalakar_1.mov",
  },
];

const IMAGE_PROJECTS: ImageProject[] = [
  {
    id: "pckd",
    client: "PCKD",
    tag: "Brand Identity",
    image: "https://thebrandif.com/wp-content/uploads/2026/07/14.jpg",
    gridClass: "lg:col-span-1 lg:row-span-2",
    heightClass: "h-[500px] lg:h-[840px]",
  },
  {
    id: "meat-dukan",
    client: "MEAT DUKAN",
    tag: "Brand Identity",
    image: "https://thebrandif.com/wp-content/uploads/2026/07/8-1.jpg",
    gridClass: "lg:col-span-1 lg:row-span-1",
    heightClass: "h-[380px] lg:h-[400px]",
  },
  {
    id: "funchi",
    client: "FUNCHI",
    tag: "Brand Identity",
    image: "https://thebrandif.com/wp-content/uploads/2026/07/1.webp",
    gridClass: "lg:col-span-1 lg:row-span-1",
    heightClass: "h-[380px] lg:h-[400px]",
  },
];

export default function BrandifFolio() {
  const [mutedStates, setMutedStates] = useState<{ [key: string]: boolean }>({
    crumble: true,
    od: true,
    kalakar: true,
  });

  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const toggleVideoMute = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const vid = videoRefs.current[id];
    if (!vid) return;
    const nextMuted = !vid.muted;
    vid.muted = nextMuted;
    setMutedStates((prev) => ({ ...prev, [id]: nextMuted }));
  };

  const handleMouseEnterVideo = (id: string) => {
    const vid = videoRefs.current[id];
    if (vid) {
      vid.currentTime = 0;
      vid.play().catch(() => {});
    }
  };

  const handleMouseLeaveVideo = (id: string) => {
    const vid = videoRefs.current[id];
    if (vid) {
      vid.pause();
    }
  };

  return (
    <section id="work" className="w-full bg-[#141414] py-20 sm:py-32 text-white">
      {/* Top Row: Sticky Title + 3 Vertical Video Cards */}
      <div className="px-6 sm:px-12 md:px-16 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        {/* Sticky Vertical Title (Desktop) */}
        <div className="lg:sticky lg:top-24 select-none shrink-0 z-10">
          <h2 className="font-inter-tight text-5xl sm:text-7xl lg:text-[140px] font-semibold text-[#B5FF2F] leading-none tracking-tighter lg:[writing-mode:vertical-lr] lg:rotate-180">
            BrandifFolio
          </h2>
        </div>

        {/* 3 Video Cards in 1 Row */}
        <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {VIDEO_PROJECTS.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => handleMouseEnterVideo(project.id)}
              onMouseLeave={() => handleMouseLeaveVideo(project.id)}
              className="group relative h-[520px] lg:h-[720px] rounded-[30px] overflow-hidden bg-[#1c1c1c] border border-white/5 cursor-pointer shadow-xl"
            >
              {/* Audio Button */}
              <button
                onClick={(e) => toggleVideoMute(project.id, e)}
                aria-label="Toggle project audio"
                className="absolute top-6 left-6 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#B5FF2F] hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                {mutedStates[project.id] ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>

              {/* Tag Top-Right */}
              <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="bg-white text-black text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg">
                  {project.tag}
                </span>
              </div>

              {/* Thumbnail Background */}
              <div className="absolute inset-0 z-0 transition-opacity duration-500 group-hover:opacity-0">
                <Image
                  src={project.thumb}
                  alt={project.client}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Video Element */}
              <video
                ref={(el) => {
                  videoRefs.current[project.id] = el;
                }}
                src={project.videoSrc}
                loop
                muted={mutedStates[project.id]}
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Bottom Client Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between pointer-events-none">
                <span className="text-2xl font-medium tracking-tight text-white drop-shadow-md">
                  {project.client}
                </span>
                <span className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#B5FF2F] group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Middle Grid: 3 Project Cards */}
      <div className="mt-12 px-6 sm:px-12 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {IMAGE_PROJECTS.map((item) => (
          <div
            key={item.id}
            className={`group relative flex flex-col ${item.gridClass}`}
          >
            {/* Image Box */}
            <div
              className={`relative ${item.heightClass} w-full rounded-[30px] overflow-hidden bg-[#1c1c1c] border border-white/5 cursor-pointer`}
            >
              {/* Pill Tag */}
              <div className="absolute top-6 right-6 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="bg-white text-black text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg">
                  {item.tag}
                </span>
              </div>

              <Image
                src={item.image}
                alt={item.client}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />


              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Label Below Image */}
            <div className="flex items-center justify-between pt-4 px-2">
              <span className="text-3xl sm:text-4xl font-normal text-white group-hover:text-[#B5FF2F] transition-colors duration-300">
                {item.client}
              </span>
              <span className="text-white/40 group-hover:text-[#B5FF2F] transition-colors">
                <ArrowUpRight className="w-6 h-6" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* View All Work Button */}
      <div className="mt-16 flex justify-center">
        <a
          href="#work"
          className="slide-up-btn bg-white/5 hover:bg-[#B5FF2F] hover:text-black border border-white/20 px-8 py-4 rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 backdrop-blur-sm"
        >
          <div className="btn-text-wrapper">
            <span>View All Work</span>
            <span>View All Work</span>
          </div>
        </a>
      </div>
    </section>
  );
}
