import React, { FC } from "react";
import { Html, Head, Main, NextScript } from "next/document";

const MyDocument: FC = () => {
  return (
    <Html lang="en">
      <Head></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
