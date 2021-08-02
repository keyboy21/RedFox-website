import axios from "axios";
import { useState, useMemo } from "react";
import Blog from "./index.js"
import Image from "next/image";
import { Markup } from "interweave";

const News = ({ data }) => {

  const [local, setLocal] = useState(data);
  const [number, setNumber] = useState(44)

  const ThreeFilter = useMemo(() => {
    return local.filter((item, index) => {
      return index > 0 && index < 7
    });
  }, [local]);

  const TwoFilter = useMemo(() => {
    return local.filter((item, index) => {
      return index > 7 && index < 10
    });
  }, [local]);

  const ThreeFilter2 = useMemo(() => {
    return local.filter((item, index) => {
      return index > 10 && index < 17
    });
  }, [local]);

  const ThreeFilter3 = useMemo(() => {
    return local.filter((item, index) => {
      return index > 17 && index < 21
    });
  }, [local]);

  const ThreeFilter4 = useMemo(() => {
    return local.filter((item, index) => {
      return index > 21 && index < 28
    });
  }, [local]);

  const ThreeFilter5 = useMemo(() => {
    return local.filter((item, index) => {
      return index > 28 && index < 30
    });
  }, [local]);

  const ThreeFilter6 = useMemo(() => {
    return local.filter((item, index) => {
      return index > 30 && index < 37
    });
  }, [local]);

  const ThreeFilter7 = useMemo(() => {
    return local.filter((item, index) => {
      return index > 37 && index < 40
    });
  }, [local]);

  const More = useMemo(() => (
    local.filter((item, index) => {
      return index > 38 && index <= number
    })
  ))


  return (
    <Blog>
      <div className="blog">
        <div className="row">
          <div className="col-md-7 col-lg-8"><Image width={856} height={541} src={`https://redfox.frilansus.com/${local[0].img}`} alt="blog." /></div>
          <div className="col-md-5 col-lg-4">
            <div className="top_info d-flex">
              <Image width={74} height={74} src={`https://redfox.frilansus.com/${local[0].author.image}`} alt="experts." />
              <div>
                <h6>{local[0].author.name}</h6>
                <p>28 sentyabr 2020</p>
              </div>
            </div>
            <div className="bottom_info">
              <button>
                <span>#</span>Adobe Photoshop
              </button>
              <p>{local[0].title_uz}</p>
              <Markup content={local[0].text_uz.slice(0, 130) + "..."} />
            </div>
          </div>
        </div>

        <div className="blog_three">
          <div className="row">
            {ThreeFilter.map((item) => (
              <div className="col-md-6 col-lg-4" key={item.id}>
                <div className="col-6 col-sm-6 col-md-12 " ><Image width={416} height={236} src={`https://redfox.frilansus.com/${item.img}`} alt="blog." /></div>
                <div className="col-6 col-sm-6 col-md-12 " >
                  <div className="top_info d-flex">
                    <Image width={74} height={74} src={`https://redfox.frilansus.com/${item.author.image}`} alt="experts." />
                    <div>
                      <h6>{item.author.name}</h6>
                      <p>28 sentyabr 2020</p>
                    </div>
                  </div>
                  <div className="bottom_info">
                    <button>
                      <span>#</span>Adobe Photoshop
                    </button>
                    <p>{item.title_uz}</p>
                    <p><Markup content={item.text_uz.slice(0, 60) + "..."} /></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="blog_two">
          <div className="row">
            {TwoFilter.map((item) => (
              <div className="col-md-12 col-lg-6" key={item.id}>
                <div className="col-6 col-sm-6 col-md-12" >
                  <div>
                    <Image width={636} height={360} src={`https://redfox.frilansus.com/${item.img}`} alt="blog." />
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-12" >
                  <div className="top_info d-flex">
                    <Image width={74} height={74} src={`https://redfox.frilansus.com/${item.author.image}`} alt="experts." />
                    <div>
                      <h6>{item.author.name}</h6>
                      <p>28 sentyabr 2020</p>
                    </div>
                  </div>
                  <div className="bottom_info">
                    <button>
                      <span>#</span>Adobe Photoshop
                    </button>
                    <p>{item.title_uz}</p>
                    <p><Markup content={item.text_uz.slice(0, 60) + "..."} /></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="blog_three">
          <div className="row">
            {ThreeFilter2.map((item) => (
              <div className="col-md-6 col-lg-4" key={item.id}>
                <div className="col-6 col-sm-6 col-md-12" >
                  <div>
                    <Image width={416} height={236} src={`https://redfox.frilansus.com/${item.img}`} alt="blog." />
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-12" >
                  <div className="top_info d-flex">
                    <Image width={74} height={74} src={`https://redfox.frilansus.com/${item.author.image}`} alt="experts." />
                    <div>
                      <h6>{item.author.name}</h6>
                      <p>28 sentyabr 2020</p>
                    </div>
                  </div>
                  <div className="bottom_info">
                    <button>
                      <span>#</span>Adobe Photoshop
                    </button>
                    <p>{item.title_uz}</p>
                    <p><Markup content={item.text_uz.slice(0, 60) + "..."} /></p>
                  </div>
                </div>
              </div>

            ))}
          </div>
        </div>

        <div className="blog_two">
          {ThreeFilter3.map((item) => (
            <div className="gorizontal" key={item.id}>
              <div className="row">
                <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                  <div>
                    <Image width={636} height={360} src={`https://redfox.frilansus.com/${item.img}`} alt="blog." />
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                  <div className="top_info d-flex">
                    <Image width={74} height={74} src={`https://redfox.frilansus.com/${item.author.image}`} alt="experts." />
                    <div>
                      <h6>{item.author.name}</h6>
                      <p>28 sentyabr 2020</p>
                    </div>
                  </div>
                  <div className="bottom_info">
                    <button>
                      <span>#</span>Adobe Photoshop
                    </button>
                    <p>{item.title_uz}</p>
                    <p><Markup content={item.text_uz.slice(0, 60) + "..."} /></p>
                  </div>
                </div>
              </div>
            </div>

          ))}

        </div>

        <div className="blog_three">
          <div className="row">
            {ThreeFilter4.map((item) => (
              <div className="col-md-6 col-lg-4" key={item.id}>
                <div className="col-6 col-sm-6 col-md-12" >
                  <div>
                    <Image width={416} height={236} src={`https://redfox.frilansus.com/${item.img}`} alt="blog." />
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-12" >
                  <div className="top_info d-flex">
                    <Image width={74} height={74} src={`https://redfox.frilansus.com/${item.author.image}`} alt="experts." />
                    <div>
                      <h6>{item.author.name}</h6>
                      <p>28 sentyabr 2020</p>
                    </div>
                  </div>
                  <div className="bottom_info">
                    <button>
                      <span>#</span>Adobe Photoshop
                    </button>
                    <p>{item.title_uz}</p>
                    <p><Markup content={item.text_uz.slice(0, 60) + "..."} /></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="blog_three not_img">
          <div className="row">
            {ThreeFilter5.map((item) => (
              <div className="col-lg-12" key={item.id}>
                <div>
                  <div className="top_info d-flex">
                    <Image width={74} height={74} src={`https://redfox.frilansus.com/${item.author.image}`} alt="experts." />
                    <div>
                      <h6>{item.author.name}</h6>
                      <p>28 sentyabr 2020</p>
                    </div>
                  </div>
                  <div className="bottom_info">
                    <button>
                      <span>#</span>Adobe Photoshop
                    </button>
                    <p>{item.title_uz}</p>
                    <p><Markup content={item.text_uz.slice(0, 180) + "..."} /></p>
                  </div>
                </div>
              </div>

            ))}

          </div>
        </div>

        <div className="blog_three">
          <div className="row">
            {ThreeFilter6.map((item) => (
              <div className="col-md-6 col-lg-4" key={item.id}>
                <div className="col-6 col-sm-6 col-md-12" >
                  <div>
                    <Image width={416} height={236} src={`https://redfox.frilansus.com/${item.img}`} alt="blog." />
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-12" >
                  <div className="top_info d-flex">
                    <Image width={74} height={74} src={`https://redfox.frilansus.com/${item.author.image}`} alt="experts." />
                    <div>
                      <h6>{item.author.name}</h6>
                      <p>28 sentyabr 2020</p>
                    </div>
                  </div>
                  <div className="bottom_info">
                    <button>
                      <span>#</span>Adobe Photoshop
                    </button>
                    <p>{item.title_uz}</p>
                    <p><Markup content={item.text_uz.slice(0, 60) + "..."} /></p>
                  </div>
                </div>
              </div>

            ))}

          </div>
        </div>

        <div className="blog_two">
          <div className="row">
            {ThreeFilter7.map((item) => (
              <div className="col-md-12 col-lg-6" key={item.id}>
                <div className="col-6 col-sm-6 col-md-12" >
                  <div>
                    <Image width={636} height={360} src={`https://redfox.frilansus.com/${item.img}`} alt="blog." />
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-12" >
                  <div className="top_info d-flex">
                    <Image width={74} height={74} src={`https://redfox.frilansus.com/${item.author.image}`} alt="experts." />
                    <div>
                      <h6>{item.author.name}</h6>
                      <p>28 sentyabr 2020</p>
                    </div>
                  </div>
                  <div className="bottom_info">
                    <button>
                      <span>#</span>Adobe Photoshop
                    </button>
                    <p>{item.title_uz}</p>
                    <p><Markup content={item.text_uz.slice(0, 60) + "..."} /></p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

        <div className="blog_three more">
          <div className="row">
            {More.map((item) => (
              <div className="col-md-6 col-lg-4" key={item.id}>
                <div className="col-6 col-sm-6 col-md-12" >
                  <div>
                    <Image width={416} height={236} src={`https://redfox.frilansus.com/${item.img}`} alt="blog." />
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-12" >
                  <div className="top_info d-flex">
                    <Image width={74} height={74} src={`https://redfox.frilansus.com/${item.author.image}`} alt="experts." />
                    <div>
                      <h6>{item.author.name}</h6>
                      <p>28 sentyabr 2020</p>
                    </div>
                  </div>
                  <div className="bottom_info">
                    <button>
                      <span>#</span>Adobe Photoshop
                    </button>
                    <p>{item.title_uz}</p>
                    <p><Markup content={item.text_uz.slice(0, 60) + "..."} /></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className={local.length - 1 <= number ? "btn_portfolio d-none" : "btn_portfolio"} onClick={() => setNumber(number + 6)}>Yana bir dunyo post</button>
      </div>
    </Blog>
  )


}

export default News
export async function getStaticProps() {
  const res = await axios("https://redfox.frilansus.com/api/blog");
  const data = await res.data;
  return { props: { data } };
}

