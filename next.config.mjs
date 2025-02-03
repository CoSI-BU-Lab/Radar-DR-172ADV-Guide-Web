/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
    // distDir: "out",
    // output: "export",
    images: {
        domains: ['cosi.bu.ac.th', 'github.com', 'www.countryflags.com'],
        unoptimized: true, // Required since GitHub Pages doesn't support Next.js image optimization
    },
    eslint: {
        ignoreDuringBuilds: true, // Allows build to complete even if ESLint errors exist
    },
    // experimental: {
    //     outputStandalone: true, // Ensures correct output for static exports
    // },
};

export default withNextIntl(nextConfig);
