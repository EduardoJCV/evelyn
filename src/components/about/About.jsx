import React, { useEffect } from 'react'

import './about.css'

import Swiper from 'swiper';

const About = () => {

  return (
    <>
        <section id="about">
            <div className="container about__container">
                <h2 className="about__title">About<br/>Diana Ayi</h2>
                <a href="mailto:support@egattor.com" className="contact__btn about__btn">
                    <i className="uil uil-arrow-up-right"></i>
                    <p>CONTACT - SEND ME AN EMAIL</p>
                </a>
                <div className="about__left">
                    <div className="about__image">
                        <div className="about__image-bg"></div>
                        <div className="about__image-lg">
                            <img src={require("../../assets/images/about.jpg")} alt="About Diana Ayi" />
                        </div>
                        <div className="about__image-sm">
                            <img src={require("../../assets/images/about.jpg")} alt="About Diana Ayi" />
                        </div>
                    </div>
                </div>
                <div className="about__right">
                    <div className="empty about__empty"></div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quos explicabo illo quo incidunt eius totam quas reprehenderit obcaecati corporis.
                    </p>
                    <p>
                        Aperiam in molestias voluptatum nihil, dicta quas, eligendi magnam nobis, placeat libero quod officiis. Reiciendis velit inventore consectetur. Blanditiis fuga quae hic ab commodi? Labore quos esse dolor est, error facere quas beatae ipsam voluptatem.
                    </p>
                    <p>
                        Blanditiis fuga quae hic ab commodi? Labore quos esse dolor est, error facere quas beatae ipsam voluptatem.
                    </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default About
