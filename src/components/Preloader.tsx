"use client";
import React, { useEffect, useState, ReactNode } from "react";

function AnimatedLoader({ title = "LadiesParlour" }) {
  const [lettersShown, setLettersShown] = useState(0);
  const colors = [
    "text-pink-600", "text-pink-500", "text-pink-400",
    "text-pink-300", "text-pink-700", "text-pink-800"
  ];

  useEffect(() => {
    setLettersShown(0);
    const timer = setInterval(() => {
      setLettersShown(prev => (prev < title.length ? prev + 1 : prev));
    }, 100);
    return () => clearInterval(timer);
  }, [title]);

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-white transition-all px-4 sm:px-6 md:px-8">
      <div className="flex flex-wrap justify-center space-x-1 sm:space-x-2 md:space-x-3 text-3xl sm:text-6xl md:text-7xl font-bold tracking-widest font-mono select-none">
        {title.split("").map((char, idx) => (
          <span
            key={idx}
            className={`${colors[idx % colors.length]} drop-shadow-lg`}
            style={{
              opacity: lettersShown > idx ? 1 : 0,
              transition: "opacity 0.2s cubic-bezier(.17,.67,.83,.67)",
              paddingBottom: "0.12em",
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}

interface PreloaderProps {
  children: ReactNode;
  loading?: boolean; 
}

export default function Preloader({ children, loading = false }: PreloaderProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (loading) {
      setVisible(true);
    } else {
      const timeout = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [loading]);

  return (
    <>
      {visible && <AnimatedLoader />}
      <div style={{ opacity: visible ? 0 : 1, transition: "opacity 0.3s" }}>
        {children}
      </div>
    </>
  );
}
