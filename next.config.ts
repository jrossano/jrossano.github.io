import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // User site at the root of https://jrossano.github.io, so no basePath.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
