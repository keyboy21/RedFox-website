import MainLayout from "../../components/MainLayout.js";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Agency({ children }) {
  const router = useRouter();
  return (
    <MainLayout title={"| Agency"}>
      <div className="agency">

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
              <Link href="/agency/short/" passHref>
                <li
                  className={router.pathname == "/agency/short" ? "clicc" : ""}
                >
                  <a
                    className={router.pathname == "/agency/short" ? "clic" : ""}
                  >
                    Qisqacha
                  </a>
                </li>
              </Link>

              <Link href="/agency/customers/" passHref>
                <li
                  className={
                    router.pathname == "/agency/customers" ? "clicc" : ""
                  }
                >
                  <a
                    className={
                      router.pathname == "/agency/customers" ? "clic" : ""
                    }
                  >
                    Mijozlarimiz
                  </a>
                </li>
              </Link>

              <Link href="/agency/team/" passHref>
                <li
                  className={router.pathname == "/agency/team" ? "clicc" : ""}
                >
                  <a
                    className={router.pathname == "/agency/team" ? "clic" : ""}
                  >
                    Jamoa
                  </a>
                </li>
              </Link>

              <Link href="/agency/partners/" passHref>
                <li
                  className={
                    router.pathname == "/agency/partners" ? "clicc" : ""
                  }
                >
                  <a
                    className={
                      router.pathname == "/agency/partners" ? "clic" : ""
                    }
                  >
                    Hamkorlar
                  </a>
                </li>
              </Link>

              <Link href="/agency/contact/" passHref >
                <li
                  className={
                    router.pathname == "/agency/contact" ? "clicc" : ""
                  }
                >
                  <a
                    className={
                      router.pathname == "/agency/contact" ? "clic" : ""
                    }
                  >
                    Contact
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div  >{children}</div>
      </div>
    </MainLayout>
  );
}
