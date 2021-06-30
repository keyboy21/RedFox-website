import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "../../components/MainLayout";

export default function Portfolio({ children }) {
  const [count, setCount] = useState([]);
  const router = useRouter();

  useEffect(async () => {
    // Fetch data from external API
    const res = await fetch(`https://redfox.frilansus.com/api/apiportfolio`);
    const data = await res.json();
    setCount(data);
  }, []);

  return (
    <MainLayout title={"| Portfolio"}>
      <div className="portfolio">
        <div className="container top_color">
          <h2>Portfolio</h2>
          <p>
            Jami Topshirilgan ishlar soni: <span>{count.length}</span>
          </p>
          <div className="port_ul">
            <ul>
              <li>
                <Link href="/portfolio/all">
                  <a
                    className={
                      router.pathname == "/portfolio/all" ? "clik" : ""
                    }
                  >
                    Barchasi
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio/categories">
                  <a
                    className={
                      router.pathname == "/portfolio/categories" ? "clik" : ""
                    }
                  >
                    Kategoriyalar
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio/clients">
                  <a
                    className={
                      router.pathname == "/portfolio/clients" ? "clik" : ""
                    }
                  >
                    Mijozlar
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio/industry">
                  <a
                    className={
                      router.pathname == "/portfolio/industry" ? "clik" : ""
                    }
                  >
                    Industriya
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio/tags">
                  <a
                    className={
                      router.pathname == "/portfolio/tags" ? "clik" : ""
                    }
                  >
                    Tags
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">{children}</div>
      </div>
    </MainLayout>
  );
}
