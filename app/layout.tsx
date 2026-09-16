import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brandif – Branding Agency – Digital Marketing Services",
  description: "Brandif is a premier creative branding and digital marketing agency specializing in brand identity, motion graphics, web development, and content creation.",
  icons: {
    icon: "https://thebrandif.com/wp-content/uploads/2026/07/cropped-cropped-Brandif.-copy-32x32.png",
    apple: "https://thebrandif.com/wp-content/uploads/2026/07/cropped-cropped-Brandif.-copy-180x180.png",
  },
  openGraph: {
    title: "Brandif – Branding Agency – Digital Marketing Services",
    description: "Creative branding, web design, motion graphics & commercial shoots.",
    url: "https://thebrandif.com",
    siteName: "Brandif",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        suppressHydrationWarning
        className="bg-[#141414] text-white min-h-screen flex flex-col font-dm-sans selection:bg-[#B5FF2F] selection:text-black"
      >
        {children}
      </body>
    </html>
  );
}

