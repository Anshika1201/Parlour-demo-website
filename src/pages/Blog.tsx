"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { blogData } from "@/data/blogdetail";

export default function Blog() {
  const router = useRouter();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
      <h2 className="text-4xl font-serif sm:text-5xl font-bold text-pink-600 text-center mb-10">
        Latest Blogs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="rounded-3xl bg-pink-200 shadow-md overflow-hidden flex flex-col"
          >
            <div className="w-full h-60 bg-gray-100 overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-semibold text-xl text-gray-800 mb-4 flex-grow">
                {blog.title}
              </h3>
              <p className="mb-6 text-gray-600 text-sm">{blog.summary}</p>
              <button
                className="text-pink-600 font-semibold self-start px-0 py-0 bg-transparent border-none hover:underline transition"
                onClick={() => router.push(`/blogdetail/${blog.slug}`)}
              >
                More Information →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
