"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  text: string;
  projectUrl?: string;
  googleUrl: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Abdul Rehman Baig",
    avatar: "https://thebrandif.com/wp-content/uploads/2026/07/client-review1.png",
    text: "Brandif has a highly cooperative and professional team. They understood our requirements clearly and delivered the project on time. The final work matched our expectations and was completed exactly as requested. We are very satisfied with their service and would gladly recommend them. ❤️",
    googleUrl: "https://www.google.com/search?kgmid=/g/11mzcjbt96",
  },
  {
    id: "2",
    name: "Uswaa Azharr",
    avatar: "https://thebrandif.com/wp-content/uploads/2026/07/images.webp",
    text: "We had our SaaS product demo video created by BRANDIF, and the experience was outstanding. Despite a very tight deadline and multiple revision requests from our side, their team was cooperative, responsive, and delivered every change promptly—highly recommended!",
    googleUrl: "https://www.google.com/search?kgmid=/g/11mzcjbt96",
  },
  {
    id: "3",
    name: "Rida Sheikh",
    avatar: "https://thebrandif.com/wp-content/uploads/2026/07/unnamed.png",
    text: "Brandif has been a great help to my company. I couldn’t ask for better marketing team. They have taken my headache and took charge of everything.",
    projectUrl: "https://genforcesecuregroup.nl/",
    googleUrl: "https://www.google.com/search?kgmid=/g/11mzcjbt96",
  },
  {
    id: "4",
    name: "Rana Hamza",
    avatar: "https://thebrandif.com/wp-content/uploads/2026/07/unnamed-1.png",
    text: "You are doing an excellent job marketing our two real estate projects in Toba Tek Singh and Sahiwal. The content is productive, the reels are informative, and the video animations are consistently engaging and eye-catching.",
    googleUrl: "https://www.google.com/search?kgmid=/g/11mzcjbt96",
  },
  {
    id: "5",
    name: "Mahrosh Nawaz",
    avatar: "https://thebrandif.com/wp-content/uploads/2026/07/unnamed-2.png",
    text: "I’m extremely satisfied with the service provided by brandif. Their reels are high quality, engaging, and professionally made, and the post designs always look amazing. The team is incredibly cooperative and always listens to my ideas.",
    googleUrl: "https://www.google.com/search?kgmid=/g/11mzcjbt96",
  },
  {
    id: "6",
    name: "Moaz",
    avatar: "https://thebrandif.com/wp-content/uploads/2026/07/Kalamkari-moaz-e1784981083738.jpg",
    text: "Working with Brandif was a game changer — from strategic content planning to stunning design and marketing execution. They understood our brand’s soul and gave it a voice that connected with our audience.",
    googleUrl: "https://www.google.com/search?kgmid=/g/11mzcjbt96",
  },
];

export default function TestimonialsSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse drag handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="w-full bg-[#F4F4F2] text-black py-24 sm:py-32">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
        <div>
          <h2 className="text-4xl sm:text-6xl font-medium tracking-tight">
            What our clients say
          </h2>
          <p className="text-black/60 text-lg sm:text-xl mt-3">
            We let the work and the clients do the talking.
          </p>
        </div>

        {/* Google Reviews Badge */}
        <a
          href="https://www.google.com/search?kgmid=/g/11mzcjbt96"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-black/5 hover:shadow-md transition-shadow"
        >
          <div className="relative w-12 h-6">
            <Image
              src="https://thebrandif.com/wp-content/uploads/2026/06/google.png"
              alt="Google Reviews"
              fill
              sizes="48px"
              className="object-contain"
            />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-semibold">4.5 / 5</span>
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
          </div>
        </a>
      </div>

      {/* Testimonials Carousel Track */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`w-full overflow-x-auto no-scrollbar px-6 sm:px-12 md:px-16 select-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        <div ref={trackRef} className="flex gap-6 w-max pb-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="w-[85vw] sm:w-[420px] lg:w-[460px] bg-white rounded-[28px] p-8 sm:p-10 border border-black/5 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Avatar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border border-black/10">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs uppercase font-medium text-black/40 tracking-wider">
                    Verified Review
                  </span>
                </div>


                {/* Review Text */}
                <p className="text-base sm:text-lg text-black/80 leading-relaxed line-clamp-6 mb-6">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              {/* Client Meta */}
              <div className="pt-6 border-t border-black/5">
                <h4 className="text-lg font-bold text-black">{item.name}</h4>
                <a
                  href={item.googleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-black/60 hover:text-black hover:underline mt-1 inline-block"
                >
                  View this review at <span className="font-semibold underline">Google Reviews</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
