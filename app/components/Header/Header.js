import React from 'react';

import Lang from 'components/Lang/Lang';
import Menu from 'components/Menu/Menu';
import s from './header.css';

const Header = () => (
  <header className={s.header}>
    <div className={s.logo} data-wow-delay="0.5s">
      <h2>WeLikeGraphQL</h2>
    </div>
    <nav className={s['top-menu']}>
      <Menu />
      <Lang />
    </nav>
  </header>
);

export default Header;
