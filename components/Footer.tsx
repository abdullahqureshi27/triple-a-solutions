"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#Top" },
  { label: "the work", href: "#work" },
  { label: "blogs", href: "#blogs" },
  { label: "about us", href: "#about" },
  { label: "contact", href: "#contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/brandif.creative/" },
  { label: "Behance", href: "https://www.behance.net/brandif-creative" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/brandif" },
  { label: "Facebook", href: "https://www.facebook.com/brandif.creative" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#0a0a0a] text-white border-t border-white/10 pt-20 pb-12 px-6 sm:px-12 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Giant Logo / Brand Name */}
        <div className="border-b border-white/10 pb-12">
          <Link
            href="#Top"
            className="text-4xl sm:text-7xl lg:text-9xl font-semibold tracking-tighter text-white/90 hover:text-[#B5FF2F] transition-colors duration-300 block"
          >
            thebrandif.
          </Link>
        </div>

        {/* Links & Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-14 border-b border-white/10">
          {/* Main Navigation */}
          <div>
            <span className="text-xs uppercase font-semibold text-white/40 tracking-wider block mb-4">
              Navigation
            </span>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="slide-up-btn text-base sm:text-lg text-neutral-300 hover:text-white transition-colors capitalize"
                  >
                    <div className="btn-text-wrapper">
                      <span>{link.label}</span>
                      <span>{link.label}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Pages */}
          <div>
            <span className="text-xs uppercase font-semibold text-white/40 tracking-wider block mb-4">
              Policies
            </span>
            <ul className="space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="slide-up-btn text-base sm:text-lg text-neutral-300 hover:text-white transition-colors"
                  >
                    <div className="btn-text-wrapper">
                      <span>{link.label}</span>
                      <span>{link.label}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <span className="text-xs uppercase font-semibold text-white/40 tracking-wider block mb-4">
              Get in Touch
            </span>
            <div className="space-y-3">
              <a
                href="mailto:team@thebrandif.com"
                className="text-base text-neutral-300 hover:text-[#B5FF2F] block hover:underline"
              >
                team@thebrandif.com
              </a>
              <a
                href="tel:+923290079500"
                className="text-base text-neutral-300 hover:text-[#B5FF2F] block"
              >
                +92 329 0079500
              </a>
            </div>

            {/* Scroll To Top Button */}
            <div className="mt-8 flex items-center gap-4">
              <span className="text-xs uppercase font-medium text-white/50">
                Let&apos;s go up
              </span>
              <button
                onClick={scrollToTop}
                aria-label="Scroll back to top"
                className="w-12 h-12 rounded-xl bg-white text-black hover:bg-[#B5FF2F] hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Socials */}
          <div>
            <span className="text-xs uppercase font-semibold text-white/40 tracking-wider block mb-4">
              Social
            </span>
            <ul className="space-y-3">
              {SOCIAL_LINKS.map((soc) => (
                <li key={soc.label}>
                  <a
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="slide-up-btn text-base sm:text-lg text-neutral-300 hover:text-white transition-colors"
                  >
                    <div className="btn-text-wrapper">
                      <span>{soc.label}</span>
                      <span>{soc.label}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>Brandif © 2026. All rights reserved.</p>
          <p className="text-neutral-600">
            Crafted with precision &amp; modern spatial aesthetics
          </p>
        </div>
      </div>
    </footer>
  );
}
