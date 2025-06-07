import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="sv">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Metadata (valfritt, du kan lägga till SEO här sen) */}
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#D62828" />
        <meta name="description" content="Skapa en professionell bilannons på 30 sekunder med Annonstext.se – färdig för Blocket eller Facebook Marketplace." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
