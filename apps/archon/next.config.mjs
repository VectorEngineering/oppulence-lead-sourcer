/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Don't attempt to load these modules on the client side
      config.resolve.fallback = {
        net: false,
        tls: false,
        fs: false,
        perf_hooks: false,
        events: false,
      };
    }
    return config;
  },
};

export default nextConfig;
