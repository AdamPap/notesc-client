import { Box, ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { AxiosInstance } from "axios";
import { NextPageContext } from "next";
import App, { AppContext, AppInitialProps, AppProps } from "next/app";
import buildClient from "../api/buildClient";
import theme from "../theme";

export interface MyContext extends NextPageContext {
  client: AxiosInstance;
}

interface MyAppProps extends AppProps {
  currentUser: string;
}

const MyApp = ({ Component, pageProps, currentUser }: MyAppProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Box>
          <Box height="100px" bg="teal.200">
            {currentUser}
          </Box>
          <Component {...pageProps} />
        </Box>
      </ColorModeProvider>
    </ChakraProvider>
  );
};

// In App component the props are Component, ctx
// so ctx.ctx to get "original" context
MyApp.getInitialProps = async (ctx: AppContext) => {
  const client = buildClient(ctx.ctx);

  let pageProps = {};

  // To do this only on pages with getInitialProps
  if (ctx.Component.getInitialProps) {
    pageProps = await ctx.Component.getInitialProps(ctx.ctx);
  }

  return {
    pageProps,
    currentUser: "me",
  };
};

export default MyApp;
