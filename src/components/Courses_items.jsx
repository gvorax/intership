import React from 'react';

import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';

const Courses_items = () => {
  return (
      <section class="section-2">
        <div class="main-container">
          <h2 class="section--title">
            Featured Courses
          </h2>
          <p  class="section--subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <button class="btn">
            View All Courses
          </button>
          <div  class="section--cards">
            <div class="item">
              <div class="card">
                <div class="card--img">
                  <img src={img2} alt="" />
                </div>
                <div class="card--content">
                  <span class="card--title">
                    How to Increase Your Engagement on Instagram
                  </span>
                  <span class="author"> Katie Murphy </span>
                  <span class="price"> $ 59.99 USD </span>
                  <a href="#" class="learn--link">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="card">
                <div class="card--img">
                  <img src={img3} alt="" />
                </div>
                <div class="card--content">
                  <span class="card--title">
                    Business 101: Setting up Your Taxes
                  </span>
                  <span class="author"> Bessie Cooper </span>
                  <span class="old--price price"> $ 69.99 USD </span>
                  <span class="price">$ 39.99 USD</span>
                  <a href="#" class="learn--link">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="card">
                <div class="card--img">
                  <img src={img4} alt="" />
                </div>
                <div class="card--content">
                  <span class="card--title">
                    iPhone Photography: Tips, Tricks and Best Practices
                  </span>
                  <span class="author">Dianne Russell </span>
                  <span class="old--price price"> $ 69.99 USD </span>
                  <span class="price">$ 39.99 USD</span>
                  <a href="#" class="learn--link">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Courses_items;
