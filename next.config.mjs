/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/pricing/seo-packages',
            destination: '/seo-packages',
            permanent: true,
          },
        ];
      },
};

export default nextConfig;
