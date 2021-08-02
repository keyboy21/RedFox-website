import axios from "axios";
import { useMemo,useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Portfolio from "./index.js";

const Clients = ({ data, clients }) => {

  const [local, setLocal] = useState(data);

  return (
    <Portfolio>
      <div className="categories">
        {clients.map((name) => {
          const firsFilter = useMemo(() => {
            return local.filter((item) => item.mijoz_id == name.id);
          }, [local])

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

      </div>
      <button className="btn_portfolio">Shu yerga bosing</button>
    </Portfolio>

  );
}

export default Clients;
export async function getStaticProps() {
  const res = await axios(`https://redfox.frilansus.com/api/portfolio/`);
  const data = res.data;
  const cat = await axios(`https://redfox.frilansus.com/api/mijozlar/`);
  const clients = cat.data;
  return { props: { data, clients } };
}


