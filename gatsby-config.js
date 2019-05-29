const dotenv = require("dotenv");

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config();
}

const { spaceId, accessToken } = process.env;

console.log("Id", spaceId, accessToken)

module.exports = {
  siteMetadata: {
    title: `EcoStore`,
    description: `This Site for Ecommerce project`,
    author: `@Rohitguptab`,
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
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "ci5lvln4qads",
        accessToken: "HBcEQt8zNhVX-pypZML3UbKNbaVtyHmhaWomQzYBhCU"
      }
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
