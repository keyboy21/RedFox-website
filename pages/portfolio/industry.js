import axios from "axios";
import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Portfolio from "./index.js";

const Industry = ({ data, industry }) => {
  return (

    <Portfolio>
      <div className="categories">
        {industry.map((name) => {
          const firsFilter = useMemo(() => {
            return data.filter((item) => item.industriya_id == name.id);
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
                          src={`https://redfox.frilansus.com/${works.logo}`}
                          width={411}
                          height={320}
                          quality='100'
                          placeholder="blur"
                          blurDataURL={`https://redfox.frilansus.com/${works.logo}`}
                          style={{ cursor: "pointer" }}
                          preload="true"
                          alt="work."
                        />
                        <p className="portfoliop">{works.title_uz}</p>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        })}

      </div>

      {/* <button className="btn_portfolio">Shu yerga bosing</button> */}
    </Portfolio>

  );
}

export default Industry

export async function getStaticProps() {
  const res = await axios(`https://redfox.frilansus.com/api/portfolio/`);
  const data = res.data;
  const cat = await axios(`https://redfox.frilansus.com/api/industriya/`);
  const industry = cat.data;
  return { props: { data, industry } };
}
