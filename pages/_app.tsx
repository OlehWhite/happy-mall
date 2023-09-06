import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Layout from "@/components/Layout";
import { AppProps } from "next/app";
import "/styles/global.css";
import Head from "next/head";

const theme = createTheme({});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Happy Mall</title>
      </Head>
      <Layout>
        <Header />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
        <Footer />
      </Layout>
    </>
  );
}

export default MyApp;
