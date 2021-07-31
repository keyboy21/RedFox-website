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
                      <svg className="icon-skills" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.946 3.486h2.906V16.27l-.581.581h-2.325V3.486z" />
                        <path d="M3.486 13.946H16.27v2.905H3.486z" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M34.865 13.736l3.467-3.508V2.133A2.15 2.15 0 0036.198 0H12.784L0 12.9v27.935a2.168 2.168 0 00.613 1.525 2.13 2.13 0 001.502.64h34.102c.56 0 1.098-.225 1.495-.624.396-.4.62-.943.62-1.509V28.473l-3.467 3.508v7.532H3.486V13.947l4.65-4.649 5.81-5.81h20.919v10.249zM43 17.677l-3.011-3.042v.002l-2.545 2.57 3.026 3.025L43 17.677zm-4.166 4.206l-3.025-3.025L23.425 31.36l-.004 3.036 3.015.004 12.398-12.517z" />
                      </svg>
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
                      <svg className="icon-skills" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.42 25.267a4.196 4.196 0 005.003.695l2.343 2.343-2.154 2.155 5.925 5.925 2.154-2.155 2.386 2.386a4.196 4.196 0 00.695 5.004 4.194 4.194 0 005.925 0 4.194 4.194 0 000-5.925A4.196 4.196 0 0018.693 35l-2.386-2.386 2.155-2.154-1.924-1.923 19.875-3.974-1.51-1.51a5.557 5.557 0 010-7.85l.956-.956 1.858 1.859 4.848-4.848L31.846.54l-4.848 4.847 1.751 1.75-.949.95a5.567 5.567 0 01-7.864 0l-1.51-1.51-.434 2.177-3.54 17.697-1.915-1.916-2.155 2.154-2.343-2.343a4.196 4.196 0 00-.695-5.003 4.194 4.194 0 00-5.925 0 4.194 4.194 0 000 5.924zm20.66 12.044c.743.742.743 1.95 0 2.693a1.906 1.906 0 01-2.692 0 1.906 1.906 0 010-2.693 1.906 1.906 0 012.693 0zm9.766-33.54l7.487 7.487-1.616 1.616-7.487-7.487 1.616-1.616zm-2.43 5.931l.949-.948 3.878 3.878-.956.955c-2.574 2.575-2.98 6.51-1.214 9.514l-13.209 2.64 7.87-7.87-1.615-1.616-7.87 7.87 2.64-13.208c3.007 1.769 6.949 1.364 9.527-1.215zm-16.88 18.065l2.694 2.693-2.693 2.693-2.693-2.693 2.693-2.693zm-6.808-6.809c.743.743.743 1.951 0 2.694a1.906 1.906 0 01-2.693 0 1.906 1.906 0 010-2.694 1.906 1.906 0 012.693 0z" />
                      </svg>
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
                      <svg className="icon-skills" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.814 7.427v-4.64H31.14V0h-2.549v2.788h-4.757V0h-2.55v2.788h-4.757V0H13.98v2.788H9.222V0h-2.55v2.788H2V43h33.814V16.925l4.776-4.749-4.776-4.749zM4.549 5.322h28.716v3.266l-8.175 8.129c-1.154-5.207-5.83-9.114-11.408-9.114a11.69 11.69 0 00-9.133 4.382V5.322zm16.15 21.196c.364-1.743 1.31-3.044 2.427-4.24l1.837 1.826c-1.207 1.112-2.52 2.052-4.264 2.414zm6.888-1.413l.41-.408v9.94H16.103v-4.054a11.63 11.63 0 003.56-1.386c4.018-.208 6.452-2.628 7.924-4.092zM13.682 10.137c4.956 0 9.003 3.946 9.13 8.845l-.726.721c-1.416 1.409-3.731 3.712-4.055 7.503a9.13 9.13 0 01-4.35 1.095c-5.035 0-9.132-4.074-9.132-9.082 0-5.008 4.097-9.082 9.133-9.082zm19.583 30.329H4.55V26.453a11.69 11.69 0 009.006 4.38v6.338h16.991V22.163l2.72-2.703v21.006zm-6.486-18.14l-1.863-1.853 6.616-6.578 1.862 1.852-6.615 6.578zm8.418-8.371l-1.863-1.852 1.789-1.778 1.862 1.851-1.788 1.779z" />
                      </svg>
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
                      <svg className="icon-skills" viewBox="0 0 53 50" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M51.18 11.1h-3.64V1.85c0-.49-.192-.961-.533-1.308A1.805 1.805 0 0045.72 0H7.96c-.482 0-.945.195-1.286.542A1.866 1.866 0 006.14 1.85v25.438c0 .49.191.96.533 1.308.34.347.804.541 1.286.541h26.842v.974a1.443 1.443 0 00-.096-.003H1.4a1.4 1.4 0 100 2.8h33.306c.032 0 .064 0 .096-.003v2.245c0 .49.191.961.533 1.308.34.347.804.542 1.286.542H51.18c.483 0 .946-.195 1.287-.542.341-.347.533-.817.533-1.308v-22.2c0-.49-.192-.961-.533-1.308a1.805 1.805 0 00-1.287-.542zm-6.484-8.325V11.1h-8.075c-.482 0-.945.195-1.286.542a1.865 1.865 0 00-.533 1.308v13.413H8.87V2.774h35.826zm-7.165 31.219V13.875h12.625v20.119H37.53zM12 11h20v3H12v-3zm20 7H12v3h20v-3z" />
                      </svg>
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
                      <svg className="icon-skills" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.381 1.16c.304-.4.784-.636 1.294-.636h23.65c.51 0 .99.236 1.295.635l5.912 7.761c.207.271.318.6.318.939v27.163a5.404 5.404 0 01-1.621 3.851 5.607 5.607 0 01-3.933 1.603H7.705a5.606 5.606 0 01-3.933-1.603 5.404 5.404 0 01-1.622-3.851V9.859c0-.338.112-.668.319-.939L8.38 1.16zm2.105 2.51l-5.11 6.71v26.642c0 .617.248 1.205.687 1.636a2.34 2.34 0 001.642.671h27.591a2.34 2.34 0 001.642-.67c.438-.432.687-1.02.687-1.637V10.379l-5.11-6.708H10.486z" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.618 16.046c.89 0 1.613.704 1.613 1.573 0 1.646.664 3.221 1.842 4.38a6.314 6.314 0 004.429 1.808A6.314 6.314 0 0025.93 22a6.147 6.147 0 001.841-4.38c0-.87.723-1.574 1.613-1.574s1.612.704 1.612 1.573a9.254 9.254 0 01-2.776 6.596 9.58 9.58 0 01-6.72 2.738 9.58 9.58 0 01-6.719-2.738 9.254 9.254 0 01-2.776-6.596c0-.869.722-1.573 1.612-1.573zM2.15 9.859c0-.869.722-1.573 1.613-1.573h35.475c.89 0 1.612.704 1.612 1.573s-.722 1.573-1.612 1.573H3.763c-.89 0-1.613-.704-1.613-1.573z" />
                      </svg>
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
                      <svg className="icon-skills" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M38.297 9.406H36.28V0H6.72v9.406H4.703C2.083 9.406 0 11.623 0 14.311v14.31c0 2.688 2.083 4.906 4.703 4.906h1.344v9.406h30.906v-9.34h1.344c2.62 0 4.703-2.216 4.703-4.904V14.311c0-2.688-2.083-4.905-4.703-4.905zM9.407 2.687h24.187v6.72H9.406v-6.72zm24.859 37.626H8.734V27.547h25.532v12.765zm6.047-11.624c0 1.21-.874 2.217-2.016 2.217h-1.344V24.86H6.047v6.047H4.703c-1.142 0-2.016-1.008-2.016-2.217V14.311c0-1.21.874-2.217 2.016-2.217h33.594c1.142 0 2.016 1.008 2.016 2.217v14.378z" />
                        <path d="M35.61 13.438a3.327 3.327 0 00-3.36 3.359 3.327 3.327 0 003.36 3.36 3.327 3.327 0 003.359-3.36 3.327 3.327 0 00-3.36-3.36zm0 4.03c-.404 0-.672-.268-.672-.671s.268-.672.671-.672c.404 0 .672.269.672.672s-.268.672-.672.672zM31.578 30.234H11.422v2.688h20.156v-2.688zM31.578 34.938H11.422v2.687h20.156v-2.688z" />
                      </svg>
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
                      <svg className="icon-skills" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32.981 7.439a2.58 2.58 0 100 5.16 2.58 2.58 0 000-5.16zm9.89 5.203a16.318 16.318 0 00-.989-5.224 10.62 10.62 0 00-2.494-3.806 10.105 10.105 0 00-3.805-2.473A15.695 15.695 0 0030.358.13C28.079 0 27.348 0 21.5 0c-5.848 0-6.579 0-8.858.129a15.695 15.695 0 00-5.224 1.01 10.277 10.277 0 00-3.806 2.473 10.105 10.105 0 00-2.473 3.806 15.695 15.695 0 00-1.01 5.224C0 14.921 0 15.652 0 21.5c0 5.848 0 6.579.129 8.858a15.695 15.695 0 001.01 5.225c.525 1.439 1.371 2.74 2.473 3.805a10.278 10.278 0 003.806 2.473c1.67.631 3.438.973 5.224 1.01C14.921 43 15.652 43 21.5 43c5.848 0 6.579 0 8.858-.129a15.696 15.696 0 005.225-1.01c1.439-.525 2.74-1.371 3.805-2.473a10.429 10.429 0 002.494-3.805c.613-1.676.947-3.441.989-5.225 0-2.279.129-3.01.129-8.858 0-5.848 0-6.579-.129-8.858zM39.001 30.1a12.062 12.062 0 01-.731 3.999 6.58 6.58 0 01-1.613 2.473 6.86 6.86 0 01-2.472 1.612 12.062 12.062 0 01-3.999.731c-2.15.108-2.945.129-8.6.129-5.654 0-6.45 0-8.6-.129a12.321 12.321 0 01-4.171-.645 7.03 7.03 0 01-2.365-1.613 6.45 6.45 0 01-1.591-2.472 11.91 11.91 0 01-.86-4.085c0-2.15-.129-2.946-.129-8.6 0-5.655 0-6.45.129-8.6.01-1.395.264-2.778.752-4.085A6.45 6.45 0 016.45 6.45a6.751 6.751 0 012.365-1.72 12.32 12.32 0 014.085-.731c2.15 0 2.945-.129 8.6-.129 5.654 0 6.45 0 8.6.129 1.365.016 2.717.263 3.999.731a6.58 6.58 0 012.559 1.72 6.578 6.578 0 011.612 2.365c.478 1.31.725 2.691.731 4.085.108 2.15.129 2.945.129 8.6 0 5.654-.022 6.45-.129 8.6zM21.5 10.47A11.03 11.03 0 1032.551 21.5 11.009 11.009 0 0021.5 10.47zm0 18.19a7.16 7.16 0 110-14.32 7.16 7.16 0 010 14.32z" />
                      </svg>
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
                <div className="focs">
                  <div className='focs2'>
                    <img src="/My-User-Pic-001 1mavlonbek.png" alt="experts." />
                  </div>
                </div>
                <div>
                  {router.locale == "uz" ? (<h4>Polatov Mavlonbek</h4>) : (<h4>Пулатов Мавлонбек</h4>)}
                  {router.locale == "uz" ? (<p>UX/UI dizayner · Tajriba: 4 yil</p>) : (<p>UX/UI дизайнер · Опыт: 2 года</p>)}
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="focs">
                  <div className="focs2">
                    <img src="/My-User-Pic-001 1 (1).png" alt="experts." />
                  </div>
                </div>
                <div>
                  {router.locale == "uz" ? (<h4>Azam Muhammadiyev</h4>) : (<h4>Азам Мухаммадиев</h4>)}
                  {router.locale == "uz" ? (<p>Grafik dizayner · Tajriba: 10 yil</p>) : (<p>Графический дизайнер · Опыт: 18 лет</p>)}
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="focs">
                  <div className="focs2">
                    <img src="/My-User-Pic-001 1 (2).png" alt="experts." />
                  </div>
                </div>
                <div>
                  {router.locale == "uz" ? (<h4>Rahmatullo Jabborov</h4>) : (<h4>Рахматулло Джаббаров</h4>)}
                  {router.locale == "uz" ? (<p>UX/UI dizayner · Tajriba: 4 yil</p>) : (<p>Графический дизайнер · Опыт: 11 лет</p>)}
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="focs">
                  <div className="focs2">
                    <img src="/My-User-Pic-001 1 (3).png" alt="experts." />
                  </div>
                </div>
                <div>
                  {router.locale == "uz" ? (<h4>Rahimjon Gaziyev</h4>) : (<h4>Рахимжон Газиев</h4>)}
                  {router.locale == "uz" ? (<p>UX/UI dizayner · Tajriba: 4 yil</p>) : (<p>Графический дизайнер · Опыт: 15 лет</p>)}
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="focs">
                  <div className="focs2">
                    <img src="/PicNurmatovO.png" alt="experts." />
                  </div>
                </div>
                <div>
                  {router.locale == "uz" ? (<h4>Nurmatov Odiljon</h4>) : (<h4>Нурматов Одилжон</h4>)}
                  {router.locale == "uz" ? (<p>UX/UI dizayner · Tajriba: 4 yil</p>) : (<p>UX/UI дизайнер · Опыт: 4 года</p>)}
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="focs">
                  <div className="focs2">
                    <img src="/My-User-Pic-001 1 (4).png" alt="experts." />
                  </div>
                </div>
                <div>
                  {router.locale == "uz" ? (<h4>Baxtiyorjon Gaziyev</h4>) : (<h4>Бахтийоржон Газиев</h4>)}
                  {router.locale == "uz" ? (<p>UX/UI dizayner · Tajriba: 4 yil</p>) : (<p>UX/UI дизайнер · Опыт: 4 года</p>)}
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="focs">
                  <div className="focs2">
                    <img src="/My-User-Pic-001 1 (5).png" alt="experts." />
                  </div>
                </div>
                <div>
                  <h4>Sarvarbek Abdupattoyev</h4>
                  <p>UX/UI dizayner · Tajriba: 4 yil</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="focs">
                  <div className="focs2">
                    <img src="/My-User-Pic-001 1 (6).png" alt="experts." />
                  </div>
                </div>
                <div>
                  <h4>Shokhrukh Rakhmatov</h4>
                  <p>UX/UI dizayner · Tajriba: 4 yil</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="focs">
                  <div className="focs2">
                    <img src="/My-User-Pic-001 1 (7).png" alt="experts." />
                  </div>
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
