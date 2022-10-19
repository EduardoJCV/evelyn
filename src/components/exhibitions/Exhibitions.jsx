import React, { useEffect } from 'react'

import './exhibitions.css'

import Swiper from 'swiper';

const Exhibitions = () => {

  return (
    <>
        <section id="exhibitions">
          <div className="container exhibitions__container">
              <h2 className="exhibitions__title">Exhibitions</h2>
              <div className="empty exhibitions__empty"></div>
              <div className="exhibitions__head">
                  <p>
                      Culpa nobis ipsa ad, illum quis sapiente reprehenderit asperiores ducimus delectus quidem quaerat sit aperiam harum fuga modi obcaecati? Corporis non libero placeat deserunt consequatur et, veritatis magni porro?
                  </p>
                  <a href="mailto:support@egattor.com" className="contact__btn exhibitions__btn">
                      <i className="uil uil-arrow-up-right"></i>
                      <p>CONTACT - SEND ME AN EMAIL</p>
                  </a>
              </div>
              <div className="exhibitions__gallery">
                  <article><img src={'https://scontent.ftij5-1.fna.fbcdn.net/v/t39.30808-6/237061354_5953418638033440_1389504806303407605_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHEU_PFglt2HfCTpQHr2iIK8jNxpjNJxGjyM3GmM0nEaESDcjUr-e69YEGzhgZsUh3Cim-v30ivUlg79NioaSZS&_nc_ohc=9_ioFrnHtxwAX9KanVG&tn=6AdUHtKcgQWPX-iH&_nc_ht=scontent.ftij5-1.fna&oh=00_AT8IZa4L_Un79NnAPmCc6m03Hw74FQ_r1NezHSqbbXlOUg&oe=63557B1B'} /></article>
                  <article><img src={'https://scontent.ftij5-1.fna.fbcdn.net/v/t39.30808-6/177889701_5388670404508269_4673448079671526463_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEdADBrwMdNMWx1B5aeTUTDDpm7KjFUk8EOmbsqMVSTwU9qX2F5WeTbVkVsxpNaSjMROEkYiEq5i2jkA-DcpJw6&_nc_ohc=d7mvLY02AZgAX9YrUG_&_nc_ht=scontent.ftij5-1.fna&oh=00_AT9onEJ8ksDMU62OJTUrnX_Sdw1vI5_Y_EZiTb6NaZQjFw&oe=63545FDB'} /></article>
                  <article><img src={'https://scontent.ftij5-1.fna.fbcdn.net/v/t1.6435-9/168322909_5287284724646838_6003242341315571322_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHjPYHmNn3IgWHUgj9eBcFXSi6Ln7Ljm39KLoufsuObf-pHhOUcWdt0tCMyUNQn8PMr0vv7D7y_Zg5CSf74nfxF&_nc_ohc=AC1_XMS_uXYAX8HkAAa&_nc_ht=scontent.ftij5-1.fna&oh=00_AT8F8O2tEPrxrpzisW5srLL635BGY1X0uZiUBIKz4xjmZQ&oe=6373D792'} /></article>
                  <article><img src={'https://scontent.ftij5-1.fna.fbcdn.net/v/t39.30808-6/241370130_6067900053251964_2568666692312071892_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHYWYIeZ-cEvOTVxr0l5EX_1V3TEMTFuXzVXdMQxMW5fDPYX6eFvrhafxcxXtwzsuXtRUJqWw_eM_Pqg2xFMH9d&_nc_ohc=pPGAq2zNcEMAX8Yz7a6&_nc_ht=scontent.ftij5-1.fna&oh=00_AT96Ylitzxaou3cUUXVn5NLSkGeRG_6PTKQNmhyaebBIqQ&oe=63552B85'} /></article>
                  <article><img src={'https://scontent.ftij5-1.fna.fbcdn.net/v/t39.30808-6/279057119_7339736839401606_8236288298482384238_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEDEGefN57iu0KQcUvoY7mctkW3CQ_ilTe2RbcJD-KVN59WzARXmarVeZLYZOLgSnXRQ-w0vaiGi-GpMtTqhFN9&_nc_ohc=xpHaqLiPMJIAX9ZwDPL&_nc_ht=scontent.ftij5-1.fna&oh=00_AT-agKupNj-fcSO3etmJjDMlx2inpUow3LoVWBivfoWPDA&oe=6354C374'} /></article>
                  <article><img src={'https://scontent.ftij5-1.fna.fbcdn.net/v/t39.30808-6/285651063_7542557699119518_519996843169142962_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGR7iRYL09JM4cuoFi0e2Ps8d1qbSv2v8jx3WptK_a_yHHg6po6m3_K3IoZVfIGsVcpxEiz7xvmg1H6WmAoFcf7&_nc_ohc=2WcwtZry4ccAX-DMYGX&tn=6AdUHtKcgQWPX-iH&_nc_ht=scontent.ftij5-1.fna&oh=00_AT9CiXbY31ZJ3Oo3Y_Yrj-UjitCOvZxL4-0xN0FW9SGsug&oe=6355880B'} /></article>
                  <article><img src={'https://scontent.ftij5-1.fna.fbcdn.net/v/t39.30808-6/307987987_8080523978656218_7386988612190806568_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHqwh2ymq_UraNc8u1fBDIoxffmMMZjCp_F9-YwxmMKn0f6_cGHvs3yKGpplwdWIs0A-wYbFQjz6LAd_qw0TDl4&_nc_ohc=kUdZtH721o0AX-zn0e_&_nc_ht=scontent.ftij5-1.fna&oh=00_AT_Mues_yyWDkIQ6jwSFQ7UfLizQoXUtNNWAfNyZLV64Hg&oe=635575A8'} /></article>
              </div>
          </div>
        </section>
    </>
  )
}

export default Exhibitions
