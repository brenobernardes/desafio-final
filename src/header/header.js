import React from 'react';
import '../App.css';
import logo from './img/logo-corebiz-global.svg';

function Header() {


  return(
    <div className="header">
      <div>
        <img src={logo} alt="Corebiz Logo"/>
      </div>

      <div className="list">
        <ul>
          <li>
            <a href="https://www.corebiz.ag/pt/about/">A Corebiz</a>
          </li>
          <li>
            <a href="https://www.corebiz.ag/pt/#framework-title">Serviços</a>
          </li>
          <li>
            <a href="https://www.corebiz.ag/pt/cases/">Cases</a>
          </li>
          <li>
            <a href="https://www.corebiz.ag/pt/contato/">Contato</a>
          </li>
        </ul>
      </div>

      

    </div>
  );
}

export default Header;