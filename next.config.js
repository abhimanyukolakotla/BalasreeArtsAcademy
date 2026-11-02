/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/BalasreeArtsAcademy',
  assetPrefix: '/BalasreeArtsAcademy/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
