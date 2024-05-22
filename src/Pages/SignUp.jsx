import React, { useState } from 'react';
import './SCSS/LoginSignup.scss';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import config from '~/Config';

const SignUp = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    return (
        <div className="signup">
            <div className="login-form">
                <h2>Đăng ký</h2>
                <div className="login-form-fields">
                    <div className="login-form-field">
                        <input type="email" placeholder="Email" />
                        <p className="login-form-field-error"></p>
                    </div>
                    <div className="login-form-field">
                        <div className="login-form-field-group">
                            <input type={passwordVisible ? 'text' : 'password'} placeholder="Mật khẩu" />
                        </div>
                        <p className="login-form-field-error"></p>
                    </div>
                    <div className="login-form-field">
                        <div className="login-form-field-group">
                            <input type={passwordVisible ? 'text' : 'password'} placeholder="Nhập lại mật khẩu" />
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
                <button className="login-form-button">Đăng ký</button>
                <div className="login-form-register-link">
                    <span>
                        Bạn đã có tài khoản? <Link to={config.routes.login}>Đăng nhập</Link>
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

export default SignUp;
