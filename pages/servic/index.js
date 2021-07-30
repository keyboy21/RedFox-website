import MainLayout from "../../components/MainLayout.js";


export default function Service({ children}) {
  return (
    <MainLayout>
      <div className="servic">
        <div className="container">
          <h2>
            Biz ijod olamida yashaydigan kichik bir oilamiz <span>: )</span>
          </h2>
          <div className="row">
            <div className="col-lg-4">
              <p>Web application development</p>
            </div>
            <div className="col-lg-8">
              <div className="right">
                <div><div>Rasim Betta</div>
                  <div><h4>Web & UX/UI design</h4><p>Barchamiz bilamizki hozirgi kunda mobil aloqa vositasiz tasavvur qila olmaymiz. Ushbu bo’limda siz iOS tizimida ishlovchi mobil qurilmalar dasturlari dizayni, ularni ishlash jaroyoni lavhalarini ko’rishingiz.</p><span>Shu yo‘nalishdagi ishlarimiz 128 ta →</span></div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </MainLayout>
  )
}
