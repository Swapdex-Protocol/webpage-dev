import Head from 'next/head';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>SwapDEX Network</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com/" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;700&display=swap" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
