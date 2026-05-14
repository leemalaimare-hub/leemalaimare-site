import Link from "next/link";

export default function ContactPage() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/mainpic.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/25" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <nav className="flex w-full items-center justify-center gap-12 px-6 py-8 text-sm uppercase tracking-[0.3em] text-white">
          <Link href="/" className="hover:opacity-70 transition-opacity duration-200">
            ⌂
          </Link>

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

        <section className="flex flex-1 items-center justify-center px-6 text-center">
          <div className="flex items-center gap-6 text-sm md:text-base uppercase tracking-[0.18em] font-light">
            <a
              href="mailto:lee.malaimare@gmail.com"
              className="hover:opacity-70 transition-opacity duration-200"
            >
              lee.malaimare@gmail.com
            </a>

            <div className="h-6 w-px bg-white/70" />

            <a
  href="https://www.instagram.com/alex.malaimare/"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:opacity-70 transition-opacity duration-200"
  aria-label="Instagram"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
</a>
          </div>
        </section>
      </div>
    </main>
  );
}