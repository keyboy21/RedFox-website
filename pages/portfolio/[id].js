import MainLayout from "../../components/MainLayout.js";
import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from 'next/image';

const ID = ({ data }) => {

  const router = useRouter();
  const [local, setLocal] = useState(data)

  const viewFilter = data.filter((view) => view.id == router.query.id)

  const design = viewFilter[0].designers;
  const manag = viewFilter[0].managers;
  const prMembers = viewFilter[0].project_members;
  const designers = JSON.parse(design);
  const managers = JSON.parse(manag)
  const members = JSON.parse(prMembers)

  const similarFilter = useMemo(() => {
    return data.filter((sim, index) => {
      return index >= 5 && index <= 7;
    });
  }, [local])

  return (
    <MainLayout>
      <div className="view">
        <div className="view_top">
          <div className="container">
            <div className="row">
              <h2>{viewFilter[0].title_uz}</h2>
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
                    {viewFilter[0].text_uz}
                  </p>
                  <p>
                    {viewFilter[0].text_uz}
                  </p>
                </div>
              </div>
              {/* <div className="view_text">
                <div className="col-lg-3">
                  <span>Topshiriq</span>
                </div>
                <div className="col-lg-7">
                  <p>
                    {viewFilter[0].text_uz}
                  </p>
                  <p>
                    {viewFilter[0].text_uz}
                  </p>
                </div>
              </div>
              <div className="view_text">
                <div className="col-lg-3">
                  <span>Mijoz istagi</span>
                </div>
                <div className="col-lg-7">
                  <p>
                    {viewFilter[0].text_uz}
                  </p>
                  <p>
                    {viewFilter[0].text_uz}
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="view_img">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-lg-11">
                <Image
                  src={`https://redfox.frilansus.com/${viewFilter[0].logo}`}
                  width={1400}
                  height={752}
                  quality='100'
                  placeholder="blur"
                  blurDataURL={`https://redfox.frilansus.com/${viewFilter[0].logo}`}
                  layout="responsive"
                  objectFit="cover"
                  preload="true"
                  alt="work."
                />
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-11 flex-wrap d-flex justify-content-between">
                <div className="images">
                  <Image
                    src={`https://redfox.frilansus.com/${viewFilter[0].img1}`}
                    width={453}
                    height={256}
                    quality='100'
                    placeholder="blur"
                    blurDataURL={`https://redfox.frilansus.com/${viewFilter[0].logo}`}
                    layout="responsive"
                    objectFit="cover"
                    preload="true"
                    alt="work."
                  />
                </div>
                <div className="images">
                  <Image
                    src={`https://redfox.frilansus.com/${viewFilter[0].img2}`}
                    width={453}
                    height={256}
                    quality='100'
                    placeholder="blur"
                    blurDataURL={`https://redfox.frilansus.com/${viewFilter[0].logo}`}
                    layout="responsive"
                    objectFit="cover"
                    preload="true"
                    alt="work."
                    decoding="auto"
                  />
                </div>
                <div className="images">
                  <Image
                    src={`https://redfox.frilansus.com/${viewFilter[0].img3}`}
                    width={453}
                    height={256}
                    quality='100'
                    placeholder="blur"
                    blurDataURL={`https://redfox.frilansus.com/${viewFilter[0].logo}`}
                    layout="responsive"
                    objectFit="cover"
                    preload="true"
                    alt="work."
                    decoding="auto"
                  />
                </div>
                <div className="images">
                  <Image
                    src={`https://redfox.frilansus.com/${viewFilter[0].img4}`}
                    width={453}
                    height={256}
                    quality='100'
                    placeholder="blur"
                    blurDataURL={`https://redfox.frilansus.com/${viewFilter[0].logo}`}
                    layout="responsive"
                    objectFit="cover"
                    preload="true"
                    alt="work."
                    decoding="auto"
                  />
                </div>
                <div className="images">
                  <Image
                    src={`https://redfox.frilansus.com/${viewFilter[0].img5}`}
                    width={453}
                    height={256}
                    quality='100'
                    placeholder="blur"
                    blurDataURL={`https://redfox.frilansus.com/${viewFilter[0].logo}`}
                    layout="responsive"
                    objectFit="cover"
                    preload="true"
                    alt="work."
                    decoding="auto"
                  />
                </div>
                <div className="images">
                  <Image
                    src={`https://redfox.frilansus.com/${viewFilter[0].img6}`}
                    width={453}
                    height={256}
                    quality='100'
                    placeholder="blur"
                    blurDataURL={`https://redfox.frilansus.com/${viewFilter[0].logo}`}
                    layout="responsive"
                    objectFit="cover"
                    preload="true"
                    alt="work."
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
                    {viewFilter[0].text_final_uz}
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
                <div>
                  <h6>Dizaynerlar:</h6>
                  {designers.map(name => <p key={name}> {name} </p>)}
                </div>
              </div>
              <div className="col-lg-3">
                <div>
                  <h6>Art-director:</h6>
                  {viewFilter[0].art_director}
                  <h6>Menejerlar:</h6>
                  {managers.map(name => <p key={name}> {name} </p>)}
                </div>
              </div>
              <div className="col-lg-3">
                <div>
                  <h6>Project members:</h6>
                  {members.map(name => <p key={name}> {name} </p>)}
                </div>
              </div>
              <div className="col-lg-3">
                <div>
                  <h6>Data:</h6>
                  <p>{viewFilter[0].end_date}</p>
                  <h6>Bitkazildi:</h6>
                  <p>{viewFilter[0].end_project} kun</p>
                </div>
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
                          <p> {viewFilter[0].art_director}</p>
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
                        {managers.map(name => <li key={name}> <p>{name}</p>  </li>)}
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
                        {designers.map(name => <li key={name}> <p>{name} </p></li>)}
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
                        {members.map(name => <li key={name}> <p>{name} </p></li>)}
                      </ul>

                      <div className="time">
                        <div>
                          <h6>Start</h6>
                          <p>{viewFilter[0].end_date}</p>
                        </div>
                        <div>
                          <h6>Bitkazildi:</h6>
                          <p>{viewFilter[0].end_project} kun</p>
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
                    <Image
                      src={`https://redfox.frilansus.com/${similar.img2}`}
                      width={358}
                      height={277}
                      quality='100'
                      placeholder="blur"
                      blurDataURL={`https://redfox.frilansus.com/${similar.img2}`}
                      layout="responsive"
                      objectFit="cover"
                      preload="true"
                      alt="similar."
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

export default ID;

export async function getServerSideProps() {
  const res = await fetch("https://redfox.frilansus.com/api/portfolio/");
  const data = await res.json();
  return { props: { data } };
}
