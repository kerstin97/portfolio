import '../styles/globals.css';
import '../theme/styles.css';
import '../styles/timeline.css';
import '../styles/gallery.css';

import { ChakraProvider } from '@chakra-ui/react';

import theme from '../theme/index.js';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider> 
  )
}

export default MyApp
