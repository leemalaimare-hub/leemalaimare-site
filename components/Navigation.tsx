'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  if (pathname === '/' || pathname === '/contact') {
    return null;
  }

  return (
    <div className="relative h-16 w-full overflow-hidden">
      <Image
        src="/mainpic.jpg"
        alt="Lee & Malaimare"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <nav className="flex items-center gap-12 text-sm uppercase tracking-[0.3em] text-white">
          <Link href="/" className="hover:opacity-70 transition-opacity duration-200">
            ⌂
          </Link>
          <Link href="/about" className="hover:opacity-70 transition-opacity duration-200">
            About
          </Link>
          <Link href="/work" className="hover:opacity-70 transition-opacity duration-200">
            What We Built
          </Link>
          <Link href="/privacy" className="hover:opacity-70 transition-opacity duration-200">
            Privacy
          </Link>
          <Link href="/contact" className="hover:opacity-70 transition-opacity duration-200">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}