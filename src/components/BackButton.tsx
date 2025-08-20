"use client";

import React from "react";

export default function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="mb-6 text-pink-600 font-semibold hover:underline cursor-pointer"
    >
      ← Back
    </button>
  );
}
