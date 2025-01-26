const isProd = process.env.NODE_ENV === 'production';
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