// next.config.js
const rehypePrism = require("@mapbox/rehype-prism")
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
  options: {
    rehypePlugins: [rehypePrism],
  },
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
})