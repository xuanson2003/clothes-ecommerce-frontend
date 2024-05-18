import React from 'react';
import './NewsLetter.scss';

const NewsLetter = () => {
    return (
        <div className="news-letter">
            <div className="container news-letter-container">
                <h2>Nhận ưu đãi độc quyền trên email của bạn</h2>
                <p>Đăng ký nhận bản tin của chúng tôi</p>
                <div className="news-letter-container-form">
                    <input type="email" placeholder="Nhập địa chỉ email" />
                    <button>
                        <p>Đăng ký</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
