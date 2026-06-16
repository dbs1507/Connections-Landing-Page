import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Evita travamento do /_next/image no dev (sharp/turbopack).
    unoptimized: process.env.NODE_ENV === "development",
  },
  async redirects() {
    return [
      {
        source: "/empresarial",
        destination: "/enterprise",
        permanent: true,
      },
      {
        source: "/enterprises.html",
        destination: "/enterprise",
        permanent: true,
      },
      {
        source: "/enterprises",
        destination: "/enterprise",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
