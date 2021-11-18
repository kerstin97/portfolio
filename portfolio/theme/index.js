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
    config,
    breakpoints
});

export default theme;