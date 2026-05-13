import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['profileconsultancy.co.uk'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'profileconsultancy.co.uk',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  eslint: {
    // Disable ESLint during build
    ignoreDuringBuilds: true,
  },
  
};

export default nextConfig;
