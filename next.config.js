/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'www.fbi.gov',
      }
    ]
  }
}

module.exports = nextConfig
