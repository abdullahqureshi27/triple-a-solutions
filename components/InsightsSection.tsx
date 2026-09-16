"use client";

import Image from "next/image";
import { Eye } from "lucide-react";

interface BlogPost {
  id: string;
  titleBold: string;
  titleRest: string;
  excerpt: string;
  image: string;
  tags: string[];
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    titleBold: "High-Converting Product Videos",
    titleRest: "that drive measurable e-commerce growth in 2026",
    excerpt: "Discover how dynamic product reels and 3D motion graphics capture consumer attention.",
    image: "https://thebrandif.com/wp-content/uploads/2026/07/11-1.jpg",
    tags: ["Motion Graphics", "E-Commerce"],
  },
  {
    id: "2",
    titleBold: "Strategic Brand Identity",
    titleRest: "and how intentional design commands market respect",
    excerpt: "Why cohesive visual language across packaging and digital interfaces builds authentic loyalty.",
    image: "https://thebrandif.com/wp-content/uploads/2026/07/branding66.jpg",
    tags: ["Branding", "Strategy"],
  },
  {
    id: "3",
    titleBold: "Frictionless Web Design",
    titleRest: "engineered for speed, aesthetic prestige, and conversion",
    excerpt: "How spatial fluid motion and modern typography redefine the agency digital experience.",
    image: "https://thebrandif.com/wp-content/uploads/2026/06/Futuristic-Interior-Design-1-1-1.jpg",
    tags: ["Web Design", "UI/UX"],
  },
];

export default function InsightsSection() {
  return (
    <section id="blogs" className="w-full bg-[#141414] py-24 sm:py-32 px-6 sm:px-12 md:px-16 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-6xl font-medium tracking-tight">
              Insights From the Team
            </h2>
            <p className="text-neutral-400 text-lg sm:text-xl mt-3">
              Marketing changes fast. We share what we&apos;re learning: from content strategy to branding decisions to what&apos;s actually working right now.
            </p>
          </div>

          <a
            href="#blogs"
            className="slide-up-btn bg-white/5 hover:bg-[#B5FF2F] hover:text-black border border-white/20 px-7 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300"
          >
            <div className="btn-text-wrapper">
              <span>All Blogs</span>
              <span>All Blogs</span>
            </div>
          </a>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="group cursor-pointer flex flex-col">
              {/* Image Container */}
              <div className="relative w-full h-[360px] sm:h-[440px] rounded-[32px] overflow-hidden bg-neutral-900 border border-white/10">
                <Image
                  src={post.image}
                  alt={`${post.titleBold} ${post.titleRest}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-50 group-hover:blur-[2px]"
                />


                {/* Hover Eye Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center bg-black/40 backdrop-blur-sm text-white">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>

                {/* Bottom Tags */}
                <div className="absolute bottom-5 left-5 flex gap-2 flex-wrap z-10">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/95 text-neutral-900 text-xs font-medium px-3.5 py-1.5 rounded-full shadow-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Title & Excerpt */}
              <div className="pt-5 px-1">
                <h3 className="text-xl sm:text-2xl font-normal text-neutral-400 group-hover:text-white transition-colors duration-300 leading-snug">
                  <strong className="font-bold text-white block mb-1">
                    {post.titleBold}
                  </strong>
                  {post.titleRest}
                </h3>
                <p className="text-neutral-500 text-sm sm:text-base mt-2 line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
