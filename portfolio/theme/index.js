import { extendTheme, theme as base } from '@chakra-ui/react';

const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
  }

const theme = extendTheme({
    fonts: {
        heading: `IBM Plex Sans, ${base.fonts?.heading}`,
        body: `IBM Plex Sans, ${base.fonts?.heading}`,
    },
    config,
});

export default theme;