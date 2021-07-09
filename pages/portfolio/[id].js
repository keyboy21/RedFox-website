import MainLayout from "../../components/MainLayout.js";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Id({ data }) {
  const router = useRouter();

  const viewFilter = data.filter((view) => view.id == router.query.id);

  const similarFilter = data.filter((sim) => {
    return sim.id >= 5 && sim.id <= 7;
  });

  return (
    <MainLayout>
      <div className="view">
        <div className="view_top">
          <div className="container">
            <div className="row">
              <h2>Love wear brand identity design</h2>
              <h3>{viewFilter[0].head1_uz}</h3>
              <h3>{viewFilter[0].head2_uz}</h3>
            </div>
          </div>
        </div>

        <div className="view_bottom">
          <div className="d-md-container container-fluid ">
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

        <div className="view_bottom two">
          <div className="container-fluid">
            <div className="row">
              <div className="view_text">
                <div className="col-lg-3">
                  <span>Final Holat</span>
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

        <div className="view_info d-none d-lg-block">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <h6>Dizaynerlar:</h6>
                <p>Xabibullox Maksudaliyev</p>
                <p>Rustam Jabborov</p>
              </div>
              <div className="col-lg-3">
                <h6>Art-director:</h6>
                <p>Rahimjon Gaziyev</p>
                <h6>Menejerlar:</h6>
                <p>Asliddin Bozorov</p>
                <p>Polatov Mavlonbek</p>
              </div>
              <div className="col-lg-3">
                <h6>Project members:</h6>
                <p>Xabibullox Maksudaliyev</p>
                <p>Polatov Mavlonbek</p>
                <p>Sarvarbek Abdupattoyev</p>
                <p>Xabibullox Maksudaliyev</p>
                <p>Rustam Jabborov</p>
                <p>Xabibullox Maksudaliyev</p>
                <p>Rustam Jabborov</p>
                <p>Polatov Mavlonbek</p>
                <p>Sarvarbek Abdupattoyev</p>
                <p>Xabibullox Maksudaliyev</p>
              </div>
              <div className="col-lg-3">
                <h6>Data:</h6>
                <p>{viewFilter[0].end_date}</p>
                <h6>Bitkazildi:</h6>
                <p>{viewFilter[0].end_project}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="view_accardion d-block d-lg-none">
          <div className="container">
            <div className="row">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      Art-director:
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>
                          <p>Rahimjon Gaziyev</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Menejerlar:
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>
                          <p>Asliddin Bozorov</p>
                        </li>
                        <li>
                          <p>Polatov Mavlonbek</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Dizaynerlar:
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul className="design">
                        <li>
                          <p>Azam Muhammadiyev</p>
                        </li>
                        <li>
                          <p>Xabibullox Maksudaliyev</p>
                        </li>
                        <li>
                          <p>Azam Muhammadiyev</p>
                        </li>
                        <li>
                          <p>Xabibullox Maksudaliyev</p>
                        </li>
                        <li>
                          <p>Azam Muhammadiyev</p>
                        </li>
                        <li>
                          <p>Xabibullox Maksudaliyev</p>
                        </li>
                        <li>
                          <p>Azam Muhammadiyev</p>
                        </li>
                        <li>
                          <p>Xabibullox Maksudaliyev</p>
                        </li>
                        <li>
                          <p>Azam Muhammadiyev</p>
                        </li>
                        <li>
                          <p>Xabibullox Maksudaliyev</p>
                        </li>
                        <li>
                          <p>Azam Muhammadiyev</p>
                        </li>
                        <li>
                          <p>Xabibullox Maksudaliyev</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Project members:
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>
                          <p>Utkir Tojiboyev</p>
                        </li>
                        <li>
                          <p>Xabibullox Maksudaliyev</p>
                        </li>
                        <li>
                          <p>Rustam Jabborov</p>
                        </li>
                        <li>
                          <p>Polatov Mavlonbek</p>
                        </li>
                        <li>
                          <p>Sarvarbek Abdupattoyev</p>
                        </li>
                        <li>
                          <p>Utkir Tojiboyev</p>
                        </li>
                      </ul>
                      <hr />
                      <div className="time">
                        <div>
                          <h6>Start</h6>
                          <p>{viewFilter[0].end_date}</p>
                        </div>
                        <div>
                          <h6>Bitkazildi:</h6>
                          <p>{viewFilter[0].end_project}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="similar">
          <div className="container">
            <h5>O‘xshash ishlar</h5>
            <div className="row">
              {similarFilter.map((similar) => (
                <Link href={`/portfolio/${similar.id}`} key={similar.id}>
                  <div className="col-sm-6 col-md-4 col-lg-4">
                    <img
                      rel="preload"
                      as="image"
                      src={`https://redfox.frilansus.com/frontend/images/${similar.img2.slice(
                        8
                      )}`}
                      alt="similar."
                      decoding="auto"
                    />
                    <p>{similar.title_uz}</p>
                  </div>
                </Link>
              ))}
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
