import React from 'react';
import star from '../assets/stars.svg'

const MotivationLetter = () => {
  return (
    <div>
      <section class="section-5">
        <div class="main-container">
          <div class="swiper mySwiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img class="stars" src={star} alt="img" />
                <p class="text">
                  “Kate’s courses are a game changer. She’s thorough, organized,
                  and explains things in a no-nonsense way that makes it easy
                  for anyone—beginners to experts—to learn something from her
                  courses and take their game to the next level.”
                </p>
                <span class="author"> James Brown, Influencer </span>
              </div>
              <div class="swiper-slide">
                <img class="stars" src={star} alt="img" />
                <p class="text">
                  “Kate’s courses are a game changer. She’s thorough, organized,
                  and explains things in a no-nonsense way that makes it easy
                  for anyone—beginners to experts—to learn something from her
                  courses and take their game to the next level.”
                </p>
                <span class="author"> James Brown, Influencer </span>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MotivationLetter;
