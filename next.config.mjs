/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export -> ./out (deploys to Cloudflare Pages / Workers static assets)
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
