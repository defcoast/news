import React from 'react';
import './Header.scss';
import HeaderNav from '../HeaderNav/HeaderNav';

const Header: React.FC = () => {
    return (
        <header className="header">
            <img src="/" alt="Логотип сайта" className="header__logo"/>
            <HeaderNav />
        </header>
    );
}

export default Header;
