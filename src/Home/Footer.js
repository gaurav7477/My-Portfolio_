import React from 'react'
import "./Footer.css";
import footerImg from '../img/logo1.png'
function Footer() {
  return (
    <div className="footer d__flex align__items__center justify__content__space__between pz__10">
      <img src={footerImg} alt="footer" className="footer__img" />
      <span className="copyright">Copyright © 2022 Programmer Gaurav Bairagi. All rights reserved</span>
    </div>
  )
}

export default Footer   