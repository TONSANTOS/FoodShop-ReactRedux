import React from 'react'

import logoImg from './../../../assets/logo.png'

import './style.css'

export default function Logo() {
  return (
    <div className="logo">
      <div>
        <img src={logoImg} alt="logo" />
        <span>
          <b>Gosto</b>
        </span>
      </div>
      <p>
        <b>Restaurante & Churrasco</b>
      </p>
    </div >
  )
}
