import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: 'export',

  // Path prefix for subdirectory deployment
  basePath: "/bio-wisnu",
  assetPrefix: "/bio-wisnu/",

  // Images must be unoptimized for static export
  images: {
    unoptimized: true,
  },

  // Add trailing slash for better GitHub Pages routing
  trailingSlash: true,

  // Disable source maps in production for security
  productionBrowserSourceMaps: false,
};

export default nextConfig;
