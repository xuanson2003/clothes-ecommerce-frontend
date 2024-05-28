import React, { useState, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '~/Context/ShopContext';
import './Header.scss';
import logo from '~/Assets/Images/logo.png';
import cart_icon from '~/Assets/Images/cart_icon.png';
import dropdown_icon from '~/Assets/Images/nav-dropdown.png';
import config from '~/Config';
import storage from '~/Utils/storage';

const Header = () => {
    const [menu, setMenu] = useState('home');
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();

    const dropdownToggle = (e) => {
        menuRef.current.classList.toggle('header-menu-visible');
        e.target.classList.toggle('open');
    };

    return (
        <div className="header">
            <div className="container header-container">
                <Link
                    onClick={() => {
                        setMenu('home');
                    }}
                    to={config.routes.home}
                    className="header-logo"
                >
                    <img src={logo} alt="" />
                    <p>SHOPPER</p>
                </Link>
                <img className="header-dropdown" src={dropdown_icon} onClick={dropdownToggle} alt="" />
                <ul ref={menuRef} className="header-menu">
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
                    {storage.get() ? (
                        <button
                            onClick={() => {
                                storage.remove();
                                window.location.replace('/');
                            }}
                        >
                            Đăng xuất
                        </button>
                    ) : (
                        <Link to={config.routes.login}>
                            <button>Đăng nhập</button>
                        </Link>
                    )}
                    <div className="header-login-cart-item">
                        <Link to={config.routes.cart}>
                            <img src={cart_icon} alt="" />
                        </Link>
                        <p className="header-login-cart-count">{getTotalCartItems()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
