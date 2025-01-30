/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
        pathname: "**",
      }
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // Abaikan error ESLint saat build
  },
  typescript: {
    ignoreBuildErrors: true, // Abaikan error TypeScript saat build
  },
}

module.exports = nextConfig
