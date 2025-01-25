import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/app/page",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;

