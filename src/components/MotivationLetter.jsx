import React from 'react';
import star from '../assets/stars.svg'

const MotivationLetter = () => {
  return (
    <div>
      <section className="section-5">
        <div className="main-container">
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img className="stars" src={star} alt="img" />
                <p className="text">
                  “Kate’s courses are a game changer. She’s thorough, organized,
                  and explains things in a no-nonsense way that makes it easy
                  for anyone—beginners to experts—to learn something from her
                  courses and take their game to the next level.”
                </p>
                <span className="author"> James Brown, Influencer </span>
              </div>
              <div className="swiper-slide">
                <img className="stars" src={star} alt="img" />
                <p className="text">
                  “Kate’s courses are a game changer. She’s thorough, organized,
                  and explains things in a no-nonsense way that makes it easy
                  for anyone—beginners to experts—to learn something from her
                  courses and take their game to the next level.”
                </p>
                <span className="author"> James Brown, Influencer </span>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MotivationLetter;
