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
  image:"/cuteronome.jpg",
  slug: "cuteronome",
  shortDescription:
    "A playful character-based metronome inspired by our dog, Gooree.",
  longDescription:
    "Cuteronome is a playful metronome app built around original illustrations by Dr. YooBin Lee, with its main character inspired by our dog, Gooree. Designed to make practice feel warmer and more enjoyable, it brings a softer visual personality to one of the most essential tools for musicians. The app is free to use, with optional customization features available through Unlock the Cute.",
},
  {
    name: "Stappli",
    availability: "Coming Soon",
    image: "/leemalaimare1.jpg",
    slug: "stappli",
    shortDescription: "A thoughtful workflow comapanion.",
    longDescription: "Stappli simplifies workflow through quiet, thoughtful automation designed to make coordination feel more natural and efficient."
  },
  {
    name: "Coming Soon",
    availability: "Coming Soon",
    image: "/leemalaimare2.jpg",
    slug: "Coming Soon",
    shortDescription: "Coming Soon.",
    longDescription: "Coming Soon."
  },
  {
    name: "Dakuu",
    availability: "Available on App Store",
    image: "/leemalaimare3.jpg",
    slug: "dakuu",
    shortDescription: "Daily tracker app.",
    longDescription: "Dakuu helps you track your daily activities. Free to use."
  },
  {
    name: "Coming Soon",
    availability: "Coming Soon",
    image: "/leemalaimare2.jpg",
    slug: "Coming Soon",
    shortDescription: "Coming Soon.",
    longDescription: "Coming Soon."
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
            <Link key={product.slug} href={`/work/${product.slug}`} className="group cursor-pointer">
              <div className="overflow-hidden relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-[400px] object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
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