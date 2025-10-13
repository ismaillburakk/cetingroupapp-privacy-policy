/** @type {import('next').NextConfig} */
const nextConfig = {
  // Netlify gibi statik host’lar için HTML’e export
  output: 'export',
  // /tr/privacy-policy/ gibi sonunda / ile dosya çıktıları
  trailingSlash: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
