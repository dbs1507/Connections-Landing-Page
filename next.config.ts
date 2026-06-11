import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Evita travamento do /_next/image no dev (sharp/turbopack).
    unoptimized: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;
