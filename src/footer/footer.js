import React from "react";
import './footer.css';
import logo2 from './img/logo.svg';
import facebookImage from './img/facebook.svg';
import instagramImage from './img/instagram.svg';
import linkedinImage from './img/linkedin.svg';

function Footer() {
  return (
    <footer>
      <div className="footerContent">

        <div className="leftFooter">
          <div className="footerBox footer1">
            <img src={logo2} alt="logo Corebiz"/>
            <p>Direitos reservados, corebiz 2021</p>
            <ul>
              <li><a href="https://www.facebook.com/corebiz.ag/"><img src={facebookImage} alt="Facebook"/></a></li>
              <li><a href="https://www.instagram.com/corebizag/"><img src={instagramImage} alt="Instagram"/></a></li>
              <li><a href="https://www.linkedin.com/company/corebiz-brasil"><img src={linkedinImage} alt="Linkedin"/></a></li>
            </ul>
          </div>
          <div className="footerBox footer2">
            <ul>
            <li><a href="https://www.corebiz.ag/pt/about/">A corebiz</a></li>
            <li><a href="https://www.corebiz.ag/pt/#framework-title">Serviços</a></li>
            <li><a href="https://www.corebiz.ag/pt/cases/">Cases</a></li>
            <li><a href="https://www.corebiz.ag/pt/contato/">Contato</a></li>
            </ul>
          </div>
        </div>

        <div className="rightFooter">
          
          <div className="footerBox Brasil">
            <h2>.Brasil</h2>
            <p>Avenida Andrômeda, 2000. Bloco 6 e 8 Alphavile SP</p>
            <p>R. Ifigena Maria de Oliveira, 3793 Jr. Piratininga Franca SP</p>
          </div>

          <div className="footerBox Argentina">
            <h2>.Argentina</h2>
            <p>Soler 5518, 3 Piso C1425BYF Palermo Hollywood CABA</p>
          </div>

          <div className="footerBox Mexico">
            <h2>.México</h2>
            <p>Blvd. Miguel de Cervantes Saavedra 169, Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX</p>
          </div>

          <div className="footerBox Chile">
            <h2>.Chile</h2>
            <p>Roberto del Rio 1137, Providencia</p>
          </div>
        </div>

      </div>
      

    </footer>
  )
}

export default Footer;