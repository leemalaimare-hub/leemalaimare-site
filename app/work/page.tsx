import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "PractiQuest",
    price: "Free",
    image: "https://via.placeholder.com/400x600?text=PractiQuest",
    slug: "practiquest",
    shortDescription: "A practice quest app.",
    longDescription: "PractiQuest is designed to help you build habits through interactive quests. It's free and available on all platforms."
  },
  {
    name: "Cutronome",
    price: "$1.99",
    image: "https://via.placeholder.com/400x600?text=Cutronome",
    slug: "cutronome",
    shortDescription: "Precision metronome app.",
    longDescription: "Cutronome offers unparalleled precision for musicians. With a one-time purchase, enjoy lifetime access."
  },
  {
    name: "StudioNote",
    price: "Coming Soon",
    image: "https://via.placeholder.com/400x600?text=StudioNote",
    slug: "studionote",
    shortDescription: "Note-taking for creatives.",
    longDescription: "StudioNote is coming soon. Stay tuned for a revolutionary note-taking experience tailored for creatives."
  },
  {
    name: "Orchestra Platform",
    price: "Coming Soon",
    image: "https://via.placeholder.com/400x600?text=Orchestra+Platform",
    slug: "orchestra-platform",
    shortDescription: "Platform for orchestras.",
    longDescription: "Orchestra Platform will connect musicians worldwide. Launching soon."
  },
  {
    name: "Dakuu",
    price: "Free",
    image: "https://via.placeholder.com/400x600?text=Dakuu",
    slug: "dakuu",
    shortDescription: "Daily tracker app.",
    longDescription: "Dakuu helps you track your daily activities effortlessly. Free to use."
  },
  {
    name: "HaruDakoo",
    price: "Free",
    image: "https://via.placeholder.com/400x600?text=HaruDakoo",
    slug: "harudakoo",
    shortDescription: "Spring-themed app.",
    longDescription: "HaruDakoo brings the freshness of spring to your device. Completely free."
  }
];

export default function WhatWeBuilt() {
  return (
    <main className="min-h-screen bg-[#F7F5F2] px-6 py-12 md:px-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-medium text-[#111111] mb-16">
          What We Built
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {products.map((product) => (
            <Link key={product.slug} href={`/what-we-built/${product.slug}`} className="group cursor-pointer">
              <div className="overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
              <h2 className="text-xl font-medium text-[#111111] mt-4">{product.name}</h2>
              <p className="text-lg text-[#111111] mt-1">{product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}