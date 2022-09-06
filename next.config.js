/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  useFileSystemPublicRoutes: false,
  swcMinify: true,
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
