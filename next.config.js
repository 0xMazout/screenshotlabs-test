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
    ],
  },
};

module.exports = nextConfig;
