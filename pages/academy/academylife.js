import Academy from "./index.js";

const academylife = () => {
  return <Academy>

    <div className="life">
      <div className="row">
        <div className="accordion d-flex  " id="accordionExample">
          <div className="items">
            <div className="accordion-item ">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  2021
                </button>
              </h2>
            </div>
            <div className="accordion-item ">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  2020
                </button>
              </h2>
            </div>
            <div className="accordion-item ">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  2019
                </button>
              </h2>

            </div>
            <div className="accordion-item ">
              <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  2018
                </button>
              </h2>
            </div>
            <div className="accordion-item ">
              <h2 className="accordion-header" id="headingFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  2017
                </button>
              </h2>
            </div>
          </div>

          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className="d-flex align-items-start">
                <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Qanday qilib qisqa vaqt ichida professional dizayner bo&apos;lish mumkin?</button>
                  <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">RedFox Agentligiga shogird qabul qilamiz</button>
                  <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Veb & UX/UI bo&apos;yicha shogirdlikka sanoqli joylar qoldi.</button>
                  <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">RedFox menejment jamoasiga qo&apos;shilishni istaysizmi?</button>
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                  <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                    <h3>Qanday qilib qisqa vaqt ichida profizayner bo&apos;lish mumkin?</h3>
                    <p>119 marta ko’rildi • 04 sentyabr 2020</p>
                    <div className="photo col-12">
                      <img src="/image 10bootcamp.png" alt="bootcamp." />
                    </div>
                    <h4>Texnologiyalar va dasturlar:</h4>
                    <ul>
                      <li><span>•</span> SMM dizayn</li>
                      <li><span>•</span> Grafik dizayn</li>
                      <li><span>•</span> Adobe Photoshop</li>
                      <li><span>•</span> Adobe Illustrator</li>
                      <li><span>•</span> Corel Draw va yana 5 dan ziyod
                        texnologiya va dasturlar</li>
                    </ul>
                    <h4>Mutaxassisimiz:</h4>
                    <ul>
                      <li><span>•</span> Jaxongir Gulomov — 8 yillik tajribaga ega grafik dizayner.</li>
                    </ul>
                    <h4>Batafsil: <a href='https://teletype.in/@redfoxuz/grafikdizayn2021'>https://teletype.in/@redfoxuz/grafikdizayn2021</a></h4>
                  </div>
                  <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                    <h3>Qanday qilib qisqa vaqt ichida profizayner bo&apos;lish mumkin?</h3>
                    <p>119 marta ko’rildi • 04 sentyabr 2020</p>
                    <div className="photo col-12">
                      <img src="/image 10bootcamp.png" alt="bootcamp." />
                    </div>
                    <h4>Texnologiyalar va dasturlar:</h4>
                    <ul>
                      <li><span>•</span> SMM dizayn</li>
                      <li><span>•</span> Grafik dizayn</li>
                      <li><span>•</span> Adobe Photoshop</li>
                      <li><span>•</span> Adobe Illustrator</li>
                      <li><span>•</span> Corel Draw va yana 5 dan ziyod
                        texnologiya va dasturlar</li>
                    </ul>
                    <h4>Mutaxassisimiz:</h4>
                    <ul>
                      <li><span>•</span> Jaxongir Gulomov — 8 yillik tajribaga ega grafik dizayner.</li>
                    </ul>
                    <h4>Batafsil: <a href='https://teletype.in/@redfoxuz/grafikdizayn2021'>https://teletype.in/@redfoxuz/grafikdizayn2021</a></h4>
                  </div>
                  <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                    <h3>Qanday qilib qisqa vaqt ichida profizayner bo&apos;lish mumkin?</h3>
                    <p>119 marta ko’rildi • 04 sentyabr 2020</p>
                    <div className="photo col-12">
                      <img src="/image 10bootcamp.png" alt="bootcamp." />
                    </div>
                    <h4>Texnologiyalar va dasturlar:</h4>
                    <ul>
                      <li><span>•</span> SMM dizayn</li>
                      <li><span>•</span> Grafik dizayn</li>
                      <li><span>•</span> Adobe Photoshop</li>
                      <li><span>•</span> Adobe Illustrator</li>
                      <li><span>•</span> Corel Draw va yana 5 dan ziyod
                        texnologiya va dasturlar</li>
                    </ul>
                    <h4>Mutaxassisimiz:</h4>
                    <ul>
                      <li><span>•</span> Jaxongir Gulomov — 8 yillik tajribaga ega grafik dizayner.</li>
                    </ul>
                    <h4>Batafsil: <a href='https://teletype.in/@redfoxuz/grafikdizayn2021'>https://teletype.in/@redfoxuz/grafikdizayn2021</a></h4>
                  </div>
                  <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                    <h3>Qanday qilib qisqa vaqt ichida profizayner bo&apos;lish mumkin?</h3>
                    <p>119 marta ko’rildi • 04 sentyabr 2020</p>
                    <div className="photo col-12">
                      <img src="/image 10bootcamp.png" alt="bootcamp." />
                    </div>
                    <h4>Texnologiyalar va dasturlar:</h4>
                    <ul>
                      <li><span>•</span> SMM dizayn</li>
                      <li><span>•</span> Grafik dizayn</li>
                      <li><span>•</span> Adobe Photoshop</li>
                      <li><span>•</span> Adobe Illustrator</li>
                      <li><span>•</span> Corel Draw va yana 5 dan ziyod
                        texnologiya va dasturlar</li>
                    </ul>
                    <h4>Mutaxassisimiz:</h4>
                    <ul>
                      <li><span>•</span> Jaxongir Gulomov — 8 yillik tajribaga ega grafik dizayner.</li>
                    </ul>
                    <h4>Batafsil: <a href='https://teletype.in/@redfoxuz/grafikdizayn2021'>https://teletype.in/@redfoxuz/grafikdizayn2021</a></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className="d-flex align-items-start">
                <div className="nav flex-column nav-pills" id="v-pills-tab2" role="tablist" aria-orientation="vertical">
                  <button className="nav-link active" id="v-pills-home-tab2" data-bs-toggle="pill" data-bs-target="#v-pills-home2" type="button" role="tab" aria-controls="v-pills-home2" aria-selected="true">Grafik Dizayn bo&apos;yicha Bootcamp kurslarida 3ta joy qoldi.</button>
                  <button className="nav-link" id="v-pills-profile-tab2" data-bs-toggle="pill" data-bs-target="#v-pills-profile2" type="button" role="tab" aria-controls="v-pills-profile2" aria-selected="false">Shu kunlarda iOS (mobil operatsion tizim)ni ham test qilib ko&apos;rayotgandim.</button>
                  <button className="nav-link" id="v-pills-messages-tab2" data-bs-toggle="pill" data-bs-target="#v-pills-messages2" type="button" role="tab" aria-controls="v-pills-messages2" aria-selected="false">RedFox akademiyasida bootcamp asosida qabul boshlandi.</button>
                  <button className="nav-link" id="v-pills-settings-tab2" data-bs-toggle="pill" data-bs-target="#v-pills-settings2" type="button" role="tab" aria-controls="v-pills-settings2" aria-selected="false">RedFox Akademiyasidan 2021 yilgacha chegirmali takliflar</button>
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                  <div className="tab-pane fade show active" id="v-pills-home2" role="tabpanel" aria-labelledby="v-pills-home-tab2"><h1>Qanday qier bo&apos;lish mumkin?</h1></div>
                  <div className="tab-pane fade" id="v-pills-profile2" role="tabpanel" aria-labelledby="v-pills-profile-tab2"><h1>Qanday qilib qisr bo&apos;lish mumkin?</h1></div>
                  <div className="tab-pane fade" id="v-pills-messages2" role="tabpanel" aria-labelledby="v-pills-messages-tab2"><h1>Qanday qilib qisqa dizayner bo&apos;lish mumkin?</h1></div>
                  <div className="tab-pane fade" id="v-pills-settings2" role="tabpanel" aria-labelledby="v-pills-settings-tab2"><h1>Qanzayner bo&apos;lish mumkin?</h1></div>
                </div>
              </div>
            </div>
          </div>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className="d-flex align-items-start">
                <div className="nav flex-column nav-pills me-3" id="v-pills-tab3" role="tablist" aria-orientation="vertical">
                  <button className="nav-link active" id="v-pills-home-tab3" data-bs-toggle="pill" data-bs-target="#v-pills-home3" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">RedFox Akademiyasidan 2021 yilgacha chegirmali takliflar</button>
                  <button className="nav-link" id="v-pills-profile-tab3" data-bs-toggle="pill" data-bs-target="#v-pills-profile3" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">RedFox Akademiyasida Veb dasturlash</button>
                  <button className="nav-link" id="v-pills-messages-tab3" data-bs-toggle="pill" data-bs-target="#v-pills-messages3" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">RedFox Agentligiga shogird qabul qilamiz</button>
                  <button className="nav-link" id="v-pills-settings-tab3" data-bs-toggle="pill" data-bs-target="#v-pills-settings3" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Veb & UX/UI bo&apos;yicha shogirdlikka sanoqli joylar qoldi.</button>
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                  <div className="tab-pane fade show active" id="v-pills-home3" role="tabpanel" aria-labelledby="v-pills-home-tab"><h1>Qanday qilib qisqa vaqt ichida professional dizayner bo&apos;lish mumkin?</h1></div>
                  <div className="tab-pane fade" id="v-pills-profile3" role="tabpanel" aria-labelledby="v-pills-profile-tab"><h1>Texnologiyalar va dasturlar:</h1></div>
                  <div className="tab-pane fade" id="v-pills-messages3" role="tabpanel" aria-labelledby="v-pills-messages-tab"><h1>Qanday qilib qisqa vaqt ichida professional dizayner bo&apos;lish mumkin?</h1></div>
                  <div className="tab-pane fade" id="v-pills-settings3" role="tabpanel" aria-labelledby="v-pills-settings-tab"><h1>Qanday qilib qisqa vaqt ichida professional dizayner bo&apos;lish mumkin?</h1></div>
                </div>
              </div>
            </div>
          </div>
          <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className="d-flex align-items-start">
                <div className="nav flex-column nav-pills me-3" id="v-pills-tab4" role="tablist" aria-orientation="vertical">
                  <button className="nav-link active" id="v-pills-home-tab4" data-bs-toggle="pill" data-bs-target="#v-pills-home4" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">RedFox menejment jamoasiga qo&apos;shilishni istaysizmi?</button>
                  <button className="nav-link" id="v-pills-profile-tab4" data-bs-toggle="pill" data-bs-target="#v-pills-profile4" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Grafik Dizayn bo&apos;yicha Bootcamp kurslarida 3ta joy qoldi.</button>
                  <button className="nav-link" id="v-pills-messages-tab4" data-bs-toggle="pill" data-bs-target="#v-pills-messages4" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Shu kunlarda iOS (mobil operatsion tizim)ni ham test qilib ko&apos;rayotgandim.</button>
                  <button className="nav-link" id="v-pills-settings-tab4" data-bs-toggle="pill" data-bs-target="#v-pills-settings4" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">RedFox akademiyasida bootcamp asosida qabul boshlandi.</button>
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                  <div className="tab-pane fade show active" id="v-pills-home4" role="tabpanel" aria-labelledby="v-pills-home-tab"><h1>Qanday qilib qisqa vaqt ichida professional dizayner bo&apos;lish mumkin?</h1></div>
                  <div className="tab-pane fade" id="v-pills-profile4" role="tabpanel" aria-labelledby="v-pills-profile-tab"><h1>Qanday qilib qisqa vaqt ichida professional dizayner bo&apos;lish mumkin?</h1></div>
                  <div className="tab-pane fade" id="v-pills-messages4" role="tabpanel" aria-labelledby="v-pills-messages-tab"><h1>Qanday qilib qisqa vaqt ichida professional dizayner bo&apos;lish mumkin?</h1></div>
                  <div className="tab-pane fade" id="v-pills-settings4" role="tabpanel" aria-labelledby="v-pills-settings-tab"><h1>Qanday qilib qisqa vaqt ichida professional dizayner bo&apos;lish mumkin?</h1></div>
                </div>
              </div>
            </div>
          </div>
          <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className="d-flex align-items-start">
                <div className="nav flex-column nav-pills me-3" id="v-pills-tab5" role="tablist" aria-orientation="vertical">
                  <button className="nav-link active" id="v-pills-home-tab5" data-bs-toggle="pill" data-bs-target="#v-pills-home5" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">RedFox Akademiyasidan 2021 yilgacha chegirmali takliflar</button>
                  <button className="nav-link" id="v-pills-profile-ta5b" data-bs-toggle="pill" data-bs-target="#v-pills-profile5" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">RedFox Akademiyasidan 2021 yilgacha chegirmali takliflar</button>
                  <button className="nav-link" id="v-pills-messages-tab5" data-bs-toggle="pill" data-bs-target="#v-pills-messages5" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">RedFox Akademiyasida Veb dasturlash</button>
                  <button className="nav-link" id="v-pills-settings-tab5" data-bs-toggle="pill" data-bs-target="#v-pills-settings5" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">RedFox akademiyasida bootcamp asosida qabul boshlandi.</button>
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                  <div className="tab-pane fade show active" id="v-pills-home5" role="tabpanel" aria-labelledby="v-pills-home-tab"><h1>Qanday qilib qisqa vaqt ichida professional dizayner bo&apos;lish mumkin?</h1></div>
                  <div className="tab-pane fade" id="v-pills-profile5" role="tabpanel" aria-labelledby="v-pills-profile-tab"><h1>Qanday qilib qisqa vaqt ichida professional dizayner bo&apos;lish mumkin?</h1></div>
                  <div className="tab-pane fade" id="v-pills-messages5" role="tabpanel" aria-labelledby="v-pills-messages-tab"><h1>Qanday qilib qisqa vaqt ichida professional dizayner bo&apos;lish mumkin?</h1></div>
                  <div className="tab-pane fade" id="v-pills-settings5" role="tabpanel" aria-labelledby="v-pills-settings-tab"><h1>Qanday qilib qisqa vaqt ichida professional dizayner bo&apos;lish mumkin?</h1></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Academy>;
};

export default academylife;
