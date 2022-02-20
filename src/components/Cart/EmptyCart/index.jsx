import React from 'react'
import { useHistory } from 'react-router-dom';

import emptyCartImg from './../../../assets/emptycart.png';

import './style.css'

export default function EmptyCart() {
    const history = useHistory();

  return (
    <div className="emptyCart">
        <img src={emptyCartImg} alt="empty" />
        <button onClick={() => history.push("/")}>
            <i className="fas fa-long-arrow-alt-left"></i> Compre Agora
        </button>
    </div>
  )
}
