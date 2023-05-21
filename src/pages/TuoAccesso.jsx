import React from 'react'
import Header from '../components/Header'
import Chi_cimo from './Chi_cimo'
import Perche from './Perche'
import Frequently from './Frequently'
import Contact from './Contact'
import Footer from '../components/Footer'
const TuoAccesso = () => {
    return (
        <div>
           <Header/>
            <div className='accessAiDiv container-xxl'>
                <div className=' row hpDiv'>
                    <div className='col-12 '>
                        <h1>ll tuo accesso al sole</h1>
                    </div>
                    <div className='col-12'>
                        <div className='row rowpDiv'>
                            <div className='col-12'>
                                <p className='mb-0'>Sistemi fotovoltaici intelligenti ad uso residenziale, anche in assenza di tetto.</p>
                            </div>
                            <div className='col-12'>
                                <p>La tua fonte d' energia, gratuita e sostenibile</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Chi_cimo/>
            <Perche/>
            <Frequently/>
            <Contact/>
        </div>
      
    )
}

export default TuoAccesso