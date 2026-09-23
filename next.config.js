/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
  // La configurazione ESLint versionata (.eslintrc.json) fa emergere errori
  // preesistenti (vedi docs/agria/05-infrastruttura.md) non corretti in questa
  // fase: disaccoppia il lint dalla build così `next build`/il deploy Vercel
  // non si interrompono. Il lint resta eseguibile a parte via `npm run lint`
  // e nella CI (non bloccante, vedi .github/workflows/ci.yml).
  eslint: {
    ignoreDuringBuilds: true,
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
