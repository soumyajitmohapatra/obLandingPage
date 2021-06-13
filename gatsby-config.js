/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Odisha Beverages",
    titleTemplate: "%s | A company build with flavours of Odisha",
    description: "Odisha Beverages is a new gen company build on the old tradional flavours of Odisha ",
    siteUrl: "https://thestartup.netlify.com",
    author: "Soumyajit Mohapatra",
    authorSite: "https://linktr.ee/so_mya_jit",
    image: "/yellow-metal-design-decoration.jpg",
    twitterUsername: "@twitter",
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
  ],
}
