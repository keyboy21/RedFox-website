import { useState, useMemo } from "react";
import Blog from "./index.js"
import Image from "next/image";
import { Markup } from "interweave";

const News = ({ data }) => {

  const [local, setLocal] = useState(data)
  const [more, setMore] = useState(false)

  const OneFilter = useMemo(() => {
    return local[0]
  }, [local]);

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


  return (
    <Blog>
      <div className="blog">
        <div className="row">
          <div className="col-md-7 col-lg-8"><Image width={856} height={541} src={`https://redfox.frilansus.com/${OneFilter.img}`} alt="blog." /></div>
          <div className="col-md-5 col-lg-4">
            <div className="top_info d-flex">
              <Image width={74} height={74} src={`https://redfox.frilansus.com/${OneFilter.author.image}`} alt="experts." />
              <div>
                <h6>{OneFilter.author.name}</h6>
                <p>28 sentyabr 2020</p>
              </div>
            </div>
            <div className="bottom_info">
              <button>
                <span>#</span>Adobe Photoshop
              </button>
              <p>{OneFilter.title_uz}</p>
              <Markup content={OneFilter.text_uz.slice(0, 130) + "..."} />
            </div>
          </div>
        </div>

        <div className="blog_three">
          <div className="row">
            {ThreeFilter.map((item) => (
              <div className="col-md-6 col-lg-4" key={item.id}>
                <div className="col-6 col-sm-6 col-md-12 " ><Image width={416} height={236} src={`https://redfox.frilansus.com/${item.img}`} /></div>
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
            <div className="col-md-6 col-lg-4">
              <div className="col-6 col-sm-6 col-md-12" >
                <div>

                  <img src="/Rasm-1blog.png" alt="" />
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-12" >
                <div className="top_info d-flex">
                  <div><img src="/PicNurmatovO.png" alt="experts." /></div>
                  <div>
                    <h6>Odilbek Nurmatov</h6>
                    <p>28 sentyabr 2020</p>
                  </div>
                </div>
                <div className="bottom_info">
                  <button>
                    <span>#</span>Adobe Photoshop
                  </button>
                  <p>Brend strategiyasini ishlab chiqish: nima uchun Apple raqobatchilari orasida.</p>
                  <p>Lorem ipsum dolor sit amet, eu mei tractatos temporibus, paulo iudico placerat te nec. Ex vero erat...</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="col-6 col-sm-6 col-md-12" >
                <div>
                  <img src="/Rasm-1blog.png" alt="" />
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-12" >
                <div className="top_info d-flex">
                  <div><img src="/PicNurmatovO.png" alt="experts." /></div>
                  <div>
                    <h6>Odilbek Nurmatov</h6>
                    <p>28 sentyabr 2020</p>
                  </div>
                </div>
                <div className="bottom_info">
                  <button>
                    <span>#</span>Adobe Photoshop
                  </button>
                  <p>Brend strategiyasini ishlab chiqish: nima uchun Apple raqobatchilari orasida.</p>
                  <p>Lorem ipsum dolor sit amet, eu mei tractatos temporibus, paulo iudico placerat te nec. Ex vero erat...</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              <div><img src="/Rasm-1blog.png" alt="" /></div>
              <div>
                <div className="top_info d-flex">
                  <div><img src="/PicNurmatovO.png" alt="experts." /></div>
                  <div>
                    <h6>Odilbek Nurmatov</h6>
                    <p>28 sentyabr 2020</p>
                  </div>
                </div>
                <div className="bottom_info">
                  <button>
                    <span>#</span>Adobe Photoshop
                  </button>
                  <p>Brend strategiyasini ishlab chiqish: nima uchun Apple raqobatchilari orasida.</p>
                  <p>Lorem ipsum dolor sit amet, eu mei tractatos temporibus, paulo iudico placerat te nec. Ex vero erat...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blog_two">
          <div className="gorizontal">
            <div className="row">
              <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                <div>
                  <img src="/Rasm-1blog.png" alt="" />
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                <div className="top_info d-flex">
                  <div>
                    <img src="/PicNurmatovO.png" alt="experts." />
                  </div>

                  <div>
                    <h6>Odilbek Nurmatov</h6>
                    <p>28 sentyabr 2020</p>
                  </div>
                </div>
                <div className="bottom_info">
                  <button>
                    <span>#</span>Adobe Photoshop
                  </button>
                  <p>Brend strategiyasini ishlab chiqish</p>
                  <p>Lorem ipsum dolor sit amet, eu mei tractatos temporibus, paulo iudico placerat te nec. Ex vero erat...</p>
                </div>
              </div>
            </div>
          </div>
          <div className="gorizontal">
            <div className="row">
              <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                <div>
                  <img src="/Rasm-1blog.png" alt="" />
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                <div className="top_info d-flex">
                  <div><img src="/PicNurmatovO.png" alt="experts." /></div>
                  <div>
                    <h6>Odilbek Nurmatov</h6>
                    <p>28 sentyabr 2020</p>
                  </div>
                </div>
                <div className="bottom_info">
                  <button>
                    <span>#</span>Adobe Photoshop
                  </button>
                  <p>Brend strategiyasini ishlab chiqish</p>
                  <p>Lorem ipsum dolor sit amet, eu mei tractatos temporibus, paulo iudico placerat te nec. Ex vero erat...</p>
                </div>
              </div>
            </div>
          </div>
          <div className="gorizontal">
            <div className="row">
              <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                <div>
                  <img src="/Rasm-1blog.png" alt="" />
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                <div className="top_info d-flex">
                  <div><img src="/PicNurmatovO.png" alt="experts." /></div>
                  <div>
                    <h6>Odilbek Nurmatov</h6>
                    <p>28 sentyabr 2020</p>
                  </div>
                </div>
                <div className="bottom_info">
                  <button>
                    <span>#</span>Adobe Photoshop
                  </button>
                  <p>Brend strategiyasini ishlab chiqish</p>
                  <p>Lorem ipsum dolor sit amet, eu mei tractatos temporibus, paulo iudico placerat te nec. Ex vero erat...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blog_three">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="col-6 col-sm-6 col-md-12" >
                <div>
                  <img src="/Rasm-1blog.png" alt="" />
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-12" >
                <div className="top_info d-flex">
                  <div><img src="/PicNurmatovO.png" alt="experts." /></div>
                  <div>
                    <h6>Odilbek Nurmatov</h6>
                    <p>28 sentyabr 2020</p>
                  </div>
                </div>
                <div className="bottom_info">
                  <button>
                    <span>#</span>Adobe Photoshop
                  </button>
                  <p>Brend strategiyasini ishlab chiqish: nima uchun Apple raqobatchilari orasida...</p>
                  <p>Lorem ipsum dolor sit amet, eu mei tractatos temporibus, paulo iudico placerat te nec. Ex vero erat...</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="col-6 col-sm-6 col-md-12" >
                <div>
                  <img src="/Rasm-1blog.png" alt="" />
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-12" >
                <div className="top_info d-flex">
                  <div><img src="/PicNurmatovO.png" alt="experts." /></div>
                  <div>
                    <h6>Odilbek Nurmatov</h6>
                    <p>28 sentyabr 2020</p>
                  </div>
                </div>
                <div className="bottom_info">
                  <button>
                    <span>#</span>Adobe Photoshop
                  </button>
                  <p>Brend strategiyasini ishlab chiqish: nima uchun Apple raqobatchilari orasida...</p>
                  <p>Lorem ipsum dolor sit amet, eu mei tractatos temporibus, paulo iudico placerat te nec. Ex vero erat...</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="col-6 col-sm-6 col-md-12">
                <div>
                  <img src="/Rasm-1blog.png" alt="" />
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-12">
                <div className="top_info d-flex">
                  <div><img src="/PicNurmatovO.png" alt="experts." /></div>
                  <div>
                    <h6>Odilbek Nurmatov</h6>
                    <p>28 sentyabr 2020</p>
                  </div>
                </div>
                <div className="bottom_info">
                  <button>
                    <span>#</span>Adobe Photoshop
                  </button>
                  <p>Brend strategiyasini ishlab chiqish: nima uchun Apple raqobatchilari orasida...</p>
                  <p>Lorem ipsum dolor sit amet, eu mei tractatos temporibus, paulo iudico placerat te nec. Ex vero erat...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blog_three not_img">
          <div className="row">
            <div className="col-lg-12">
              <div>
                <div className="top_info d-flex">
                  <div><img src="/PicNurmatovO.png" alt="experts." /></div>
                  <div>
                    <h6>Odilbek Nurmatov</h6>
                    <p>28 sentyabr 2020</p>
                  </div>
                </div>
                <div className="bottom_info">
                  <button>
                    <span>#</span>Adobe Photoshop
                  </button>
                  <p>Brend strategiyasini ishlab chiqish: nima uchun Apple raqobatchilari orasida...</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blog_three">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="col-6 col-sm-6 col-md-12" ><img src="/Rasm-1blog.png" alt="" /></div>
              <div className="col-6 col-sm-6 col-md-12" >
                <div className="top_info d-flex">
                  <div><img src="/PicNurmatovO.png" alt="experts." /></div>
                  <div>
                    <h6>Odilbek Nurmatov</h6>
                    <p>28 sentyabr 2020</p>
                  </div>
                </div>
                <div className="bottom_info">
                  <button>
                    <span>#</span>Adobe Photoshop
                  </button>
                  <p>Brend strategiyasini ishlab chiqish: nima uchun Apple raqobatchilari orasida...</p>
                  <p>Lorem ipsum dolor sit amet, eu mei tractatos temporibus, paulo iudico placerat te nec. Ex vero erat...</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="col-6 col-sm-6 col-md-12" ><img src="/Rasm-1blog.png" alt="" /></div>
              <div className="col-6 col-sm-6 col-md-12" >
                <div className="top_info d-flex">
                  <div><img src="/PicNurmatovO.png" alt="experts." /></div>
                  <div>
                    <h6>Odilbek Nurmatov</h6>
                    <p>28 sentyabr 2020</p>
                  </div>
                </div>
                <div className="bottom_info">
                  <button>
                    <span>#</span>Adobe Photoshop
                  </button>
                  <p>Brend strategiyasini ishlab chiqish: nima uchun Apple raqobatchilari orasida...</p>
                  <p>Lorem ipsum dolor sit amet, eu mei tractatos temporibus, paulo iudico placerat te nec. Ex vero erat...</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="col-6 col-sm-6 col-md-12" ><img src="/Rasm-1blog.png" alt="" /></div>
              <div className="col-6 col-sm-6 col-md-12" >
                <div className="top_info d-flex">
                  <div><img src="/PicNurmatovO.png" alt="experts." /></div>
                  <div>
                    <h6>Odilbek Nurmatov</h6>
                    <p>28 sentyabr 2020</p>
                  </div>
                </div>
                <div className="bottom_info">
                  <button>
                    <span>#</span>Adobe Photoshop
                  </button>
                  <p>Brend strategiyasini ishlab chiqish: nima uchun Apple raqobatchilari orasida...</p>
                  <p>Lorem ipsum dolor sit amet, eu mei tractatos temporibus, paulo iudico placerat te nec. Ex vero erat...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blog_two">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="col-6 col-sm-6 col-md-12" >
                <div>
                  <img src="/Rasm-1blog.png" alt="" />
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-12" >
                <div className="top_info d-flex">
                  <div><img src="/PicNurmatovO.png" alt="experts." /></div>
                  <div>
                    <h6>Odilbek Nurmatov</h6>
                    <p>28 sentyabr 2020</p>
                  </div>
                </div>
                <div className="bottom_info">
                  <button>
                    <span>#</span>Adobe Photoshop
                  </button>
                  <p>Brend strategiyasini ishlab chiqish</p>
                  <p>Lorem ipsum dolor sit amet, eu mei tractatos temporibus, paulo iudico placerat te nec. Ex vero erat...</p>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="col-6 col-sm-6 col-md-12" >
                <div>
                  <img src="/Rasm-1blog.png" alt="" />
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-12" >
                <div className="top_info d-flex">
                  <div><img src="/PicNurmatovO.png" alt="experts." /></div>
                  <div>
                    <h6>Odilbek Nurmatov</h6>
                    <p>28 sentyabr 2020</p>
                  </div>
                </div>
                <div className="bottom_info">
                  <button>
                    <span>#</span>Adobe Photoshop
                  </button>
                  <p>Brend strategiyasini ishlab chiqish: nima uchun Apple raqobatchilari orasida...</p>
                  <p>Lorem ipsum dolor sit amet, eu mei tractatos temporibus, paulo iudico placerat te nec. Ex vero erat...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className={more ? "btn_portfolio d-none" : "btn_portfolio"} onClick={() => setMore(true)}>Yana bir dunyo post</button>

        <div className={more ? "blog_three more" : "blog_three more d-none"}>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="col-5 col-sm-5 col-md-12" ><img src="/Rasm-1blog.png" alt="" /></div>
              <div className="col-6 col-sm-6 col-md-12" >
                <div className="top_info d-flex">
                  <div><img src="/PicNurmatovO.png" alt="experts." /></div>
                  <div>
                    <h6>Odilbek Nurmatov</h6>
                    <p>28 sentyabr 2020</p>
                  </div>
                </div>
                <div className="bottom_info">
                  <button>
                    <span>#</span>Adobe Photoshop
                  </button>
                  <p>Brend strategiyasini ishlab chiqish: nima uchun Apple raqobatchilari orasida...</p>
                  <p>Lorem ipsum dolor sit amet, eu mei tractatos temporibus, paulo iudico placerat te nec. Ex vero erat...</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="col-5 col-sm-5 col-md-12" ><img src="/Rasm-1blog.png" alt="" /></div>
              <div className="col-6 col-sm-6 col-md-12" >
                <div className="top_info d-flex">
                  <div><img src="/PicNurmatovO.png" alt="experts." /></div>
                  <div>
                    <h6>Odilbek Nurmatov</h6>
                    <p>28 sentyabr 2020</p>
                  </div>
                </div>
                <div className="bottom_info">
                  <button>
                    <span>#</span>Adobe Photoshop
                  </button>
                  <p>Brend strategiyasini ishlab chiqish: nima uchun Apple raqobatchilari orasida...</p>
                  <p>Lorem ipsum dolor sit amet, eu mei tractatos temporibus, paulo iudico placerat te nec. Ex vero erat...</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="col-5 col-sm-5 col-md-12" ><img src="/Rasm-1blog.png" alt="" /></div>
              <div className="col-6 col-sm-6 col-md-12" >
                <div className="top_info d-flex">
                  <div><img src="/PicNurmatovO.png" alt="experts." /></div>
                  <div>
                    <h6>Odilbek Nurmatov</h6>
                    <p>28 sentyabr 2020</p>
                  </div>
                </div>
                <div className="bottom_info">
                  <button>
                    <span>#</span>Adobe Photoshop
                  </button>
                  <p>Brend strategiyasini ishlab chiqish: nima uchun Apple raqobatchilari orasida...</p>
                  <p>Lorem ipsum dolor sit amet, eu mei tractatos temporibus, paulo iudico placerat te nec. Ex vero erat...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Blog>
  )
}

export default News
export async function getStaticProps() {
  const res = await fetch("https://redfox.frilansus.com/api/blog/");
  const data = await res.json();
  return { props: { data } };
}

