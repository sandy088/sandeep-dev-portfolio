/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
      },
      {
        hostname: "res.cloudinary.com",
      },
      {
        hostname: "private-user-images.githubusercontent.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
