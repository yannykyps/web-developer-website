module.exports = {
  siteMetadata: {
    title: `yannyWeb`,
    // title: `Freelance Web Developer in Milton Keynes`,
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
        defer: false,
      },
    },
    // {
    //   resolve: `gatsby-plugin-csp`,
    //   options: {
    //     disableOnDev: true,
    //     reportOnly: false,
    //     mergeScriptHashes: true, // you can disable scripts sha256 hashes
    //     mergeStyleHashes: false, // you can disable styles sha256 hashes
    //     mergeDefaultDirectives: true,
    //     directives: {
    //       "default-src": "'self' www.google-analytics.com https://fonts.googleapis.com  'unsafe-inline'",
    //       "script-src": "'self' www.google-analytics.com",
    //       "style-src": "'self' https://fonts.googleapis.com 'unsafe-inline'",
    //       "img-src": "'self' data: www.google-analytics.com",
    //       "connect-src": "'self' www.google-analytics.com https://www.google-analytics.com ",
    //       "font-src": "'self' https://fonts.gstatic.com",
    //     }
    //   }
    // },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ["/success"],
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
              quality: 100,
              withWebP: true,
              linkImagesToOriginal: false,
            },
          },
        ],
        plugins: [
          "gatsby-remark-images",
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-preact`,
    `gatsby-remark-images`,
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
          as: "style"
        },
      },
    },
    `gatsby-plugin-offline`,
  ],
}
