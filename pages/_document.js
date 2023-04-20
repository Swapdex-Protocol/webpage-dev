import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="overflow-x-hidden">
        <Head>
          {/* Add any additional Head elements here */}
        </Head>
        <body className="overflow-x-hidden overscroll-x-none">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

