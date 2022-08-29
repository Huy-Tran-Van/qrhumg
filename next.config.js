/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true,
  },
  disableExperimentalFeaturesWarning: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
}

module.exports = nextConfig
