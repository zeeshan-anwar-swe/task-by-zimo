/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "cdn.pixabay.com",
      "images.pexel.com",
      "source.unsplash.com",
      "fakestoreapi.com",
      "i.dummyjson.com",
    ],
  },
};

module.exports = nextConfig;
