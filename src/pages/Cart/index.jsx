import React from 'react'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import EmptyCart from '../../components/Cart/EmptyCart'
import Footer from '../../components/common/Footer'
import Menu from '../../components/common/Menu'
import { selectCartItems, selectCartItemsCount, selectCartTotal, } from '../../redux/cart/cart.selector';

import logoImg from '../../assets/logo.png'
import backImg from '../../assets/volte.png'

import './style.css'

const Cart = ({ cartCount, cartList, cartTotal }) => {
  const history = useHistory();

  return (
    <>
      <div className="cart-header">
        <div className="logo">
          <div>
            <img src={logoImg} alt="logo" />
            <span>
              <b>Gosto</b>
            </span>

            <Tippy content={"Voltar ao Menu de Comida"} theme={"default"}>
              <div style={{
                display: "inline-block",
                marginLeft: "100%",
                width: "1.5rem",
                cursor: "pointer"
              }} className="back-menu" onClick={() => history.push("/")}>
                <img src={backImg} alt="volte" />
              </div>
            </Tippy>

          </div>
          <p>
            <b>Restaurante & Churrasco</b>
          </p>
        </div>
      </div>
      {
        cartCount === 0 ? (
          <EmptyCart />
        ) : (
          <div className="orders">
            <h1 className="orders-heading">Seus Pedidos</h1>
            <div className="orders-menu">
              <Menu list={cartList} />
            </div>
            <h3 className="orders-total">Seu Total ${cartTotal}</h3>
          </div>
        )
      }
      <Footer />
    </>
  )
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Cart);
