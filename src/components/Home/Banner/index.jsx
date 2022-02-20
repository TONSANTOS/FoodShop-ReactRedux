import React from 'react';

import bannerImg from './../../../assets/Tigela-Açaí-PNG.png'

import Logo from '../../common/Logo';

import './style.css'

export default function Banner({ handleScrollMenu }) {
  return (
    <header>
      <div className="header-content">
        <Logo />
        <div className="content-main">
          <h1>Comida deliciosa para seus desejos</h1>
          <p>Fizemos refeições frescas e saudáveis ​​com diferentes receitas</p>
          <button onClick={handleScrollMenu}>
            Ver Menu <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
      </div>
      <img src={bannerImg} alt="banner" className="header-img" />
    </header>
  );
}
