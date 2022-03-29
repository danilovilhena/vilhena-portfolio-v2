module.exports = {
  siteMetadata: {
    title: `Danilo Vilhena`,
    description: `Portfolio made by front-end developer Danilo Vilhena.`,
    author: `Danilo Vilhena`,
    siteUrl: 'https://danilovilhena.com'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Danilo Vilhena`,
        start_url: `/`,
        background_color: `#0a0a0a`,
        theme_color: `#0a0a0a`,
        display: `minimal-ui`,
        icon: `src/images/pfp-square.jpg`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
