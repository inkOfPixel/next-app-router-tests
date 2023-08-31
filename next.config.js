/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/headers-read",
        headers: [
          {
            key: "Cache-Control",
            value: "max-age=60",
          },
          // {
          //   key: "CDN-Cache-Control",
          //   value: "max-age=60",
          // },
          {
            key: "Vercel-CDN-Cache-Control",
            value: "max-age=60",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
