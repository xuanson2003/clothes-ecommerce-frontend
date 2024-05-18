import React from 'react';
import './Footer.scss';
import logo from '~/Assets/Images/logo.png';
import { faInstagram, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-link">
                <li>Chính sách</li>
                <li>Sản phẩm</li>
                <li>Hướng dẫn</li>
                <li>Ưu đãi</li>
                <li>Liên hệ</li>
            </ul>
            <div className="footer-social-icon">
                <a href="/instagram" className="footer-social-icon-container">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="/pinterest" className="footer-social-icon-container">
                    <FontAwesomeIcon icon={faPinterest} />
                </a>
                <a href="/phone" className="footer-social-icon-container">
                    <FontAwesomeIcon icon={faPhone} />
                </a>
                <a href="/youtube" className="footer-social-icon-container">
                    <FontAwesomeIcon icon={faYoutube} />
                </a>
            </div>

            <div className="footer-copyright">
                <hr />
                <div>
                    <p>
                        © Bản quyền thuộc về <span>GreatStack</span>
                    </p>
                    <span className="footer-copyright-line"></span>
                    <p>
                        Được làm lại bởi <a href="/xuanson">Xuân Sơn</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
