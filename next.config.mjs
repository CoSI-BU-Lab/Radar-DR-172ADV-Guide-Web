import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cosi.bu.ac.th','github.com', 'www.countryflags.com'],
    },
};

export default withNextIntl(nextConfig);