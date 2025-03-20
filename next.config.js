/** @type {import('next').NextConfig} */
const nextConfig = {
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
    unoptimized: true,
  },
  eslint: {
    // Disable ESLint during build
    ignoreDuringBuilds: true,
  },
  output: 'export',
  // Disable server-side features since One.com doesn't support them
  trailingSlash: true,
};

module.exports = nextConfig; 