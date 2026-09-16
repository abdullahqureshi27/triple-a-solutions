"use client";

import Image from "next/image";

interface Partner {
  name: string;
  logo: string;
}

const PARTNERS: Partner[] = [
  { name: "Crumble", logo: "https://thebrandif.com/wp-content/uploads/2026/07/Crumble.png" },
  { name: "Ranchers", logo: "https://thebrandif.com/wp-content/uploads/2026/07/Ranchers.png" },
  { name: "Papa Johns", logo: "https://thebrandif.com/wp-content/uploads/2026/07/Papa-Johns.png" },
  { name: "Ronin", logo: "https://thebrandif.com/wp-content/uploads/2026/07/Ronin.png" },
  { name: "Kalakar", logo: "https://thebrandif.com/wp-content/uploads/2026/07/kalakar.png" },
  { name: "PakWheels", logo: "https://thebrandif.com/wp-content/uploads/2026/07/Pak-Wheels.png" },
  { name: "Jaecoo", logo: "https://thebrandif.com/wp-content/uploads/2026/07/Jaecoo.png" },
  { name: "BRWD", logo: "https://thebrandif.com/wp-content/uploads/2026/07/BRWD.png" },
  { name: "OD Donuts", logo: "https://thebrandif.com/wp-content/uploads/2026/07/OD-Donuts.png" },
  { name: "Virsa", logo: "https://thebrandif.com/wp-content/uploads/2026/07/Virsa.png" },
  { name: "Al Kareem", logo: "https://thebrandif.com/wp-content/uploads/2026/07/Al-Kareem.png" },
  { name: "NIAS", logo: "https://thebrandif.com/wp-content/uploads/2026/07/NIAS.png" },
  { name: "Mleko", logo: "https://thebrandif.com/wp-content/uploads/2026/07/Mleko.png" },
  { name: "Spiced Up", logo: "https://thebrandif.com/wp-content/uploads/2026/07/Spiced-Up.png" },
  { name: "Code Dukan", logo: "https://thebrandif.com/wp-content/uploads/2026/07/Code-Dukan.png" },
  { name: "Genforce", logo: "https://thebrandif.com/wp-content/uploads/2026/07/Genforce.png" },
];

export default function PartnersGrid() {
  return (
    <section className="w-full bg-[#141414] py-16 px-6 sm:px-12 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="group relative h-36 sm:h-48 md:h-52 rounded-2xl bg-[#1a1a1a] hover:bg-[#222222] flex items-center justify-center p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-white/5"
            >
              <div className="relative w-full h-full max-h-24">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-contain filter brightness-0 invert opacity-60 group-hover:filter-none group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                />

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
