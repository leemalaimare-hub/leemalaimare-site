import Image from "next/image";
import Link from "next/link";
import { cormorant } from "../layout";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F2] text-[#111111]">
      <section className="px-8 md:px-20 pt-24 pb-20 w-full">

        <h1
          className={`${cormorant.className} text-4xl md:text-6xl tracking-[-0.02em] text-[#111111] font-[550]`}
        >
          Lee & Malaimare
        </h1>

        <p className="mt-6 text-sm md:text-base leading-relaxed tracking-[0.08em] text-[#111111] font-light max-w-none">
          Lee & Malaimare is a creative studio focused on thoughtfully designed digital tools and experiences. We create the products we always wished existed, with the hope that they bring more ease, clarity, and beauty into your everyday life.
        </p>

      </section>

      <section className="grid md:grid-cols-2">

        <div>

          <div className="relative h-[70vh] w-full">
            <Image
              src="/alex.jpg"
              alt="Alex Malaimare"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8 md:p-12">

            <h2 className="text-sm tracking-[0.25em] uppercase font-light">
              ALEX MALAIMARE
            </h2>

            <p className="mt-5 text-sm leading-relaxed tracking-[0.04em] text-[#111111] font-light max-w-md">
              Dr. Alex Malaimare is a violin professor at Marshall University, orchestra director, educator, and developer focused on coding, digital systems, and creative technology. His work centers around building thoughtful tools that improve artistic workflow and modern creative life.
            </p>

          </div>

        </div>

        <div>

          <div className="relative h-[70vh] w-full">
            <Image
              src="/yoobin.jpg"
              alt="YooBin Lee"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8 md:p-12">

            <h2 className="text-sm tracking-[0.25em] uppercase font-light">
              YOOBIN LEE
            </h2>

            <p className="mt-5 text-sm leading-relaxed tracking-[0.04em] text-[#111111] font-light max-w-md">
              Dr. YooBin Lee is a violist, educator, and member of the Sarasota Orchestra. She brings a strong interest in efficiency, minimal design, illustration, and thoughtful app concepts that simplify everyday life and work.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}