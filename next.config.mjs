import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cosi.bu.ac.th', 'github.com', 'www.countryflags.com'],
    },
    eslint: {
        ignoreDuringBuilds: true, // Allows build to complete even if ESLint errors exist
    },
    experimental: {
        outputStandalone: true, // Ensures correct output for static exports
    },
};

export default withNextIntl(nextConfig);
