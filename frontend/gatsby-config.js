module.exports = {
  siteMetadata: {
    title: `Garnuszek`,
    description: `-`,
    author: `tdxa`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `pricecheck`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo/logo-full-green.svg`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-dts-css-modules',
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        include: '/images/.*.svg/',
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Odibee Sans`,
            file: `https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap`,
          },
        ],
      },
    },
  ],
};
