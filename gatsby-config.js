module.exports = {
  siteMetadata: {
    title: `Freelance Web Developer in Milton Keynes`,
    description: `Freelance web developer services
    based in Milton Keynes, UK.`,
    author: "Yanny Kyprianou",
    twitterUsername: "@yannykyps",
    image: "/twitter-img.jpg",
    siteUrl: "https://www.yannyweb.com",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-177642206-1",
        head: true,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        reportOnly: false, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
        mergeScriptHashes: true, // you can disable scripts sha256 hashes
        mergeStyleHashes: false, // you can disable styles sha256 hashes
        mergeDefaultDirectives: true,
        directives: {
          "default-src": "'self' www.google-analytics.com https://fonts.googleapis.com 'unsafe-inline'",
          "script-src": "'self' www.google-analytics.com",
          "style-src": "'self' https://fonts.googleapis.com 'unsafe-inline'",
          "img-src": "'self' data: www.google-analytics.com",
          "connect-src": "'self' www.google-analytics.com https://www.google-analytics.com ",
          "font-src": "'self' https://fonts.gstatic.com",
        }
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ["/success", "/contact", "/about"],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.yannyweb.com',
        sitemap: 'https://www.yannyweb.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `yanny-web-freelance-developer`,
        short_name: `freelance`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/yannyfavicon.png`, // This path is relative to the root of the site.
        icon_options: {
          // For all the options available, please see the additional resources below.
          purpose: `maskable`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-with-attributes`,
      options: {
        fonts: [
            `Ruda\:400,700`,
            `Open Sans`,
        ],
        display: 'swap',
        attributes: {
          rel: "stylesheet preload prefetch",

        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
