import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Training-shareedu",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
