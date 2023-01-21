import '../styles/global.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com/" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter&display=swap" />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
