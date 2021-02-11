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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `vilhena-portfolio`,
        start_url: `/`,
        background_color: `#19323C`,
        theme_color: `#19323C`,
        display: `minimal-ui`,
        icon: `src/images/avatar.webp`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
