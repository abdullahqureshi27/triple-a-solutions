"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  bgColor: string;
  textColor: string;
  arrowBg: string;
  arrowColor: string;
  tagBorder: string;
  descColor: string;
}

const SERVICE_CARDS: ServiceCard[] = [
  {
    id: "motion",
    title: "Motion Graphics &\nAnimation",
    description:
      "We bring static brands to life with fluid motion, dynamic 3D visuals, and compelling animations. Transforming complex ideas into engaging visual stories that captivate your audience.",
    tags: [
      "Logo Motion",
      "Product CGI",
      "UI Animations",
      "Explainer Videos",
      "Brand Animation",
    ],
    image: "https://thebrandif.com/wp-content/uploads/2026/06/800x800_ser-01.webp",
    bgColor: "bg-[#F4F4F2]",
    textColor: "text-[#1a1a1a]",
    arrowBg: "bg-[#8E71F2]",
    arrowColor: "text-white",
    tagBorder: "border-black/20 text-black/90",
    descColor: "text-black/75",
  },
  {
    id: "web",
    title: "Web Design\n& Development",
    description:
      "We craft pixel perfect CMS websites and custom e-commerce stores designed to reflect your brand's unique identity. Built for speed, seamless navigation, and maximum conversions.",
    tags: [
      "WordPress Design",
      "Dynamic Layouts",
      "UI/UX",
      "Online Stores",
      "Shopify Website",
    ],
    image: "https://thebrandif.com/wp-content/uploads/2026/06/800x800_ser-02.webp",
    bgColor: "bg-[#B5FF2F]",
    textColor: "text-[#1a1a1a]",
    arrowBg: "bg-[#1a1a1a]",
    arrowColor: "text-white",
    tagBorder: "border-black/20 text-black/90",
    descColor: "text-black/80",
  },
  {
    id: "brand",
    title: "Brand\nIdentity",
    description:
      "Transform your business into an iconic brand. Our strategic branding process combines market positioning with stunning visual assets to deliver a consistent, memorable identity across every customer touchpoint.",
    tags: ["Brand strategy", "Logo design", "Guidelines", "Rebranding"],
    image: "https://thebrandif.com/wp-content/uploads/2026/06/1000x1000_ser-03.webp",
    bgColor: "bg-[#2E2E2E]",
    textColor: "text-[#B5FF2F]",
    arrowBg: "bg-[#B5FF2F]",
    arrowColor: "text-black",
    tagBorder: "border-white/20 text-white/90",
    descColor: "text-white/80",
  },
  {
    id: "photo",
    title: "Product Photography\n& Videography",
    description:
      "Transform viewers into buyers with stunning product visuals. From crisp e-commerce photography to high-impact product reels and brand films, we create assets designed to sell.",
    tags: [
      "Studio Photography",
      "Brand Films",
      "E-Commerce Shoots",
      "Commercial Shoots",
      "Product Reels",
    ],
    image: "https://thebrandif.com/wp-content/uploads/2026/06/1000x1000_ser-04.webp",
    bgColor: "bg-[#F4F4F2]",
    textColor: "text-[#1a1a1a]",
    arrowBg: "bg-[#8E71F2]",
    arrowColor: "text-white",
    tagBorder: "border-black/20 text-black/90",
    descColor: "text-black/75",
  },
];

export default function StackingCards() {
  return (
    <section id="services" className="w-full bg-[#141414] py-20 px-4 sm:px-8 md:px-14">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {SERVICE_CARDS.map((card, index) => (
          <div
            key={card.id}
            className={`sticky top-20 sm:top-24 min-h-[560px] lg:min-h-[640px] rounded-[36px] sm:rounded-[44px] p-8 sm:p-14 overflow-hidden shadow-2xl border border-white/5 transition-transform duration-300 ${card.bgColor} ${card.textColor}`}
            style={{
              zIndex: index + 1,
            }}
          >
            {/* Top-Right Circular Arrow Button */}
            <a
              href="#contact"
              aria-label={`Inquire about ${card.title}`}
              className={`absolute top-6 right-6 sm:top-10 sm:right-10 z-30 pointer-events-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:rotate-45 shadow-lg ${card.arrowBg} ${card.arrowColor}`}
            >
              <ArrowUpRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </a>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-center">
              {/* Left Details */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full pr-0 sm:pr-8">
                <div>
                  <h3 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight whitespace-pre-line leading-[1.05]">
                    {card.title}
                  </h3>
                </div>

                <div className="mt-8 sm:mt-14 space-y-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full border ${card.tagBorder}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className={`text-base sm:text-xl leading-relaxed ${card.descColor}`}>
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Right Visual Image */}
              <div className="lg:col-span-5 relative w-full h-[260px] sm:h-[380px] lg:h-[480px] flex items-center justify-center">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-contain transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
