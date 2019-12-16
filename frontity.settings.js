const settings = {
  "name": "shaun-guimond",
  "state": {
    "frontity": {
      "url": "https://shaunguimond.com",
      "title": "Shaun Guimond",
      "description": "A blog for business, travel and technology."
    }
  },
  "packages": [
    {
      "name": "twentynineteen-theme",
      "state": {
        "theme": {
          "menu": [
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
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://wp.shaunguimond.com/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
