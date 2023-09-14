import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Layout from "@/components/Layout";
import { AppProps } from "next/app";
import "/styles/global.css";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";

const theme = createTheme({});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <I18nextProvider i18n={i18n}>
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
    </I18nextProvider>
  );
}

export default MyApp;
