// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Static export configuration for GitHub Pages
//   output: 'export',

//   // GitHub Pages configuration for project sites
//   // For gh-pages deployment, we'll handle base path in the application
//   basePath: '',
//   trailingSlash: false,

//   // Disable image optimization for static export
//   images: {
//     unoptimized: true,
//   },

//   // Additional Next.js configuration
//   reactStrictMode: true,
//   swcMinify: true,
// };

// // Build-time validation for required environment variables
// if (!process.env.NEXT_PUBLIC_API_URL) {
//   throw new Error('NEXT_PUBLIC_API_URL environment variable is required for build');
// }

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/Evolution-of-Todo-App--Frontend",
  assetPrefix: "/Evolution-of-Todo-App--Frontend/",
  trailingSlash: true,

  images: { unoptimized: true },

  reactStrictMode: true,
};

module.exports = nextConfig;
