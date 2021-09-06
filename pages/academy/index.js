import MainLayout from "../../components/MainLayout";
import Link from "next/link";
import { useRouter } from "next/router";

const Academy = ({ children }) => {
  const router = useRouter();
  return (
    <MainLayout title={"| Academy"}>
      <div className="academy">
        <div className="container top_color">
          <h2>
            Biz ijod olamida yashaydigan kichik bir oilamiz <span>: )</span>
          </h2>
          <p>
            RedFox dizayn studiyasi 2016 yil tashkil etilgan. RedFox dizayn
            studiyasi 2016 yil tashkil etilgan. RedFox dizayn studiyasi 2016 yil
            tashkil etilgan. RedFox dizayn studiyasi 2016 yil tashkil.
          </p>
          <div className="port_ul">
            <ul>
              <Link href="/academy/academylife/" passHref>
                <li
                  className={
                    router.pathname == "/academy/academylife" ? "acal" : ""
                  }
                >
                  <a
                    className={
                      router.pathname == "/academy/academylife" ? "aca" : ""
                    }
                  >
                    Academy life
                  </a>
                </li>
              </Link>

              <Link href="/academy/albom/" passHref>
                <li
                  className={router.pathname == "/academy/albom" ? "acal" : ""}
                >
                  <a
                    className={router.pathname == "/academy/albom" ? "aca" : ""}
                  >
                    Albom
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="container">{children}</div>
      </div>
    </MainLayout>
  );
};

export default Academy;
