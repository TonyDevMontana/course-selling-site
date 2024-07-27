/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["utfs.io"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        "node:async_hooks": false,
        // Add other node: modules here if necessary
      };
    }

    return config;
  },
};

export default nextConfig;
