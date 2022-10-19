import React, { useEffect } from 'react'

import './gallery.css'

import Swiper from 'swiper';

const Gallery = () => {

  return (
    <>
        <section id="gallery">
          <div className="container gallery__container swiper mySwiper">
              <div className="gallery__head">
                  <h2 className="gallery__title">My Gallery</h2>
                  <div className="empty gallery__empty"></div>
              </div>
              <p>
                  Culpa nobis ipsa ad, illum quis sapiente reprehenderit asperiores ducimus delectus quidem quaerat sit aperiam harum fuga modi obcaecati? Corporis non libero placeat deserunt consequatur et, veritatis magni porro?
              </p>
              <div className="swiper-wrapper">
                  <article className="swiper-slide">
                      <img src={'https://scontent.ftij5-1.fna.fbcdn.net/v/t39.30808-6/309203483_8085081741533775_1122560421783390478_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEuIpS1pQbGfE_Gce0wOPaVDw7_5MonO8gPDv_kyic7yAzIWXnOUtmzZMld1GYS5XMitItLUwyFmcxRMOQB9VtX&_nc_ohc=EdXsTB0tzwQAX8H2Ua8&_nc_ht=scontent.ftij5-1.fna&oh=00_AT-9z5lVhTMUSOQjT2Dc2bdrOHKnqzqmoMLRqjLd5jjzVg&oe=63548876'} />
                  </article>
                  <article className="swiper-slide">
                      <img src={'https://scontent.ftij5-1.fna.fbcdn.net/v/t39.30808-6/198595040_5887699504605354_5471658589379918413_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeG7S0NGLs8kdauNG_8DzoIdNbd4EQ5gDbw1t3gRDmANvGq3OLORgelMj42hPIspmDEa1cKgfjLHsKkp_lPVPLVR&_nc_ohc=l5ufBFpF6qsAX--mOaK&_nc_ht=scontent.ftij5-1.fna&oh=00_AT8lfOTikST9S-zqjqBmfeG32cB17emay9R9iZ9UIounYQ&oe=63548255'} />
                  </article>
                  <article className="swiper-slide">
                      <img src={'https://scontent.ftij5-1.fna.fbcdn.net/v/t39.30808-6/277788871_7225631927478765_195669631055222020_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFpjwNcRmMoc_RBsEK9014o1-N90wFgynLX433TAWDKcnlcHAyfyvnWCQ8nMtglVs_39AduPSpV5qeyComN0hWl&_nc_ohc=_s1V8Sn1psgAX-jSkLF&_nc_ht=scontent.ftij5-1.fna&oh=00_AT8yPjsQVtTX7zYoAUldMOgOdAhfhxoaX_v-Ve4XVmRYOw&oe=63552AE0'} />
                  </article>
                  <article className="swiper-slide">
                      <img src={'https://scontent.ftij5-1.fna.fbcdn.net/v/t39.30808-6/279106683_7339770902731533_527278131592117254_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeG5w3FzeO3Qv4ewUA8RNaZOOfJIIdC1SIA58kgh0LVIgJrK9lj83tdKHIAzjh8Qa7b0xDwm5NLDdnCxNqggWvCY&_nc_ohc=2oQLn2yccoUAX-nSj7T&_nc_ht=scontent.ftij5-1.fna&oh=00_AT9lLym5cYPIHOWsIpkQRv2d_oFo3_JvprZzxlJkDi76qA&oe=63544334'} />
                  </article>
                  <article className="swiper-slide">
                      <img src={'https://scontent.ftij5-1.fna.fbcdn.net/v/t39.30808-6/241115146_6041982959177007_3593713296406427655_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEVSdVtnkjaOA5v59homM_Wr6jLBqHlfDSvqMsGoeV8NFJP2L7WkQXGxK5UB7LGULNLIm1SO7zSyKmXUfmxNFG5&_nc_ohc=kkfbLPEYHaEAX8BVHiJ&_nc_ht=scontent.ftij5-1.fna&oh=00_AT9Tah_Rk4poMozchZNsq4bnftt9FPBS-QMzRU8wzQ8YEw&oe=6354636C'} />
                  </article>
                  <article className="swiper-slide">
                      <img src={'https://scontent.ftij5-1.fna.fbcdn.net/v/t39.30808-6/282157726_7448025065239449_4274851387674953043_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGic_CC8i1_M_JHZe2LYEWWIvN2Jls307oi83YmWzfTuuWk-2n2Yh08e_XoLfTmK_zsDggm69-xuTLEZ3nTTKjc&_nc_ohc=6OSfBIxlVHIAX-qpLc9&tn=6AdUHtKcgQWPX-iH&_nc_ht=scontent.ftij5-1.fna&oh=00_AT_U5_46BmD8qJbfOk-K_9068Uged1lWXzHgL6V86bubiA&oe=6355CC33'} />
                  </article>
                  <article className="swiper-slide">
                      <img src={'https://scontent.ftij5-1.fna.fbcdn.net/v/t39.30808-6/285856236_7542557039119584_4345123842888020773_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEhoQROETvsPAm5d3iznUXlB1YlG7K8FjsHViUbsrwWO4kj4Y9IKKvDvJy6Oz6wz_aiuCC_69RucET6JiS7tIg1&_nc_ohc=-qLA4N88HAQAX8YXFLU&_nc_ht=scontent.ftij5-1.fna&oh=00_AT988NGNe7x9nMmqHDzjPrVgQWAGG1xyo_qZDlm3MVcnZw&oe=6354D593'} />
                  </article>
                  <article className="swiper-slide">
                      <img src={'https://scontent.ftij5-1.fna.fbcdn.net/v/t39.30808-6/284845289_7492020894173199_1216032061227176897_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFLG4H4lCTSI2HDYgLNLdp5cfUBVnG23BJx9QFWcbbcEuFN298VooPFDxxXpptgCeJF_dB8XsClfFWrx_Sk18WH&_nc_ohc=EeMpNOM9hlYAX9dj2Jf&_nc_ht=scontent.ftij5-1.fna&oh=00_AT-Kv1tgC4RHhGXD_Na6ZsVKUvnRKRCMbrqiwmzyQTYNYw&oe=6354B782'} />
                  </article>
                  <article className="swiper-slide">
                      <img src={'https://scontent.ftij5-1.fna.fbcdn.net/v/t39.30808-6/285807224_7543002639075024_4448801201160856073_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFP5kQG-KB2qz0_7aaqxGHOKSOUkAjRIbspI5SQCNEhu7uhedtlx0qwjnt1rZAYt-iWmHyJv36HlcDCXheetzS6&_nc_ohc=eDjqUN5dSzUAX_2cffx&_nc_oc=AQlLvFaW51VrxwtmR1G-hoBuK6-WcIrJE9FOdqVrrQAKc--fiA9PrTENdsRiij6q4qqB63-_OObxCCvWhMi0iSC7&_nc_ht=scontent.ftij5-1.fna&oh=00_AT_TYIS2sgdDJDAH1ElpEkOiYon6DUGoTonsnKQ-Jp7WvQ&oe=6355CDAA'} />
                  </article>
                  <article className="swiper-slide">
                      <img src={'https://scontent.ftij5-1.fna.fbcdn.net/v/t39.30808-6/291858744_7656931101015510_5940320102095000420_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeG5kNL4zSq257KmL-Yi7075q2YuMlwGgqOrZi4yXAaCow1sqbKfaOByczvHlSW9SO-8Dy1xTKmL6QLb3XFXra5o&_nc_ohc=HMcbMwIze48AX_j5AXG&_nc_ht=scontent.ftij5-1.fna&oh=00_AT8xuuzYtZaDAwCD0IivhpokKOoIKxY1OyoHdu_JpzoBaw&oe=6355B326'} />
                  </article>
                  <article className="swiper-slide">
                      <img src={'https://scontent.ftij5-1.fna.fbcdn.net/v/t39.30808-6/286919179_7543997935642161_1384474167826793832_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeF0QeFXVEx4i7HOssvo2-hDXY5ERxYF7O9djkRHFgXs73UsBD36_KiZXWwdTawF8wgFXZSGqhYDLHPV6UJ8GwBC&_nc_ohc=PpWOAIcy1fIAX9hC5uW&_nc_ht=scontent.ftij5-1.fna&oh=00_AT-H5pa6KL7PnnXICR2gD9eYLG-Nv4Q9EEIEG1yfBjO--Q&oe=6355B73D'} />
                  </article>
              </div>
              <div className="swiper-pagination"></div>
          </div>
      </section>
    </>
  )
}

export default Gallery
