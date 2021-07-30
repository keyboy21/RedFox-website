import Agency from "./index.js";

const contact = () => {
  return (
    <Agency>
      <div className="contact">
        <div className="contact_top">
          <div className="container">
            <div className="row justify-content-md-around">
              <div className="col-md-3 col-lg-3">
                <h4>Shtab-1</h4>
                <p>(Toshmi-2 filial)</p>
                <ul>
                  <li>• Grafik dizayn </li>
                  <li>• Marketing & Naming</li>
                  <li>• 3D grafika & Animatsiya</li>
                </ul>
                <a href="tel:97-778-50-08">+998 97 778 5008</a>
                <div className="address">
                  <i className="fas fa-map-marker-alt"></i>
                  <p>
                    Toshkent sh., Shayhontohur tum., Farovon 3-tor ko’cha, 2 uy.
                  </p>
                </div>
              </div>

              <div className="col-md-3 col-lg-3">
                <h4>Shtab-2</h4>
                <p>(Malika filiali)</p>
                <ul>
                  <li>• Web & UX/UI design</li>
                  <li>• Telegram bot tayyorlash</li>
                  <li>• Web application development</li>
                </ul>
                <a href="tel:97-778-20-07">+998 97 778 2007</a>
                <div className="address">
                  <i className="fas fa-map-marker-alt"></i>
                  <p>
                    Toshkent sh., Shayhontohur tum., Arxitektorlar ko’chasi, 11
                    uy.
                  </p>
                </div>
              </div>

              <div className="col-md-3 col-lg-3">
                <h4>Office-7</h4>
                <p>(Novza filiali)</p>
                <ul>
                  <li>• SMM dizayn</li>
                  <li>• Akademiya</li>
                  <li>• Marketing & SMM</li>
                </ul>
                <a href="tel:33-778-50-08">+998 33 778 5008</a>
                <div className="address">
                  <i className="fas fa-map-marker-alt"></i>
                  <p>
                    Toshkent shahri, Chilonzor tum., Chilonzor-1 ko’cha, 2 uy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact_bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <h6>
                  Istalgan vaqt buyurtma bering:
                  <span>
                    <a href="tel:+99897-778-50-08"> 97 778 5008</a>
                  </span>
                </h6>
                <p>
                  Bizdan mijozlarimiz, tezkor xizmat, sifatli ishlar, ajoyib
                  muomila va shu kabi ko‘plab holatlardan xursand bo‘lishadi
                  hamda o‘z fikrlarini bildirishadi.
                </p>
                <a href="https://t.me/RedFoxManager" target="_blank">
                  <h3> Online yozing</h3>
                </a>
              </div>
              <div className="col-md-6 col-lg-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.5239832951!2d69.26186581566945!3d41.34096330683436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b3a40ffcc19%3A0xbfedd67c137b1d4e!2sRedFox%20IT%20company!5e0!3m2!1suz!2s!4v1626076276090!5m2!1suz!2s"
                  loading="lazy" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </Agency>
  );
};

export default contact;
