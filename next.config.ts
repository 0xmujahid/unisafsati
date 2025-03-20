import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['unisef.co.uk'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unisef.co.uk',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  eslint: {
    // Disable ESLint during build
    ignoreDuringBuilds: true,
  },
  output: 'export',
};

export default nextConfig;
