import React from 'react'
import ris from '../images/vector/ris.png'
import mob from '../images/vector/mobi.png'
import com from '../images/vector/com.png'
import sup from '../images/vector/super.png'
import detr from '../images/vector/detr.png'
import pro from '../images/vector/prog.png'
import cons from '../images/vector/cons.png'



const Perche = () => {
  return (
    <div>
      <div className='container-xxl '>
        <div className='card mainCard'>
          <div className='card-body'>
            <div className='container'>
              <div className='row'>
                <div className='col-12 perciCol'>
                  <h3>Perche S.I.R.E</h3>
                </div>
              </div>
              <div className='row mx-auto mt-4'>
                <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 '>
                  <div className='card CARD'>
                    <div className='card-body'>
                      <div className='row'>
                        <div className='imgCol col-12'>
                          <div className='imgDiv'>
                            <img className='img-fluid' src={ris} alt="" />
                          </div>
                        </div>
                        <div className='headCol col-12'>
                          <h4>Risparmio Energetico</h4>
                        </div>
                        <div className='pp-Col col-12'>
                          <p>Risparmia da un minimo del 60% sulla
                            bolletta fino all'indipendenza energetica
                            anche grazie alla schermatura solare
                            che consente una riduzione fino al 95%
                            dei raggi UV e quindi un minor
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=' cardCol col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 '>
                  <div className='card CARD'>
                    <div className='card-body'>
                      <div className='row'>
                        <div className='imgCol col-12'>
                          <div className='imgDiv'>
                            <img className='img-fluid' src={mob} alt="" />
                          </div>
                        </div>
                        <div className='cardP'>
                          <div className='headCol col-12'>
                            <h4>Mobilità Elettrica</h4>
                          </div>
                          <div className='pp-Col col-12'>
                            <p>L'unica soluzione che rende l’utilizzo di
                              un’auto elettrica veramente economico.
                              L’efficienza dei pannelli e le batterie di
                              accumulo garantiscono fino a 29.000
                              chilometri annui a emissioni.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 '>
                  <div className='card CARD'>
                    <div className='card-body'>
                      <div className='row'>
                        <div className='imgCol col-12'>
                          <div className='imgDiv'>
                            <img className='img-fluid' src={com} alt="" />
                          </div>
                        </div>
                        <div className='headCol col-12'>
                          <h4>Comunità Energetica</h4>
                        </div>
                        <div className='pp-Col col-12'>
                          <p>Dal concetto di condominio al concetto
                            di comunità energetica: Si.Re. è il
                            sistema che rende possibile realizzare
                            una Comunità Energetica Rinnovabile
                            senza acquisto di energia elettrica dalla

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
      <div className='smallCardDiv container-xxl g-2' >
        <div className='container'>
          <div className='row g-4 mx-auto my-auto'>
            <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3'>
              <div className='cardDiv'>
                <div>
                  <div className='row mx-auto'>
                    <div className='colOne col-12'>
                      <div className='samDiv'>
                        <img className='img-fluid' src={sup} alt="" />
                      </div>
                    </div>
                    <div className='colTwo col-12'>
                      <h4 className='hFour'>110%</h4>
                    </div>
                    <div className='colThree col-12'>
                      <p>SUPERBONUS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3'>
              <div className='cardDiv'>
                <div>
                  <div className='row mx-auto'>
                    <div className='colOne col-12'>
                      <div className='imgDiv'>
                        <img className='img-fluid' src={detr} alt="" />
                      </div>
                    </div>
                    <div className='colTwo col-12'>
                      <h4 className='hFour'>65%</h4>
                    </div>
                    <div className='colThree col-12'>
                      <p>SUPERBONUS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3'>
              <div className='cardDiv'>
                <div>
                  <div className='row mx-auto'>
                    <div className='colOne col-12'>
                      <div className='imgDiv'>
                        <img className='img-fluid' src={pro} alt="" />
                      </div>
                    </div>
                    <div className='colTwo col-12'>
                      <h4 className='hFour'>110%</h4>
                    </div>
                    <div className='colThree col-12'>
                      <p>Detrazione DOMOTICA</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3'>
              <div className='cardDiv'>
                <div>
                  <div className='row mx-auto'>
                    <div className='colOne col-12'>
                      <div className='samDiv'>
                        <img className='img-fluid' src={cons} alt="" />
                      </div>
                    </div>
                    <div className='colTwo col-12'>
                      <p style={{ marginBottom: 0 }}>Progettazione</p>

                    </div>
                    <div className='colTwo col-12'>
                      <p>personalizzata</p>
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

export default Perche