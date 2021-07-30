import { useMemo, useState } from "react";
import axios from "axios";
import MainLayout from "../components/MainLayout";
import ScrollAnimation from "react-animate-on-scroll";
import Image from 'next/image'
import { useRouter } from "next/router";

const Home = ({ data, img }) => {

  const [local, Setlocal] = useState(data);
  const [imglocal, Setimglocal] = useState(img)
  const router = useRouter();


  const SliderFirsFilter = useMemo(() => {
    return data.filter((slide) => {
      return slide.id <= 14;
    });
  }, [local])

  const SliderSecondFilter = useMemo(() => {
    return data.filter((slider) => {
      return slider.id >= 15 && slider.id <= 28;
    });
  }, [local])
  const SliderThreeFilter = useMemo(() => {
    return data.filter((slider) => {
      return slider.id >= 29 && slider.id <= 42;
    });
  }, [local])
  const SliderFourFilter = useMemo(() => {
    return data.filter((slider) => {
      return slider.id >= 43 && slider.id <= 55;
    });
  }, [local])
  const SliderFiveFilter = useMemo(() => {
    return data.filter((slider) => {
      return slider.id >= 56 && slider.id <= 69;
    });
  }, [local])

  const ImageFilter1 = useMemo(() => {
    return img.filter((slide) => {
      return slide.id >= 2 && slide.id <= 3;
    });
  }, [imglocal])

  const ImageFilter2 = useMemo(() => {
    return img.filter((slide) => {
      return slide.id <= 1;
    });
  }, [imglocal])

  const ImageFilter3 = useMemo(() => {
    return img.filter((slide) => {
      return slide.id >= 4 && slide.id <= 7;
    });
  }, [imglocal])

  const ImageFilter4 = useMemo(() => {
    return img.filter((slide) => {
      return slide.id >= 8 && slide.id <= 13;
    });
  }, [imglocal])

  return (
    <MainLayout>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <header>
          <div className="container">
            <div className="row">
              <div className="header_top col-lg-10">
                {router.locale == "uz" ? (<h2> Bizga ishonch bildirgan kompaniyalar <span>250+</span> </h2>) :
                  (<h2><span>250+</span> компаний, которые нам доверяют </h2>)}
                {router.locale == "uz" ?
                  (<p>
                    Biznesda ham hayotda ham eng muhim omil bu ishonchdir. <br />
                    Bizga ishonch bildirgan kompaniyalar qatorida sizni ham
                    ko'rishdan mamnunmiz.
                  </p>) :
                  (<p>
                    Самый важный фактор как в бизнесе, так и в жизни - это доверие. <br />
                    Мы рады видеть вас среди компаний, которые нам доверяют.
                  </p>)}
              </div>
              <div className="header_bottom">
                <ScrollAnimation animateIn="jello" animateOnce={true}>
                  <div className="text_line">
                    <span>Enterprise 30+</span>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </header>
      </ScrollAnimation>

      <div className="slider">
        <div className="slide-track">
          {SliderFirsFilter.map((slider) => {
            return (
              <div className="slide" key={slider.id}>
                <Image
                  src={`https://redfox.frilansus.com/${slider.logo}`}
                  width={100}
                  height={100}
                  preload="true"
                  alt="partner."
                />
              </div>
            );
          })}

        </div>
      </div>

      <div className="slider">
        <div className="slide-track">
          {SliderSecondFilter.map((slider) => {
            return (
              <div className="slide" key={slider.id}>
                <Image
                  src={`https://redfox.frilansus.com/${slider.logo}`}
                  width={100}
                  height={100}
                  preload="true"
                  alt="partner."
                />
              </div>
            );
          })}
        </div>
      </div>

      <ScrollAnimation animateIn="jello" animateOnce={true}>
        <header className="medium">
          <div className="container">
            <div className="row">
              <div className="header_bottom">
                <div className="text_line">
                  <span>Business 100+</span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </ScrollAnimation>

      <div className="slider two">
        <div className="slide-track">
          {SliderThreeFilter.map((slider) => {
            return (
              <div className="slide" key={slider.id}>
                <Image
                  src={`https://redfox.frilansus.com/${slider.logo}`}
                  width={100}
                  height={90}
                  preload="true"
                  alt="partner."

                />
              </div>
            );
          })}
          {SliderThreeFilter.map((slider) => {
            return (
              <div className="slide" key={slider.id}>
                <Image
                  src={`https://redfox.frilansus.com/${slider.logo}`}
                  width={100}
                  height={100}
                  preload="true"
                  alt="partner."

                />
              </div>
            );
          })}
          {SliderThreeFilter.map((slider) => {
            return (
              <div className="slide" key={slider.id}>
                <Image
                  src={`https://redfox.frilansus.com/${slider.logo}`}
                  width={100}
                  height={100}
                  preload="true"
                  alt="partner."

                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="slider two">
        <div className="slide-track">
          {SliderFourFilter.map((slider) => {
            return (
              <div className="slide" key={slider.id}>
                <Image
                  src={`https://redfox.frilansus.com/${slider.logo}`}
                  width={100}
                  height={100}
                  preload="true"
                  alt="partner."
                />
              </div>
            );
          })}
          {SliderFourFilter.map((slider) => {
            return (
              <div className="slide" key={slider.id}>
                <Image
                  src={`https://redfox.frilansus.com/${slider.logo}`}
                  width={100}
                  height={100}
                  preload="true"
                  alt="partner."
                />
              </div>
            );
          })}
          {SliderFourFilter.map((slider) => {
            return (
              <div className="slide" key={slider.id}>
                <Image
                  src={`https://redfox.frilansus.com/${slider.logo}`}
                  width={100}
                  height={100}
                  preload="true"
                  alt="partner."
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="slider two">
        <div className="slide-track">
          {SliderFiveFilter.map((slider) => {
            return (
              <div className="slide" key={slider.id}>
                <Image
                  src={`https://redfox.frilansus.com/${slider.logo}`}
                  width={100}
                  height={100}
                  preload="true"
                  alt="partner."
                />
              </div>
            );
          })}
          {SliderFiveFilter.map((slider) => {
            return (
              <div className="slide" key={slider.id}>
                <Image
                  src={`https://redfox.frilansus.com/${slider.logo}`}
                  width={100}
                  height={100}
                  preload="true"
                  alt="partner."

                />
              </div>
            );
          })}

          {SliderFiveFilter.map((slider) => {
            return (
              <div className="slide" key={slider.id}>
                <Image
                  src={`https://redfox.frilansus.com/${slider.logo}`}
                  width={100}
                  height={100}
                  preload="true"
                  alt="partner."
                />
              </div>
            );
          })}


        </div>
      </div>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <header>
          <div className="container">
            <div className="row">
              <div className="header_top col-lg-10">
                {router.locale == "uz" ?
                  (<h2>
                    Muvaffaqiyatli topshirilgan ishlarimiz soni <span>1250+</span>
                  </h2>) :
                  (<h2>
                    Число успешно <br /> выполненных работ <span>1250+</span>
                  </h2>)}
                {router.locale == "uz" ?
                  (<p>
                    Biz o'z ishimizni yaxshi ko'rib bajaramiz. Siz yoki
                    kompaniyangiz uchun nimayiki topshirsangiz, biz uni
                    bajarishdan xursand bo'lamiz.
                  </p>) :
                  (<p>
                    Мы выполняем свою работу с любовью. Что-бы вы не отправили <br />
                    для себя или своей компании, мы сделаем это с любовью.
                  </p>)}


              </div>
              <div className="header_bottom">
                <ScrollAnimation animateIn="jello" animateOnce={true}>
                  <div className="text_line">
                    <span>PORTFOLIO</span>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </header>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <section>
          <div className="container">
            <div className="row rev">
              <div className="col-lg-4 col-md-4 derzi">
                {ImageFilter1.map((port) => (
                  <div className="col-md-12 col-lg-12 col-5" key={port.id}>
                    <div className="portfolio_img overflow-hidden">
                      <Image
                        src={`https://redfox.frilansus.com/${port.logo}`}
                        width={416}
                        height={326}
                        decoding="auto"
                        preload="true"
                        alt="najot."
                      />
                    </div>

                    <div className="portfolio_title">
                      <p>{port.title_uz}</p>
                    </div>

                  </div>
                ))}
              </div>

              {ImageFilter2.map((port) => (
                <div className="col-lg-8 col-md-8" key={port.id}>
                  <div className="portfolio_img overflow-hidden">
                    <Image
                      src={`https://redfox.frilansus.com/${port.logo}`}
                      width={856}
                      height={676}
                      decoding="auto"
                      preload="true"
                      alt="nurafshon."
                    />
                  </div>
                  <div className="portfolio_title">
                    <p>{port.title_uz}</p>
                  </div>

                </div>
              ))}
            </div>

            <div className="row bottom">
              {ImageFilter3.map((port) => (
                <div className="col-lg-6 col-md-6" key={port.id}>
                  <div className="portfolio_img overflow-hidden">
                    <Image
                      src={`https://redfox.frilansus.com/${port.logo}`}
                      width={636}
                      height={500}
                      decoding="auto"
                      preload="true"
                      alt="nurafshon."
                    />
                  </div>
                  <div className="portfolio_title">
                    <p>{port.title_uz}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="row">
              {ImageFilter4.map((port) => (
                <div className="col-lg-4 col-md-4 col-6" key={port.id}>
                  <div className="portfolio_img overflow-hidden">
                    <Image
                      src={`https://redfox.frilansus.com/${port.logo}`}
                      width={416}
                      height={322}
                      decoding="auto"
                      preload="true"
                      alt="nurafshon."
                    />
                  </div>
                  <div className="portfolio_title">
                    <p>{port.title_uz}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <header>
          <div className="container">
            <div className="row">
              <div className="header_top col-lg-8">
                {router.locale == "uz" ? (<h2>
                  Mahalliy bozordagi tajribamiz <span>5 yil</span>
                </h2>) :
                  (<h2>
                    На местном рынке наш опыт <span>5 лет</span>
                  </h2>)}
                {router.locale == "uz" ?
                  (<p>
                    RedFox dizayn studiyasi bir vaqtda ko‘plab kompaniyalar bilan
                    ishlaydigan tajribali katta jamoadir. Mijozlarimiz qatorida
                    sizni ham ko’rishdan mamnunmiz.
                  </p>) :
                  (<p>
                    Дизайн студия RedFox это большая и опытная команда,<br /> работающая одновременно
                    со многими компаниями. Мы с нетерпением ждем встречи с вами в числе наших клиентов.
                  </p>)}
              </div>
              <div className="header_bottom">
                <ScrollAnimation animateIn="jello" animateOnce={true}>
                  <div className="text_line">
                    {router.locale == 'uz' ?
                      (<span>XIZMATLARIMIZ</span>) :
                      (<span>НАШИ УСЛУГИ</span>)}
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </header>
      </ScrollAnimation>

      {/* Skills */}
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <div className="skills">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div className="logos">
                  <div className="row">
                    <div className="col-3 col-md-12 col-lg-12">
                      {/* <object type='image/svg+xml' data="/Frame 242naming.svg" className="ico-naming" width={60} height={55} /> */}

                      <i className="fad fa-file-signature"></i>
                    </div>
                    <div className="col-8 col-md-12 col-lg-12">
                      <h4>Naming</h4>
                      <div className="d-flex justify-content-between">
                        {router.locale == "uz" ? (<p>Brend nomini topish</p>) : (<p>Разработка названия бренда</p>)}
                        <div>
                          <i className="far fa-long-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="logos">
                  <div className="row">
                    <div className="col-3 col-md-12 col-lg-12">
                      <i className="fad fa-pen-fancy"></i>
                    </div>
                    <div className="col-8 col-md-12 col-lg-12">
                      <h4>Logo & Branding</h4>
                      <div className="d-flex justify-content-between">
                        {router.locale == "uz" ? (<p>Savdo belgisini yaratish</p>) : (<p>Подготовка торговой марки</p>)}
                        <div>
                          <i className="far fa-long-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="logos">
                  <div className="row">
                    <div className="col-3  col-md-12 col-lg-12">
                      <i className="fas fa-palette"></i>
                    </div>
                    <div className="col-8  col-md-12 col-lg-12">
                      <h4>Graphic design</h4>
                      <div className="d-flex justify-content-between">
                        {router.locale == "uz" ? (<p>Barcha turdagi xizmatlar</p>) : (<p>Все виды услуг</p>)}
                        <div>
                          <i className="far fa-long-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="logos">
                  <div className="row">
                    <div className="col-3  col-md-12 col-lg-12">
                      <i className="fal fa-phone-laptop"></i>
                    </div>

                    <div className="col-8 col-md-12 col-lg-12">
                      <h4>Web & UX/UI</h4>
                      <div className="d-flex justify-content-between">
                        {router.locale == "uz" ? (<p>Web va Mobile dizayn</p>) : (<p>Web и Mobile дизайн</p>)}
                        <div>
                          <i className="far fa-long-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="logos">
                  <div className="row">
                    <div className="col-3 col-md-12 col-lg-12">
                      <i className="far fa-shopping-bag"></i>
                    </div>
                    <div className="col-8 col-md-12 col-lg-12">
                      <h4>Packaging</h4>
                      <div className="d-flex justify-content-between">
                        {router.locale == "uz" ? (<p>Qadoqlash dizayni</p>) : (<p>Дизайн упаковки</p>)}
                        <div>
                          <i className="far fa-long-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="logos">
                  <div className="row">
                    <div className="col-3 col-md-12 col-lg-12">
                      <i className="fas fa-print"></i>
                    </div>
                    <div className="col-8 col-md-12 col-lg-12">
                      <h4>Poligrafik</h4>
                      <div className="d-flex justify-content-between">
                        {router.locale == "uz" ? (<p>Banner va Flayer dizayni</p>) : (<p>Дизайн баннера и флаера</p>)}
                        <div>
                          <i className="far fa-long-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="logos">
                  <div className="row">
                    <div className="col-3 col-md-12 col-lg-12">
                      <i className="fab fa-instagram"></i>
                    </div>
                    <div className="col-8 col-md-12 col-lg-12">
                      <h4>SMM design</h4>
                      <div className="d-flex justify-content-between">
                        {router.locale == "uz" ? (<p>Ijtimoiy tarmog’lar uchun</p>) : (<p>Для социальных сетей</p>)}
                        <div>
                          <i className="far fa-long-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="others">
                  <span className="other">
                    {router.locale == "uz" ? 'Yana shu kabi ko‘plab xizmatlar mavjud' : 'Есть еще много подобных услуг'}
                  </span>
                  <i className="far fa-long-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <header>
          <div className="container">
            <div className="row">
              <div className="header_top col-lg-8">
                {router.locale == "uz" ?
                  (<h2>
                    Jamoamizda ekspert va mutaxassislar <span>40+</span>
                  </h2>) :
                  (<h2>
                    Эксперты и специалисты в нашей компании <span>70+</span>
                  </h2>)}
                {router.locale == "uz" ?
                  (<p>
                    RedFox katta jamoadan tashkil topgan dizayn studiya.
                    Shuningdek, jamoamizda Frilansus.com baholash tizimida Top 10
                    kuchli dizaynerlar qatoriga kiruvchi 5 va 4 yulduzli
                    dizaynerlar ham bor.
                  </p>) :
                  (<p>
                    RedFox это дизайн-студия, состоящая из большой команды. В нашу команду также входят
                    5- и 4-звездочные дизайнеры, которые входят в десятку сильнейших дизайнеров в рейтинговой
                    системе <br /> Frilansus.com.
                  </p>)}
              </div>
              <div className="header_bottom">
                <ScrollAnimation animateIn="jello" animateOnce={true}>
                  <div className="text_line">
                    {router.locale == 'uz' ?
                      (<span>Jamoa a‘zolari</span>) :
                      (<span>ЧЛЕНЫ КОМАНДЫ</span>)}
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </header>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <div className="experts">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div>
                  <img src="/My-User-Pic-001 1mavlonbek.png" alt="experts." />
                </div>
                <div>
                  {router.locale == "uz" ? (<h4>Polatov Mavlonbek</h4>) : (<h4>Пулатов Мавлонбек</h4>)}
                  {router.locale == "uz" ? (<p>UX/UI dizayner · Tajriba: 4 yil</p>) : (<p>UX/UI дизайнер · Опыт: 2 года</p>)}
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div>
                  <img src="/My-User-Pic-001 1 (1).png" alt="experts." />
                </div>
                <div>
                  {router.locale == "uz" ? (<h4>Azam Muhammadiyev</h4>) : (<h4>Азам Мухаммадиев</h4>)}
                  {router.locale == "uz" ? (<p>Grafik dizayner · Tajriba: 10 yil</p>) : (<p>Графический дизайнер · Опыт: 18 лет</p>)}
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div>
                  <img src="/My-User-Pic-001 1 (2).png" alt="experts." />
                </div>
                <div>
                  {router.locale == "uz" ? (<h4>Rahmatullo Jabborov</h4>) : (<h4>Рахматулло Джаббаров</h4>)}
                  {router.locale == "uz" ? (<p>UX/UI dizayner · Tajriba: 4 yil</p>) : (<p>Графический дизайнер · Опыт: 11 лет</p>)}
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div>
                  <img src="/My-User-Pic-001 1 (3).png" alt="experts." />
                </div>
                <div>
                  {router.locale == "uz" ? (<h4>Rahimjon Gaziyev</h4>) : (<h4>Рахимжон Газиев</h4>)}
                  {router.locale == "uz" ? (<p>UX/UI dizayner · Tajriba: 4 yil</p>) : (<p>Графический дизайнер · Опыт: 15 лет</p>)}
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div>
                  <img src="/PicNurmatovO.png" alt="experts." />
                </div>
                <div>
                  {router.locale == "uz" ? (<h4>Nurmatov Odiljon</h4>) : (<h4>Нурматов Одилжон</h4>)}
                  {router.locale == "uz" ? (<p>UX/UI dizayner · Tajriba: 4 yil</p>) : (<p>UX/UI дизайнер · Опыт: 4 года</p>)}
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div>
                  <img src="/My-User-Pic-001 1 (4).png" alt="experts." />
                </div>
                <div>
                  {router.locale == "uz" ? (<h4>Baxtiyorjon Gaziyev</h4>) : (<h4>Бахтийоржон Газиев</h4>)}
                  {router.locale == "uz" ? (<p>UX/UI dizayner · Tajriba: 4 yil</p>) : (<p>UX/UI дизайнер · Опыт: 4 года</p>)}
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div>
                  <img src="/My-User-Pic-001 1 (5).png" alt="experts." />
                </div>
                <div>
                  <h4>Sarvarbek Abdupattoyev</h4>
                  <p>UX/UI dizayner · Tajriba: 4 yil</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div>
                  <img src="/My-User-Pic-001 1 (6).png" alt="experts." />
                </div>
                <div>
                  <h4>Shokhrukh Rakhmatov</h4>
                  <p>UX/UI dizayner · Tajriba: 4 yil</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div>
                  <img src="/My-User-Pic-001 1 (7).png" alt="experts." />
                </div>
                <div>
                  <h4>Shokhrukh Rakhmatov</h4>
                  <p>UX/UI dizayner · Tajriba: 4 yil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <header>
          <div className="container">
            <div className="row">
              <div className="header_top col-lg-8 col-md-11">
                {router.locale == "uz" ? (<h2>Mijozlarni qo‘llab quvvatlash, support <span>24/7</span> </h2>) :
                  (<h2>Поддержка клиентов, support <span>24/7</span></h2>)}

                {router.locale == "uz" ?
                  (<p>
                    RedFox dizayn studiyasi bir vaqtda ko’plab kompaniyalar bilan
                    ishlaydigan tajribali katta jamoadir. Mijozlarimiz qatorida
                    sizni ham ko’rishdan mamnunmiz.
                  </p>) :
                  (<p>
                    Студия дизайна RedFox - это большая и опытная команда, <br /> работающая
                    одновременно со многими компаниями. Мы с нетерпением ждем встречи
                    с вами в числе наших клиентов.
                  </p>)}
              </div>
              <div className="header_bottom">
                <ScrollAnimation animateIn="jello" animateOnce={true}>
                  <div className="text_line">
                    {router.locale == 'uz' ? (<span>Mijozlar fikri</span>) : (<span>ОТЗЫВЫ КЛИЕНТОВ</span>)}
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </header>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <div className="reason">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="bg_item">
                  <div>
                    <img src="/My-User-Pic-001 1.png" alt="experts." />
                  </div>
                  {router.locale == 'uz' ? (<h5>Bahodir Akbarov</h5>) : (<h5>Бахадыр Акбаров</h5>)}
                  {router.locale == 'uz' ? (<span>Venox kompaniyasi asoschisi</span>) : (<span>Основатель компании "Venox"</span>)}
                  {router.locale == 'uz' ? (<p>
                    Bolalar baraka topila qo‘l ko‘zilar dard ko‘rmasin, bosib
                    chiqarishdan chiqqanidan keyin ko‘rib ko‘z to‘ymayabdi juda
                    chiroyli chiqdi mosholloh, gapyo‘q hammanglarga rahmat katta
                  </p>) : (<p>
                    Bolalar baraka topila qo‘l ko‘zilar dard ko‘rmasin, bosib
                    chiqarishdan chiqqanidan keyin ko‘rib ko‘z to‘ymayabdi juda
                    chiroyli chiqdi mosholloh, gapyo‘q hammanglarga rahmat katta
                  </p>)}
                  <div>
                    <img src="/Group.svg" alt="reason." />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="bg_item">
                  <div>
                    <img src="/Frame 8.png" alt="reason" />
                  </div>
                  {router.locale == 'uz' ? (<h5>Rixsiboy Umarov</h5>) : (<h5>Рихсибой Умаров</h5>)}
                  {router.locale == 'uz' ? (<span>ITGO asoschisi</span>) : (<span>Основатель "ITGO"</span>)}
                  {router.locale == 'uz' ? (<p>
                    Ishlar bilan bo‘lib sizlarga tashakkurimizni ham ayta
                    olmadik, qhilingan ishdan hamma mamnun bo‘ldi, qilgan
                    ishinglar hammaga yoqdi, did bilan yondoshganilar bilinib
                    turibti. Sizlar bilan hamkorlik qilganimizdan xursandmiz.
                  </p>) : (<p>
                    Ishlar bilan bo‘lib sizlarga tashakkurimizni ham ayta
                    olmadik, qhilingan ishdan hamma mamnun bo‘ldi, qilgan
                    ishinglar hammaga yoqdi, did bilan yondoshganilar bilinib
                    turibti. Sizlar bilan hamkorlik qilganimizdan xursandmiz.
                  </p>)}
                  <div>
                    <img src="/Group1.svg" alt="reason." />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="bg_item">
                  <div>
                    <img src="/Frame 8 (1).png" alt="reason." />
                  </div>
                  {router.locale == 'uz' ? (<h5>Qudrat Abdurahimov</h5>) : (<h5>Кудрат Абдурахимов</h5>)}
                  {router.locale == 'uz' ? (<span>GITA Kompaniyasi Founderi</span>) : (<span>Основатель компании "GITA"</span>)}
                  {router.locale == 'uz' ? (<p>
                    Xammaga katta rahmat yigitlar. Nasib qilsa yaxshi kunlarda
                    ko‘rishamiz. Karantin tugasa ko‘rishib qolsak,
                    qo‘llaringizni ushlab rahmat aytib qo‘yaman.
                  </p>) : (<p>
                    Xammaga katta rahmat yigitlar. Nasib qilsa yaxshi kunlarda
                    ko‘rishamiz. Karantin tugasa ko‘rishib qolsak,
                    qo‘llaringizni ushlab rahmat aytib qo‘yaman.
                  </p>)}
                  <div>
                    <img src="/Groupgita.svg" alt="reason." />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="bg_item">
                  <div>
                    <img src="/Frame 8 (2).png" alt="reason." />
                  </div>
                  {router.locale == 'uz' ? (<h5>Sobirjon Yaxshiyev</h5>) : (<h5>Сабиржан Яхшиев</h5>)}
                  {router.locale == 'uz' ? (<span>Sunnah product asoschisi</span>) : (<span>Основатель "Sunnah products"</span>)}
                  {router.locale == 'uz' ? (<p>
                    Uzingiz va shogirdlarni extiyot qiling ko‘p kerak bolasizlar
                    ko‘pchlika. O‘zbekistonda dizayin sohasi tanazzulga
                    uchramasin
                  </p>) : (<p>
                    Uzingiz va shogirdlarni extiyot qiling ko‘p kerak bolasizlar
                    ko‘pchlika. O‘zbekistonda dizayin sohasi tanazzulga
                    uchramasin
                  </p>)}
                  <div>
                    <img src="/Groupsunnah.svg" alt="reason." />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="bg_item">
                  <div>
                    <img src="/My-User-Pic-001 2.png" alt="reason." />
                  </div>
                  {router.locale == 'uz' ? (<h5>Abdurahmon Nasriddinov</h5>) : (<h5>Абдурахман Насреддинов</h5>)}
                  {router.locale == 'uz' ? (<span>Sardor brendi Founderi</span>) : (<span>Основатель бренда "Sardor"</span>)}
                  {router.locale == 'uz' ? (<p>
                    Ishingizni mahsulini kurib xalovat qilyapsizmi? Qo‘llaring
                    dard ko‘rmasin mexnatlaring halol
                  </p>) : (<p>
                    Ishingizni mahsulini kurib xalovat qilyapsizmi? Qo‘llaring
                    dard ko‘rmasin mexnatlaring halol
                  </p>)}
                  <div>
                    <img src="/Sardorsardor.svg" alt="reason." />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="bg_item">
                  <div>
                    <img src="/Frame 8 (3).png" alt="reason." />
                  </div>
                  {router.locale == 'uz' ? (<h5>Ahmad Saidov</h5>) : (<h5>Ахмад Саидов</h5>)}
                  {router.locale == 'uz' ? (<span>Greenmotors asoschisi</span>) : (<span>Основатель "Greenmotors"</span>)}
                  {router.locale == 'uz' ? (<p>
                    Qolgan dizaynlarham zo‘r chiqdi, qiyin bo‘ldi tanlash, ming
                    bor uzur, ishlarilarga rivoj bersin, xamma qatnashganlarga
                    raxmat, salomat bo‘lilar.
                  </p>) : (<p>
                    Qolgan dizaynlarham zo‘r chiqdi, qiyin bo‘ldi tanlash, ming
                    bor uzur, ishlarilarga rivoj bersin, xamma qatnashganlarga
                    raxmat, salomat bo‘lilar.
                  </p>)}
                  <div>
                    <img src="/Слой x0020 1green.svg" alt="reason." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <header>
          <div className="container">
            <div className="row">
              <div className="header_top col-lg-8">
                {router.locale == "uz" ? (<h2>
                  Nima uchun bizga ishonch bildirishadi? <span>5 ta </span>sabab
                </h2>) :
                  (<h2>Почему нам доверяют? <br /><span>5</span> причин</h2>)}
                {router.locale == "uz" ?
                  (<p>
                    RedFox dizayn studiyasi bir vaqtda ko’plab kompaniyalar bilan
                    ishlaydigan tajribali katta jamoadir. Mijozlarimiz qatorida
                    sizni ham ko’rishdan mamnunmiz.
                  </p>) :
                  (<p>
                    Студия дизайна RedFox - это большая и опытная команда, <br /> работающая
                    одновременно со многими компаниями. Мы с нетерпением ждем встречи
                    с вами в числе наших клиентов.
                  </p>)}
              </div>
              <div className="header_bottom">
                <ScrollAnimation animateIn="jello" animateOnce={true}>
                  <div className="text_line">
                    {router.locale == 'uz' ?
                      (<span>afzalliklar</span>) :
                      (<span>ПРЕИМУЩЕСТВА</span>)}
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </header>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <div className="belive">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div>
                  <img src="/1one .svg" alt='belive.'></img>
                </div>
                {router.locale == 'uz' ? (<span>Tanlash imkoniyati ko'pligi</span>) : (<span>Большой выбор</span>)}
                {router.locale == 'uz' ? (<p>
                  RedFox sizning buyurtmangiz uchun 10 dan ortiq sara ishlar
                  jamlanmasini taqdim qiladi va siz ularning ichidan eng
                  sarasini tanlab olishingiz mumkin.
                </p>) : (<p>RedFox предлагает коллекцию из более чем 10 лучших работ для вашего заказа, и вы можете выбрать лучшие из них.</p>)}

              </div>
              <div className="col-lg-4">
                <div>
                  <img src="/2two.svg" alt='belive.'></img>
                </div>
                {router.locale == 'uz' ? (<span>Deyarli 24/7 rejimda muloqot mavjudligi</span>) : (<span>Доступность связи в режиме 24/7</span>)}
                {router.locale == 'uz' ? (<p>
                  Xalqaro miqyosda tan olingan va eng a'lo sifatda baholangan
                  24/7 menejerlar support'i ishlashga harakat qilmoqdamiz,
                  buyurtmangiz yakunlanguncha sizning xizmatingizdamiz.
                </p>) : (<p>Всемирно признанный и признанный превосходный менеджер, работающий круглосуточно и без выходных,
                  к вашим услугам, пока ваш заказ не будет выполнен.</p>)}
              </div>
              <div className="col-lg-4">
                <div>
                  <img src="/3three.svg" alt='belive.'></img>
                </div>
                {router.locale == 'uz' ? (<span>Sohalar qamrovi kengligi</span>) : (<span>Широкий охват</span>)}
                {router.locale == 'uz' ? (<p>
                  Studiyada dizaynning barcha sohalari bo'yicha mutaxassislar
                  borligi sizning barcha ishingiz bir joyda, shuningdek uyg‘un
                  holatda mukammal bitishini ta'minlaydi.
                </p>) : (<p>Присутствие в студии специалистов по всем направлениям дизайна гарантирует, что все ваши работы  будут
                  выполнены в одном месте, а также в идеальной гармонии.</p>)}
              </div>
              <div className="col-lg-4">
                <div>
                  <img src="/4four.svg" alt='belive.'></img>
                </div>
                {router.locale == 'uz' ? (<span>Yirik loyihalardagi tajriba</span>) : (<span>Опыт работы в крупных проектах</span>)}
                {router.locale == 'uz' ? (<p>
                  Bugungi kunga qadar studiyamiz 1000 dan ortiq muvaffaqiyatli
                  ish topshirgan. Hamda ko'plab o'rta biznes egalari va
                  (Enterprise) katta korxonalar bilan amalga oshirilgan
                  loyihalar.
                </p>) : (<p>На сегодняшний день наша студия представила более 1000 успешных работ.
                  И проекты со многими владельцами среднего бизнеса и (Enterprise) крупными предприятиями.</p>)}
              </div>
              <div className="col-lg-4">
                <div>
                  <img src="/5five.svg" alt='belive.'></img>
                </div>
                {router.locale == 'uz' ? (<span>Eng muhimi</span>) : (<span>Самое главное</span>)}
                {router.locale == 'uz' ? (<p>
                  Biz o'z kasbimizni sevamiz va barchasini chin dildan
                  bajaramiz. Bu ham albatta sizning foydangizga. Qolganini
                  bizning Portfolio <a href="https://t.me/portfolius" target="_blank" rel="noopener">https://t.me/portfolius.</a> gapirsin.</p>) :
                  (<p>Мы любим свою профессию и делаем все искренне. Это тоже определенно в вашу пользу. Остальное наше Пусть говорит портфолио<a href="https://t.me/portfolius" target="_blank" rel="noopener"> https://t.me/portfolius.</a> </p>)}
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <header>
          <div className="container">
            <div className="row">
              <div className="header_top col-lg-8">
                {router.locale == "uz" ? (<h2>
                  Istalgan vaqt buyurtma bering: <span>71 200 5008 </span>
                </h2>) :
                  (<h2>
                    Закажите в любое <br />
                    время: <span>71 200 5008</span>
                  </h2>)}
                {router.locale == "uz" ?
                  (<p>
                    Bizdan mijozlarimiz, tezkor xizmat, sifatli ishlar, ajoyib
                    muomila va shu kabi ko’plab holatlardan hursand bo’lishadi
                    hamda o’z fikrlarini bildirishadi.
                  </p>) :
                  (<p>
                    Наши клиенты довольны нами, высказывают свое мнение о <br /> быстром обслуживании, качественной работе, отличном <br /> обращении и т. Д.
                  </p>)}
              </div>
              <div className="write col-lg-12">
                <a href="https://t.me/RedFoxManager" target="_blank" rel="noopener">
                  {router.locale == 'uz' ?
                    (<h3>Online yozing</h3>) :
                    (<h3>Написать онлайн</h3>)}
                </a>
              </div>
            </div>
          </div>
        </header>
      </ScrollAnimation>
    </MainLayout>
  );
}

export default Home;

// getServerSideProps
// getStaticProps
export async function getStaticProps() {
  const res = await fetch("https://redfox.frilansus.com/api/partner");
  const data = await res.json();
  const portfolio = await fetch(`https://redfox.frilansus.com/api/portfolio`);
  const img = await portfolio.json();
  return { props: { data, img } };
}
