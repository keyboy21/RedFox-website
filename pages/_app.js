import "bootstrap/dist/css/bootstrap.min.css";
import '@popperjs/core';
import "animate.css/source/animate.css";
import "/styles/globals.css";
import "/styles/mian.css";
import "/styles/footer.css";
import "/styles/portfolio.css";
import "/styles/blog.css";
import "/styles/view.css";
import "/styles/agency.css";
import "/styles/academy.css";
import "/styles/servic.css";
import NextNprogress from "nextjs-progressbar";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="#ff7300"
        startPosition={0.5}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
