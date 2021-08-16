import Document, { Html, Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {

  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
            crossOrigin="anonymous" loading="lazy"
          />
        </body>
      </Html>
    );
  }
}
