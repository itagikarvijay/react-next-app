import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/api/v1/login/find',
        destination: 'http://localhost:8080/api/v1/login/find'
      }
    ]
  }
};

export default nextConfig;
