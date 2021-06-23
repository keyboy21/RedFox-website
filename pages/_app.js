import NextNprogress from "nextjs-progressbar";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../styles/animate.css'
import "../styles/globals.css";
import "../styles/mian.css";
import "../styles/footer.css";
import "../styles/portfolio.css";
import "../styles/agency.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="#ff7300"
        startPosition={0.5}
        stopDelayMs={200}
        height={2}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
