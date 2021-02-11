const settings = {
  name: "shaun-guimond",
  state: {
    frontity: {
      url: "https://shaunguimond.com",
      title: "Shaun Guimond",
      description: "A blog for business, travel and technology."
    }
  },
  packages: [
    {
      name: "@frontity/google-tag-manager-analytics",
      state: {
        googleTagManagerAnalytics: {
          containerId: "GTM-596KLG4",
        },
      },
    },
    {
      name: "twentynineteen-theme",
      state: {
        theme: {
          color: "#008077",
          menu: [
            [
              "Home",
              "/"
            ],
            [
              "Business",
              "/category/business/"
            ],
            [
              "Travels",
              "/category/travels/"
            ],
            [
              "Technology",
              "/category/technology/"
            ],
            [
              "Projects",
              "/projects/"
            ],
            [
              "About Shaun",
              "/about-shaun/"
            ]
          ],
          featured: {
            "showOnList": true,
            "showOnPost": true
          },
          autoPrefetch: "in-view"
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://wp.shaunguimond.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/head-tags",
    "@frontity/wp-comments"
  ]
};

export default settings;
