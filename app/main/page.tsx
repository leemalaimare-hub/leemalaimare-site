import Link from "next/link";

export default function MainPage() {
  return (
    <main className="relative min-h-screen bg-[#F7F5F2]">
      <div
        className="relative h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/mainpic.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/10" />

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <nav className="flex flex-col items-center gap-6 text-sm uppercase tracking-[0.3em] text-white md:flex-row md:gap-12">
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
    </main>
  );
}