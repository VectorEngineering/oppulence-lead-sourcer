/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
        serverComponentsExternalPackages: ['@sparticuz/chromium', 'puppeteer-core'],
    },
};

export default nextConfig;
