import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="overflow-x-hidden">
        <Head>
          {/* Add any additional Head elements here */}
          <script
            type="text/javascript"
            src="//cdn.cookie-script.com/s/66761a5566442f8ed0337fe12e4fd83f.js"
          />
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

