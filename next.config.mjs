/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: false,

  images: {
    unoptimized: true, // required for export hosting
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
};

export default nextConfig;
