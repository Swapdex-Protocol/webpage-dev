import Head from 'next/head';
import Script from 'next/script';

import '../styles/global.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>SwapDEX Network</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com/" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;700&display=swap" />
    </Head>
    <div className="bg-SDX-900">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
    <Script src="https://kit.fontawesome.com/05ec26002b.js" crossorigin="anonymous" />
  </>
);

export default MyApp;

