import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { appTheme } from "./theme";
import { CssBaseline } from "@mui/material";
import Navbar from "./navbar";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <ThemeProvider theme={appTheme}>
      <SessionProvider session={session}>
        <CssBaseline enableColorScheme />
        <Navbar />
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  );
}
