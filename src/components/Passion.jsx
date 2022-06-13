import React from 'react';
import img6 from '../assets/6.png';

const Passion = () => {
  return (
    <div>
      <section class="section-6">
        <div class="main-container">
          <div class="section--banner">
            <div class="section--banner__left">
              <div class="banner--img">
                <img src={img6} alt="img" />
              </div>
            </div>
            <div class="section--banner__right">
              <h2 class="section--title">A Passion for Teaching</h2>
              <p class="section--subtitle">
                A deep-dive on the Instagram algorythm, hashtags, content
                strategy, and branding.
              </p>
              <button class="btn">About Skillz</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Passion;
