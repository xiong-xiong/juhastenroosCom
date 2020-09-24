module.exports = {
  siteMetadata: {
    title: `Juha Stenroos`,
    description: `Juha Stenroos - web developer`,
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
      resolve: "gatsby-source-wordpress",
      options: {
          baseUrl: "juha.blog",
          protocol: "http",
          hostingWPCOM: false,
          useACF: true,
          verboseOutput: true,
          includedRoutes: [
            "**/*/*/posts",
            "**/*/*/pages",
            "**/*/*/cv"
          ],
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-86459499-6",
        head: false,
      },
    },
  ],
}
