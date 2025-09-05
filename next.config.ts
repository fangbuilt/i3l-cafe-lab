import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://image-cdn-ak.spotifycdn.com/**")]
  }
};

export default nextConfig;
