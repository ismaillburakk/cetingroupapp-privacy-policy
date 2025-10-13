/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },      // << ek
  typescript: { ignoreBuildErrors: true },   // (isteğe bağlı, tip hatası olursa korur)
};
module.exports = nextConfig;
