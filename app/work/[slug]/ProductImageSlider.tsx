"use client";

import { useState } from "react";

export default function ProductImageSlider({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrevious = () => {
    setCurrentIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const goNext = () => {
    setCurrentIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="w-full">
      <div className="flex h-[380px] md:h-[460px] items-center justify-center overflow-hidden rounded-2xl">
        <img
          src={images[currentIndex]}
          alt={name}
          className="h-full w-auto object-contain"
        />
      </div>

      {images.length > 1 && (
        <div className="mt-6 flex items-center justify-center gap-8 text-[#111111]">
          <button
            onClick={goPrevious}
            className="text-xs uppercase tracking-[0.2em] transition hover:opacity-60"
          >
            Prev
          </button>

          <span className="text-xs tracking-[0.2em]">
            {currentIndex + 1} / {images.length}
          </span>

          <button
            onClick={goNext}
            className="text-xs uppercase tracking-[0.2em] transition hover:opacity-60"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}