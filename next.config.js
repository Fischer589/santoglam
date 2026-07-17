/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Amazon's CDN blocks Netlify's server-side image-optimization proxy
    // (bot/user-agent checks), which caused broken product photos in
    // production. Serving them unoptimized renders a plain <img> that the
    // visitor's browser fetches directly, which always works.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "m.media-amazon.com" },
      { protocol: "https", hostname: "galaxy-prod.tlcdn.com" },
    ],
  },
};

module.exports = nextConfig;
