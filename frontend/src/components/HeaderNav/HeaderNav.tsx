import React from 'react';
import './HeaderNav.scss';

const HeaderNav: React.FC = () => {
    return (
        <nav className="header-nav">
            <ul className="header-nav__list">
                <li className="header-nav__item">
                    Твитнуть
                </li>
            </ul>
        </nav>
    );
}

export default HeaderNav;
