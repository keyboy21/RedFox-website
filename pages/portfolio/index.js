import Link from "next/link";
import MainLayout from "../../components/MainLayout";

export default function Portfoio({ children }) {
  return (
    <MainLayout title={"| Portfolio"}>
      <div className="portfloio">
        <div className="container">
          <div className="row">
            <ul>
              <li>
                <Link href="/portfolio/all">
                  <a>Barchasi</a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio/categories">
                  <a>Kategoriyalar</a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio/clients">
                  <a>Mijozlar</a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio/industry">
                  <a>Industriya</a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio/tags">
                  <a>Tags</a>
                </Link>
              </li>
            </ul>
            {children}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
