require("dotenv").config({
  path: `.env`,
 })
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.karanyadav.com",
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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Megrim`,
          `Space Mono`,
          `Zilla Slab`,
          //`source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
          //once: true, // Defines if animation needs to be launched once
          disable: false, // Flag for disabling animations
          
          // Advanced Options
          //selector: '[data-sal]', // Selector of the elements to be animated
          // animateClassName: 'sal-animate', // Class name which triggers animation
          // disabledClassName: 'sal-disabled', // Class name which defines the disabled state
          // rootMargin: '0% 50%', // Corresponds to root's bounding box margin
          // enterEventName: 'sal:in', // Enter event name
          // exitEventName: 'sal:out', // Exit event name
      }
    }
    
  ],
};
