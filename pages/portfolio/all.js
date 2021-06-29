import Index from "./index.js";
import { useEffect, useState } from "react";
import fetch from "node-fetch";

const All = ({ data: serverPost }) => {
  const [posts, setPosts] = useState(serverPost);

  useEffect(() => {
    async function load() {
      const res = await fetch(`http://redfox.frilansus.com/api/apiportfolio`);
      const data = await res.json();
      setPosts(data);
    }

    if (!serverPost) {
      load();
    }
    load();
  }, []);

  if (!posts) {
    return (
      <Index>
        <p>Loading...</p>
      </Index>
    );
  }

  return (
    <>
      <Index>
        <div className="all">
          <div className="row">
            {posts.map((all) => {
              return (
                <div className="col-lg-4 col-md-4 col-sm-6" key={all.id}>
                  <img src={all.img} alt="" />
                  <p>{all.title_uz}</p>
                </div>
              );
            })}
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

// getServerSideProps
// getStaticProps
export async function getInitialProps() {
  // Fetch data from external API
  const res = await fetch(`http://redfox.frilansus.com/api/apiportfolio`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default All;
