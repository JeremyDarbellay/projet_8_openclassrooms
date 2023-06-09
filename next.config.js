const isProd = process.env.NODE_ENV === 'production'

// mdx config
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  output: 'export',
  basePath: isProd ? '/projet_8_openclassrooms' : '',
  assetPrefix: isProd ? '/projet_8_openclassrooms/' : '',
  images: {
    unoptimized: true,
  }
}

// Merge MDX config with Next.js config
module.exports = withMDX(nextConfig)
