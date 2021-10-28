import type { AppProps } from 'next/app';

import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import GlobalStyle from 'src/common/Global.styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="resilient" />
        <link rel="manifest" href="manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <title>resilient</title>
      </Head>
      <GlobalStyle />

      <ThemeProvider theme={theme}>
        <Box
          sx={{
            width: '100vw',
            minHeight: '100vh',
            color: 'text.primary',
            bgcolor: 'background.default',
          }}
        >
          <Component {...pageProps} />
        </Box>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
