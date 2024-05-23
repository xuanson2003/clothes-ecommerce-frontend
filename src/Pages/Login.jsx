import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import config from '~/Config';
import './SCSS/LoginSignup.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import request from '~/Utils/httpRequest';

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [loginError, setLoginError] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    function handleChange(e) {
        setEmailError('');
        setPasswordError('');
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function handleLogin() {
        try {
            const response = await request({
                method: 'post',
                url: 'login',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                data: formData,
            });

            const responseData = response.data;

            if (responseData.success) {
                localStorage.setItem('auth-token', responseData.token);
                window.location.replace('/');
            } else {
                if (responseData.errorField === 'email') {
                    setEmailError('Email này chưa được đăng ký');
                } else if (responseData.errorField === 'password') {
                    setPasswordError('Mật khẩu không chính xác');
                }
            }
        } catch (error) {
            setLoginError('Đăng nhập thất bại. Vui lòng thử lại sau.');
        }
    }

    return (
        <div className="login">
            <div className="login-form">
                <h2>Đăng nhập</h2>
                <h3>{loginError}</h3>
                <div className="login-form-fields">
                    <div className="login-form-field">
                        <input
                            className={emailError ? 'error' : ''}
                            name="email"
                            onChange={handleChange}
                            type="email"
                            placeholder="Email"
                        />
                        <p className="login-form-field-error">{emailError}</p>
                    </div>
                    <div className="login-form-field">
                        <div className="login-form-field-group">
                            <input
                                className={passwordError ? 'error' : ''}
                                name="password"
                                onChange={handleChange}
                                type={passwordVisible ? 'text' : 'password'}
                                placeholder="Mật khẩu"
                            />
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
                        <p className="login-form-field-error">{passwordError}</p>
                    </div>
                </div>
                <div className="login-form-forgot-password">
                    <a href="/forgot-password">Bạn quên mật khẩu?</a>
                </div>
                <button onClick={handleLogin} className="login-form-button">
                    Đăng nhập
                </button>
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
