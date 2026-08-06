/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
  async redirects() {
    return [
      { source: '/software/pricing', destination: '/software', permanent: true },
      { source: '/software/lead-sales', destination: '/software', permanent: true },
      { source: '/software/social-ai', destination: '/software', permanent: true },
      { source: '/software/booking-experience', destination: '/software', permanent: true },
      { source: '/software/staff-operations', destination: '/software', permanent: true },
      { source: '/software/control-tower', destination: '/software', permanent: true },
    ];
  },
};

module.exports = nextConfig;
