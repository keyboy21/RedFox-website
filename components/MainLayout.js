import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
export default function MainLayout({ children, title = "" }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Redfox {title}</title>
        <meta name="description" content="Redfox agency website" />
        <meta name="keywords" content="redfox,design,web development, naming" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/Group.png" />
      </Head>
      <nav className="navbar navbar-expand-sm navbar-light">
        <div className="container d-flex justify-content-between">
          <Link href="/">
            <a className="navbar-brand">
              <img src="/Logo.webp" alt="" />
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupporftedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flex-grow-0"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/portfolio">
                  <a
                    className={
                      router.pathname == "/portfolio"
                        ? "nav-link link_active"
                        : "nav-link"
                    }
                  >
                    Portfolio
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/agency">
                  <a
                    className={
                      router.pathname == "/agency"
                        ? "nav-link link_active"
                        : "nav-link"
                    }
                  >
                    Agency
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <Footer />
    </>
  );
}
