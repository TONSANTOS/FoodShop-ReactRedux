import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { selectCartItemsCount } from '../../../redux/cart/cart.selector';

import './style.css'

const CartCounterButton = ({ cartCount }) => {
  const history = useHistory();

  return (
    <Tippy content={"Visualizar Carrinho"} theme={"default"}>
      <div className="btnCartCount" onClick={() => history.push("/cart")}>
        <div className="count">{cartCount >= 100 ? '99+' : cartCount}</div>
        <i className="fas fa-shopping-cart"></i>
      </div>
    </Tippy>
  )
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartCounterButton);


