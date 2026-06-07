import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: [
    "preview-chat-6ec6f70c-180a-4bee-b586-993de283e001.space-z.ai",
    ".space-z.ai",
  ],
};

export default nextConfig;
