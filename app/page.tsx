import Link from "next/link";
import { cormorant } from "./layout";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#F7F5F2]">
      <div
        className="relative h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080?text=Lee+%26+Malaimare')" }}
      >
        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <div className="max-w-3xl">
            <h1
              className={`${cormorant.className} text-5xl md:text-7xl tracking-[-0.02em] text-white font-[550]`}
            >
              Lee & Malaimare
            </h1>

            <p className="mt-6 text-sm md:text-base leading-relaxed tracking-[0.18em] text-white font-light uppercase">
              We build the tools we always wished existed
            </p>

            <div className="mx-auto mt-8 h-px w-24 bg-white/70" />

            <nav className="mt-10 flex flex-col items-center justify-center gap-6 text-sm md:flex-row md:gap-12 uppercase tracking-[0.3em] text-white">
              <Link href="/about" className="hover:opacity-70 transition-opacity duration-200">
                About
              </Link>
              <Link href="/work" className="hover:opacity-70 transition-opacity duration-200">
                What We Built
              </Link>
              <Link href="/contact" className="hover:opacity-70 transition-opacity duration-200">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </main>
  );
}