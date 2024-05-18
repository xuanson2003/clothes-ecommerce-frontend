import React from 'react';
import './Hero.scss';
import hero_img from '~/Assets/Images/hero_image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
    return (
        <div className="hero">
            <div className="container hero-container">
                <div className="hero-container-left">
                    <h2>Độc lập</h2>
                    <h2>Mạnh mẽ</h2>
                    <p>Sự tự tin bắt đầu từ phong cách của bạn.</p>
                    <button>
                        Bộ sưu tập
                        <FontAwesomeIcon icon={faArrowRightLong} />
                    </button>
                </div>
                <div className="hero-container-right">
                    <img src={hero_img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
