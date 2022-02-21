import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap" rel="stylesheet" />

          <meta property="og:title" content="Nutrición Abundante - Distribuidores Independientes de productos Omnilife y Seytú" />
          <meta property="og:description" content="Aquí vas a encontrar productos nutricionales para tener una mejor alimentación diaria" />
          <meta property="og:url" content="https://nutricion-abundante.vercel.app/" />
          <meta property="og:image" content="https://nutricion-abundante.vercel.app/og-1000x500.png" />
          <meta property="og:site_name" content="Nutrición Abundante" />
          <meta property="og:locale" content="es_AR" />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="https://nutricion-abundante.vercel.app/og-1000x500.png" />
          <meta name="twitter:title" content="Nutrición Abundante - Distribuidores Independientes de productos Omnilife y Seytú" />
          <meta name="twitter:description" content="Aquí vas a encontrar productos nutricionales para tener una mejor alimentación diaria" />
          <meta name="twitter:image" content="https://nutricion-abundante.vercel.app/og-1000x500.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument