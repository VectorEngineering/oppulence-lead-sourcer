/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
        serverComponentsExternalPackages: ['@sparticuz/chromium', 'puppeteer-core'],
    },
    output: 'standalone',
};

export default nextConfig;
