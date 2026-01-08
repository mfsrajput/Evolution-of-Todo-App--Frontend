/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export configuration for GitHub Pages
  output: 'export',

  // GitHub Pages configuration
  basePath: '/Evolution-of-Todo-App--Frontend',
  assetPrefix: '/Evolution-of-Todo-App--Frontend',
  trailingSlash: false,

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Additional Next.js configuration
  reactStrictMode: true,
  swcMinify: true,
};

// Build-time validation for required environment variables
if (!process.env.NEXT_PUBLIC_API_URL) {
  throw new Error('NEXT_PUBLIC_API_URL environment variable is required for build');
}

module.exports = nextConfig;