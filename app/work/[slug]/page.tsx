import Image from "next/image";
import { notFound } from "next/navigation";

const products = [
  {
    name: "PractiQuest",
    price: "Free",
    image: "https://via.placeholder.com/600x800?text=PractiQuest",
    slug: "practiquest",
    shortDescription: "A practice quest app.",
    longDescription: "PractiQuest is designed to help you build habits through interactive quests. It's free and available on all platforms. Experience the joy of consistent practice with our gamified approach."
  },
  {
    name: "Cutronome",
    price: "$1.99",
    image: "https://via.placeholder.com/600x800?text=Cutronome",
    slug: "cutronome",
    shortDescription: "Precision metronome app.",
    longDescription: "Cutronome offers unparalleled precision for musicians. With a one-time purchase, enjoy lifetime access. Perfect for rehearsals and performances alike."
  },
  {
    name: "StudioNote",
    price: "Coming Soon",
    image: "https://via.placeholder.com/600x800?text=StudioNote",
    slug: "studionote",
    shortDescription: "Note-taking for creatives.",
    longDescription: "StudioNote is coming soon. Stay tuned for a revolutionary note-taking experience tailored for creatives. It will redefine how you capture ideas."
  },
  {
    name: "Orchestra Platform",
    price: "Coming Soon",
    image: "https://via.placeholder.com/600x800?text=Orchestra+Platform",
    slug: "orchestra-platform",
    shortDescription: "Platform for orchestras.",
    longDescription: "Orchestra Platform will connect musicians worldwide. Launching soon. Prepare for a new era of musical collaboration."
  },
  {
    name: "Dakuu",
    price: "Free",
    image: "https://via.placeholder.com/600x800?text=Dakuu",
    slug: "dakuu",
    shortDescription: "Daily tracker app.",
    longDescription: "Dakuu helps you track your daily activities effortlessly. Free to use. Stay organized and mindful with our intuitive interface."
  },
  {
    name: "HaruDakoo",
    price: "Free",
    image: "https://via.placeholder.com/600x800?text=HaruDakoo",
    slug: "harudakoo",
    shortDescription: "Spring-themed app.",
    longDescription: "HaruDakoo brings the freshness of spring to your device. Completely free. Embrace renewal with every interaction."
  }
];

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F7F5F2] px-6 py-12 md:px-12 md:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <div className="overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={800}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-medium text-[#111111] mb-4">{product.name}</h1>
          <p className="text-2xl text-[#111111] mb-8">{product.price}</p>
          <p className="text-lg text-[#111111] mb-6">{product.shortDescription}</p>
          <p className="text-base text-[#111111] leading-relaxed mb-12">{product.longDescription}</p>
          <button className="bg-[#111111] text-[#F7F5F2] px-8 py-3 text-lg font-medium hover:bg-[#333333] transition-colors duration-300">
            View on App Store
          </button>
        </div>
      </div>
    </main>
  );
}