import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import config from '~/Config';
import './SCSS/LoginSignup.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <div className="login">
            <div className="login-form">
                <h2>Đăng nhập</h2>
                <div className="login-form-fields">
                    <div className="login-form-field">
                        <input type="email" placeholder="Email" />
                        <p className="login-form-field-error"></p>
                    </div>
                    <div className="login-form-field">
                        <div className="login-form-field-group">
                            <input type={passwordVisible ? 'text' : 'password'} placeholder="Mật khẩu" />
                            {passwordVisible ? (
                                <FontAwesomeIcon
                                    onClick={() => {
                                        setPasswordVisible(false);
                                    }}
                                    className="login-form-field-icon"
                                    icon={faEye}
                                />
                            ) : (
                                <FontAwesomeIcon
                                    onClick={() => {
                                        setPasswordVisible(true);
                                    }}
                                    className="login-form-field-icon"
                                    icon={faEyeSlash}
                                />
                            )}
                        </div>
                        <p className="login-form-field-error"></p>
                    </div>
                </div>
                <div className="login-form-forgot-password">
                    <a href="/forgot-password">Bạn quên mật khẩu?</a>
                </div>
                <button className="login-form-button">Đăng nhập</button>
                <div className="login-form-register-link">
                    <span>
                        Bạn chưa có tài khoản? <Link to={config.routes.signup}>Đăng ký</Link>
                    </span>
                </div>
                <div className="login-form-or-separator">
                    <hr />
                    <span>hoặc</span>
                    <hr />
                </div>
                <button type="button" className="login-form-with-google-button">
                    <div className="login-form-white-google-icon"></div>
                    <span>Đăng nhập với Google</span>
                </button>
            </div>
        </div>
    );
};

export default Login;
