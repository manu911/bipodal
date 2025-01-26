import { config } from 'dotenv';
config();
console.log(process.env.mode);
const isProd = process.env.NODE_ENV === 'production';
console.log("isProd",isProd)
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/bipodal/' : '',
  basePath: isProd ? '/bipodal' : '',
  output: 'export'
};

export default nextConfig;