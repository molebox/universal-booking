export default {
  // this enables the color modes feature
  // and is used as the name for the top-level colors object
  initialColorMode: "light",
  // optionally enable custom properties
  // to help avoid a flash of colors on page load
  useCustomProperties: true,
  colors: {
    // these are the default light colors
    text: "",
    background: "",
    primary: "",
    secondary: "",
    accent: "",

    modes: {
      // this is the dark color mode colors
      dark: {
        text: "",
        background: "",
        accent: ""
      }
    }
  },
  fonts: {
    body: "",
    heading: "Poppins"
  },
  fontWeights: {
    body: 300,
    heading: 400,
    bold: 700
  },
  lineHeights: {
    body: "110%",
    heading: 1.125
  },
  letterSpacing: {
    body: "2px",
    text: "5px"
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
