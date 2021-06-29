import Index from "./index.js";
import { useEffect, useState } from "react";
import fetch from "node-fetch";

const All = ({ data }) => {

  console.log(data)
  return (
    <>
      <Index>
        <div className="all">
          <div className="row">
            {data.map((all) => {
              return (
                <div className="col-lg-4 col-md-4 col-sm-6" key={all.id}>
                  <img
                    src={`https://redfox.frilansus.com/frontend/images/${all.img.slice(7)}`}
                    alt=""
                  />
                  <p>{all.title_uz}</p>
                </div>
              );
            })}
          </div>
        </div>
        <button className="btn_portfolio">Shu yerga bosing</button>
      </Index>
    </>
  );
};

// getServerSideProps
// getStaticProps
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://redfox.frilansus.com/api/apiportfolio`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default All;
