"use client";
import React, { useState, useEffect } from "react";
import { slides } from "@/data/slider";

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setTimeout(nextSlide, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[650px]  overflow-hidden">
      {/* Slides */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",          
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

          {/* Text Content */}
          <div className="relative h-full flex items-center justify-start px-6 sm:px-10 md:px-16 lg:px-24">
            <div className="max-w-lg text-white">
              <h2 className="text-lg font-serif sm:text-2xl md:text-4xl font-bold mb-3">
                {slide.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg mb-5">
                {slide.description}
              </p>
              <button className="px-4 sm:px-5 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition text-sm sm:text-base">
                {slide.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
