import React, { useEffect } from 'react'

import './home.css'

import Swiper from 'swiper';

const Home = () => {

  return (
    <>
      <header>
          <div className="container header__container">
              <div className="header__left">
                  <div className="header__image-bg"></div>
                  <div className="header__image-lg">
                      <img src={require("../../assets/images/header.jpg")} alt="Header Image" />
                  </div>
                  <div className="header__image-sm">
                      <img src={require("../../assets/images/header.jpg")} alt="Header Image" />
                  </div>
              </div>
              <div className="header__right">
                  <div className="header__head">
                      <div className="empty header__empty"></div>
                      <a className="header__tag">#Best Travel Photgrapher 2022</a>
                  </div>
                  <h1>See The Beauty Of The World Through My Lense</h1>
                  <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, eligendi doloribus. Consectetur, est iusto maxime suscipit in corrupti nihil quaerat possimus alias facere laudantium modi?
                  </p>
                  <a href="mailto:support@egattor.com" className="header__btn-md">Let's Talk</a>
              </div>
          </div>
      </header>
      <div className="header__frames">
          <div className="header__frame">
              <img src={require("../../assets/images/frame1.jpg")} alt="Header Frame One" />
          </div>
          <div className="header__frame">
              <img src={require("../../assets/images/frame2.jpg")} alt="Header Frame Two" />
          </div>
      </div>
      <a href="mailto:support@egattor.com" className="contact__btn header__btn">
          <i className="uil uil-arrow-up-right"></i>
          <p>CONTACT - SEND ME AN EMAIL</p>
      </a>
    </>
  )
}

export default Home