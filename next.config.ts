import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root: without this Turbopack walks up and finds the
  // package-lock.json in the home directory, then warns about including it.
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
