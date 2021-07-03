import MainLayout from "../../components/MainLayout.js";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Id({ data }) {
  const router = useRouter();
  const viewFilter = data.filter((view) => view.id == router.query.id);
  // console.log(`object`, viewFilter);

  return (
    <MainLayout>
      <div className="view">
        <div className="view_top">
          <div className="container">
            <div className="row">
              <h2>Love wear brand identity design</h2>
              <h3>Heading 2</h3>
              <h3>Heading 2</h3>
            </div>
          </div>
        </div>

        <div className="view_bottom">
          <div className="container-fluid">
            <div className="row">
              <div className="view_text">
                <div className="col-lg-3">
                  <span>Vazifa</span>
                </div>
                <div className="col-lg-7">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
              <div className="view_text">
                <div className="col-lg-3">
                  <span>Topshiriq</span>
                </div>
                <div className="col-lg-7">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat.
                  </p>
                </div>
              </div>
              <div className="view_text">
                <div className="col-lg-3">
                  <span>Mijoz istagi</span>
                </div>
                <div className="col-lg-7">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="view_img">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-lg-11">
                <img
                  rel="preload"
                  as="image"
                  src={`https://redfox.frilansus.com/frontend/images/${viewFilter[0].img1.slice(
                    8
                  )}`}
                  alt="work."
                  decoding="auto"
                />
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-11 flex-wrap d-flex justify-content-between">
                <div className="images">
                  <img
                    rel="preload"
                    as="image"
                    src={`https://redfox.frilansus.com/frontend/images/${viewFilter[0].img.slice(
                      8
                    )}`}
                    alt="work."
                    decoding="auto"
                  />
                </div>
                <div className="images">
                  <img
                    rel="preload"
                    as="image"
                    src={`https://redfox.frilansus.com/frontend/images/${viewFilter[0].img2.slice(
                      8
                    )}`}
                    alt="work."
                    decoding="auto"
                  />
                </div>
                <div className="images">
                  <img
                    rel="preload"
                    as="image"
                    src={`https://redfox.frilansus.com/frontend/images/${viewFilter[0].img3.slice(
                      8
                    )}`}
                    alt="work."
                    decoding="auto"
                  />
                </div>
                <div className="images">
                  <img
                    rel="preload"
                    as="image"
                    src={`https://redfox.frilansus.com/frontend/images/${viewFilter[0].img4.slice(
                      8
                    )}`}
                    alt="work."
                    decoding="auto"
                  />
                </div>
                <div className="images">
                  <img
                    rel="preload"
                    as="image"
                    src={`https://redfox.frilansus.com/frontend/images/${viewFilter[0].img5.slice(
                      8
                    )}`}
                    alt="work."
                    decoding="auto"
                  />
                </div>
                <div className="images">
                  <img
                    rel="preload"
                    as="image"
                    src={`https://redfox.frilansus.com/frontend/images/${viewFilter[0].img6.slice(
                      8
                    )}`}
                    alt="work."
                    decoding="auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://redfox.frilansus.com/api/apiportfolio/`);
  const data = await res.json();
  return { props: { data } };
}
