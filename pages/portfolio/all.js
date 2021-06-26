import Index from "./index.js";
import { useEffect, useState } from "react";
import fetch from "node-fetch";

const All = ({ data }) => {
  // const [posts, setPosts] = useState(serverPost);

  // useEffect(() => {
  //   async function load() {
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  //     const data = await res.json();

  //     setPosts(data);
  //   }

  //   if (!serverPost) {
  //     load();
  //   }
  //   load();
  // }, []);

  return (
    <>
      <Index>
        <div className="all">
          <div className="row">
            {data.map((name) => (
              <div className="col-lg-4 col-md-4 col-sm-6" key={name.id}>
                <img src="/Rectangle 65portfolio.webp" alt="" />
                <p>{name.name}</p>
              </div>
            ))}
            {/* <div className="col-lg-4 col-md-4 col-sm-6">
              <img src="/Rectangle 65portfolio.jpg" alt="" />
              <p>Nurafshon smart city</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <img src="/Rectangle 65portfolio.jpg" alt="" />
              <p>Nurafshon smart city</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <img src="/Rectangle 65portfolio.jpg" alt="" />
              <p>Nurafshon smart city</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <img src="/Rectangle 65portfolio.jpg" alt="" />
              <p>Nurafshon smart city</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <img src="/Rectangle 65portfolio.jpg" alt="" />
              <p>Nurafshon smart city</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <img src="/Rectangle 65portfolio.jpg" alt="" />
              <p>Nurafshon smart city</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <img src="/Rectangle 65portfolio.jpg" alt="" />
              <p>Nurafshon smart city</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <img src="/Rectangle 65portfolio.jpg" alt="" />
              <p>Nurafshon smart city</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <img src="/Rectangle 65portfolio.jpg" alt="" />
              <p>Nurafshon smart city</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <img src="/Rectangle 65portfolio.jpg" alt="" />
              <p>Nurafshon smart city</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <img src="/Rectangle 65portfolio.jpg" alt="" />
              <p>Nurafshon smart city</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <img src="/Rectangle 65portfolio.jpg" alt="" />
              <p>Nurafshon smart city</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <img src="/Rectangle 65portfolio.jpg" alt="" />
              <p>Nurafshon smart city</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <img src="/Rectangle 65portfolio.jpg" alt="" />
              <p>Nurafshon smart city</p>
            </div> */}
          </div>
        </div>
        <button className="btn_portfolio">Shu yerga bosing</button>
      </Index>
    </>
  );
};

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default All;
