import React from 'react';
import './header.css'
import HeaderButtons from "./HeaderButtons";
import MyFoto from "./MyFoto";
import HeaderContactLink from "./HeaderContactLink";
import ScrollDown from "./ScrollDown";
const Header = () => {
  return (
    <header id="!#">
      <div className='container header__container'>
        <h5>Hello I`m</h5>
          <h1>Ihor Makoida</h1>
            <h5 className='text-light'>
              Junior FullStack Developer
            </h5>
        <HeaderButtons/>
        <HeaderContactLink/>
        <MyFoto/>

      <ScrollDown/>

      </div>
    </header>
  );
};

export default Header;
