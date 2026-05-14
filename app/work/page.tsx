import Image from "next/image";
import Link from "next/link";
import { cormorant } from "../layout";

const products = [
  {
    name: "PractiQuest",
    availability: "Available on App Store",
    image: "/practiquest.jpg",
    slug: "practiquest",
    shortDescription: "A practice quest app.",
    longDescription: "PractiQuest is designed to help you build habits through interactive quests. It's free and available on all platforms."
  },
  {
    name: "Cuteronome",
    availability: "Available on App Store",
    image: "/cuteronome.jpg",
    slug: "cuteronome",
    shortDescription: "Precision metronome app.",
    longDescription: "Cuteronome offers unparalleled precision for musicians. With a one-time purchase, enjoy lifetime access."
  },
  {
    name: "StudioNote",
    availability: "Coming Soon",
    image: "/leemalaimare.jpg",
    slug: "studionote",
    shortDescription: "Note-taking for creatives.",
    longDescription: "StudioNote is coming soon. Stay tuned for a revolutionary note-taking experience tailored for creatives."
  },
  {
    name: "Orchestra Platform",
    availability: "Coming Soon",
    image: "/leemalaimare.jpg",
    slug: "orchestra-platform",
    shortDescription: "Platform for orchestras.",
    longDescription: "Orchestra Platform will connect musicians worldwide. Launching soon."
  },
  {
    name: "Dakuu",
    availability: "Available on App Store",
    image: "/leemalaimare.jpg",
    slug: "dakuu",
    shortDescription: "Daily tracker app.",
    longDescription: "Dakuu helps you track your daily activities effortlessly. Free to use."
  },
  {
    name: "HaruDakoo",
    availability: "Available on App Store",
    image: "/leemalaimare.jpg",
    slug: "harudakoo",
    shortDescription: "Spring-themed app.",
    longDescription: "HaruDakoo brings the freshness of spring to your device. Completely free."
  }
];

export default function WhatWeBuilt() {
  return (
    <main className="min-h-screen bg-[#F7F5F2] px-6 py-12 md:px-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <h1 className={`${cormorant.className} text-4xl md:text-6xl tracking-[-0.02em] text-[#111111] font-[550] mb-16`}>
          What We Built
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {products.map((product) => (
            <Link key={product.slug} href={`/what-we-built/${product.slug}`} className="group cursor-pointer">
              <div className="overflow-hidden relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={600}
                  className="w-full h-[640px] object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h2 className="text-white text-2xl font-medium">{product.name}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}