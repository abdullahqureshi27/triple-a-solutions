"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";

// Clean vector brand icons
const InstagramIcon = ({ className = "w-4 h-4 fill-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedInIcon = ({ className = "w-4 h-4 fill-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4 fill-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
);


interface MenuItem {
  title: string;
  href: string;
  image: string;
}

const MENU_ITEMS: MenuItem[] = [
  {
    title: "Home",
    href: "#Top",
    image: "https://thebrandif.com/wp-content/uploads/2026/07/dome17-scaled.webp",
  },
  {
    title: "Work",
    href: "#work",
    image: "https://thebrandif.com/wp-content/uploads/2026/07/4.webp",
  },
  {
    title: "Blog",
    href: "#blogs",
    image: "https://thebrandif.com/wp-content/uploads/2026/07/11-1.jpg",
  },
  {
    title: "About Us",
    href: "#about",
    image: "https://thebrandif.com/wp-content/uploads/2026/07/Free_Baseball_Cap_Mockup_2-scaled.webp",
  },
  {
    title: "Services",
    href: "#services",
    image: "https://thebrandif.com/wp-content/uploads/2026/07/branding66.jpg",
  },
  {
    title: "FAQ",
    href: "#faq",
    image: "https://thebrandif.com/wp-content/uploads/2026/07/11-1024x683.jpg",
  },
  {
    title: "Contact Us",
    href: "#contact",
    image: "https://thebrandif.com/wp-content/uploads/2026/06/Futuristic-Interior-Design-1-1-1.jpg",
  },
];

const SOCIAL_LINKS = [
  { name: "Instagram", href: "https://www.instagram.com/brandif.creative/", icon: InstagramIcon },
  { name: "Behance", href: "https://www.behance.net/brandif-creative", icon: null },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/brandif", icon: LinkedInIcon },
  { name: "Facebook", href: "https://www.facebook.com/brandif.creative", icon: FacebookIcon },
];


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(MENU_ITEMS[0].image);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      {/* Top Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 sm:px-12 py-6 flex items-center justify-between pointer-events-none ${
          scrolled ? "bg-black/50 backdrop-blur-md py-4 shadow-lg" : "py-6"
        }`}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="pointer-events-auto block transition-transform duration-300 hover:scale-105"
        >
          <div className="relative h-8 sm:h-10 w-36 sm:w-44">
            <Image
              src="https://thebrandif.com/wp-content/uploads/2026/06/Brandif.-copy-1.png"
              alt="Brandif."
              fill
              sizes="(max-width: 768px) 144px, 176px"
              priority
              className="object-contain object-left brightness-100"
            />
          </div>
        </Link>


        {/* Right Controls */}
        <div className="flex items-center gap-4 sm:gap-6 pointer-events-auto">
          {/* Say Hello Pill Button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex slide-up-btn bg-white/10 hover:bg-[#B5FF2F] hover:text-black border border-white/15 px-5 py-2.5 rounded-full text-xs font-medium tracking-wide uppercase transition-all duration-300 backdrop-blur-md"
          >
            <div className="btn-text-wrapper">
              <span>Say Hello</span>
              <span>Say Hello</span>
            </div>
          </a>

          {/* Desktop Hamburger Button */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open Navigation Menu"
            className="group flex flex-col justify-center items-end gap-1.5 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 p-3 transition-colors cursor-pointer"
          >
            <span className="w-6 h-[2px] bg-white transition-all duration-300 group-hover:w-4 group-hover:bg-[#B5FF2F]"></span>
            <span className="w-4 h-[2px] bg-white transition-all duration-300 group-hover:w-6 group-hover:bg-[#B5FF2F]"></span>
            <span className="w-5 h-[2px] bg-white transition-all duration-300 group-hover:w-3 group-hover:bg-[#B5FF2F]"></span>
          </button>
        </div>
      </header>

      {/* Fullscreen Off-Canvas Menu Overlay */}
      <div
        className={`fixed inset-0 z-[9999] bg-[#0d0d0d] text-white flex flex-col transition-all duration-700 ease-[cubic-bezier(0.4,0,0.01,1)] ${
          isOpen
            ? "opacity-100 pointer-events-auto [clip-path:inset(0%)]"
            : "opacity-0 pointer-events-none [clip-path:inset(100%_0_0_0)]"
        }`}
      >
        {/* Top bar inside menu */}
        <div className="flex items-center justify-between px-8 sm:px-14 py-8 border-b border-white/10">
          <div className="relative h-8 sm:h-10 w-36 sm:w-44">
            <Image
              src="https://thebrandif.com/wp-content/uploads/2026/06/Brandif.-copy-1.png"
              alt="Brandif."
              fill
              sizes="(max-width: 768px) 144px, 176px"
              className="object-contain object-left"
            />
          </div>

          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="group flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-[#B5FF2F] hover:text-black hover:border-[#B5FF2F] transition-all duration-300 cursor-pointer"
          >
            <X className="w-6 h-6 transition-transform group-hover:rotate-90" />
          </button>
        </div>

        {/* Menu Body */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-y-auto no-scrollbar">
          {/* Left: Dynamic Hover Preview Images (Desktop only) */}
          <div className="hidden lg:flex lg:col-span-5 relative p-12 items-center justify-center bg-black/40 border-r border-white/5">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src={activeImage}
                alt="Preview"
                fill
                className="object-cover transition-all duration-700 ease-out scale-100 hover:scale-105"
                sizes="(max-width: 1200px) 50vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Right: Menu Links & Contact Info */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-14 overflow-y-auto">
            <div>
              <span className="text-xs uppercase font-semibold text-[#B5FF2F] tracking-widest block mb-6">
                Discover Pages
              </span>

              {/* Navigation Links Grid */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {MENU_ITEMS.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      onMouseEnter={() => setActiveImage(item.image)}
                      className="group flex items-center justify-between py-3 border-b border-white/10 text-2xl sm:text-3xl font-light hover:text-[#B5FF2F] transition-all duration-300"
                    >
                      <span className="group-hover:translate-x-2 transition-transform duration-300">
                        {item.title}
                      </span>
                      <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#B5FF2F]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>


            {/* Menu Footer Contact & Socials */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <span className="text-xs uppercase font-semibold text-white/40 tracking-wider block mb-2">
                  Contact Us
                </span>
                <a
                  href="mailto:team@thebrandif.com"
                  className="text-base text-white/80 hover:text-white block hover:underline"
                >
                  team@thebrandif.com
                </a>
                <a
                  href="https://wa.me/923290079500?text=Hi%2C%20I%20want%20to%20inquire%20about%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-[#B5FF2F] block mt-1"
                >
                  +92 329 0079500 (WhatsApp)
                </a>
              </div>

              <div>
                <span className="text-xs uppercase font-semibold text-white/40 tracking-wider block mb-2">
                  Stay Connected
                </span>
                <div className="flex items-center gap-3">
                  {SOCIAL_LINKS.map((soc) => (
                    <a
                      key={soc.name}
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-black hover:bg-[#B5FF2F] hover:border-[#B5FF2F] transition-all duration-300 text-xs font-semibold"
                    >
                      {soc.icon ? <soc.icon className="w-4 h-4" /> : soc.name.slice(0, 2)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
