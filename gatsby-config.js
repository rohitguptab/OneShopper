module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `2b1c955eaf2375388bb3d76c64d51e`,
        previewMode: false,
        disableLiveReload: false,
      },
    },
    {
      resolve: "gatsby-plugin-snipcart",
      options: {
        apiKey: `NzA4NjFmNGUtZTNhOC00NzVmLThkMTAtNDZkMTMzYjkwZWE5NjM2ODk1MjIwOTE0ODEwOTY2`,
        autopop: true,
      },
    },
  ],
}
