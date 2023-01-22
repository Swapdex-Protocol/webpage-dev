import '../styles/global.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com/" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;700&display=swap" />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
