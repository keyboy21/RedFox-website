import Link from "next/link";
import MainLayout from "../../components/MainLayout";

export default function Portfoio({ children }) {
  return (
    <MainLayout title={"| Portfolio"}>
      <div className="portfloio">
        <div className="container">
          <div className="row">
            <Link href="/portfolio/all">
              <a> Barchasi</a>
            </Link>
            <Link href="/portfolio/categories">
              <a>Kategoriyalar </a>
            </Link>
            <Link href="/portfolio/clients">
              <a>Mijozlar </a>
            </Link>
            <Link href="/portfolio/industry">
              <a>Industriya </a>
            </Link>
            <Link href="/portfolio/tags">
              <a>Tags </a>
            </Link>
            {children}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
