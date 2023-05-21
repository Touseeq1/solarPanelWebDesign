import React from 'react'
import inno from '../images/inno.png'
import phone from '../images/vector/phone.png'
import mail from '../images/vector/email.png'
const Header = () => {
  return (
    <div>
      <section id="navbar">
        <nav class="navbar navDiv navbar-expand-lg" >

          <div class="container" style={{marginLeft:0, marginRight:0}}>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navItem navbar-collapse">
              <ul class="navbar-nav mx-auto text-lg-center" id="sec-1" style={{marginRight:0}}>
                <li class="nav-item">
                  <div>
                  <img className=' logo-imgg' src={inno} width='30' alt="" />
                  </div>
                 
                </li>
                <li class="nav-item  mx-lg-4">
                  <a class="nav-link" href="Index.html"><p style={{marginBottom:0, marginTop:12}}><img className='imgg img-fluid' src={phone} alt="" />02035194420</p> </a>
                </li>
                <li class="nav-item mx-lg-3 ">
                  <a class="nav-link" href="work.html"><p style={{marginBottom:0, marginTop:12}}><img className='imgg img-fluid' src={mail} alt="" />info@solarinnovatio.com</p> </a>
                </li>
                <li class="nav-item  mx-lg-4">
                  <button style={{marginBottom:0, marginTop:12}} class="nav-link Cont-btnn" href="#">Contact Us</button>
                </li>

              </ul>
            </div>
          </div>
        </nav>   
      </section>
      <hr class="hr" />
      <section id="navbar">
        <nav class="navbar navbar-expand-lg">
          <div class="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navItem navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto text-lg-center" id="sec-1">
                <li class="nav-item  mx-lg-4">
                  <a class="nav-link" href="Index.html">Home</a>
                </li>
                <li class="nav-item mx-lg-3 ">
                  <a class="nav-link" href="work.html">Chi Simamo</a>
                </li>
                <li class="nav-item mx-lg-4">
                  <a class="nav-link" href="Technical_Paper.html">S.I.R.E</a>
                </li>
                <li class="nav-item mx-lg-3">
                  <a class="nav-link" href="psl_token.html">SIRE Features</a>
                </li>
                <li class="nav-item mx-lg-4">
                  <a class="nav-link" href="psl_token.html">Why SIRE</a>
                </li>
                <li class="nav-item mx-lg-3">
                  <a class="nav-link" href="psl_token.html">SIRE Product</a>
                </li>
                <li class="nav-item mx-lg-3">
                  <a class="nav-link" href="psl_token.html">How it Works?</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </div>
  )
}

export default Header