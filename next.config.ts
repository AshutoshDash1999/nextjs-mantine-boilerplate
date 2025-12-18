import withBundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  poweredByHeader: false, // Security and header size
  compress: true, // Gzip compression
  reactCompiler: true,
  experimental: {
    optimizePackageImports: [
      "@mantine/core",
      "@mantine/hooks",
      "@tabler/icons-react",
    ],
  },
  images: {
    formats: [
      "image/avif",
      "image/webp",
    ],
    deviceSizes: [
      640,
      750,
      828,
      1080,
      1200,
      1920,
      2048,
      3840,
    ],
  },
};

export default bundleAnalyzer(nextConfig);
