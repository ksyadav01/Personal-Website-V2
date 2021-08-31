module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Personal Website V2",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-189239857-1",
        head: false,
      },
    },
  ],
};
