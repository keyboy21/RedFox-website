import MainLayout from "../components/MainLayout";
import ScrollAnimation from "react-animate-on-scroll";

export default function Home({ data, img }) {
  const SliderFirsFilter = data.filter((slide) => {
    return slide.id <= 14;
  });
  const SliderSecondFilter = data.filter((slider) => {
    return slider.id >= 15 && slider.id <= 28;
  });
  const SliderThreeFilter = data.filter((slider) => {
    return slider.id >= 29 && slider.id <= 42;
  });
  const SliderFourFilter = data.filter((slider) => {
    return slider.id >= 43 && slider.id <= 55;
  });
  const SliderFiveFilter = data.filter((slider) => {
    return slider.id >= 56 && slider.id <= 69;
  });

  const ImageFilter1 = img.filter((slide) => {
    return slide.id >= 2 && slide.id <= 3;
  });

  const ImageFilter2 = img.filter((slide) => {
    return slide.id <= 1;
  });

  const ImageFilter3 = img.filter((slide) => {
    return slide.id >= 4 && slide.id <= 7;
  });

  const ImageFilter4 = img.filter((slide) => {
    return slide.id >= 8 && slide.id <= 13;
  });

  return (
    <MainLayout>
      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
        <header>
          <div className="container">
            <div className="row">
              <div className="header_top col-lg-10">
                <h2>
                  Bizga ishonch bildirgan kompaniyalar <span>250+</span>{" "}
                </h2>
                <p>
                  Biznesda ham hayotda ham eng muhim omil bu ishonchdir. <br />{" "}
                  Bizga ishonch bildirgan kompaniyalar qatorida sizni ham
                  ko'rishdan mamnunmiz.
                </p>
              </div>
              <div className="header_bottom">
                <div className="text_line">
                  <span>Enterprise 30+</span>
                </div>
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
                <img
                  rel="preload"
                  as="image"
                  src={`https://redfox.frilansus.com/${slider.logo}`}
                  alt="partner."
                  decoding="auto"
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
                <img
                  rel="preload"
                  as="image"
                  src={`https://redfox.frilansus.com/${slider.logo}`}
                  alt="partner."
                  decoding="auto"
                />
              </div>
            );
          })}
        </div>
      </div>

      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
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
                <img
                  rel="preload"
                  as="image"
                  src={`https://redfox.frilansus.com/${slider.logo}`}
                  alt="partner."
                  decoding="auto"
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
                <img
                  rel="preload"
                  as="image"
                  src={`https://redfox.frilansus.com/${slider.logo}`}
                  alt="partner."
                  decoding="auto"
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
                <img
                  rel="preload"
                  as="image"
                  src={`https://redfox.frilansus.com/${slider.logo}`}
                  alt="partner."
                  decoding="auto"
                />
              </div>
            );
          })}
        </div>
      </div>

      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
        <header>
          <div className="container">
            <div className="row">
              <div className="header_top col-lg-10">
                <h2>
                  Muvaffaqiyatli topshirilgan ishlarimiz soni <span>1250+</span>
                </h2>
                <p>
                  Biz o'z ishimizni yaxshi ko'rib bajaramiz. Siz yoki
                  kompaniyangiz uchun nimayiki topshirsangiz, biz uni
                  bajarishdan xursand bo'lamiz.
                </p>
              </div>
              <div className="header_bottom">
                <div className="text_line">
                  <span>PORTFOLIO</span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
        <section>
          <div className="container">
            <div className="row rev">
              <div className="col-lg-4 col-md-4 derzi">
                {ImageFilter1.map((port) => (
                  <div className="col-md-12 col-lg-12 col-5" key={port.id}>
                    <img
                      rel="preload"
                      as="image"
                      src={`https://redfox.frilansus.com/${port.logo}`}
                      alt="najot."
                      decoding="auto"
                    />
                    <p>{port.title_uz}</p>
                  </div>
                ))}
              </div>

              {ImageFilter2.map((port) => (
                <div className="col-lg-8 col-md-8" key={port.id}>
                  <img
                    rel="preload"
                    as="image"
                    src={`https://redfox.frilansus.com/${port.logo}`}
                    alt="nurafshon."
                    decoding="auto"
                  />
                  <p>{port.title_uz}</p>
                </div>
              ))}
            </div>

            <div className="row bottom">
              {ImageFilter3.map((port) => (
                <div className="col-lg-6 col-md-6" key={port.id}>
                  <img
                    rel="preload"
                    as="image"
                     src={`https://redfox.frilansus.com/${port.logo}`}
                    alt="najot."
                    decoding="auto"
                  />
                  <p>{port.title_uz}</p>
                </div>
              ))}
            </div>

            <div className="row">
              {ImageFilter4.map((port) => (
                <div className="col-lg-4 col-md-4 col-6" key={port.id}>
                  <img
                    rel="preload"
                    as="image"
                     src={`https://redfox.frilansus.com/${port.logo}`}
                    alt="najot."
                    decoding="auto"
                  />
                  <p>{port.title_uz}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
        <header>
          <div className="container">
            <div className="row">
              <div className="header_top col-lg-8">
                <h2>
                  Mahalliy bozordagi tajribamiz <span>5 yil </span>
                </h2>
                <p>
                  RedFox dizayn studiyasi bir vaqtda ko‘plab kompaniyalar bilan
                  ishlaydigan tajribali katta jamoadir. Mijozlarimiz qatorida
                  sizni ham ko’rishdan mamnunmiz.
                </p>
              </div>
              <div className="header_bottom">
                <div className="text_line">
                  <span>XIZMATLARIMIZ</span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </ScrollAnimation>

      {/* Skills */}
      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
        <div className="skills">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div className="logos">
                  <div className="row">
                    <div className="col-3 col-md-12 col-lg-12">
                      <i className="fad fa-file-signature"></i>
                    </div>
                    <div className="col-8 col-md-12 col-lg-12">
                      <h4>Naming</h4>
                      <div className="d-flex justify-content-between">
                        <p>Brend nomini topish</p>
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
                        <p>Savdo belgisini yaratish</p>
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
                        <p>Barcha turdagi xizmatlar</p>
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
                        <p>Web va Mobile dizayn</p>
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
                        <p>Qadoqlash dizayni</p>
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
                        <p>Banner va Flayer dizayni</p>
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
                        <p>Ijtimoiy tarmog’lar uchun</p>
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
                    Yana shu kabi ko‘plab xizmatlar mavjud
                    <div>
                      <i className="far fa-long-arrow-right"></i>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
        <header>
          <div className="container">
            <div className="row">
              <div className="header_top col-lg-8">
                <h2>
                  Jamoamizda ekspert va mutaxassislar <span>40+</span>
                </h2>
                <p>
                  RedFox katta jamoadan tashkil topgan dizayn studiya.
                  Shuningdek, jamoamizda Frilansus.com baholash tizimida Top 10
                  kuchli dizaynerlar qatoriga kiruvchi 5 va 4 yulduzli
                  dizaynerlar ham bor.
                </p>
              </div>
              <div className="header_bottom">
                <div className="text_line">
                  <span>Jamoa a‘zolari</span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
        <div className="experts">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div>
                  <img src="/My-User-Pic-001 1mavlonbek.png" />
                </div>
                <div>
                  <h4>Polatov Mavlonbek</h4>
                  <p>UX/UI dizayner · Tajriba: 4 yil</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div>
                  <img src="/My-User-Pic-001 1 (1).png" />
                </div>
                <div>
                  <h4>Azam Muhammadiyev</h4>
                  <p>Grafik dizayner · Tajriba: 10 yil</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div>
                  <img src="/My-User-Pic-001 1 (2).png" />
                </div>
                <div>
                  <h4>Rahmatullo Jabborov</h4>
                  <p>UX/UI dizayner · Tajriba: 4 yil</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div>
                  <img src="/My-User-Pic-001 1 (3).png" />
                </div>
                <div>
                  <h4>Rahimjon Gaziyev</h4>
                  <p>UX/UI dizayner · Tajriba: 4 yil</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div>
                  <img src="/PicNurmatovO.png" />
                </div>
                <div>
                  <h4>Nurmatov Odiljon</h4>
                  <p>UX/UI dizayner · Tajriba: 4 yil</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div>
                  <img src="/My-User-Pic-001 1 (4).png" />
                </div>
                <div>
                  <h4>Baxtiyorjon Gaziyev</h4>
                  <p>UX/UI dizayner · Tajriba: 4 yil</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div>
                  <img src="/My-User-Pic-001 1 (5).png" />
                </div>
                <div>
                  <h4>Sarvarbek Abdupattoyev</h4>
                  <p>UX/UI dizayner · Tajriba: 4 yil</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div>
                  <img src="/My-User-Pic-001 1 (6).png" />
                </div>
                <div>
                  <h4>Shokhrukh Rakhmatov</h4>
                  <p>UX/UI dizayner · Tajriba: 4 yil</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div>
                  <img src="/My-User-Pic-001 1 (7).png" />
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

      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
        <header>
          <div className="container">
            <div className="row">
              <div className="header_top col-lg-8 col-md-11">
                <h2>
                  Mijozlarni qo‘llab quvvatlash, support <span>24/7</span>
                </h2>
                <p>
                  RedFox dizayn studiyasi bir vaqtda ko’plab kompaniyalar bilan
                  ishlaydigan tajribali katta jamoadir. Mijozlarimiz qatorida
                  sizni ham ko’rishdan mamnunmiz.
                </p>
              </div>
              <div className="header_bottom">
                <div className="text_line">
                  <span>Mijozlar fikri</span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
        <div className="reason">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="bg_item">
                  <div>
                    <img src="/My-User-Pic-001 1.png" />
                  </div>
                  <h5>Bahodir Akbarov</h5>
                  <span>Venox kompaniyasi asoschisi</span>
                  <p>
                    Bolalar baraka topila qo‘l ko‘zilar dard ko‘rmasin, bosib
                    chiqarishdan chiqqanidan keyin ko‘rib ko‘z to‘ymayabdi juda
                    chiroyli chiqdi mosholloh, gapyo‘q hammanglarga rahmat katta
                  </p>
                  <div>
                    <img src="/Group.svg" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="bg_item">
                  <div>
                    <img src="/Frame 8.png" />
                  </div>
                  <h5>Rixsiboy Umarov</h5>
                  <span>ITGO asoschisi</span>
                  <p>
                    Ishlar bilan bo‘lib sizlarga tashakkurimizni ham ayta
                    olmadik, qhilingan ishdan hamma mamnun bo‘ldi, qilgan
                    ishinglar hammaga yoqdi, did bilan yondoshganilar bilinib
                    turibti. Sizlar bilan hamkorlik qilganimizdan xursandmiz.
                  </p>
                  <div>
                    <img src="/Group1.svg" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="bg_item">
                  <div>
                    <img src="/Frame 8 (1).png" />
                  </div>
                  <h5>Qudrat Abdurahimov</h5>
                  <span>GITA Kompaniyasi Founderi</span>
                  <p>
                    Xammaga katta rahmat yigitlar. Nasib qilsa yaxshi kunlarda
                    ko‘rishamiz. Karantin tugasa ko‘rishib qolsak,
                    qo‘llaringizni ushlab rahmat aytib qo‘yaman.
                  </p>
                  <div>
                    <img src="/Groupgita.svg" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="bg_item">
                  <div>
                    <img src="/Frame 8 (2).png" />
                  </div>
                  <h5>Sobirjon Yaxshiyev</h5>
                  <span>Sunnah product asoschisi</span>
                  <p>
                    Uzingiz va shogirdlarni extiyot qiling ko‘p kerak bolasizlar
                    ko‘pchlika. O‘zbekistonda dizayin sohasi tanazzulga
                    uchramasin
                  </p>
                  <div>
                    <img src="/Groupsunnah.svg" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="bg_item">
                  <div>
                    <img src="/My-User-Pic-001 2.png" />
                  </div>
                  <h5>Abdurahmon Nasriddinov</h5>
                  <span>Sardor brendi Founderi</span>
                  <p>
                    Ishingizni mahsulini kurib xalovat qilyapsizmi? Qo‘llaring
                    dard ko‘rmasin mexnatlaring halol
                  </p>
                  <div>
                    <img src="/Sardorsardor.svg" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="bg_item">
                  <div>
                    <img src="/Frame 8 (3).png" />
                  </div>
                  <h5>Ahmad Saidov</h5>
                  <span>Greenmotors asoschisi</span>
                  <p>
                    Qolgan dizaynlarham zo‘r chiqdi, qiyin bo‘ldi tanlash, ming
                    bor uzur, ishlarilarga rivoj bersin, xamma qatnashganlarga
                    raxmat, salomat bo‘lilar.
                  </p>
                  <div>
                    <img src="/Слой x0020 1green.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
        <header>
          <div className="container">
            <div className="row">
              <div className="header_top col-lg-8">
                <h2>
                  Nima uchun bizga ishonch bildirishadi? <span>5 ta </span>sabab
                </h2>
                <p>
                  RedFox dizayn studiyasi bir vaqtda ko’plab kompaniyalar bilan
                  ishlaydigan tajribali katta jamoadir. Mijozlarimiz qatorida
                  sizni ham ko’rishdan mamnunmiz.
                </p>
              </div>
              <div className="header_bottom">
                <div className="text_line">
                  <span>afzalliklar</span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
        <div className="belive">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div>
                  <img src="/1one .svg"></img>
                </div>
                <span>Tanlash imkoniyati ko'pligi</span>
                <p>
                  RedFox sizning buyurtmangiz uchun 10 dan ortiq sara ishlar
                  jamlanmasini taqdim qiladi va siz ularning ichidan eng
                  sarasini tanlab olishingiz mumkin.
                </p>
              </div>
              <div className="col-lg-4">
                <div>
                  <img src="/2two.svg"></img>
                </div>
                <span>Deyarli 24/7 rejimda muloqot mavjudligi</span>
                <p>
                  Xalqaro miqyosda tan olingan va eng a'lo sifatda baholangan
                  24/7 menejerlar support'i ishlashga harakat qilmoqdamiz,
                  buyurtmangiz yakunlanguncha sizning xizmatingizdamiz.
                </p>
              </div>
              <div className="col-lg-4">
                <div>
                  <img src="/3three.svg"></img>
                </div>
                <span>Sohalar qamrovi kengligi</span>
                <p>
                  Studiyada dizaynning barcha sohalari bo'yicha mutaxassislar
                  borligi sizning barcha ishingiz bir joyda, shuningdek uyg‘un
                  holatda mukammal bitishini ta'minlaydi.
                </p>
              </div>
              <div className="col-lg-4">
                <div>
                  <img src="/4four.svg"></img>
                </div>
                <span>Yirik loyihalardagi tajriba</span>
                <p>
                  Bugungi kunga qadar studiyamiz 1000 dan ortiq muvaffaqiyatli
                  ish topshirgan. Hamda ko'plab o'rta biznes egalari va
                  (Enterprise) katta korxonalar bilan amalga oshirilgan
                  loyihalar.
                </p>
              </div>
              <div className="col-lg-4">
                <div>
                  <img src="/5five.svg"></img>
                </div>
                <span>Eng muhimi</span>
                <p>
                  Biz o'z kasbimizni sevamiz va barchasini chin dildan
                  bajaramiz. Bu ham albatta sizning foydangizga. Qolganini
                  bizning Portfolio{" "}
                  <a href="https://t.me/portfolius" target="_blank">
                    (https://t.me/portfolius)
                  </a>{" "}
                  gapirsin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
        <header>
          <div className="container">
            <div className="row">
              <div className="header_top col-lg-8">
                <h2>
                  Istalgan vaqt buyurtma bering: <span>71 200 5008 </span>
                </h2>
                <p>
                  Bizdan mijozlarimiz, tezkor xizmat, sifatli ishlar, ajoyib
                  muomila va shu kabi ko’plab holatlardan hursand bo’lishadi
                  hamda o’z fikrlarini bildirishadi.
                </p>
              </div>
              <div className="write col-lg-12">
                <a href="https://t.me/RedFoxManager" target="_blank" rel="noopener">
                  <h3> Online yozing</h3>
                </a>
              </div>
            </div>
          </div>
        </header>
      </ScrollAnimation>
    </MainLayout>
  );
}

// getServerSideProps
// getStaticProps
export async function getStaticProps() {
  const res = await fetch(`https://redfox.frilansus.com/api/apipartner`);
  const data = await res.json();
  const portfolio = await fetch(
    `https://redfox.frilansus.com/api/apiportfolio`
  );
  const img = await portfolio.json();
  return { props: { data, img } };
}
