import { extendTheme, theme as base } from '@chakra-ui/react';
import {createBreakpoints} from '@chakra-ui/theme-tools';
const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
  }

const breakpoints = createBreakpoints({
    sm: "30em",
    md: "55em",
    lg: "63em",
    xl: "80em",
})


const theme = extendTheme({
    fonts: {
        heading: `IBM Plex Sans, ${base.fonts?.heading}`,
        body: `IBM Plex Sans, ${base.fonts?.heading}`,
    },
    colors: {
        brand: {
          50: "#E96685",
          100: "#E96685",
          200: "#E96685",
          300: "#E96685", // you need this
          400: "#E96685",
          500: "#E96685",
          600: "#E96685",
          700: "#E96685",
          800: "#E96685",
          900: "#E96685",
        }
    },
    config,
    breakpoints
});

export default theme;