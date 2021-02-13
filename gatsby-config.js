module.exports = {
  siteMetadata: {
    title: `Danilo Vilhena`,
    description: `Portfólio do desenvolvedor web Danilo Vilhena.`,
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
        name: `vilhena-portfolio`,
        start_url: `/`,
        background_color: `#19323C`,
        theme_color: `#19323C`,
        display: `minimal-ui`,
        icon: `src/images/avatar.webp`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
