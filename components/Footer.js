import { useState } from "react";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  const [active, setActive] = useState(true);
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(true);
  const [active3, setActive3] = useState(true);
  const [active4, setActive4] = useState(true);

  return (
    <>
      <footer className="d-none  d-sm-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="right-footer">
                <img src="/Group 32193footer_logo.svg" alt="logoFoot" />
                <a href="tel:+99871-200-50-08">
                  <h1>+998 71 200 5008</h1>
                </a>
                {router.locale == "uz" ? (<h2>
                  Toshkent shahri, Shayxontohur tum.,
                  <br />
                  Arxitektorlar ko’chasi, 11 uy.
                </h2>) : (<h2>
                  Город Ташкент, Шайхантахурский район,
                  <br />
                  проезд Архитекторов, 11 дом.
                </h2>)}

              </div>
            </div>
            <div className="col-lg-6">
              <div className="left-footer">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-3">
                    {router.locale == "uz" ? (<h1>Kompaniya</h1>) : (<h1>Компания </h1>)}
                    {router.locale == 'uz' ? (<h2><a href="#">Biz haqimizda</a></h2>) : (<h2><a href="#">О нас</a> </h2>)}
                    <h2>
                      <a
                        href="https://www.behance.net/redfoxuz"
                        target="_blank" rel="noreferrer"
                      >
                        Portfolio
                      </a>
                    </h2>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3">
                    {router.locale == "uz" ? (<h1>Xizmatlar</h1>) : (<h1>Услуги</h1>)}
                    <h2>
                      {router.locale == 'uz' ? (<a href="#">Grafik dizayn</a>) : (<a href="#">Графический дизайн</a>)}
                    </h2>
                    <h2>
                      {router.locale == 'uz' ? (<a href="#">Motion dizayn</a>) : (<a href="#">Моушен дизайн</a>)}
                    </h2>
                    <h2>
                      {router.locale == 'uz' ? (<a href="#">Branding</a>) : (<a href="#">Брендинг</a>)}
                    </h2>
                    <h2>
                      {router.locale == 'uz' ? (<a href="#">IT dasturlash </a>) : (<a href="#">IT программирование</a>)}
                    </h2>
                    <h2>
                      {router.locale == 'uz' ? (<a href="#">Web sayt</a>) : (<a href="#">Веб сайт</a>)}
                    </h2>
                    <h2>
                      {router.locale == 'uz' ? (<a href="#">Bot yasash</a>) : (<a href="#">Разработка ботов</a>)}
                    </h2>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3">
                    {router.locale == 'uz' ? (<h1>Loyihalarimiz</h1>) : (<h1>Проекты</h1>)}
                    <h2>
                      <a href="https://frilansus.com/" target="_blank" rel="noreferrer">
                        Frilansus.com
                      </a>
                    </h2>
                    <h2>
                      {router.locale == 'uz' ? (<a href="http://t.me/redfoxacademy" target="_blank" rel="noreferrer"> Dizayn akademiya</a>) :
                        (<a href="http://t.me/redfoxacademy" target="_blank" rel="noreferrer">Дизайн Академия </a>)}
                    </h2>
                    <h2>
                      {router.locale == 'uz' ? (<a href="#">IT akademiya</a>) :
                        (<a href="#">IT академия</a>)}
                    </h2>
                    <h2>
                      <a href="http://t.me/portfolius" target="_blank" rel="noreferrer">
                        Realtime Portfolio
                      </a>
                    </h2>
                    <h2>
                      <a href="https://t.me/fontus" target="_blank" rel="noreferrer">
                        Fontus
                      </a>
                    </h2>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3">
                    <h1>Support</h1>
                    <a href="tel:+99897-778-50-08">
                      <h2>97 778-5008</h2>
                    </a>

                    <a href="tel:+99897-335-59-00">
                      <h2>97 335-5900</h2>
                    </a>

                    <a href="tel:+99894-919-15-16">
                      <h2>94 919-1516</h2>
                    </a>
                    <h2>
                      {router.locale == 'uz' ? (<a href="https://t.me/RedFoxManager" target="_blank" rel="noreferrer"> Online yozing </a>)
                        : (<a href="https://t.me/RedFoxManager" target="_blank" rel="noreferrer">
                          Напишите онлайн
                        </a>)}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="collapse d-block d-sm-none last_collapse">
        <div className="container">
          <div
            id="showCol1"
            onClick={() => setActive(!active)}
            className={active ? "coll activeShow" : "coll Hideshow1"}
          >
            <button className="onShow1 onShow">
              {router.locale == "uz" ? (<h1>Xizmatlar</h1>) : (<h1>Услуги</h1>)}
              <img
                id="vektor1"
                className={active ? "sircleImg" : "sircleImg1"}
                src="/Vector (Stroke)accc.svg"
                alt="vektor."
              />
            </button>
            <h2>
              {router.locale == 'uz' ? (<a href="#">Grafik dizayn</a>) : (<a href="#">Графический дизайн</a>)}
            </h2>
            <h2>
              {router.locale == 'uz' ? (<a href="#">Motion dizayn</a>) : (<a href="#">Моушен дизайн</a>)}
            </h2>
            <h2>
              {router.locale == 'uz' ? (<a href="#">Branding</a>) : (<a href="#">Брендинг</a>)}
            </h2>
            <h2>
              {router.locale == 'uz' ? (<a href="#">IT dasturlash </a>) : (<a href="#">IT программирование</a>)}
            </h2>
            <h2>
              {router.locale == 'uz' ? (<a href="#">Web sayt</a>) : (<a href="#">Веб сайт</a>)}
            </h2>
            <h2>
              {router.locale == 'uz' ? (<a href="#">Bot yasash</a>) : (<a href="#">Разработка ботов</a>)}
            </h2>
          </div>
          <hr />
          <div
            id="showCol2"
            className="coll activeShow"
            onClick={() => setActive1(!active1)}
            className={active1 ? "coll activeShow" : "coll Hideshow2"}
          >
            <button className="onShow2 onShow">
              {router.locale == "uz" ? (<h1>Kompaniya</h1>) : (<h1>Компания </h1>)}
              <img
                id="vektor2"
                className={active1 ? "sircleImg" : "sircleImg1"}
                src="/Vector (Stroke)accc.svg"
                alt="vektor."
              />
            </button>
            {router.locale == 'uz' ? (<h2><a href="#">Biz haqimizda</a></h2>) : (<h2><a href="#">О нас</a> </h2>)}
            <h2>
              <a href="https://www.behance.net/redfoxuz" target="_blank" rel="noreferrer">
                Portfolio
              </a>
            </h2>
          </div>
          <hr />
          <div
            id="showCol3"
            onClick={() => setActive2(!active2)}
            className={active2 ? "coll activeShow" : "coll Hideshow3"}
          >
            <button className="onShow3 onShow">
              {router.locale == 'uz' ? (<h1>Loyihalarimiz</h1>) : (<h1>Проекты</h1>)}
              <img
                id="vektor3"
                className={active2 ? "sircleImg" : "sircleImg1"}
                src="/Vector (Stroke)accc.svg" alt="vektor."
              />
            </button>
            <h2>
              <a href="https://frilansus.com/" target="_blank" rel="noreferrer">
                Frilansus.com
              </a>
            </h2>
            <h2>
              {router.locale == 'uz' ? (<a href="http://t.me/redfoxacademy" target="_blank" rel="noreferrer"> Dizayn akademiya</a>) :
                (<a href="http://t.me/redfoxacademy" target="_blank" rel="noreferrer">Дизайн Академия </a>)}
            </h2>
            <h2>
              <a href="#">IT akademiya</a>
            </h2>
            <h2>
              <a href="http://t.me/portfolius" target="_blank" rel="noreferrer">
                Realtime Portfolio
              </a>
            </h2>
            <h2>
              <a href="https://t.me/fontus" target="_blank" rel="noreferrer">
                Fontus
              </a>
            </h2>
          </div>
          <hr />
          <div
            id="showCol4"
            onClick={() => setActive3(!active3)}
            className={active3 ? "coll activeShow" : "coll Hideshow3"}
          >
            <button className="onShow4 onShow">
              <h1>Support</h1>
              <img
                id="vektor4"
                className={active3 ? "sircleImg" : "sircleImg1"}
                src="/Vector (Stroke)accc.svg" alt="vektor."
              />
            </button>
            <a href="tel:+99897-778-50-08">
              <h2>97 778-5008</h2>
            </a>

            <a href="tel:+99897-335-59-00">
              <h2>97 335-5900</h2>
            </a>

            <a href="tel:+99894-919-15-16">
              <h2>94 919-1516</h2>
            </a>
          </div>
          <hr />
          <div
            id="showCol5"
            onClick={() => setActive4(!active4)}
            className={active4 ? "coll activeShow" : "coll Hideshow4"}
          >
            <button className="onShow5 onShow">
              {router.locale == 'uz' ? (<h1>Ijtmoiy tarmoqlar</h1>) : (<h1>Социальные сети</h1>)}
              <img
                id="vektor5"
                className={active4 ? "sircleImg" : "sircleImg1"}
                src="/Vector (Stroke)accc.svg" alt="vektor."
              />
            </button>
            <h2>
              <a href="https://t.me/RedFoxUz" target="_blank" rel="noreferrer">
                Telegram
              </a>
            </h2>
            <h2>
              <a href="https://www.instagram.com/redfoxuz/" target="_blank" rel="noreferrer" >
                Instagram
              </a>
            </h2>
            <h2>
              <a href="https://dribbble.com/redfoxuz" target="_blank" rel="noreferrer">
                Dribbble
              </a>
            </h2>
            <h2>
              <a href="https://www.behance.net/redfoxuz" target="_blank" rel="noreferrer">
                Behance
              </a>
            </h2>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 mw-100vh">
              <div className="right-footer">
                <h2>© 2016 — 2021 RedFox agency | All right reserved.</h2>
              </div>
            </div>
            <div className="d-none d-sm-block col-lg-6 col-md-6 col-sm-6 col-6 ">
              <div className=" left-footer">
                <h2>
                  <a href="https://t.me/RedFoxUz" target="_blank" rel="noreferrer">
                    Telegram
                  </a>
                </h2>
                <h2>
                  <a href="https://www.instagram.com/redfoxuz/" target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                </h2>
                <h2>
                  <a href="https://dribbble.com/redfoxuz" target="_blank" rel="noreferrer">
                    Dribbble
                  </a>
                </h2>
                <h2>
                  <a href="https://www.behance.net/redfoxuz" target="_blank" rel="noreferrer">
                    Behance
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
