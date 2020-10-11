module.exports = {
  siteMetadata: {
    title: `Histories`,
    description: `Apliación para guardar links de los articulos que debo leer para tenerlos de referencia`,
    author: `Alex Báez`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `Histories Box`,
        short_name: `Histories`,
        start_url: `/`,
        background_color: `#34495E`,
        theme_color: `#34495E`,
        display: `minimal-ui`,
        icon: `src/images/histories-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`],
      },
    },
  ],
}
