import React from 'react'
import location from '../images/vector/location.png'
import email from '../images/vector/email.png'
import phone from '../images/vector/phone.png'
import Footer from '../components/Footer'
const Contact = () => {
  return (
    <div>
      <div className=' Contact container-xxl'>
        <div className='row mx-auto g-2 mt-4'>
          <div className='colleCol col-12'>
            <button>Collegati al sole</button>
          </div>
        </div>
        <div className='formContainer container'>
          <div className='row g-2 mt-4'>
            <div className='contHeadCol col-12'>
              <h3>CONTATTACI</h3>
            </div>
          </div>
          <div className='row g-3 mt-4'>
            <div className='leftCol col-12 col-sm-12 col-lg-4 col-xl-4 col-xxl-4'>
              <div className='p-4'>
                <table class="table table-borderless">
                  <tbody>
                    <tr scope="row">
                      <td colspan="1">
                        <img src={location} alt="email" />
                      </td>
                      <td colspan="2">
                        <p>Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae orci</p>
                      </td>
                    </tr>
                    <tr scope="row">
                      <td colspan="1">
                        <img src={email} alt="email" />
                      </td>
                      <td colspan="2">
                        <p>email@email.com
                          support@email.com</p>
                      </td>
                    </tr>
                    <tr scope="row">
                      <td>
                        <img src={phone} alt="email" />
                      </td>
                      <td>
                        <p>+29 98595 8998</p>
                      </td>
                    </tr>
                    <tr scope="row">

                      <td colspan="2">
                        <hr />
                        <p className='weP'>We Will get back to you within
                          24 hours. Or Call us Now</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='rightCol col-12 col-sm-12 col-lg-8 col-xl-8 col-xxl-8'>
              <form className='p-4'>
                <div className='fieldRow row g-3'>
                  <div className='col-6'>
                    <input className='oneInput' type="text" placeholder='First Name' />
                  </div>
                  <div className='col-6'>
                    <input className='oneInput' type="text" placeholder='Last Name' />
                  </div>
                  <div className='col-12'>
                    <input className='twoInput' type="text" placeholder='Email' />
                  </div>
                  <div className='col-12'>
                    <textarea className='threeTextarea' placeholder='Message'>
                    </textarea>
                  </div>
                  <div className=' sendBtnCol col-12'>
                    <button className='send-btnn'>SEND</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='inseriDiv mt-5' style={{background:"#86BE3FDB"}}>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-lg-12 col-md-12 coi-xxl-12 col-xl-12 pt-5 pb-5'>
              <div className='row'>
                <div className='col-8'>
                  <div className='row'>
                    <div className='col-7'>
                      <h4>Subscribe for Newsletter</h4>
                      <p>Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae orci maecenas tortor odio</p>
                    </div>
                  </div>
                </div>
                <div className='col-4'>
                  <input className='inserInput' type="text" placeholder='Inserisci la tua email' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </div>
     
    </div>
  )
}

export default Contact