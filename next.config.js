const githubPagesHome = require("./package.json").homepage

const withMDX = require("@next/mdx")({
  // md or mdx extension both works
  extension: /\.mdx?$/,
})

const isProduction = process.env.NEXT_PUBLIC_EXPORT

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: isProduction ? "/styled-system" : undefined,
  output: "export",
  assetPrefix: isProduction ? githubPagesHome + "/" : undefined,
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
