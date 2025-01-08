/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath: '/yuki-profile',
  images: {
    unoptimized: true,
  },
  distDir: 'out', // 出力先を "out" に設定
};

module.exports = nextConfig;
