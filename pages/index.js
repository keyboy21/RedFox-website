import MainLayout from "../components/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <header>
        <div className="container">
          <div className="row">
            <div className="header_top">
              <h2>
                Bizga ishonch bildirgan kompaniyalar <span>250+</span>{" "}
              </h2>
              <p>
                Biznesda ham hayotda ham eng muhim omil bu ishonchdir.Bizga
                ishonch bildirgan kompaniyalar qatorida sizni ham ko'rishdan
                mamnunmiz.
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
    </MainLayout>
  );
}
