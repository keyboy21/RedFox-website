import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Portfolio from "./index.js";

const Clients = ({ data, clients }) => {
  return (
    <Portfolio>
      <div className="categories">
        {clients.map((name) => {
          const firsFilter = useMemo(() => {
            return data.filter((item) => item.mijoz_id == name.id);
          }, [data])

          return (
            <div className="prime" key={name.id}>
              <h3>
                {name.title} <span>({firsFilter.length})</span>
              </h3>
              <div className="row hide">
                {firsFilter.map((works) => {
                  return (
                    <Link href={`/portfolio/${works.id}`} key={works.id}>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <Image
                          width={411}
                          height={320}
                          style={{ cursor: "pointer" }}
                          preload="true"
                          src={`https://redfox.frilansus.com/${works.logo}`}
                          alt="work."
                        />
                        <p>{works.title_uz}</p>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        })}
        {/* <div className="row">
          <h3>
            Sardor company <span>(129)</span>
          </h3>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <img src="/Rectangle 65portfolio.webp" alt="" />
            <p>Nurafshon smart city</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <img src="/Rectangle 65portfolio.webp" alt="" />
            <p>Nurafshon smart city</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <img src="/Rectangle 65portfolio.webp" alt="" />
            <p>Nurafshon smart city</p>
          </div>
          <h3>
            Toshkent Shahar Hokimligi <span>(129)</span>
          </h3>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <img src="/Rectangle 65portfolio.webp" alt="" />
            <p>Nurafshon smart city</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <img src="/Rectangle 65portfolio.webp" alt="" />
            <p>Nurafshon smart city</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <img src="/Rectangle 65portfolio.webp" alt="" />
            <p>Nurafshon smart city</p>
          </div>
          <h3>
            Toshkent Shahar Hokimligi <span>(52)</span>
          </h3>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <img src="/Rectangle 65portfolio.webp" alt="" />
            <p>Nurafshon smart city</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <img src="/Rectangle 65portfolio.webp" alt="" />
            <p>Nurafshon smart city</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <img src="/Rectangle 65portfolio.webp" alt="" />
            <p>Nurafshon smart city</p>
          </div>
          <h3>
            Sardor company <span>(63)</span>
          </h3>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <img src="/Rectangle 65portfolio.webp" alt="" />
            <p>Nurafshon smart city</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <img src="/Rectangle 65portfolio.webp" alt="" />
            <p>Nurafshon smart city</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <img src="/Rectangle 65portfolio.webp" alt="" />
            <p>Nurafshon smart city</p>
          </div>
        </div> */}
      </div>
      <button className="btn_portfolio">Shu yerga bosing</button>
    </Portfolio>

  );
}

export default Clients;
export async function getStaticProps() {
  const res = await fetch(`https://redfox.frilansus.com/api/portfolio/`);
  const data = await res.json();
  const cat = await fetch(`https://redfox.frilansus.com/api/mijozlar/`);
  const clients = await cat.json();
  return { props: { data, clients } };
}


