import React from 'react'
import neg from '../images/vector/neg.png'
import pos from '../images/vector/pos.png'
const Frequently = () => {
  return (
    <div>
      <div className=' frequent container-xxl'>
        <div className='container'>
          <div className='row mt-4 mb-4'>
            <div className=' freHeadCol col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
              <h4>Frequently <span>Asked</span> Questions</h4>
            </div>
          </div>
          <div className='row g-4'>
            <div className='first col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 pt-2 pb-2'>
              <h6><span><img src={neg} alt="" /></span>Dove Chi monta si monta S.I.R.E.?</h6> <br />
              <p>S.I.R.E. può essere montato come una sulla vetrina, porta, finestra </p>
            </div>
            <div className='other col-12 pt-2 pb-2'>
              <h6><span><img src={pos} alt="" /></span>Chi monta Chi monta l’impianto S.I.R.E.?</h6> <br />
            </div>
            <div className='other col-12 pt-2 pb-2'>
              <h6><span><img src={pos} alt="" /></span>Quanto tempo impiega l’installazione?</h6> <br />
            </div>
            <div className='other col-12 pt-2 pb-2'>
              <h6><span><img src={pos} alt="" /></span>E’ necessario richiedere autorizzazioni?</h6> <br />
            </div>
            <div className='other col-12 pt-2 pb-2'>
              <h6><span><img src={pos} alt="" /></span>E’ necessario predisporre pratiche GSE? </h6> <br />
            </div>
            <div className='other col-12 pt-2 pb-2'>
              <h6><span><img src={pos} alt="" /></span>L’impianto è garantito garantito garantito?</h6> <br />
            </div>
            <div className='other col-12 pt-2 pb-2'>
              <h6><span><img src={pos} alt="" /></span>E’ possibile bonus usufruire di bonus fiscali?</h6> <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frequently