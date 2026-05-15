import ProductImageSlider from "./ProductImageSlider";
import Link from "next/link";
import { notFound } from "next/navigation";

const products = [
  {
    name: "PractiQuest",
    price: "Free",
    images: ["/practiquest.jpg"],
    slug: "practiquest",
    appStore: "https://apps.apple.com/",
    shortDescription:
      "A quest-based practice companion designed to build consistency and motivation.",
    longDescription:
      "PractiQuest transforms daily practice into a more structured and rewarding experience through goals, streaks, and interactive progression designed for musicians and creatives.",
  },
  {
    name: "Cuteronome",
    price: "Free with In-app Purchases",
    images: [
      "/cuteronome.jpg",
      "/cuteronome1.jpg",
      "/cuteronome2.jpg",
      "/cuteronome3.jpg",
    ],
    slug: "cuteronome",
    appStore: "https://apps.apple.com/",
    shortDescription:
      "A playful character-based metronome inspired by our fur baby, Gooree.",
    longDescription:
      "Cuteronome is a playful metronome app built around original illustrations by YooBin, with its main character inspired by our fur baby, Gooree. Designed to make practice feel warmer and more enjoyable, it brings a softer visual personality to one of the most essential tools for musicians. The app is free to use, with optional customization features available through Unlock the Cute.",
  },
  {
    name: "StudioNote",
    price: "Coming Soon",
    images: ["/studionote.jpg"],
    slug: "studionote",
    appStore: "",
    shortDescription:
      "A calm note-taking space for lessons, studios, and creative work.",
    longDescription:
      "StudioNote is designed as a quiet digital notebook for creative professionals, teachers, and students.",
  },
  {
    name: "Stappli",
    price: "Coming Soon",
    images: ["/leemalaimare1.jpg"],
    slug: "stappli",
    appStore: "",
    shortDescription:
      "A thoughtful workflow companion designed to reduce friction in everyday coordination.",
    longDescription:
      "Stappli simplifies outreach, communication, and workflow through quiet, thoughtful automation designed to make coordination feel more natural and efficient.",
  },
];

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F7F5F2] text-[#111111]">
  <div className="mx-auto w-full max-w-[1400px]">
      <section className="grid grid-cols-1 items-center gap-10 px-8 py-14 md:grid-cols-2 md:px-16 md:py-20">
        <div className="mx-auto flex w-full max-w-[360px] justify-center">
          <ProductImageSlider images={product.images} name={product.name} />
        </div>

        <div className="mx-auto flex w-full max-w-[440px] flex-col justify-center md:pl-6">
          <p className="text-xs uppercase tracking-[0.3em] font-light">
            Lee & Malaimare
          </p>

          <h1 className="mt-8 text-4xl md:text-6xl tracking-[-0.02em] font-light">
            {product.name}
          </h1>

          <p className="mt-6 text-sm uppercase tracking-[0.18em] font-light">
            {product.price}
          </p>

          <p className="mt-10 text-sm md:text-base leading-relaxed tracking-[0.04em] font-light">
            {product.shortDescription}
          </p>

          {product.appStore ? (
            <a
              href={product.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-block w-fit border border-[#111111] px-8 py-3 text-xs uppercase tracking-[0.2em] transition hover:bg-[#111111] hover:text-[#F7F5F2]"
            >
              View on App Store
            </a>
          ) : (
            <p className="mt-12 text-xs uppercase tracking-[0.2em] font-light">
              Coming Soon
            </p>
          )}

  
        </div>
      </section>

      <section className="px-8 py-20 md:px-16">
        <div className="max-w-5xl">
          <p className="text-xs uppercase tracking-[0.3em] font-light">
            About the Product
          </p>

          <p className="mt-8 text-lg md:text-2xl leading-relaxed tracking-[-0.01em] font-light">
            {product.longDescription}
          </p>
        </div>
      </section>
     </div>
    </main>
  );
}