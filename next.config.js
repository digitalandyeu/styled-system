const withMDX = require("@next/mdx")({
  // md or mdx extension both works
  extension: /\.mdx?$/,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"], // Optionally, add any other Next.js config below
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "media.giphy.com",
      },
      {
        hostname: "img.shields.io",
      },
    ],
  },
}

module.exports = withMDX(nextConfig)
