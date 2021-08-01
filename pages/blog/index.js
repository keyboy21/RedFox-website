import { useRouter } from "next/router";
import MainLayout from "../../components/MainLayout"
import Link from "next/link";


export default function Blog({ children }) {
  const router = useRouter();
  return (
    <MainLayout title={"| Blog"}>
      <div className="portfolio any">
        <div className="container top_color">
          <h2>Blog</h2>
          <p>
            Siz ham RedFox bilan shaxsiy blog yuriting.
          </p>
          <div className="port_ul">
            <ul>
              <li>
                <Link href="/blog/news/">
                  <a
                    className={
                      router.pathname == "/blog/news" ? "clik" : ""
                    }
                  >
                    News
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog/design/">
                  <a
                    className={
                      router.pathname == "/blog/design" ? "clik" : ""
                    }
                  >
                    Design
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog/marketing">
                  <a
                    className={
                      router.pathname == "/blog/marketing" ? "clik" : ""
                    }
                  >
                    Marketing
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog/it_news/">
                  <a
                    className={
                      router.pathname == "/blog/it_news" ? "clik" : ""
                    }
                  >
                    ITNews
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog/tags">
                  <a
                    className={
                      router.pathname == "/blog/tags" ? "clik" : ""
                    }
                  >
                    Tags
                  </a>
                </Link>
              </li>
              <li >
                <Link href="/blog/authors">
                  <a
                    className={
                      router.pathname == "/blog/authors" ? "clik" : ""
                    }
                  >
                    Authors
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">{children}</div>
      </div>
    </MainLayout>
  )
}
