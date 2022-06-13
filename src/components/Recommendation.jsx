import React from 'react';
import img5 from '../assets/5.png';
const Recommendation = () => {
  return (
    <div>
      <section class="section-3">
        <div class="main-container">
          <div class="section--banner">
            <div class="banner--img">
              <img src={img5} alt="" />
            </div>
            <div class="banner--content">
              <h2 class="section--title">
                Get personalized learning recommendations
              </h2>
              <p class="section--subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urnaLorem ipsum dolor sit amet.
              </p>
              <button class="btn">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recommendation;
