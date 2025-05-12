import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;700&family=Poppins&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
