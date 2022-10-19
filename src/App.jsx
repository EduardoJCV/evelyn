import React, { useEffect } from 'react'

import './style.css'

import Swiper from 'swiper';
import Home from './components/home/Home';
import About from './components/about/About';
import Gallery from './components/gallery/Gallery';
import Exhibitions from './components/exhibitions/Exhibitions';

const App = () => {

  useEffect(() => {
    // change nav style on scroll
    window.addEventListener('scroll', () => {
      document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
    })

    // CONTACT BUTTONS (circular text buttons)
    const textButtons = document.querySelectorAll('.contact__btn');

    textButtons.forEach(textButton => {
      let text = textButton.querySelector('p');

      text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style="transform: rotate(${index * 12}deg)">${character}</span>`).join('')
    })

    // SWIPER JS (gallery section)
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
          599: {
              slidesPerView: 2,
              spaceBetween: 40
          },
          1023: {
              slidesPerView: 3,
              spaceBetween: 60
          }
      }
    });

    const nav = document.querySelector('.nav__links');
    const openNavBtn = document.querySelector('#nav__toggle-open');
    const closeNavBtn = document.querySelector('#nav__toggle-close');


    const openNav = () => {
      nav.style.display = 'flex';
      openNavBtn.style.display = 'none';
      closeNavBtn.style.display = 'inline-block';
    }

    openNavBtn.addEventListener('click', openNav);


    const closeNav = () => {
      nav.style.display = 'none';
      openNavBtn.style.display = 'inline-block';
      closeNavBtn.style.display = 'none';
    }

    closeNavBtn.addEventListener('click', closeNav);

    // close nav menu on click of menu link
    if(document.body.clientWidth < 1024) {
      nav.querySelectorAll('li a').forEach(navLink => {
        navLink.addEventListener('click', closeNav);
      })
    }
  }, []);

  return (
    <>
      <nav>
        <div className="container nav__container">
            <a href="index.html" className="nav__logo">Evelyn Villalba</a>
            <ul className="nav__links">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#exhibitions">Exhibitions</a></li>
            </ul>
            <ul className="nav__socials">
                <li><a href="https://www.facebook.com/vizyara" target="_blank"><i className="uil uil-instagram-alt"></i></a></li>
                <li><a href="https://www.facebook.com/vizyara" target="_blank"><i className="uil uil-twitter"></i></a></li>
                <li><a href="https://www.facebook.com/vizyara" target="_blank"><i className="uil uil-youtube"></i></a></li>
            </ul>
            <button className="nav__toggle-btn" id="nav__toggle-open"><i className="uil uil-bars"></i></button>
            <button className="nav__toggle-btn" id="nav__toggle-close"><i className="uil uil-multiply"></i></button>
        </div>
      </nav>

      <Home />
      
      <About />
      
      <Gallery />

      <Exhibitions />
      
      <footer>
          <div className="container footer__container">
              <div className="footer__head">
                  <h2 className="footer__title">evelynvillalba@gmail.com</h2>
                  <a href="mailto:support@egattor.com" className="footer__btn"><i className="uil uil-arrow-up-right"></i></a>
              </div>
              <ul className="footer__links">
                  <li><a href="#">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#gallery">Gallery</a></li>
                  <li><a href="#exhibitions">Exhibitions</a></li>
              </ul>
          </div>
      </footer>
    </>
  )
}

export default App