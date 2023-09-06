import React, { FC } from "react";
import { Html, Head, Main, NextScript } from "next/document";

const MyDocument: FC = () => {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
