/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    // domains: ["i.seadn.io"],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.seadn.io",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "everai-collection-*",
        pathname: "**",
      },
    ],
  },
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
};

module.exports = nextConfig;
