import React from 'react'
import cris from '../images/crestion.png'
import fran from '../images/france.png'
import mass from '../images/massio.png'
import rec from '../images/recever.png'
import sol from '../images/solar.png'
import lefCom from '../images/vector/letCom.png'
import rigCom from '../images/vector/rigCom.png'
import xLine from '../images/vector/xLine.png'
const Chi_cimo = () => {
  return (
    <div>
      <div className="chiMainDiv container-xxl">
        <div className=' container chiDiv'>
          <div className='row'>
            <div className='col-12 chiCol'>
              <h1>CHI SIAMO</h1>
            </div>
            <div className='contentDiv'>
              <div className='row rowOne'>
                <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12'>
                  <p>Solar innovatio e una PHI innovativa italiiana specializzata nella progettazione e realizzazione di sistemi fotovoltaici intelligenti.
                    Solar inovatio unisce alla decennale esperienza maturata nel panorama italiano nell ambito delle soluzioni fotovoltaiche un
                    approccio ingegneristico, innovativo, digitale alla principale fonte di energia rinnovabile.
                  </p>
                </div>
                <div className='col-12 col-sm-12 col-lg-12 col-md-12 mt-5'>
                  <div className='row rowTwo'>
                    <div className='carCol col-12 col-sm-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4'>
                      <div className='myCard'>
                        <div className='cardBody'>
                          <div className='imgDiv'>
                            <img className='img-fluid' src={cris} alt="cristiean" />
                          </div>
                        </div>
                        <div className='contDiv'>
                          <div className='row'>
                            <div className='col-12 nameCol'>
                              <h1>Cristian Testoni</h1>
                            </div>
                            <div className='col-12 pCol'>
                              <p>ingegnere Meccanico MBA. Ho ricoperto
                                cariche di consulente e progettista in aziende
                                meccaniche. Ho avviato come imprenditore
                                svariate iniziative in ambite Authometive e mobilita elettrica.
                              </p>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='carCol col-12 col-sm-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4'>
                      <div className='myCard'>
                        <div className='cardBody'>
                          <div className='imgDiv'>
                            <img className='img-fluid' src={fran} alt="cristiean" />
                          </div>
                        </div>
                        <div className='contDiv'>
                          <div className='row'>
                            <div className='col-12 nameCol'>
                              <h1>Francesco Gavioli</h1>
                            </div>
                            <div className='col-12 pCol'>
                              <p>Nel corso degli anni ho maturato uno
                                profonda cooscenza nella progettazione e
                                realizzazione di impianti elettrici e di energia
                                rinnovabile. Dal 2020 sono fondatore di Gaviali
                                impianti, azienda all avaguardia
                                nell installazione di impianti fotooltaici
                              </p>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='carCol col-12 col-sm-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4'>
                      <div className='myCard'>
                        <div className='cardBody'>
                          <div className='imgDiv'>
                            <img className='img-fluid' src={mass} alt="cristiean" />
                          </div>
                        </div>
                        <div className='contDiv'>
                          <div className='row'>
                            <div className='col-12 nameCol'>
                              <h1>Massimo Fabi</h1>
                            </div>
                            <div className='col-12 pCol'>
                              <p>Laurato in Cconomia e commerio mi soluzioni
                                occupato pet anni di Business Development
                                sia in multinazionali che PHL italiane in
                                differenti settori
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row nonDivrow'>
            <div className='col-12 nonDiv'>
              <p ><span><img src={lefCom} alt="" />
              </span> Non sviluppiamo pannelli fotovoltaici. ll pannello e solo una componente
                di una soluzione ingegneristica piu completa che comprende
                sensaristiche avanzate e l'integrozione can i sistemmi domotici di casa. <span><img src={rigCom} alt="" /></span>
              </p>
              <h5><span><img src={xLine} alt="" /></span> Cristian Testani <span><img src={xLine} alt="" /></span></h5>
            </div>
          </div>
          <div className='row smartDiv'>
            <div className='col-12 col-sm-12 col-md-12 col-lg-12'>
              <div className='row'>
                <div className=' smartLeftCol '>
                  <div className=' oneDiv'>
                    <div className='one'>
                      <img className='img-fluid' src={rec} alt="recever" />
                    </div>
                  </div>
                  <div className='twoDiv'>
                    <div className='two'>
                      <img className='img-fluid' src={sol} alt="recever" />
                    </div>
                  </div>
                </div>
                <div className='smartRightCol '>
                  <div className='row'>
                    <div className='col-12 sirDiv'>
                      <h2>S.I.R.I</h2>
                    </div>
                    <div className=' smartInt col-12'>
                      <h2><span className='smart'>Smart</span> Integrated Renewable Energy</h2>
                    </div>
                    <div className='smartP'>
                      <p>S.I.R.E. e il primo sistema fotovoltaico intelligente al mondo per la
                        produzione, conversiane e gestiane dell;energia salare, studiato
                        specificatamente per installazioni all interno di condomini.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chi_cimo