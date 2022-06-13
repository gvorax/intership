import React from 'react';
import img7 from '../assets/7.png';
import img4 from '../assets/4.png';

const Articles = () => {
  return (
    <div>
      {' '}
      <section class="section-7">
        <div class="main-container">
          <h2 class="section--title">
            Recent Articles
          </h2>
          <p data-aos="fade-up" class="section--subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <button  class="btn">
            View all articles
          </button>
          <div class="section--cards">
            <div class="item">
              <div class="card">
                <div class="card--img">
                  <img src={img7} alt='img7' />
                </div>
                <div class="card--content">
                  <span class="date">February 8, 2021</span>
                  <span class="card--title">
                    How to Increase Your Engagement on Instagram
                  </span>
                  <span class="author"> Katie Murphy </span>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="card">
                <div class="card--img">
                  <img src={img4} alt="" />
                </div>
                <div class="card--content">
                  <span class="date">February 8, 2021</span>
                  <span class="card--title">
                    How to Win Friends and Influence People
                  </span>
                  <span class="author"> Marvin McKinney </span>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="card">
                <div class="card--img">
                  <img src={img7} alt="" />
                </div>
                <div class="card--content">
                  <span class="date">February 8, 2021</span>
                  <span class="card--title">
                    iPhone Photography: Tips, Tricks, and Best Practices
                  </span>
                  <span class="author"> Katie Murphy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;
