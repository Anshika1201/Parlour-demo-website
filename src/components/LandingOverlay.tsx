"use client";
import React, { useEffect, useState } from "react";

interface LandingOverlayProps {
  open: boolean;
  onClose: () => void;
}

export default function LandingOverlay({ open, onClose }: LandingOverlayProps) {
  const [visible, setVisible] = useState(open);
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    if (open) {
      setVisible(true);
      setSlideUp(false);
    } else {
      setSlideUp(true);
      const timer = setTimeout(() => setVisible(false), 500);
      return () => clearTimeout(timer);
    }
  }, [open]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-40 bg-white flex flex-col p-6 md:p-16 transition-transform duration-500 ease-in-out ${
        slideUp ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{ willChange: "transform" }}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-pink-600 text-3xl focus:outline-none"
        aria-label="Close landing page"
      >
        &times;
      </button>

      <div className="flex justify-start items-center mb-10">
        <h1 className="text-4xl font-extrabold text-pink-600 font-mono select-none">
          Ladies Parlour
        </h1>
      </div>

      <div className="flex-grow flex flex-col justify-center max-w-3xl mx-auto space-y-8 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-pink-700 drop-shadow-md">
          Welcome to Ladies Parlour
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Ladies Parlour is your ultimate destination for beauty and self-care.
          We offer professional services tailored to your style, including hair
          styling, skincare, makeup, and more. Our expert beauticians bring
          passion and creativity to every session, ensuring you look and feel
          your best. Explore our services and book an appointment today to
          experience top-notch beauty care in a welcoming atmosphere.
        </p>
        <p className="text-gray-600 italic">Your beauty, our passion.</p>
      </div>
    </div>
  );
}
