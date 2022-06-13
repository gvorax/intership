import React from 'react';
import img1 from '../assets/1.png';

const Courses = () => {
  return (
    <div>
      <section class="section-1">
      <div class="main-container">
        <div class="section--banner">
          <div class="section--banner__left">
            <span class="top--item"> Featured Course </span>
            <h1 class="title">Run your own online learning platform</h1>
            <p class="subheader">
              A deep-dive on the Instagram algorythm, hashtags, content
              strategy, and branding.
            </p>
            <span class="author">Kathryn Murphy</span>
            <button class="btn">Learn More</button>
          </div>
          <div class="section--banner__right">
            <div class="banner--img">
              <img src={img1} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    
  );
};

export default Courses;
