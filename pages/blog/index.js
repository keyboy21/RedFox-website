import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import MainLayout from "../../components/MainLayout"
import Link from "next/link";


const Blog = ({ children }) => {

  const router = useRouter();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://redfox.frilansus.com/api/blogcat")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])


  if (error) {
    return <div style={{ textAlign: 'center', fontSize: 20, color: '#ff6200' }} >{router.locale == "uz" ? "Internet yo'q" : 'Нет интернет'}</div>;
  } else if (!isLoaded) {
    return <div style={{ textAlign: 'center', fontSize: 20, color: '#ff6200' }} >{router.locale == "uz" ? "yuklanmoqda..." : 'Загрузка...'}</div>;
  } else {
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
                {items.map((item) => (
                  <li key={item.id}>
                    <Link href={`/blog/${item.id}/?name=${item.title}`} key={item.id}>
                      <a
                        className={
                          router.query.name == item.title ? "clik" : ""
                          
                        }
                      >
                        {item.title}
                      </a>
                    </Link>
                  </li>
                ))}
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





}

export default Blog;



