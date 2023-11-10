/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    remotePatterns: [{ hostname: "images.microcms-assets.io" }],
  },
};

module.exports = nextConfig;
