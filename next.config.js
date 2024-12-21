/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  webpack(config, { dev }) {
    if (dev) {
      config.devtool = 'source-map';
    }
    return config;
  },
  images: { 
    unoptimized: true,
    domains: ['images.unsplash.com']
  }
};

module.exports = nextConfig;