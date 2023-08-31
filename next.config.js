/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/about",
        headers: [
          {
            key: "x-custom-header",
            value: "my custom header value",
          },
          {
            key: "x-another-custom-header",
            value: "my other custom header value",
          },
          {
            key: "Cache-Control",
            value: "max-age=60",
          },
          {
            key: "CDN-Cache-Control",
            value: "max-age=60",
          },
          {
            key: "Vercel-CDN-Cache-Control",
            value: "max-age=3600",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
