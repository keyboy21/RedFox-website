import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

import Footer from "./Footer";
export default function MainLayout({ children, title = "" }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content="Redfox agency website" />
        <meta
          name="keywords"
          content="redfox, design, web-development, naming"
        />
        <title>Redfox Agency {title}</title>
        <link rel="icon" type="image/png" href="/Group.png" />
      </Head>
      <nav className="navbar navbar-expand-sm navbar-light">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">
              <img src="/logo11111.svg" alt="" />
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
                <Link href="/portfolio/all">
                  <a
                    className={
                      router.pathname.length <= 7
                        ? "nav-link"
                        : "nav-link link_active"
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
