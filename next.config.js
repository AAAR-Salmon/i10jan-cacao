/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CACAO_API_TOKEN: process.env.CACAO_API_TOKEN
  },
};

module.exports = nextConfig;
