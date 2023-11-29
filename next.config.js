/** @type {import('next').NextConfig} */
const withImages = require("next-images")
const withTM = require("next-transpile-modules")(["@madzadev/image-slider"])

const nextConfig = {
  // output: "export",
  //   reactStrictMode: true,
  //   basePath: "/github-pages",
}

module.exports = nextConfig
module.exports = withImages(withTM())
