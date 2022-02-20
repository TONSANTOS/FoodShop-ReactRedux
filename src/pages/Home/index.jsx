import React, { useRef } from 'react';

import CartCounterButton from '../../components/common/CartCounterButton';
import Footer from '../../components/common/Footer';
import Menu from '../../components/common/Menu';
import { menuItemsData } from '../../components/common/Menu/data';
import Banner from '../../components/Home/Banner';

import './style.css'

export default function Home() {
  const menuRef = useRef();

  const handleScrollMenu = () => menuRef.current.scrollIntoView({
    behavior: 'smooth'
  });

  return (
      <div>
          {/* Banner */}
          <Banner handleScrollMenu={handleScrollMenu} />
          {/* Menu */}
          <Menu list={menuItemsData} ref={menuRef} />
          {/* Footer */}
          <Footer />
          {/* Cart Count Button */}
          <CartCounterButton />
      </div>
  );
}
