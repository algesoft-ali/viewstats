/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "yt3.googleusercontent.com" },
      { hostname: "flagcdn.com" },
      { hostname: "lh3.googleusercontent.com" },
      { hostname: "i.ytimg.com" },
    ],
  },
};

export default nextConfig;
