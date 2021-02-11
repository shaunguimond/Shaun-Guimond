import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import link from "@frontity/html2react/processors/link";
import iframe from "@frontity/html2react/processors/iframe";

const twentyNineteenTheme = {
  name: "twentynineteen-theme",
  roots: {
    theme: Theme
  },
  state: {
    theme: {
      color: "#008077",
      menu: [],
      featured: {
        showOnList: true,
        showOnPost: true,
      },
    },
  },
  actions: {
    theme: {},
  },
  libraries: {
    html2react: {
      processors: [image, link, iframe],
    },
  },
};

export default twentyNineteenTheme;
