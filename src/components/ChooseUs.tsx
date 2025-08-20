"use client";
import React, { useEffect, useState } from "react";

interface StatBoxProps {
    end: number;
    label: string;
    suffix?: string;
}

function StatBox({ end, label, suffix }: StatBoxProps) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 1000; 
        const increment = end / (duration / 24);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 24);
        return () => clearInterval(timer);
    }, [end]);

    return (
        <div className="flex flex-col items-center w-full">
            <div className="text-5xl md:text-7xl font-bold text-pink-600 mb-2">
                {count}
                {suffix}
            </div>
            <div className="mt-1 text-lg md:text-xl font-medium text-gray-700 text-center w-full">
                {label}
            </div>
        </div>
    );
}

export default function ChooseUs() {
    return (
        <section className="w-full bg-white py-20 px-4 sm:px-8 lg:px-16">
            <div className="text-center w-full text-pink-400">
                <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-gray-700 mb-16">
                    Advantage <span className="text-pink-400  font-extrabold text-3xl">to Choose Us</span>
                </h2>
            </div>

            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20">
                <StatBox end={10} label="Experience" suffix="+" />
                <div className="hidden md:block border-l border-gray-300 h-24" />
                <StatBox end={10} label="Offer Services" suffix="+" />
                <div className="hidden md:block border-l border-gray-300 h-24" />
                <StatBox end={500} label="Satisfied Customers" suffix="+" />
            </div>
        </section>
    );
}
