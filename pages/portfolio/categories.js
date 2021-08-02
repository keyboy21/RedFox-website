import axios from "axios";
import { useMemo, useState } from "react";
import Portfolio from "./index.js";
import Link from "next/link";
import Image from 'next/image'

const Categories = ({ data, category }) => {
  const [local, setLocal] = useState(data)

  return (
    <Portfolio>
      <div className="categories">
        {category.map((name) => {
          const firsFilter = useMemo(() => {
            return local.filter((item) => item.category_id == name.id);
          }, [local])
          return (
            <div className="prime" key={name.id}>
              <h3>
                {name.title_uz} <span>({firsFilter.length})</span>
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
      </div>
      {/* <button className="btn_portfolio">Shu yerga bosing</button> */}
    </Portfolio>
  );
}
export default Categories;

export async function getStaticProps() {
  const res = await axios(`https://redfox.frilansus.com/api/portfolio/`);
  const data = res.data;
  const cat = await axios(`https://redfox.frilansus.com/api/category/`);
  const category = cat.data;
  return { props: { data, category } };
}

