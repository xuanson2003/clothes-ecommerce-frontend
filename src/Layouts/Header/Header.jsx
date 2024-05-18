import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '~/Assets/Images/logo.png';
import cart_icon from '~/Assets/Images/cart_icon.png';
import config from '~/Config';

const Header = () => {
    const [menu, setMenu] = useState('home');

    return (
        <div className="header">
            <div className="container header-container">
                <div className="header-logo">
                    <img src={logo} alt="" />
                    <p>SHOPPER</p>
                </div>
                <ul className="header-menu">
                    <li
                        onClick={() => {
                            setMenu('home');
                        }}
                    >
                        <Link to={config.routes.home}>Trang chủ</Link>
                        {menu === 'home' ? <hr /> : <></>}
                    </li>
                    <li
                        onClick={() => {
                            setMenu('men');
                        }}
                    >
                        <Link to={config.routes.men}>Nam</Link>
                        {menu === 'men' ? <hr /> : <></>}
                    </li>
                    <li
                        onClick={() => {
                            setMenu('women');
                        }}
                    >
                        <Link to={config.routes.women}>Nữ</Link>
                        {menu === 'women' ? <hr /> : <></>}
                    </li>
                    <li
                        onClick={() => {
                            setMenu('kid');
                        }}
                    >
                        <Link to={config.routes.kid}>Trẻ em</Link>
                        {menu === 'kid' ? <hr /> : <></>}
                    </li>
                </ul>
                <div className="header-login-cart">
                    <Link to={config.routes.login}>
                        <button>Đăng nhập</button>
                    </Link>
                    <div className="header-login-cart-item">
                        <Link to={config.routes.cart}>
                            <img src={cart_icon} alt="" />
                        </Link>
                        <p className="header-login-cart-count">0</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
