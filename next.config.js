/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    domains: ['profilesalome.co.uk'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'profilesalome.co.uk',
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